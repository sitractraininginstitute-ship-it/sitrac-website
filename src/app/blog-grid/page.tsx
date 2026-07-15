import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BlogGridSection from "@/components/sections/BlogGridSection";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export const metadata: Metadata = {
    title: "Blog Grid – Browse All Articles",
    description:
        "Browse SITRAC's full article archive in grid view — covering governance, capacity building, monitoring & evaluation, institutional reform, and development sector insights.",
    openGraph: {
        title: "Blog Grid – Browse All Articles | SITRAC",
        description:
            "Full article archive covering governance, capacity building, M&E, and institutional reform.",
        url: "https://www.sitractraininginstitute.co.ke/blog-grid",
    },
};

export default function BlogGrid() {
    const breadcrumbItems = [
        { label: "Blog Grid" },
    ];

    return (
        <>
            {/*-- Breadcrumb Section --*/}
            <Breadcrumb title="Blog Grid" items={breadcrumbItems} />

            {/*-- Blog Section --*/}
            <BlogGridSection/>

            {/*-- CTA Section --*/}
            <CtaSectionOne/>
        </>
    )
}