import Breadcrumb from "@/components/Breadcrumb";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import ProjectDetailsSection from "@/components/sections/ProjectDetailsSection";

export default function ProjectSlugPage() {
    const breadcrumbItems = [
        { label: "Projects", href: '/projects' },
        { label: "Business Development" },
    ];

    return (
        <>
            {/*-- Breadcrumb Section --*/}
            <Breadcrumb title="Projects" items={breadcrumbItems} />

            {/*-- Project Details Section --*/}
            <ProjectDetailsSection/>

            {/*-- CTA Section --*/}
            <CtaSectionOne/>
        </>
    )
}