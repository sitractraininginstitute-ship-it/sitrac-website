"use client";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import {useEffect} from "react";

export default function VideoSection() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]");

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <div className="video-section bg-img jarallax video-bg-one">
            {/*-- Play Video --*/}
            <a className="play-video-btn video-btn" data-fancybox href="https://youtu.be/8sqSMb1r2zE">
                <div className="icon">
                    <i className="ti ti-player-play-filled"></i>
                </div>
                <div className="video-sonar"></div>
            </a>
        </div>
    )
}