"use client";

import CountUp from "react-countup";
import {useIntersectionObserver} from "@/utils/useIntersectionObserver";

export default function AboutCountdown() {
    const { ref: counterRef, isIntersecting: startCount } = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.5,
    });

    return (
        <div ref={counterRef} className="about-countdown">
            <h2>
                <span className="counter">
                    <CountUp end={5} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : undefined} />
                </span>+
            </h2>
            <h6 className="mb-0">Years Experience Company</h6>
        </div>
    )
}