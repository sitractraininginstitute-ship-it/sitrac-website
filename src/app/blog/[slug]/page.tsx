import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BlogDetailSection from "@/components/sections/BlogDetailSection";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import { connectToDatabase } from "@/lib/mongodb";
import BlogPostModel from "@/models/BlogPost";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    try {
        await connectToDatabase();
        const doc = await BlogPostModel.findOne({ slug })
            .select("title slug excerpt coverImage seoTitle seoDescription")
            .lean() as { title?: string; excerpt?: string; coverImage?: string; seoTitle?: string; seoDescription?: string } | null;
        if (!doc) return { title: "Article Not Found" };

        const title       = (doc.seoTitle       || doc.title) as string;
        const description = (doc.seoDescription || doc.excerpt) as string;
        const image       = doc.coverImage as string | undefined;

        return {
            title,
            description,
            openGraph: {
                title:       `${title} | SITRAC`,
                description,
                type:        "article",
                url:         `https://www.sitractraininginstitute.co.ke/blog/${slug}`,
                ...(image ? { images: [{ url: image, alt: title }] } : {}),
            },
        };
    } catch {
        return { title: "Article" };
    }
}


export default async function BlogPageSlug({ params }: PageProps) {
    const { slug } = await params;

    await connectToDatabase();

    const [doc, recentDocs] = await Promise.all([
        BlogPostModel.findOne({ slug }).lean(),
        BlogPostModel.find().sort({ publishedAt: -1 }).limit(4).lean(),
    ]);

    if (!doc) notFound();

    const post = {
        _id:         (doc._id as { toString(): string }).toString(),
        title:       doc.title       as string,
        slug:        doc.slug        as string,
        excerpt:     doc.excerpt     as string,
        body:        doc.body        as string,
        coverImage:  doc.coverImage  as string,
        category:    doc.category    as string | undefined,
        author:      doc.author      as string | undefined,
        publishedAt: doc.publishedAt ? String(doc.publishedAt) : undefined,
    };

    const recentPosts = recentDocs.map((p) => ({
        _id:         (p._id as { toString(): string }).toString(),
        title:       p.title      as string,
        slug:        p.slug       as string,
        coverImage:  p.coverImage as string,
        publishedAt: p.publishedAt ? String(p.publishedAt) : undefined,
    }));

    const breadcrumbItems = [
        { label: "Blog", href: "/blog" },
        { label: post.title },
    ];

    return (
        <>
            {/*-- Breadcrumb Section --*/}
            <Breadcrumb title={post.title} items={breadcrumbItems} />

            {/*-- Blog Section --*/}
            <BlogDetailSection post={post} recentPosts={recentPosts} />

            {/*-- CTA Section --*/}
            <CtaSectionOne/>
        </>
    );
}