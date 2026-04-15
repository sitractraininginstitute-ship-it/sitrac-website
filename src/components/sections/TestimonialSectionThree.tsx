"use client";

import {Autoplay, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import bgImg48 from "@/assets/img/bg-img/48.jpg";
import bgImg49 from "@/assets/img/bg-img/49.jpg";
import bgImg50 from "@/assets/img/bg-img/50.jpg";

export default function TestimonialSectionThree() {
    return (
        <section className="testimonial-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row g-4 align-items-end justify-content-between">
                    {/*-- Section Heading --*/}
                    <div className="col-12 col-sm-6 col-xxl-4">
                        <div className="section-heading">
                            <span className="subtitle">Testimonial</span>
                            <h2 className="mb-0">What Our Clients Say About Our Work</h2>
                        </div>
                    </div>

                    {/*-- Pricing Plan Switching --*/}
                    <div className="col-12 col-sm-6">
                        <div className="testimonial-navigation-two justify-content-sm-end">
                            <div className="testimonial-button-prev">
                                <i className="ti ti-arrow-left"></i>
                            </div>
                            <div className="testimonial-button-next">
                                <i className="ti ti-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider-sm"></div>

            <div className="container">
                <div className="swiper testimonial-swiper-two" id="testimonialSwiperThree">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        slidesPerView={3}
                        spaceBetween={24}
                        navigation={{
                            nextEl: '.testimonial-button-next',
                            prevEl: '.testimonial-button-prev',
                        }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            576: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        }}
                        className="swiper-wrapper"
                    >

                        {/*-- Testimonial Slide --*/}
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-three">
                                <div className="testimonial-image">
                                    <Image src={bgImg48} alt="" className="h-auto"/>
                                </div>
                                <div className="testimonial-info">
                                    <div className="quote-icon mb-3">
                                        <svg width="40" height="40">
                                            <use href="#quoteIcon"></use>
                                        </svg>
                                    </div>
                                    <p className="testimonial-text mb-4">“Their support helped our organization strengthen community programs and improve our reporting systems. We achieved more impact in 6 months than we did in years.”
                                    </p>
                                    <h5>Sarah Wanjiku</h5>
                                    <p className="mb-0">Program Coordinator, Community Development Initiative</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/*-- Testimonial Slide --*/}
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-three">
                                <div className="testimonial-image">
                                    <Image src={bgImg49} alt="" className="h-auto"/>
                                </div>
                                <div className="testimonial-info">
                                    <div className="quote-icon mb-3">
                                        <svg width="40" height="40">
                                            <use href="#quoteIcon"></use>
                                        </svg>
                                    </div>
                                    <p className="testimonial-text mb-4">“The consultancy team provided clear guidance on project planning and implementation. Their training sessions greatly improved our staff capacity.”
                                    </p>
                                    <h5>Amina Hassan</h5>
                                    <p className="mb-0">Project Manager, Youth Empowerment Network</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/*-- Testimonial Slide --*/}
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-three">
                                <div className="testimonial-image">
                                    <Image src={bgImg50} alt="" className="h-auto"/>
                                </div>
                                <div className="testimonial-info">
                                    <div className="quote-icon mb-3">
                                        <svg width="40" height="40">
                                            <use href="#quoteIcon"></use>
                                        </svg>
                                    </div>
                                    <p className="testimonial-text mb-4">“We appreciated their professionalism and commitment. They helped us design an effective advocacy strategy that reached key stakeholders.”
                                    </p>
                                    <h5>David Otieno</h5>
                                    <p className="mb-0">Advocacy Lead, Social Justice Organization</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/*-- Testimonial Slide --*/}
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-three">
                                <div className="testimonial-image">
                                    <Image src={bgImg48} alt="" className="h-auto"/>
                                </div>
                                <div className="testimonial-info">
                                    <div className="quote-icon mb-3">
                                        <svg width="40" height="40">
                                            <use href="#quoteIcon"></use>
                                        </svg>
                                    </div>
                                    <p className="testimonial-text mb-4">“Their monitoring and evaluation support improved how we track our projects. We now report results with confidence and clarity.”
                                    </p>
                                    <h5>Peter Mwangi</h5>
                                    <p className="mb-0">Monitoring & Evaluation Officer, NGO Sector</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/*-- Testimonial Slide --*/}
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-three">
                                <div className="testimonial-image">
                                    <Image src={bgImg49} alt="" className="h-auto"/>
                                </div>
                                <div className="testimonial-info">
                                    <div className="quote-icon mb-3">
                                        <svg width="40" height="40">
                                            <use href="#quoteIcon"></use>
                                        </svg>
                                    </div>
                                    <p className="testimonial-text mb-4">“Excellent consultancy services. They are reliable, knowledgeable, and truly understand development work.”
                                    </p>
                                    <h5>Grace Njeri</h5>
                                    <p className="mb-0">Executive Director, Community Trust</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/*-- Testimonial Slide --*/}
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-three">
                                <div className="testimonial-image">
                                    <Image src={bgImg50} alt="" className="h-auto"/>
                                </div>
                                <div className="testimonial-info">
                                    <div className="quote-icon mb-3">
                                        <svg width="40" height="40">
                                            <use href="#quoteIcon"></use>
                                        </svg>
                                    </div>
                                    <p className="testimonial-text mb-4">“Working with them helped us scale our programs efficiently while maintaining accountability and transparency.”
                                    </p>
                                    <h5>James Kariuki</h5>
                                    <p className="mb-0">Operations Lead, Development Foundation</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    )
}