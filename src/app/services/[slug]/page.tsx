import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import ServiceDetailsSection from "@/components/sections/ServiceDetailsSection";
import { connectToDatabase } from "@/lib/mongodb";
import ServiceModel from "@/models/Service";

interface ServiceData {
    _id:              string;
    title:            string;
    slug:             string;
    shortDescription: string;
    fullDescription:  string;
    coverImage:       string;
    category?:        string;
    duration?:        string;
    price?:           string;
}

interface AllService {
    _id:   string;
    title: string;
    slug:  string;
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    try {
        await connectToDatabase();
        const doc = await ServiceModel.findOne({ slug })
            .select("title slug shortDescription coverImage seoTitle seoDescription")
            .lean() as { title?: string; slug?: string; shortDescription?: string; coverImage?: string; seoTitle?: string; seoDescription?: string } | null;
        if (!doc) return { title: "Service Not Found" };

        const title       = (doc.seoTitle       || doc.title) as string;
        const description = (doc.seoDescription || doc.shortDescription) as string;
        const image       = doc.coverImage as string | undefined;

        return {
            title,
            description,
            openGraph: {
                title:       `${title} | SITRAC`,
                description,
                url:         `https://www.sitractraininginstitute.co.ke/services/${slug}`,
                ...(image ? { images: [{ url: image, alt: title }] } : {}),
            },
        };
    } catch {
        return { title: "Service" };
    }
}


export default async function ServiceSlugPage({ params }: PageProps) {
    const { slug } = await params;

    await connectToDatabase();

    const [doc, allDocs] = await Promise.all([
        ServiceModel.findOne({ slug }).lean(),
        ServiceModel.find().sort({ order: 1 }).select("title slug").lean(),
    ]);

    if (!doc) notFound();

    const service: ServiceData = {
        _id:              (doc._id as { toString(): string }).toString(),
        title:            doc.title            as string,
        slug:             doc.slug             as string,
        shortDescription: doc.shortDescription as string,
        fullDescription:  doc.fullDescription  as string,
        coverImage:       doc.coverImage       as string,
        category:         doc.category         as string | undefined,
        duration:         doc.duration         as string | undefined,
        price:            doc.price            as string | undefined,
    };

    const allServices: AllService[] = allDocs.map((s) => ({
        _id:   (s._id as { toString(): string }).toString(),
        title: s.title as string,
        slug:  s.slug  as string,
    }));

    const breadcrumbItems = [
        { label: "Services", href: "/services" },
        { label: service.title },
    ];

    return (
        <>
            {/*-- Breadcrumb Section --*/}
            <Breadcrumb title={service.title} items={breadcrumbItems} />

            {/*-- Service Details Section --*/}
            <ServiceDetailsSection service={service} allServices={allServices} />

            {/*-- CTA Section --*/}
            <CtaSectionOne/>
        </>
    );
}