import HeroSectionOne from "@/components/sections/HeroSectionOne";
import FeaturesSectionOne from "@/components/sections/FeaturesSectionOne";
import AboutSectionOne from "@/components/sections/AboutSectionOne";
import ServiceSectionOne from "@/components/sections/ServiceSectionOne";
import ProjectSectionOne from "@/components/sections/ProjectSectionOne";
import TeamSectionOne from "@/components/sections/TeamSectionOne";
import WhyChooseUsSectionOne from "@/components/sections/WhyChooseUsSectionOne";
import TestimonialSectionOne from "@/components/sections/TestimonialSectionOne";
import BlogSectionOne from "@/components/sections/BlogSectionOne";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function Home() {
  return (
    <>
        {/*-- Hero Section --*/}
        <HeroSectionOne/>

        {/*-- Features Section --*/}
        <FeaturesSectionOne/>

        {/*-- About Section --*/}
        <AboutSectionOne/>

        {/*-- Service Section --*/}
        <ServiceSectionOne/>

        {/*-- Project Section --*/}
        <ProjectSectionOne/>

        {/*-- Team Section --*/}
        <TeamSectionOne/>

        {/*-- Why Choose Us Section --*/}
        <WhyChooseUsSectionOne/>

        {/*-- Testimonial Section --*/}
        <TestimonialSectionOne/>

        {/*-- Blog Section --*/}
        <BlogSectionOne/>

        {/*-- CTA Section --*/}
        <CtaSectionOne/>
    </>
  );
}
