"use client";

import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import bgImg34 from "@/assets/img/bg-img/34.jpg";
import bgImg35 from "@/assets/img/bg-img/35.jpg";
import bgImg36 from "@/assets/img/bg-img/36.jpg";
import bgImg37 from "@/assets/img/bg-img/37.jpg";
import Link from "next/link";

export default function ProjectSliderTwo() {
    return (
        <div className="swiper project-swiper" id="projectSlider">
            <Swiper
                modules={[Navigation, Autoplay]}
                loop={true}
                slidesPerView={3}
                spaceBetween={24}
                navigation={{
                    nextEl: '.project-button-next',
                    prevEl: '.project-button-prev',
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                }}
                className="swiper-wrapper"
            >

                {/*-- Project Card --*/}
                <SwiperSlide className="swiper-slide">
                    <div className="project-card">
                        <Link href="/projects/details" target="_blank">
                            <Image src={bgImg34} alt="" className="h-auto"/>
                            {/*-- Project Info --*/}
                            <div className="project-info">
                                <div>
                                    <h4>Business Development</h4>
                                    <p className="mb-0">Digital marketing</p>
                                </div>
                                <div className="arrow-icon">
                                    <i className="ti ti-arrow-up-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>

                {/*-- Project Card --*/}
                <SwiperSlide className="swiper-slide">
                    <div className="project-card">
                        <Link href="/projects/details" target="_blank">
                            <Image src={bgImg35} alt="" className="h-auto"/>
                            {/*-- Project Info --*/}
                            <div className="project-info">
                                <div>
                                    <h4>Marketing</h4>
                                    <p className="mb-0">Digital marketing</p>
                                </div>
                                <div className="arrow-icon">
                                    <i className="ti ti-arrow-up-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>

                {/*-- Project Card --*/}
                <SwiperSlide className="swiper-slide">
                    <div className="project-card">
                        <Link href="/projects/details" target="_blank">
                            <Image src={bgImg36} alt="" className="h-auto"/>
                            {/*-- Project Info --*/}
                            <div className="project-info">
                                <div>
                                    <h4>UX/UI Development</h4>
                                    <p className="mb-0">Digital marketing</p>
                                </div>
                                <div className="arrow-icon">
                                    <i className="ti ti-arrow-up-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>

                {/*-- Project Card --*/}
                <SwiperSlide className="swiper-slide">
                    <div className="project-card">
                        <Link href="/projects/details" target="_blank">
                            <Image src={bgImg37} alt="" className="h-auto"/>
                            {/*-- Project Info --*/}
                            <div className="project-info">
                                <div>
                                    <h4>Strategy Development</h4>
                                    <p className="mb-0">Digital marketing</p>
                                </div>
                                <div className="arrow-icon">
                                    <i className="ti ti-arrow-up-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>

                {/*-- Project Card --*/}
                <SwiperSlide className="swiper-slide">
                    <div className="project-card">
                        <Link href="/projects/details" target="_blank">
                            <Image src={bgImg34} alt="" className="h-auto"/>
                            {/*-- Project Info --*/}
                            <div className="project-info">
                                <div>
                                    <h4>Web Development</h4>
                                    <p className="mb-0">Digital marketing</p>
                                </div>
                                <div className="arrow-icon">
                                    <i className="ti ti-arrow-up-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>

                {/*-- Project Card --*/}
                <SwiperSlide className="swiper-slide">
                    <div className="project-card">
                        <Link href="/projects/details" target="_blank">
                            <Image src={bgImg35} alt="" className="h-auto"/>
                            {/*-- Project Info --*/}
                            <div className="project-info">
                                <div>
                                    <h4>Mobile App Development</h4>
                                    <p className="mb-0">Digital marketing</p>
                                </div>
                                <div className="arrow-icon">
                                    <i className="ti ti-arrow-up-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>

                {/*-- Project Card --*/}
                <SwiperSlide className="swiper-slide">
                    <div className="project-card">
                        <Link href="/projects/details" target="_blank">
                            <Image src={bgImg36} alt="" className="h-auto"/>
                            {/*-- Project Info --*/}
                            <div className="project-info">
                                <div>
                                    <h4>Project Management</h4>
                                    <p className="mb-0">Digital marketing</p>
                                </div>
                                <div className="arrow-icon">
                                    <i className="ti ti-arrow-up-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>

                {/*-- Project Card --*/}
                <SwiperSlide className="swiper-slide">
                    <div className="project-card">
                        <Link href="/projects/details" target="_blank">
                            <Image src={bgImg37} alt="" className="h-auto"/>
                            {/*-- Project Info --*/}
                            <div className="project-info">
                                <div>
                                    <h4>Time Management</h4>
                                    <p className="mb-0">Digital marketing</p>
                                </div>
                                <div className="arrow-icon">
                                    <i className="ti ti-arrow-up-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}