import HeroSectionTwo from "@/components/sections/HeroSectionTwo";
import PartnerSectionTwo from "@/components/sections/PartnerSectionTwo";
import AboutSectionTwo from "@/components/sections/AboutSectionTwo";
import ServiceSectionTwo from "@/components/sections/ServiceSectionTwo";
import ProjectsSectionTwo from "@/components/sections/ProjectsSectionTwo";
import PricingSectionTwo from "@/components/sections/PricingSectionTwo";
import FeaturesSectionTwo from "@/components/sections/FeaturesSectionTwo";
import TestimonialSectionTwo from "@/components/sections/TestimonialSectionTwo";
import FaqSectionTwo from "@/components/sections/FaqSectionTwo";
import BlogSectionTwo from "@/components/sections/BlogSectionTwo";

export default function HomeTwo() {
    return (
        <>
            {/*-- Hero Section --*/}
            <HeroSectionTwo/>

            {/*-- Partner Section --*/}
            <PartnerSectionTwo/>

            {/*-- About Section --*/}
            <AboutSectionTwo/>

            {/*-- Service Section --*/}
            <ServiceSectionTwo/>

            {/*-- Projects Section --*/}
            <ProjectsSectionTwo/>

            {/*-- Pricing Section --*/}
            <PricingSectionTwo classes="bg-secondary"/>

            {/*-- Features Section --*/}
            <FeaturesSectionTwo/>

            {/*-- Testimonial Section --*/}
            <TestimonialSectionTwo/>

            {/*-- FAQ Section --*/}
            <FaqSectionTwo/>

            {/*-- Blog Section --*/}
            <BlogSectionTwo/>
        </>
    )
}