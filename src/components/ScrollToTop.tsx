"use client";
import { useEffect, useState, useRef, useCallback } from "react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    const topDistance = 600;

    const handleScroll = useCallback(() => {
        // Throttle scroll updates for performance
        if (scrollTimeout.current) return;

        scrollTimeout.current = setTimeout(() => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Toggle visibility
            setVisible(scrollY > topDistance);

            // Update scroll progress
            const scrollPercent =
                (scrollY / (documentHeight - windowHeight)) * 100;
            setProgress(scrollPercent);

            scrollTimeout.current = null;
        }, 100); // Adjust throttle time as needed
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Initial state
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, [handleScroll]);

    return (
        <button
            onClick={scrollToTop}
            style={
                {
                    "--scroll-progress": `${progress}%`,
                } as React.CSSProperties
            }
            aria-label="Scroll to top"
            className={`bizora-scrolltop shadow-lg transition-all duration-300 ${
                visible ? "scrolltop-show" : "scrolltop-hide"
            }`}
        >
            <i className="ti ti-arrow-narrow-up"></i>
        </button>
    );
}
