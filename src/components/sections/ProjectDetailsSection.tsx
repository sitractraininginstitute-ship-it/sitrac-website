import Image from "next/image";
import bgImg85 from "@/assets/img/bg-img/85.jpg";
import bgImg86 from "@/assets/img/bg-img/86.jpg";
import bgImg87 from "@/assets/img/bg-img/87.jpg";

export default function ProjectDetailsSection() {
    return (
        <div className="project-details-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            {/*-- Project Details Image --*/}
            <div className="custom-container imgZoomInOut mb-5">
                <Image className="project-details-img h-auto" src={bgImg85} alt=""/>
            </div>

            <div className="container">
                <div className="row g-5">
                    <div className="col-12 col-md-7 col-lg-8">
                        <div className="project-details-content">
                            <h2>Project overview</h2>
                            <p>User experience design includes elements of interaction design, visual design, informati
                                architecture, user research, and other disciplines, and is concerned with all facts of
                                overall experience delivered use Following is a short analysis of its constituent parts.
                                treatm interface elements is perceived as the visual design.</p>
                            <p>Test your ideas with minimal risk. Test even the most complex ideas, involving emerging
                                logies - like blockchain - with the help of our expert Outsourceo team. We'll help a pre
                                roadmapping and post-PoC Development analysis</p>
                            <div className="row g-4">
                                <div className="col-12 col-sm-6">
                                    <Image src={bgImg86} className="h-auto" alt=""/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <Image src={bgImg87} className="h-auto" alt=""/>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut
                                labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nis
                                aliquip
                                ex commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum
                                dolore eu fugiat nulla pariatur. voluptate velit esse cillum dolore eu.</p>
                            <h2>Challenge & solution</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut
                                labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi
                                ut
                                aliquip ex commodo consequat. Duis aute irure dolor in in voluptate.</p>
                            <h2>Final result</h2>
                            <p>For almost 50 years Leighton Asia, one of the region's largest and most respected
                                companies,
                                has been progressively building for a better future by leveraging international ex
                                intelligence. In that time Leighton has delivered some of Asia's prestigious buildings
                                and
                                infrastr projects. prestigious buildings and transformational.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-5 col-lg-4">
                        {/*-- Project Widget --*/}
                        <div className="project-widget">
                            <h4 className="widget-title mb-4">Project Details</h4>

                            {/*-- Project Meta List --*/}
                            <ul className="project-meta-list list-unstyled">
                                <li>
                                    <h6 className="mb-0">Client</h6>
                                    <span>:</span>
                                    <p className="mb-0">Porter Victoria</p>
                                </li>
                                <li>
                                    <h6 className="mb-0">Category</h6>
                                    <span>:</span>
                                    <p className="mb-0">Web Development</p>
                                </li>
                                <li>
                                    <h6 className="mb-0">Date</h6>
                                    <span>:</span>
                                    <p className="mb-0">20 January, 2025</p>
                                </li>
                                <li>
                                    <h6 className="mb-0">Website</h6>
                                    <span>:</span>
                                    <p className="mb-0"><a href="#">https://bizora.com</a></p>
                                </li>
                            </ul>

                            {/*-- Social Nav --*/}
                            <div className="social-nav mt-4">
                                <a href="#">
                                    <i className="ti ti-brand-facebook"></i>
                                </a>
                                <a href="#">
                                    <i className="ti ti-brand-linkedin"></i>
                                </a>
                                <a href="#">
                                    <i className="ti ti-brand-x"></i>
                                </a>
                                <a href="#">
                                    <i className="ti ti-brand-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </div>
    )
}