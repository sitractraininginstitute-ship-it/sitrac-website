import Breadcrumb from "@/components/Breadcrumb";
import BlogDetailSection from "@/components/sections/BlogDetailSection";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function BlogPageSlug() {
    const breadcrumbItems = [
        { label: "Blog", href: '/blog' },
        { label: "Blog Details" },
    ];

    return (
        <>
            {/*-- Breadcrumb Section --*/}
            <Breadcrumb title="Blog Details" items={breadcrumbItems} />

            {/*-- Blog Section --*/}
            <BlogDetailSection/>

            {/*-- CTA Section --*/}
            <CtaSectionOne/>
        </>
    )
}