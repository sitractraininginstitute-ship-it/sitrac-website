import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FaqQuestionSection from "@/components/sections/FaqQuestionSection";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export const metadata: Metadata = {
    title: "Frequently Asked Questions",
    description:
        "Find answers to common questions about SITRAC's training programs, registration process, fees, delivery formats, and capacity building services for individuals and organisations.",
    openGraph: {
        title: "Frequently Asked Questions | SITRAC",
        description:
            "Answers about SITRAC's training programs, registration, fees, and capacity building services.",
        url: "https://www.sitractraininginstitute.co.ke/faqs",
    },
};

export default function FaqPage() {
    const breadcrumbItems = [
        { label: "FAQs" },
    ];

    return (
        <>
            {/*-- Breadcrumb Section --*/}
            <Breadcrumb title="FAQs" items={breadcrumbItems} />

            {/*-- FAQ Question Section --*/}
            <FaqQuestionSection/>

            {/*-- CTA Section --*/}
            <CtaSectionOne/>
        </>
    )
}