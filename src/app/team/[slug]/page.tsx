import Breadcrumb from "@/components/Breadcrumb";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import TeamDetailsSection from "@/components/sections/TeamDetailsSection";

export default function TealDetailsPage() {
    const breadcrumbItems = [
        { label: "Team", href: '/team' },
        { label: "Team Details" },
    ];

    return (
        <>
            {/*-- Breadcrumb Section --*/}
            <Breadcrumb title="Team Details" items={breadcrumbItems} />

            {/*-- Team Details Section --*/}
            <TeamDetailsSection/>

            {/*-- CTA Section --*/}
            <CtaSectionOne/>
        </>
    )
}