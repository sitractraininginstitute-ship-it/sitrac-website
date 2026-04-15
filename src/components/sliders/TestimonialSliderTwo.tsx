"use client";

import {Pagination, Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import bgImg29 from "@/assets/img/bg-img/29.jpg";
import bgImg30 from "@/assets/img/bg-img/30.jpg";
import bgImg31 from "@/assets/img/bg-img/31.jpg";

export default function TestimonialSliderTwo() {
    return (
        <div className="container">
            <div className="swiper testimonial-swiper" id="testimonialSwiper">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={24}
                    pagination={{
                        el: ".testimonial-pagination",
                        clickable: true,
                    }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }}
                    className="swiper-wrapper"
                >

                    {/*-- Testimonial Card --*/}
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-card">
                            <div className="testimonial-image">
                                <Image src={bgImg29} alt="" className="h-auto"/>
                                <div>
                                    <h5 className="mb-1">Alexander Cameron</h5>
                                    <p className="mb-0">Lead Developer</p>
                                </div>
                            </div>
                            <div className="testimonial-info">
                                <p className="testimonial-text">“Working with several word press themes a
                                    templates
                                    the last years, I only can say this is best in every level. I use it
                                    for my
                                    company and the reviews a have already are all excellent.”</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between gap-4">
                                <div className="rating">
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="d-none" width="44" height="44"
                                     viewBox="0 0 44 44" fill="none">
                                    <symbol id="quoteIcon" viewBox="0 0 44 44">
                                        <path
                                            d="M10.3125 6.67969C4.62498 6.67969 0 11.306 0 16.9922C0 22.1837 3.85464 26.4915 8.85474 27.2015C8.45445 30.1094 7.34413 32.8764 5.6094 35.2757C5.27201 35.744 5.28464 36.3785 5.64463 36.8316C5.99784 37.2776 6.6116 37.4466 7.15026 37.2194C15.3353 33.8029 20.625 25.8621 20.625 16.9922C20.625 11.306 16 6.67969 10.3125 6.67969ZM33.6875 6.67969C28 6.67969 23.375 11.306 23.375 16.9922C23.375 22.1837 27.2296 26.4915 32.2297 27.2015C31.8294 30.1094 30.7191 32.8764 28.9844 35.2757C28.647 35.744 28.6596 36.3785 29.0196 36.8316C29.3728 37.2776 29.9866 37.4466 30.5253 37.2194C38.7103 33.8029 44 25.8621 44 16.9922C44 11.306 39.375 6.67969 33.6875 6.67969Z"
                                            fill="#BDE162"/>
                                    </symbol>
                                </svg>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/*-- Testimonial Card --*/}
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-card">
                            <div className="testimonial-image">
                                <Image src={bgImg30} alt="" className="h-auto"/>
                                <div>
                                    <h5 className="mb-1">Samantha Brooks</h5>
                                    <p className="mb-0">CEO, Tech Innovators</p>
                                </div>
                            </div>
                            <div className="testimonial-info">
                                <p className="testimonial-text">“Working with several word press themes a
                                    templates
                                    the last years, I only can say this is best in every level. I use it
                                    for my
                                    company and the reviews a have already are all excellent.”</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between gap-4">
                                <div className="rating">
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                </div>
                                <svg width="44" height="44">
                                    <use href="#quoteIcon"></use>
                                </svg>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/*-- Testimonial Card --*/}
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-card">
                            <div className="testimonial-image">
                                <Image src={bgImg31} alt="" className="h-auto"/>
                                <div>
                                    <h5 className="mb-1">Rachel Green</h5>
                                    <p className="mb-0">Head of Design</p>
                                </div>
                            </div>
                            <div className="testimonial-info">
                                <p className="testimonial-text">“Working with several word press themes a
                                    templates
                                    the last years, I only can say this is best in every level. I use it
                                    for my
                                    company and the reviews a have already are all excellent.”</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between gap-4">
                                <div className="rating">
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                </div>
                                <svg width="44" height="44">
                                    <use href="#quoteIcon"></use>
                                </svg>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/*-- Testimonial Card --*/}
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-card">
                            <div className="testimonial-image">
                                <Image src={bgImg29} alt="" className="h-auto"/>
                                <div>
                                    <h5 className="mb-1">Alexander Cameron</h5>
                                    <p className="mb-0">Lead Developer</p>
                                </div>
                            </div>
                            <div className="testimonial-info">
                                <p className="testimonial-text">“Working with several word press themes a
                                    templates
                                    the last years, I only can say this is best in every level. I use it
                                    for my
                                    company and the reviews a have already are all excellent.”</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between gap-4">
                                <div className="rating">
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                </div>
                                <svg width="44" height="44">
                                    <use href="#quoteIcon"></use>
                                </svg>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/*-- Testimonial Card --*/}
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-card">
                            <div className="testimonial-image">
                                <Image src={bgImg30} alt="" className="h-auto"/>
                                <div>
                                    <h5 className="mb-1">Samantha Brooks</h5>
                                    <p className="mb-0">CEO, Tech Innovators</p>
                                </div>
                            </div>
                            <div className="testimonial-info">
                                <p className="testimonial-text">“Working with several word press themes a
                                    templates
                                    the last years, I only can say this is best in every level. I use it
                                    for my
                                    company and the reviews a have already are all excellent.”</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between gap-4">
                                <div className="rating">
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                </div>
                                <svg width="44" height="44">
                                    <use href="#quoteIcon"></use>
                                </svg>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/*-- Testimonial Card --*/}
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-card">
                            <div className="testimonial-image">
                                <Image src={bgImg31} alt="" className="h-auto"/>
                                <div>
                                    <h5 className="mb-1">Rachel Green</h5>
                                    <p className="mb-0">Head of Design</p>
                                </div>
                            </div>
                            <div className="testimonial-info">
                                <p className="testimonial-text">“Working with several word press themes a
                                    templates
                                    the last years, I only can say this is best in every level. I use it
                                    for my
                                    company and the reviews a have already are all excellent.”</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between gap-4">
                                <div className="rating">
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                    <i className="ti ti-star-filled"></i>
                                </div>
                                <svg width="44" height="44">
                                    <use href="#quoteIcon"></use>
                                </svg>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}