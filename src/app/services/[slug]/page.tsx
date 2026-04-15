import Breadcrumb from "@/components/Breadcrumb";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import ServiceDetailsSection from "@/components/sections/ServiceDetailsSection";

export default function ServiceSlugPage() {
    const breadcrumbItems = [
        { label: "Services", href: '/services' },
        { label: "Service Details" },
    ];

    return (
        <>
            {/*-- Breadcrumb Section --*/}
            <Breadcrumb title="Service Details" items={breadcrumbItems} />

            {/*-- Service Details Section --*/}
            <ServiceDetailsSection/>

            {/*-- CTA Section --*/}
            <CtaSectionOne/>
        </>
    )
}