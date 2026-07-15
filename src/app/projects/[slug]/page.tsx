import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import ProjectDetailsSection from "@/components/sections/ProjectDetailsSection";
import { connectToDatabase } from "@/lib/mongodb";
import ProjectModel from "@/models/Project";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    try {
        await connectToDatabase();
        const doc = await ProjectModel.findOne({ slug })
            .select("title slug description coverImage category client year")
            .lean() as { title?: string; description?: string; coverImage?: string; category?: string; client?: string; year?: string } | null;
        if (!doc) return { title: "Project Not Found" };

        const title       = doc.title as string;
        const description = (doc.description as string).slice(0, 155) + ((doc.description as string).length > 155 ? "…" : "");
        const image       = doc.coverImage as string | undefined;
        const fullTitle   = doc.category ? `${title} – ${doc.category}` : title;

        return {
            title: fullTitle,
            description,
            openGraph: {
                title:       `${fullTitle} | SITRAC`,
                description,
                url:         `https://www.sitractraininginstitute.co.ke/projects/${slug}`,
                ...(image ? { images: [{ url: image, alt: title }] } : {}),
            },
        };
    } catch {
        return { title: "Project" };
    }
}


export default async function ProjectSlugPage({ params }: PageProps) {
    const { slug } = await params;

    await connectToDatabase();
    const doc = await ProjectModel.findOne({ slug }).lean();

    if (!doc) notFound();

    const project = {
        _id:         (doc._id as { toString(): string }).toString(),
        title:       doc.title       as string,
        slug:        doc.slug        as string,
        category:    doc.category    as string | undefined,
        description: doc.description as string,
        coverImage:  doc.coverImage  as string,
        images:      (doc.images     as string[]) ?? [],
        client:      doc.client      as string | undefined,
        year:        doc.year        as string | undefined,
    };

    const breadcrumbItems = [
        { label: "Projects", href: "/projects" },
        { label: project.title },
    ];

    return (
        <>
            {/*-- Breadcrumb Section --*/}
            <Breadcrumb title={project.title} items={breadcrumbItems} />

            {/*-- Project Details Section --*/}
            <ProjectDetailsSection project={project} />

            {/*-- CTA Section --*/}
            <CtaSectionOne/>
        </>
    );
}