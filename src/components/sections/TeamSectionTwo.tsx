import Image from "next/image";
import bgImg13 from "@/assets/img/bg-img/13.jpg";
import bgImg14 from "@/assets/img/bg-img/14.jpg";
import bgImg15 from "@/assets/img/bg-img/15.jpg";
import bgImg16 from "@/assets/img/bg-img/16.jpg";

export default function TeamSectionTwo() {
    return (
        <section className="team-section bg-white">
            <div className="divider"></div>

            <div className="container">
                <div className="row g-4 justify-content-center">

                    {/* Team Member 1 */}
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="team-card fadeInUp" data-delay="0.5">
                            <Image src={bgImg13} alt="" className="h-auto" />
                            <div className="social-nav">
                                <a href="#"><i className="ti ti-brand-linkedin"></i></a>
                                <a href="#"><i className="ti ti-brand-x"></i></a>
                                <a href="#"><i className="ti ti-brand-instagram"></i></a>
                            </div>
                            <div className="team-body">
                                <h5>Hon. Wendy Komen</h5>
                                <p className="mb-0">Director of Training</p>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="team-card fadeInUp" data-delay="0.6">
                            <Image src={bgImg14} alt="" className="h-auto" />
                            <div className="social-nav">
                                <a href="#"><i className="ti ti-brand-linkedin"></i></a>
                                <a href="#"><i className="ti ti-brand-x"></i></a>
                                <a href="#"><i className="ti ti-brand-instagram"></i></a>
                            </div>
                            <div className="team-body">
                                <h5>Dr. Wesley Keitany</h5>
                                <p className="mb-0">Senior Consultant</p>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="team-card fadeInUp" data-delay="0.7">
                            <Image src={bgImg15} alt="" className="h-auto" />
                            <div className="social-nav">
                                <a href="#"><i className="ti ti-brand-linkedin"></i></a>
                                <a href="#"><i className="ti ti-brand-x"></i></a>
                                <a href="#"><i className="ti ti-brand-instagram"></i></a>
                            </div>
                            <div className="team-body">
                                <h5>Prof. Buziba Charles</h5>
                                <p className="mb-0">Lead Senior Consultant & Trainer</p>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 4 */}
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div className="team-card fadeInUp" data-delay="0.8">
                            <Image src={bgImg16} alt="" className="h-auto" />
                            <div className="social-nav">
                                <a href="#"><i className="ti ti-brand-linkedin"></i></a>
                                <a href="#"><i className="ti ti-brand-x"></i></a>
                                <a href="#"><i className="ti ti-brand-instagram"></i></a>
                            </div>
                            <div className="team-body">
                                <h5>Ms. Catherine Weru</h5>
                                <p className="mb-0">Senior Consultant</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="divider"></div>
        </section>
    );
}
