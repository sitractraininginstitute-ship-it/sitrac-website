import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import TeamSectionTwo from "@/components/sections/TeamSectionTwo";

export const metadata: Metadata = {
    title: "Our Expert Team",
    description:
        "Meet SITRAC's team of experienced trainers, consultants, and researchers dedicated to building capacity and driving sustainable institutional development across Africa.",
    openGraph: {
        title: "Our Expert Team | SITRAC",
        description:
            "Experienced trainers, consultants, and researchers driving sustainable institutional development across Africa.",
        url: "https://www.sitractraininginstitute.co.ke/team",
    },
};

export default function TeamPage() {
    const breadcrumbItems = [
        { label: "Team" },
    ];

    return (
        <>
            {/*-- Breadcrumb Section --*/}
            <Breadcrumb title="Team" items={breadcrumbItems} />

            {/*-- Team Section --*/}
            <TeamSectionTwo/>

            {/*-- CTA Section --*/}
            <CtaSectionOne/>
        </>
    )
}