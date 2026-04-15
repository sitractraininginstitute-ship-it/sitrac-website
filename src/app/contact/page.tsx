import Breadcrumb from "@/components/Breadcrumb";
import ContactInfoSection from "@/components/sections/ContactInfoSection";
import CtaSectionOne from "@/components/sections/CtaSectionOne";
import MapsSection from "@/components/sections/MapsSection";

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