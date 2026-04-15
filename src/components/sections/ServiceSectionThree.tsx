import PartnerSliderOne from "@/components/sliders/PartnerSliderOne";
import Image from "next/image";
import bgImg40 from "@/assets/img/bg-img/40.jpg";
import bgImg41 from "@/assets/img/bg-img/41.jpg";
import bgImg42 from "@/assets/img/bg-img/42.jpg";

export default function ServiceSectionThree() {
    return (
        <section className="service-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row g-4 align-items-end justify-content-between">
                    {/*-- Section Heading --*/}
                    <div className="col-12 col-sm-7 col-lg-6 col-xxl-5">
                        <div className="section-heading">
                            <span className="subtitle fadeInUp" data-delay="0.5">Services</span>
                            <h2 className="mb-0 heading-line" data-delay="0.75">Training & Institutional Development</h2>
                        </div>
                    </div>

                    {/*-- Pricing Plan Switching --*/}
                    <div className="col-12 col-sm-5">
                        <div className="text-sm-end">
                            <a href="/services" className="btn btn-primary">
                                <span>View All Services</span>
                                <span>View All Services</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider-sm"></div>

            <div className="container">
                <div className="row g-4 justify-content-center">
                    {/*-- Service Card --*/}
                    <div className="col-12 col-md-6 col-lg-4 translateY8">
                        <div className="service-card-two fadeInUp" data-delay="0.5">
                            <h4 className="mb-3">Training & Capacity Building</h4>
                            <p className="mb-4">We deliver structured training programs for governments, institutions, and organizations aimed at strengthening leadership, governance, and performance.</p>
                            <Image className="tilt-image h-auto" src={bgImg40} alt=""/>
                        </div>
                    </div>

                    {/*-- Service Card --*/}
                    <div className="col-12 col-md-6 col-lg-4 translateY8">
                        <div className="service-card-two fadeInUp" data-delay="0.75">
                            <h4 className="mb-3">Management Consultancy</h4>
                            <p className="mb-4">We provide expert advisory services in strategic planning, governance, human resources, finance, and institutional development.</p>
                            <Image className="tilt-image h-auto" src={bgImg41} alt=""/>
                        </div>
                    </div>

                    {/*-- Service Card --*/}
                    <div className="col-12 col-md-6 col-lg-4 translateY8">
                        <div className="service-card-two fadeInUp" data-delay="1">
                            <h4 className="mb-3">ICT & Digital Transformation</h4>
                            <p className="mb-4">We support organizations in adopting digital systems, cybersecurity frameworks, and data-driven operations for improved efficiency.</p>
                            <Image className="tilt-image h-auto" src={bgImg42} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="partner-content style-two">
                    {/*-- Partner Title --*/}
                    <h4 className="partner-title mb-0">Our Trusted<br/> Clients</h4>

                    <PartnerSliderOne/>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    )
}