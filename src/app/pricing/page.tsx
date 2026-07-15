import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import PricingSectionTwo from "@/components/sections/PricingSectionTwo";
import FaqSectionThree from "@/components/sections/FaqSectionThree";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export const metadata: Metadata = {
    title: "Training Investment & Pricing Plans",
    description:
        "View SITRAC's transparent pricing for training programs, capacity building workshops, and consultancy services. Flexible plans for individuals, teams, and organisations across Africa.",
    openGraph: {
        title: "Training Investment & Pricing Plans | SITRAC",
        description:
            "Transparent pricing for training, workshops, and consultancy — flexible plans for individuals and organisations.",
        url: "https://www.sitractraininginstitute.co.ke/pricing",
    },
};

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