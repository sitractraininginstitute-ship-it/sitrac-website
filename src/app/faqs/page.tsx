import Breadcrumb from "@/components/Breadcrumb";
import FaqQuestionSection from "@/components/sections/FaqQuestionSection";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

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