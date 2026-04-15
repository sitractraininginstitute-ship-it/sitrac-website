"use client";

import { Autoplay } from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import partnerImg1 from "@/assets/img/partner-img/1.png";
import partnerImg2 from "@/assets/img/partner-img/2.png";
import partnerImg3 from "@/assets/img/partner-img/3.png";
import partnerImg4 from "@/assets/img/partner-img/4.png";
import partnerImg5 from "@/assets/img/partner-img/5.png";
import partnerImg6 from "@/assets/img/partner-img/6.png";

export default function PartnerSliderOne() {
    return (
        <div className="swiper partner-swiper" id="partnerSwiper">
            <Swiper
                modules={[Autoplay]}
                loop={true}
                slidesPerView={5}
                spaceBetween={24}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    480: { slidesPerView: 2 },
                    576: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    992: { slidesPerView: 5 },
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
    )
}