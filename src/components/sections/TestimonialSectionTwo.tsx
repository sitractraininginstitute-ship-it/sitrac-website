import TestimonialSliderTwo from "@/components/sliders/TestimonialSliderTwo";

export default function TestimonialSectionTwo() {
    return (
        <section className="testimonial-section style-two bg-img jarallax testimonial-two-bg">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
                        <div className="section-heading text-center">
                            <span className="subtitle text-white">Testimonial</span>
                            <h2 className="mb-0 text-white">Happy users around the world</h2>
                        </div>
                    </div>
                </div>

                {/*-- Divider --*/}
                <div className="divider-sm"></div>

                {/*-- Testimonial Slider --*/}
                <TestimonialSliderTwo/>

                {/*-- Divider --*/}
                <div className="divider-sm"></div>

                {/*-- Testimonial Pagination --*/}
                <div className="testimonial-pagination"></div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    )
}