"use client";

import CountUp from "react-countup";
import {useIntersectionObserver} from "@/utils/useIntersectionObserver";

export default function AboutCoolFacts() {
    const { ref: counterRef, isIntersecting: startCount } = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.5,
    });

    return (
        <div ref={counterRef} className="about-cool-facts mb-5">
            <div>
                <h2>
                    <span className="counter">
                        <CountUp end={1800} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : undefined} />
                    </span>+
                </h2>
                <p className="mb-0">Happy Clients</p>
            </div>
            <div className="line"></div>
            <div>
                <h2>
                    <span className="counter">
                        <CountUp end={620} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : undefined} />
                    </span>+
                </h2>
                <p className="mb-0">Finished Projects</p>
            </div>
        </div>
    )
}