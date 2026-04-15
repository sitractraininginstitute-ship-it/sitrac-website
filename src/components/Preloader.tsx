"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setHydrated(true), 300);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className={`preloader ${hydrated ? "fade-out d-none" : ""}`}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}