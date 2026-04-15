import Breadcrumb from "@/components/Breadcrumb";
import PricingSectionTwo from "@/components/sections/PricingSectionTwo";
import FaqSectionThree from "@/components/sections/FaqSectionThree";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function PricingPage() {
    const breadcrumbItems = [
        { label: "Pricing" },
    ];

    return (
        <>
            {/*-- Breadcrumb Section --*/}
            <Breadcrumb title="Pricing" items={breadcrumbItems} />

            {/*-- Pricing Section --*/}
            <PricingSectionTwo priceClasses="bg-secondary"/>

            {/*-- FAQ Section --*/}
            <FaqSectionThree/>

            {/*-- CTA Section --*/}
            <CtaSectionOne/>
        </>
    )
}