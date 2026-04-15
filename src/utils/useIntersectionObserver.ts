"use client";

import { useEffect, useRef, useState, useMemo } from "react";

type UseIntersectionObserverOptions = IntersectionObserverInit;

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
    options: UseIntersectionObserverOptions = { threshold: 0.5 }
) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<T | null>(null);

    // Memoize options based on their stringifies value for stable reference
    const stableOptions = useMemo(() => options, [
        options.root,
        options.rootMargin,
        Array.isArray(options.threshold)
            ? options.threshold.join(',')
            : options.threshold
    ]);

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, stableOptions);

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [stableOptions]);

    return { ref, isIntersecting };
}