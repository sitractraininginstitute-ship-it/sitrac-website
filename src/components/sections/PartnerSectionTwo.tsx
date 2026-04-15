"use client";

import CountUp from "react-countup";
import Image from "next/image";

import { Autoplay } from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import partnerImg1 from "@/assets/img/partner-img/1.png";
import partnerImg2 from "@/assets/img/partner-img/2.png";
import partnerImg3 from "@/assets/img/partner-img/3.png";
import partnerImg4 from "@/assets/img/partner-img/4.png";
import partnerImg5 from "@/assets/img/partner-img/5.png";
import partnerImg6 from "@/assets/img/partner-img/6.png";
import {useIntersectionObserver} from "@/utils/useIntersectionObserver";

export default function PartnerSectionTwo() {
    const { ref: counterRef, isIntersecting: startCount } = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.5,
    });

    return (
        <div className="partner-section">
            <div className="container">
                <div ref={counterRef} className="row justify-content-center">
                    <div className="col-12 col-sm-8 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="text-center mb-5 fadeInUp" data-delay="0.5">
                            <h5 className="mb-0 lh-lg">We've worked on over 150 projects with <span
                                className="counter">
                                <CountUp end={100} duration={3} startOnMount={false} redraw={true} delay={0} useEasing={true} start={startCount ? 0 : undefined} />
                            </span>+
                                clients
                            </h5>
                        </div>
                    </div>
                </div>

                {/*-- Partner Content --*/}
                <div className="partner-content fadeInUp" data-delay="0.75">
                    <div className="swiper partner-swiper" id="partnerSwiperTwo">
                        <Swiper
                            modules={[Autoplay]}
                            loop={true}
                            slidesPerView={5}
                            spaceBetween={24}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            breakpoints={{
                                320: { slidesPerView: 2 },
                                480: { slidesPerView: 3 },
                                576: { slidesPerView: 4 },
                                768: { slidesPerView: 5 },
                                992: { slidesPerView: 6 },
                            }}
                            className="swiper-wrapper"
                        >
                            <SwiperSlide>
                                <a href="#" className="swiper-slide">
                                    <Image src={partnerImg1} alt="" className="h-auto"/>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                            <a href="#" className="swiper-slide">
                                <Image src={partnerImg2} alt="" className="h-auto"/>
                            </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#" className="swiper-slide">
                                    <Image src={partnerImg3} alt="" className="h-auto"/>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#" className="swiper-slide">
                                    <Image src={partnerImg4} alt="" className="h-auto"/>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#" className="swiper-slide">
                                    <Image src={partnerImg5} alt="" className="h-auto"/>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#" className="swiper-slide">
                                    <Image src={partnerImg6} alt="" className="h-auto"/>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#" className="swiper-slide">
                                    <Image src={partnerImg1} alt="" className="h-auto"/>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#" className="swiper-slide">
                                    <Image src={partnerImg2} alt="" className="h-auto"/>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#" className="swiper-slide">
                                    <Image src={partnerImg3} alt="" className="h-auto"/>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#" className="swiper-slide">
                                    <Image src={partnerImg4} alt="" className="h-auto"/>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#" className="swiper-slide">
                                    <Image src={partnerImg5} alt="" className="h-auto"/>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#" className="swiper-slide">
                                    <Image src={partnerImg6} alt="" className="h-auto"/>
                                </a>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}