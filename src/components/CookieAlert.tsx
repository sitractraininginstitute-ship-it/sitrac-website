"use client";

import { useEffect, useState } from "react";

export default function CookieAlert() {
    const [showAlert, setShowAlert] = useState<boolean>(false);

    useEffect(() => {
        const getCookie = (name: string): string => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()!.split(";").shift() || "";
            return "";
        };

        // Show the alert if cookie doesn't exist
        if (!getCookie("acceptCookies")) {
            setShowAlert(true);
        }
    }, []);

    const acceptCookies = () => {
        const setCookie = (name: string, value: string, days?: number) => {
            let expires = "";
            if (days) {
                const date = new Date();
                date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                expires = `; expires=${date.toUTCString()}`;
            }
            document.cookie = `${name}=${value}${expires}; path=/`;
        };

        setCookie("acceptCookies", "true", 365);
        setShowAlert(false);
    };

    if (!showAlert) return null;

    return (
        <div className="cookiealert shadow-lg show">
            <h4 className="text-white"><i className="ti ti-cookie"></i> Cookie Alert</h4>
            <p className="mb-4 text-white">We use cookies for the best experience on our website, for social media
                features
                and to
                anal
                traffic. accepting you agree to our use of cookies. Read <a href="#" target="_blank"> Cookies
                    Policy.</a>
            </p>
            <button
                className="btn btn-light btn-sm acceptcookies"
                type="button"
                aria-label="Close"
                onClick={acceptCookies}
            >
                Accept
            </button>
        </div>
    )
}