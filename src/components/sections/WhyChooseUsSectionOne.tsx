import Image from "next/image";
import dotImg from "@/assets/img/core-img/dots.png";
import bgImg17 from "@/assets/img/bg-img/17.jpg";
import bgImg18 from "@/assets/img/bg-img/18.jpg";
import ProgressBar from "@/components/ProgressBar";

export default function WhyChooseUsSectionOne() {
    return (
        <section className="why-choose-us-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-12 col-lg-6">
                        <div className="section-heading pe-xxl-5">
                            <span className="subtitle fadeInUp" data-delay="0.4">Why Choose Us</span>
                            <h2 className="mb-3 fadeInUp" data-delay="0.5">Strengthening Institutions Through Collaboration</h2>
                            <p className="mb-5 fadeInUp" data-delay="0.6">We support organizations in building capacity through structured training,
                            advisory services, and practical implementation support for sustainable growth.</p>

                            <div className="d-flex flex-column gap-4">
                                {/*-- Progress Bar --*/}
                                <ProgressBar label="Training Delivery" percentage={90} shouldAnimate={true} data-delay="0.7"/>

                                {/*-- Progress Bar --*/}
                                <ProgressBar label="Institutional Support" percentage={95} shouldAnimate={true} data-delay="0.75"/>

                                {/*-- Progress Bar --*/}
                                <ProgressBar label="Advisory Services" percentage={98} shouldAnimate={true} data-delay="0.8"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="about-img">
                            <div className="row g-4 align-items-end">
                                <div className="col-6">
                                    <div className="d-flex flex-column gap-4">
                                        <Image className="first-img img-anim-left h-auto" data-delay="0.5"
                                             src={bgImg17}
                                             alt=""/>
                                        {/*-- Experience Card --*/}
                                        <div className="experience-card">
                                            <h2 className="mb-0 text-white"><span className="counter">110</span>+</h2>
                                            <h5 className="mb-0">Project Completed</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex flex-column gap-4">
                                        <Image className="dots-img" src={dotImg} alt=""/>
                                        <Image className="first-img-reverse img-anim-right h-auto" data-delay="0.7"
                                             src={bgImg18} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    )
}