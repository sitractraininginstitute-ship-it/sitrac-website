import Breadcrumb from "@/components/Breadcrumb";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import ProjectSectionThree from "@/components/sections/ProjectSectionThree";

export default function ProjectsPage() {
    const breadcrumbItems = [
        { label: "Project" },
    ];

    return (
        <>
            {/*-- Breadcrumb Section --*/}
            <Breadcrumb title="Project" items={breadcrumbItems} />

            {/*-- Project Section --*/}
            <ProjectSectionThree/>

            {/*-- CTA Section --*/}
            <CtaSectionOne/>
        </>
    )
}