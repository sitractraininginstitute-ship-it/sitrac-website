import Breadcrumb from "@/components/Breadcrumb";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import ServiceSectionFour from "@/components/sections/ServiceSectionFour";
import StepSectionOne from "@/components/sections/StepSectionOne";
import PricingSectionTwo from "@/components/sections/PricingSectionTwo";

export default function ServicesPage() {
    const breadcrumbItems = [
        { label: "Services" },
    ];

    return (
        <>
            {/*-- Breadcrumb Section --*/}
            <Breadcrumb title="Services" items={breadcrumbItems} />

            {/*-- Service Section --*/}
            <ServiceSectionFour/>

            {/*-- Step Section --*/}
            <StepSectionOne classes="bg-secondary"/>

            {/*-- Pricing Section --*/}
            <PricingSectionTwo priceClasses="bg-secondary"/>

            {/*-- CTA Section --*/}
            <CtaSectionOne/>
        </>
    )
}