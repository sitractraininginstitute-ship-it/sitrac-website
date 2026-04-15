import HeroSectionThree from "@/components/sections/HeroSectionThree";
import FeaturesSectionThree from "@/components/sections/FeaturesSectionThree";
import ServiceSectionThree from "@/components/sections/ServiceSectionThree";
import AboutSectionThree from "@/components/sections/AboutSectionThree";
import StepSectionOne from "@/components/sections/StepSectionOne";
import TeamSectionOne from "@/components/sections/TeamSectionOne";
import WhyChooseUsSectionOne from "@/components/sections/WhyChooseUsSectionOne";
import TestimonialSectionOne from "@/components/sections/TestimonialSectionOne";
import FaqSectionTwo from "@/components/sections/FaqSectionTwo";
import BlogSectionTwo from "@/components/sections/BlogSectionTwo";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function HomeThree() {
    return (
        <>
            {/*-- Hero Section --*/}
            <HeroSectionThree/>

            {/*-- Features Section --*/}
            <FeaturesSectionThree/>

            {/*-- Service Section --*/}
            <ServiceSectionThree/>

            {/*-- About Section --*/}
            <AboutSectionThree/>

            {/*-- Step Section --*/}
            <StepSectionOne/>

            {/*-- Team Section --*/}
            <TeamSectionOne/>

             {/*-- Video Section --*/}
             <WhyChooseUsSectionOne/>

            {/*-- Testimonial Section --*/}
            <TestimonialSectionOne/>

            {/*-- FAQ Section --*/}
            <FaqSectionTwo/>

            {/*-- Blog Section --*/}
            <BlogSectionTwo/>

            {/*-- CTA Section --*/}
            <CtaSectionOne/>

        </>
    )
}