import Image from "next/image";
import shapeImg from "@/assets/img/core-img/shape.png";
import TestimonialSliderFour from "@/components/sliders/TestimonialSliderFour";

export default function TestimonialSectionOne() {
    return (
        <section className="testimonial-section bg-secondary">
            {/*-- Divider --*/}
            <div className="divider"></div>

            {/*-- Shape --*/}
            <div className="shape">
                <Image src={shapeImg} alt="" className="h-auto"/>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-7 col-md-4">
                        <div className="section-heading">
                            <span className="subtitle fadeInUp" data-delay="0.5">Testimonial</span>
                            <h2 className="mb-0 heading-line" data-delay="0.6">What clients say about us</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider-sm"></div>

            <div className="container">
                <div className="row g-4">
                    <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                        {/*-- Rating Card --*/}
                        <div className="rating-card bg-img fadeInUp testimonial-one-bg" data-delay="0.5">
                            <h2 className="counter">4.9</h2>
                            <div className="stars">
                                <i className="ti ti-star-filled"></i>
                                <i className="ti ti-star-filled"></i>
                                <i className="ti ti-star-filled"></i>
                                <i className="ti ti-star-filled"></i>
                                <i className="ti ti-star-filled"></i>
                            </div>
                            <h6>(256+ reviews)</h6>
                            <p className="mb-0">We deliver professional training and capacity building solutions that meet institutional needs and improve performance outcomes.</p>
                        </div>
                    </div>

                    <TestimonialSliderFour/>
                </div>
            </div>

            <div className="divider"></div>
        </section>
    )
}