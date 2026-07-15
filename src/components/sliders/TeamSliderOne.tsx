"use client";

import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export interface TeamMemberData {
    _id: string;
    name: string;
    role: string;
    photo: string;
}

interface TeamSliderOneProps {
    teamMembers: TeamMemberData[];
}

export default function TeamSliderOne({ teamMembers }: TeamSliderOneProps) {
    if (!teamMembers.length) return null;

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
                {teamMembers.map((member) => (
                    <SwiperSlide key={member._id}>
                        <div className="team-card">
                            <Image
                                src={member.photo}
                                alt={member.name}
                                className="h-auto"
                                width={400}
                                height={450}
                            />

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
    );
}