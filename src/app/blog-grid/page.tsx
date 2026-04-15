import Breadcrumb from "@/components/Breadcrumb";
import BlogGridSection from "@/components/sections/BlogGridSection";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

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