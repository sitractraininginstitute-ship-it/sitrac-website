import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import ProjectSectionThree from "@/components/sections/ProjectSectionThree";

export const metadata: Metadata = {
    title: "Projects & Impact",
    description:
        "Explore SITRAC's portfolio of capacity building and institutional development projects across Africa. Real-world programmes that have strengthened governance, systems, and communities.",
    openGraph: {
        title: "Projects & Impact | SITRAC",
        description:
            "Capacity building and institutional development projects that have strengthened governance, systems, and communities across Africa.",
        url: "https://www.sitractraininginstitute.co.ke/projects",
    },
};

export default function ProjectsPage() {
    const breadcrumbItems = [
        { label: "Projects" },
    ];

    return (
        <>
            {/*-- Breadcrumb Section --*/}
            <Breadcrumb title="Projects" items={breadcrumbItems} />

            {/*-- Project Section --*/}
            <ProjectSectionThree/>

            {/*-- CTA Section --*/}
            <CtaSectionOne/>
        </>
    );
}