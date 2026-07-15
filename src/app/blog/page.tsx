import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import BlogSectionFour from "@/components/sections/BlogSectionFour";

export const metadata: Metadata = {
    title: "Insights & Articles",
    description:
        "Read SITRAC's latest articles, thought leadership pieces, and insights on governance, capacity building, institutional development, and public sector reform across Africa.",
    openGraph: {
        title: "Insights & Articles | SITRAC",
        description:
            "Thought leadership and insights on governance, capacity building, and public sector reform across Africa.",
        url: "https://www.sitractraininginstitute.co.ke/blog",
    },
};

export default function BlogPage() {
    const breadcrumbItems = [
        { label: "Blog" },
    ];

    return (
        <>
            {/*-- Breadcrumb Section --*/}
            <Breadcrumb title="Blog" items={breadcrumbItems} />

            {/*-- Blog Section --*/}
            <BlogSectionFour/>

            {/*-- CTA Section --*/}
            <CtaSectionOne/>
        </>
    )
}