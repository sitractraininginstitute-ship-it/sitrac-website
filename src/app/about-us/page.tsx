import Breadcrumb from "@/components/Breadcrumb";
import AboutSectionOne from "@/components/sections/AboutSectionOne";
import ServiceSectionTwo from "@/components/sections/ServiceSectionTwo";
import WhyChooseUsSectionOne from "@/components/sections/WhyChooseUsSectionOne";
import TeamSectionOne from "@/components/sections/TeamSectionOne";
import TestimonialSectionThree from "@/components/sections/TestimonialSectionThree";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

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