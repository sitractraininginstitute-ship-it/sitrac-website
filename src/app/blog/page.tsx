import Breadcrumb from "@/components/Breadcrumb";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import BlogSectionFour from "@/components/sections/BlogSectionFour";

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