
import PartnerSliderOne from "@/components/sliders/PartnerSliderOne";
import Image from "next/image";
import bgImg40 from "@/assets/img/bg-img/40.jpg";
import bgImg41 from "@/assets/img/bg-img/41.jpg";
import bgImg42 from "@/assets/img/bg-img/42.jpg";
import Link from "next/link";
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
                             <Link href="/services/">View More</Link>
                                <span>View All Services</span>
                                <span>View All Services</span>
                            
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
                            <h4 className="mb-3">Claims Management Masterclass</h4>
                            <p className="mb-4">A specialized, high-impact programme equipping insurance and financial services professionals with the technical knowledge and practical skills to manage claims processes efficiently, ethically, and in full regulatory compliance.</p>
                            <Image className="tilt-image h-auto" src={bgImg40} alt=""/>
                        </div>
                    </div>

                    {/*-- Service Card --*/}
                    <div className="col-12 col-md-6 col-lg-4 translateY8">
                        <div className="service-card-two fadeInUp" data-delay="0.75">
                            <h4 className="mb-3">Modern Customer Service Training</h4>
                            <p className="mb-4">A transformative programme designed to equip frontline staff and customer-facing teams with the skills, mindset, and tools required to deliver exceptional service experiences consistently across all sectors.</p>
                            <Image className="tilt-image h-auto" src={bgImg41} alt=""/>
                        </div>
                    </div>

                    {/*-- Service Card --*/}
                    <div className="col-12 col-md-6 col-lg-4 translateY8">
                        <div className="service-card-two fadeInUp" data-delay="1">
                            <h4 className="mb-3">Retirement Readiness Programme</h4>
                            <p className="mb-4">A comprehensive financial and personal planning programme supporting employees in preparing for retirement — covering pension management, investment strategies, health planning, and post-retirement income generation.</p>
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
