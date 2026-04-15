"use client";

import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import imgBg13 from "@/assets/img/bg-img/13.jpg";
import imgBg14 from "@/assets/img/bg-img/14.jpg";
import imgBg15 from "@/assets/img/bg-img/15.jpg";
import imgBg16 from "@/assets/img/bg-img/16.jpg";

export default function TeamSliderOne() {

    const teamMembers = [
        { img: imgBg13, name: "Miler Michel", role: "Front end Developer" },
        { img: imgBg14, name: "Sarah Connor", role: "Front end Developer" },
        { img: imgBg15, name: "Affan Islam", role: "Front end Developer" },
        { img: imgBg16, name: "Michel Bom", role: "Front end Developer" },
        { img: imgBg13, name: "Miler Michel", role: "Front end Developer" },
        { img: imgBg14, name: "Sarah Connor", role: "Front end Developer" },
        { img: imgBg15, name: "Affan Islam", role: "Front end Developer" },
        { img: imgBg16, name: "Michel Bom", role: "Front end Developer" },
    ];

    return (
        <div className="container">
            <Swiper
                modules={[Pagination, Autoplay]}
                loop={true}
                slidesPerView={4}
                spaceBetween={24}
                pagination={{
                    el: ".team-pagination",
                    clickable: true,
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                }}
                className="team-swiper"
            >
                {teamMembers.map((member, index) => (
                    <SwiperSlide key={index}>
                        <div className="team-card">
                            <Image src={member.img} alt={member.name} className="h-auto" />

                            <div className="social-nav">
                                <a href="#"><i className="ti ti-brand-linkedin"></i></a>
                                <a href="#"><i className="ti ti-brand-x"></i></a>
                                <a href="#"><i className="ti ti-brand-instagram"></i></a>
                            </div>

                            <div className="team-body">
                                <a href="#">
                                    <h5>{member.name}</h5>
                                    <p className="mb-0">{member.role}</p>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/*-- Divider --*/}
            <div className="divider-sm"></div>

            {/*-- Team Pagination --*/}
            <div className="container">
                <div className="team-pagination"></div>
            </div>
        </div>
    )
}