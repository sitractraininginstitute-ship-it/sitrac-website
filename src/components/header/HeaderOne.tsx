"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/core-img/logo.png";
import {useRef, useState} from "react";
import useStickyHeaders from "@/utils/useStickyHeaders";
import MenuItem from "@/components/header/MenuItem";
import SearchFormPopup from "@/components/SearchFormPopup";

export default function HeaderOne() {
    const headerRef = useRef(null);
    const [isOpenSearch, setIsOpenSearch] = useState(false);

    useStickyHeaders([headerRef]);

    return (
        <>
            {/*-- Search Form Popup --*/}
            <SearchFormPopup isOpenSearch={isOpenSearch} setIsOpenSearch={setIsOpenSearch}/>

            <header ref={headerRef} className="header-section">
                {/*-- Navbar --*/}
                <nav className="navbar navbar-expand-xl">
                    <div className="container">
                        {/*-- Navbar Brand --*/}
                        <Link className="navbar-brand" href="/">
                            <Image src={logo} alt="" className="h-auto"/>
                        </Link>

                        {/*-- Navbar Toggler --*/}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#bizoraNav"
                                aria-controls="bizoraNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="ti ti-menu-deep"></i>
                        </button>

                        {/*-- Navbar Nav --*/}
                        <div className="collapse navbar-collapse" id="bizoraNav">
                            <MenuItem/>

                            {/*-- Header Navigation --*/}
                            <div className="header-navigation ms-auto d-flex flex-wrap align-items-center mt-4 mt-xl-0">
                                {/*-- Search Button --*/}
                                <div className="header-search-btn" id="searchButton">
                                    <button className="btn" onClick={() => setIsOpenSearch(true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24"
                                             fill="none">
                                            <path
                                                d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                                                fill="white"/>
                                        </svg>
                                    </button>
                                </div>

                                {/*-- Get A Quote --*/}
                                <Link className="btn btn-primary" href="/contact">
                                    <span>Get Started</span>
                                    <span>Get started</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}