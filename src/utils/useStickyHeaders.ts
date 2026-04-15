import { useEffect, RefObject } from "react";

function throttle(fn: () => void, wait: number) {
    let lastTime = 0;
    return function () {
        const now = Date.now();
        if (now - lastTime >= wait) {
            fn();
            lastTime = now;
        }
    };
}

const useStickyHeaders = (refs: RefObject<HTMLElement | null>[], offset = 100) => {
    useEffect(() => {
        if (!refs.length) return;

        const handleStickyNavigation = throttle(() => {
            refs.forEach(ref => {
                const el = ref.current;
                if (el) {
                    if (window.pageYOffset > offset) {
                        el.classList.add("sticky-on");
                    } else {
                        el.classList.remove("sticky-on");
                    }
                }
            });
        }, 50);

        window.addEventListener("scroll", handleStickyNavigation, { passive: true });
        window.addEventListener("load", handleStickyNavigation);

        handleStickyNavigation();

        return () => {
            window.removeEventListener("scroll", handleStickyNavigation);
            window.removeEventListener("load", handleStickyNavigation);
        };
    }, [offset]); // omit refs for stable static refs
};

export default useStickyHeaders;