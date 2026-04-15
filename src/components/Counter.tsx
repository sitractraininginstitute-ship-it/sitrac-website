"use client";

import CountUp from "react-countup";
import {useIntersectionObserver} from "@/utils/useIntersectionObserver";

interface CounterProps{
    countNumber : number
}

export default function Counter({countNumber}: CounterProps) {
    const { ref: counterRef, isIntersecting: startCount } = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.5,
    });

    return (
        <span ref={counterRef} className="counter">
            <CountUp end={countNumber} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : undefined} />
        </span>
    )
}