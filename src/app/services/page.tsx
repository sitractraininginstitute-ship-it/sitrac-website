import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import ServiceSectionFour from "@/components/sections/ServiceSectionFour";
import StepSectionOne from "@/components/sections/StepSectionOne";
import PricingSectionTwo from "@/components/sections/PricingSectionTwo";

export const metadata: Metadata = {
    title: "Training & Capacity Building Services",
    description:
        "Explore SITRAC's full range of training and capacity building services — including governance, institutional development, community development, monitoring & evaluation, and strategic management programs tailored for Africa.",
    openGraph: {
        title: "Training & Capacity Building Services | SITRAC",
        description:
            "Governance, institutional development, community development, M&E, and strategic management programs for African organisations.",
        url: "https://www.sitractraininginstitute.co.ke/services",
    },
};

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