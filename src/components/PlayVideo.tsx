"use client";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import {useEffect} from "react";

export default function PlayVideo() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]");

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <div className="play-video-btn video-btn fadeInUp" data-delay="1">
            <a href="https://youtu.be/8sqSMb1r2zE" data-fancybox>
                <div className="icon">
                    <i className="ti ti-player-play-filled"></i>
                </div>
            </a>

            <div className="video-sonar"></div>
        </div>
    )
}