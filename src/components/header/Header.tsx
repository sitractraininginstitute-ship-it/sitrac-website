"use client";

import {usePathname} from "next/navigation";
import HeaderOne from "@/components/header/HeaderOne";
import HeaderThree from "@/components/header/HeaderThree";

export default function Header() {
    const pathname = usePathname();

    if (pathname !== '/') {
        return <HeaderThree/>;
    }

    return <HeaderOne/>
}