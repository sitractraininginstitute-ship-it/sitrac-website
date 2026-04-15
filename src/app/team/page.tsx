import Breadcrumb from "@/components/Breadcrumb";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import TeamSectionTwo from "@/components/sections/TeamSectionTwo";

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