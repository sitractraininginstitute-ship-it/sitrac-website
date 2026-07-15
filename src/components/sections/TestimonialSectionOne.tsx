import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import shapeImg from "@/assets/img/core-img/shape.png";
import { connectToDatabase } from "@/lib/mongodb";
import TestimonialModel from "@/models/Testimonial";
import TestimonialSliderFour, { TestimonialData } from "@/components/sliders/TestimonialSliderFour";

export default async function TestimonialSectionOne() {
    noStore();

    let testimonials: TestimonialData[] = [];
    try {
        await connectToDatabase();
        const docs = await TestimonialModel.find().sort({ order: 1 }).lean();
        testimonials = docs.map((t) => ({
            _id:          (t._id as { toString(): string }).toString(),
            name:         t.name  as string,
            role:         t.role  as string | undefined,
            organization: t.organization as string | undefined,
            quote:        t.quote as string,
            photo:        t.photo as string | undefined,
        }));
    } catch (err) {
        console.error("TestimonialSectionOne: failed to load testimonials", err);
    }

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

                    <TestimonialSliderFour testimonials={testimonials} />
                </div>
            </div>

            <div className="divider"></div>
        </section>
    );
}