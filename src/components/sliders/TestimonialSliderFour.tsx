"use client";

import {Pagination, Autoplay, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

import bgImg20 from "@/assets/img/bg-img/20.jpg";

export default function TestimonialSliderFour() {
    return (
        <div className="col-12 col-md-6 col-lg-7 col-xl-8">
            <div className="swiper testimonial-swiper-four fadeInUp" data-delay="0.8"
                 id="testimonialSwiperFour">
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={{
                        nextEl: '.testimonial-four-button-next',
                        prevEl: '.testimonial-four-button-prev',
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    className="swiper-wrapper"
                >
                    {/*-- Testimonial Slide --*/}
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-card-four">
                            <div className="quote-icon mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="52"
                                     viewBox="0 0 82 52"
                                     fill="none">
                                    <path
                                        d="M80.1149 0C80.9533 0 81.7067 0.551388 81.9335 1.36927C82.185 2.27872 81.7041 3.23087 80.8142 3.58094C74.9044 5.90961 70.5645 9.90136 67.8864 15.4646C76.0825 17.5539 81.9997 24.8937 81.9997 33.4286C81.9997 43.6692 73.5399 52 63.1416 52C52.7434 52 44.2845 43.6692 44.2845 33.4286C44.2689 33.288 42.6042 5.59947 79.8291 0.0208015C79.9251 0.00631714 80.02 0 80.1149 0ZM63.1416 48.2857C71.4596 48.2857 78.2261 41.6206 78.2261 33.4286C78.2261 25.9474 72.5429 19.6142 65.0072 18.6985C64.4324 18.6277 63.9219 18.3021 63.6235 17.8143C63.3241 17.3264 63.2688 16.7306 63.4742 16.1974C64.9878 12.261 67.1418 8.91949 69.9165 6.19264C46.9045 14.1145 48.0368 33.074 48.0524 33.2908C48.0581 41.6206 54.8246 48.2857 63.1416 48.2857Z"
                                        fill="#BDE162"/>
                                    <path
                                        d="M35.8415 0C36.6798 0 37.4333 0.551388 37.6601 1.36927C37.9115 2.27872 37.4307 3.23087 36.5408 3.58094C30.6309 5.90961 26.291 9.90136 23.613 15.4646C31.8091 17.5539 37.7263 24.8937 37.7263 33.4286C37.7263 43.6692 29.2664 52 18.8682 52C8.46999 52 0.0110893 43.6692 0.0110893 33.4286C-0.00457001 33.288 -1.66922 5.59947 35.5557 0.0208015C35.6517 0.00631714 35.7466 0 35.8415 0ZM18.8682 48.2857C27.1862 48.2857 33.9527 41.6206 33.9527 33.4286C33.9527 25.9474 28.2694 19.6142 20.7338 18.6985C20.159 18.6277 19.6485 18.3021 19.35 17.8143C19.0506 17.3264 18.9954 16.7306 19.2008 16.1974C20.7143 12.261 22.8684 8.91949 25.643 6.19264C2.63107 14.1145 3.76335 33.074 3.77901 33.2908C3.78467 41.6206 10.5512 48.2857 18.8682 48.2857Z"
                                        fill="#BDE162"/>
                                </svg>
                            </div>
                            <div className="testimonial-info">
                                <p className="testimonial-text mb-0">“The team delivered beyond our expectations. Their approach was professional, structured, and very effective in helping us achieve our project goals.”</p>
                                <hr/>
                                <div className="testimonial-img d-flex align-items-center gap-3 gap-xxl-4">
                                    <Image src={bgImg20} alt="" className="h-auto"/>
                                    <div>
                                        <h5>Grace Wanjiku</h5>
                                        <p className="mb-0">Project Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/*-- Testimonial Slide --*/}
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-card-four">
                            <div className="quote-icon mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="52"
                                     viewBox="0 0 82 52"
                                     fill="none">
                                    <path
                                        d="M80.1149 0C80.9533 0 81.7067 0.551388 81.9335 1.36927C82.185 2.27872 81.7041 3.23087 80.8142 3.58094C74.9044 5.90961 70.5645 9.90136 67.8864 15.4646C76.0825 17.5539 81.9997 24.8937 81.9997 33.4286C81.9997 43.6692 73.5399 52 63.1416 52C52.7434 52 44.2845 43.6692 44.2845 33.4286C44.2689 33.288 42.6042 5.59947 79.8291 0.0208015C79.9251 0.00631714 80.02 0 80.1149 0ZM63.1416 48.2857C71.4596 48.2857 78.2261 41.6206 78.2261 33.4286C78.2261 25.9474 72.5429 19.6142 65.0072 18.6985C64.4324 18.6277 63.9219 18.3021 63.6235 17.8143C63.3241 17.3264 63.2688 16.7306 63.4742 16.1974C64.9878 12.261 67.1418 8.91949 69.9165 6.19264C46.9045 14.1145 48.0368 33.074 48.0524 33.2908C48.0581 41.6206 54.8246 48.2857 63.1416 48.2857Z"
                                        fill="#BDE162"/>
                                    <path
                                        d="M35.8415 0C36.6798 0 37.4333 0.551388 37.6601 1.36927C37.9115 2.27872 37.4307 3.23087 36.5408 3.58094C30.6309 5.90961 26.291 9.90136 23.613 15.4646C31.8091 17.5539 37.7263 24.8937 37.7263 33.4286C37.7263 43.6692 29.2664 52 18.8682 52C8.46999 52 0.0110893 43.6692 0.0110893 33.4286C-0.00457001 33.288 -1.66922 5.59947 35.5557 0.0208015C35.6517 0.00631714 35.7466 0 35.8415 0ZM18.8682 48.2857C27.1862 48.2857 33.9527 41.6206 33.9527 33.4286C33.9527 25.9474 28.2694 19.6142 20.7338 18.6985C20.159 18.6277 19.6485 18.3021 19.35 17.8143C19.0506 17.3264 18.9954 16.7306 19.2008 16.1974C20.7143 12.261 22.8684 8.91949 25.643 6.19264C2.63107 14.1145 3.76335 33.074 3.77901 33.2908C3.78467 41.6206 10.5512 48.2857 18.8682 48.2857Z"
                                        fill="#BDE162"/>
                                </svg>
                            </div>
                            <div className="testimonial-info">
                                <p className="testimonial-text mb-0">“We saw real improvements in our operations after working with them. They are reliable, responsive, and truly understand client needs.”</p>
                                <hr/>
                                <div className="testimonial-img d-flex align-items-center gap-3 gap-xxl-4">
                                    <Image src={bgImg20} alt="" className="h-auto"/>
                                    <div>
                                        <h5>Michael Otieno</h5>
                                        <p className="mb-0">Operations Lead</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/*-- Testimonial Slide --*/}
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-card-four">
                            <div className="quote-icon mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="52"
                                     viewBox="0 0 82 52"
                                     fill="none">
                                    <path
                                        d="M80.1149 0C80.9533 0 81.7067 0.551388 81.9335 1.36927C82.185 2.27872 81.7041 3.23087 80.8142 3.58094C74.9044 5.90961 70.5645 9.90136 67.8864 15.4646C76.0825 17.5539 81.9997 24.8937 81.9997 33.4286C81.9997 43.6692 73.5399 52 63.1416 52C52.7434 52 44.2845 43.6692 44.2845 33.4286C44.2689 33.288 42.6042 5.59947 79.8291 0.0208015C79.9251 0.00631714 80.02 0 80.1149 0ZM63.1416 48.2857C71.4596 48.2857 78.2261 41.6206 78.2261 33.4286C78.2261 25.9474 72.5429 19.6142 65.0072 18.6985C64.4324 18.6277 63.9219 18.3021 63.6235 17.8143C63.3241 17.3264 63.2688 16.7306 63.4742 16.1974C64.9878 12.261 67.1418 8.91949 69.9165 6.19264C46.9045 14.1145 48.0368 33.074 48.0524 33.2908C48.0581 41.6206 54.8246 48.2857 63.1416 48.2857Z"
                                        fill="#BDE162"/>
                                    <path
                                        d="M35.8415 0C36.6798 0 37.4333 0.551388 37.6601 1.36927C37.9115 2.27872 37.4307 3.23087 36.5408 3.58094C30.6309 5.90961 26.291 9.90136 23.613 15.4646C31.8091 17.5539 37.7263 24.8937 37.7263 33.4286C37.7263 43.6692 29.2664 52 18.8682 52C8.46999 52 0.0110893 43.6692 0.0110893 33.4286C-0.00457001 33.288 -1.66922 5.59947 35.5557 0.0208015C35.6517 0.00631714 35.7466 0 35.8415 0ZM18.8682 48.2857C27.1862 48.2857 33.9527 41.6206 33.9527 33.4286C33.9527 25.9474 28.2694 19.6142 20.7338 18.6985C20.159 18.6277 19.6485 18.3021 19.35 17.8143C19.0506 17.3264 18.9954 16.7306 19.2008 16.1974C20.7143 12.261 22.8684 8.91949 25.643 6.19264C2.63107 14.1145 3.76335 33.074 3.77901 33.2908C3.78467 41.6206 10.5512 48.2857 18.8682 48.2857Z"
                                        fill="#BDE162"/>
                                </svg>
                            </div>
                            <div className="testimonial-info">
                                <p className="testimonial-text mb-0">“Excellent service from start to finish. They provided clear guidance and practical solutions that made a real difference for our organization.”</p>
                                <hr/>
                                <div className="testimonial-img d-flex align-items-center gap-3 gap-xxl-4">
                                    <Image src={bgImg20} alt="" className="h-auto"/>
                                    <div>
                                        <h5>Amina Hassan</h5>
                                        <p className="mb-0">Program Coordinator</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/*-- Testimonial Navigation --*/}
                <div className="testimonial-navigation d-flex align-items-center">
                    <div className="testimonial-four-button-prev">
                        <i className="ti ti-arrow-left"></i>
                    </div>
                    <div className="testimonial-four-button-next">
                        <i className="ti ti-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}