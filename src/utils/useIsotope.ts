"use client";

import { useEffect } from "react";
import type Isotope from "isotope-layout";

/**
 * Custom hook to initialize Isotope grid layout.
 * Handles dynamic import and SSR safety.
 */
export function useIsotope(gridRef: React.RefObject<HTMLDivElement | null>) {
    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        let iso: Isotope | null = null;

        Promise.all([
            import("isotope-layout"),
            import("imagesloaded"),
        ]).then(([IsotopeModule, imagesLoadedModule]) => {
            const Isotope = IsotopeModule.default;
            const imagesLoaded = imagesLoadedModule.default;

            imagesLoaded(grid, () => {
                iso = new Isotope(grid, {
                    itemSelector: ".filter-item",
                    percentPosition: true,
                    layoutMode: "masonry",
                    masonry: { columnWidth: ".filter-item" },
                });
            });
        });

        return () => {
            iso?.destroy();
        };
    }, [gridRef]);
}
