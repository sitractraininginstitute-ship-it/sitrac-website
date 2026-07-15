import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import TeamDetailsSection from "@/components/sections/TeamDetailsSection";
import { connectToDatabase } from "@/lib/mongodb";
import TeamMemberModel from "@/models/TeamMember";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    try {
        await connectToDatabase();
        const doc = await TeamMemberModel.findOne({ slug })
            .select("name role bio photo")
            .lean() as { name?: string; role?: string; bio?: string; photo?: string } | null;
        const member = doc ?? await TeamMemberModel.findOne({
            name: { $regex: slug.replace(/-/g, " "), $options: "i" },
        }).select("name role bio photo").lean() as typeof doc;

        if (!member) return { title: "Team Member Not Found" };

        const name  = member.name  as string;
        const role  = member.role  as string;
        const bio   = member.bio   as string | undefined;
        const photo = member.photo as string | undefined;
        const title = `${name} – ${role}`;
        const description = bio
            ? bio.slice(0, 155) + (bio.length > 155 ? "…" : "")
            : `${name} is a ${role} at SITRAC, dedicated to capacity building and institutional development across Africa.`;

        return {
            title,
            description,
            openGraph: {
                title:       `${title} | SITRAC`,
                description,
                url:         `https://www.sitractraininginstitute.co.ke/team/${slug}`,
                ...(photo ? { images: [{ url: photo, alt: name }] } : {}),
            },
        };
    } catch {
        return { title: "Team Member" };
    }
}


export default async function TeamDetailsPage({ params }: PageProps) {
    const { slug } = await params;

    await connectToDatabase();
    const doc = await TeamMemberModel.findOne({ slug }).lean();

    // Fallback: also try matching by name-based slug if slug field doesn't exist
    const member = doc ?? await TeamMemberModel.findOne({
        name: { $regex: slug.replace(/-/g, " "), $options: "i" }
    }).lean();

    if (!member) notFound();

    const memberData = {
        _id:         (member._id as { toString(): string }).toString(),
        name:        member.name        as string,
        role:        member.role        as string,
        bio:         member.bio         as string | undefined,
        photo:       member.photo       as string,
        socialLinks: (member.socialLinks as { platform: string; url: string }[]) ?? [],
    };

    const breadcrumbItems = [
        { label: "Team", href: "/team" },
        { label: memberData.name },
    ];

    return (
        <>
            {/*-- Breadcrumb Section --*/}
            <Breadcrumb title={memberData.name} items={breadcrumbItems} />

            {/*-- Team Details Section --*/}
            <TeamDetailsSection member={memberData} />

            {/*-- CTA Section --*/}
            <CtaSectionOne/>
        </>
    );
}