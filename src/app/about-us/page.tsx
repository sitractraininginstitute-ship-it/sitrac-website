import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AboutSectionOne from "@/components/sections/AboutSectionOne";
import ServiceSectionTwo from "@/components/sections/ServiceSectionTwo";
import WhyChooseUsSectionOne from "@/components/sections/WhyChooseUsSectionOne";
import TeamSectionOne from "@/components/sections/TeamSectionOne";
import TestimonialSectionThree from "@/components/sections/TestimonialSectionThree";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export const metadata: Metadata = {
    title: "About Us – Our Mission & Story",
    description:
        "Learn about SITRAC's mission, history, and approach to Pan-African capacity building. We partner with governments, NGOs, and institutions to deliver impactful training, consultancy, and applied research.",
    openGraph: {
        title: "About Us – Our Mission & Story | SITRAC",
        description:
            "SITRAC's mission, history, and approach to Pan-African capacity building through training, consultancy, and research.",
        url: "https://www.sitractraininginstitute.co.ke/about-us",
    },
};

export default function AboutUs() {
    const breadcrumbItems = [
        { label: "About Us" },
    ];

    return (
        <>
            {/*-- Breadcrumb Section --*/}
            <Breadcrumb title="About Us" items={breadcrumbItems} />

            {/*-- About Section --*/}
            <AboutSectionOne/>

            {/*-- Service Section --*/}
            <ServiceSectionTwo/>

            {/*-- Why Choose Us Section --*/}
            <WhyChooseUsSectionOne/>

            {/*-- Team Section --*/}
            <TeamSectionOne/>

            {/*-- Testimonial Section --*/}
            <TestimonialSectionThree/>

            {/*-- CTA Section --*/}
            <CtaSectionOne/>
        </>
    )
}