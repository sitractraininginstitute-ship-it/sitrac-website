import Image from "next/image";
import bgImg88 from "@/assets/img/bg-img/88.jpg";
import ProgressBar from "@/components/ProgressBar";

export default function TeamDetailsSection() {
    return (
        <div className="team-details-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row g-5">
                    <div className="col-12 col-md-6">
                        <div className="pe-xl-4">
                            <Image className="w-100 tilt-image" src={bgImg88} alt=""/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="team-details-content ps-xl-4">
                            <h2 className="mb-3">Ronald Richards</h2>
                            <h5 className="mb-4 text-primary">Finance Advisor</h5>
                            <p className="mb-4">Habitant metus lobortis quam pharetra maximus parturient fringilla
                                taciti.
                                Quisque pulvinar facilisi tempor condimentum dui pharetra ad fringilla cursus.
                                Consectetur
                                nisl lacus incepto vestibu lum mi ncepto vestibu fermentum cubilia.</p>

                            <ul className="fw-semibold list-unstyled mb-4">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                         fill="none">
                                        <path
                                            d="M16.625 17.5C14.8889 17.5 13.1701 17.125 11.4688 16.375C9.76736 15.625 8.22222 14.5556 6.83333 13.1667C5.44444 11.7778 4.375 10.2361 3.625 8.54167C2.875 6.84722 2.5 5.125 2.5 3.375V2.5H7.41667L8.1875 6.6875L5.8125 9.08333C6.11806 9.625 6.45833 10.1389 6.83333 10.625C7.20833 11.1111 7.61111 11.5625 8.04167 11.9792C8.44444 12.3819 8.88542 12.7674 9.36458 13.1354C9.84375 13.5035 10.3611 13.8472 10.9167 14.1667L13.3333 11.75L17.5 12.6042V17.5H16.625Z"
                                            fill="#1C2841"/>
                                    </svg>
                                    216-564-3678
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                         fill="none">
                                        <path
                                            d="M1.66797 16.6673V3.33398H18.3346V16.6673H1.66797ZM10.0013 10.834L16.668 6.66732V5.00065L10.0013 9.16732L3.33464 5.00065V6.66732L10.0013 10.834Z"
                                            fill="#1C2841"/>
                                    </svg>
                                    ronaldrichards@example.com
                                </li>
                            </ul>

                            {/*-- Social Nav --*/}
                            <div className="social-nav">
                                <a href="#"><i className="ti ti-brand-facebook"></i></a>
                                <a href="#"><i className="ti ti-brand-linkedin"></i></a>
                                <a href="#"><i className="ti ti-brand-x"></i></a>
                                <a href="#"><i className="ti ti-brand-instagram"></i></a>
                            </div>

                            {/*-- Divider --*/}
                            <div className="divider-sm"></div>

                            <h3 className="mb-4">Experience Area</h3>
                            <div className="d-flex flex-column gap-4">
                                {/*-- Progress Bar --*/}
                                <ProgressBar label="Expertise &amp; Experience" percentage={90} shouldAnimate={true}/>

                                {/*-- Progress Bar --*/}
                                <ProgressBar label="Innovative Solutions" percentage={80} shouldAnimate={true}/>

                                {/*-- Progress Bar --*/}
                                <ProgressBar label="Cost Efficiency" percentage={85} shouldAnimate={true}/>
                            </div>

                            {/*-- Divider --*/}
                            <div className="divider-sm"></div>

                            <h3 className="mb-4">Experience Area</h3>
                            <form action="#" className="comment-form">
                                <div className="row g-4">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Full Name*"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Your Email*"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Phone Number*"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Message Here*"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">
                                            <span>Send Message</span>
                                            <span>Send Message</span>
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </div>
    )
}