"use client";

import {usePathname} from "next/navigation";
import FooterOne from "@/components/footer/FooterOne";
import FooterThree from "@/components/footer/FooterThree";
import FooterTwo from "@/components/footer/FooterTwo";

export default function Footer() {
    const pathname = usePathname();

    if (pathname === '/home-3') {
        return <FooterOne/>
    }

    if (pathname === '/home-2') {
        return <FooterTwo/>
    }

    return (
        <FooterOne/>
    )
}