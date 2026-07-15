import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ContactInfoSection from "@/components/sections/ContactInfoSection";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import MapsSection from "@/components/sections/MapsSection";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with SITRAC. Reach our team for inquiries about training programs, partnerships, consultancy services, or general information. We are based in Nairobi, Kenya.",
    openGraph: {
        title: "Contact Us | SITRAC",
        description:
            "Reach SITRAC for training inquiries, partnerships, or consultancy. Based in Nairobi, Kenya.",
        url: "https://www.sitractraininginstitute.co.ke/contact",
    },
};

export default function ContactPage() {
    const breadcrumbItems = [
        { label: "Contact" },
    ];
    return (
        <>
            {/*-- Breadcrumb Section --*/}
            <Breadcrumb title="Contact" items={breadcrumbItems} />

            {/*-- Contact Info Wrapper --*/}
            <ContactInfoSection/>

            {/*-- Maps Section --*/}
            <MapsSection/>

            {/*-- CTA Section --*/}
            <CtaSectionOne/>
        </>
    )
}