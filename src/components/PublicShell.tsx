"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header/HeaderThree";
import Footer from "@/components/footer/Footer";
import Preloader from "@/components/Preloader";
import CookieAlert from "@/components/CookieAlert";
import ScrollToTop from "@/components/ScrollToTop";
import BootstrapClient from "@/provider/BootstrapClient";
import { ReactNode } from "react";

export default function PublicShell({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const isAdmin  = pathname.startsWith("/admin");

    if (isAdmin) {
        // Admin routes: NO public Header/Footer/Preloader/CookieAlert/ScrollToTop
        // Only the Bootstrap JS initialiser is kept so any Bootstrap-dependent
        // components inside admin still work (e.g. modals, tooltips).
        return (
            <>
                {children}
                <BootstrapClient />
            </>
        );
    }

    // Public marketing routes: full shell
    return (
        <>
            <Preloader />
            <Header />
            {children}
            <Footer />
            <CookieAlert />
            <ScrollToTop />
            <BootstrapClient />
        </>
    );
}
