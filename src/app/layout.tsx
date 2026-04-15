import type {Metadata} from "next";
import {Sora} from "next/font/google";

const sora = Sora({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    display: "swap",
});

import '@/assets/css/tabler-icons.min.css';
import '@/assets/css/flaticon.css';
import '@/assets/scss/styles.scss';
import Header from "@/components/header/HeaderThree";
import Footer from "@/components/footer/Footer";
import BootstrapClient from "@/provider/BootstrapClient";
import Preloader from "@/components/Preloader";
import CookieAlert from "@/components/CookieAlert";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
    title: "Skills Innovis Training and Capacity Building Institute (SITRAC)",
    description: "A leading Pan-African capacity building institution committed to strengthening governance, institutional performance, and human capital development through specialized training, consultancy, and applied research.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${sora.className}`}>
        {/*-- Pre-Loader --*/}
        <Preloader/>

        <Header/>
        {children}
        <Footer/>

        {/*-- Cookie Alert --*/}
        <CookieAlert/>

        {/*-- Scroll To Top --*/}
        <ScrollToTop/>

        <BootstrapClient/>
        </body>
        </html>
    );
}
