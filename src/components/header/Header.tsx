"use client";

import {usePathname} from "next/navigation";
import HeaderOne from "@/components/header/HeaderOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import HeaderThree from "@/components/header/HeaderThree";

export default function Header() {
    const pathname = usePathname();

    if (pathname === '/home-2') {
        return <HeaderTwo/>;
    }

    if (pathname === '/home-3' || pathname !== '/') {
        return <HeaderThree/>;
    }

    return <HeaderOne/>
}