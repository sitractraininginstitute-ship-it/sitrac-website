"use client";

import { useEffect, useState } from "react";

interface ProgressBarProps {
    label: string;
    percentage: number;
    shouldAnimate: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage, shouldAnimate }) => {
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        let timer: string | number | NodeJS.Timeout | undefined;

        if (shouldAnimate) {
            timer = setTimeout(() => {
                setWidth(percentage);
            }, 200);
        }

        return () => {
            if (timer) clearTimeout(timer); // prevent memory leaks
        };
    }, [shouldAnimate, percentage]);

    return (
        <div className="progress-item fadeInUp">
            <div className="progress-info mb-2">
                <span>{label}</span>
                <span className="percentage">{percentage}%</span>
            </div>
            <div className="progress">
                <div className="progress-bar bizora-progress-bar" style={{ width: `${width}%` }}></div>
            </div>
        </div>
    );
};

export default ProgressBar;