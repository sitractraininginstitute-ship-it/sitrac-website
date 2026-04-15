import Breadcrumb from "@/components/Breadcrumb";
import ErrorSection from "@/components/sections/ErrorSection";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function NotFound() {
    const breadcrumbItems = [{ label: "Error Page" }];

    return (
        <>
            {/* Breadcrumb Section */}
            <Breadcrumb title="Error Page" items={breadcrumbItems} />

            {/* Error Section */}
            <ErrorSection />

            {/* CTA Section */}
            <CtaSectionOne />
        </>
    );
}
