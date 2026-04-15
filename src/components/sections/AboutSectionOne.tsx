import Image from "next/image";
import bgImg6 from "@/assets/img/bg-img/6.jpg";
import imgDots from "@/assets/img/core-img/dots.png";
import bgImg7 from "@/assets/img/bg-img/7.jpg";
import Link from "next/link";
import Counter from "@/components/Counter";

export default function AboutSectionOne() {
    return (
        <section className="about-section">
            {/*-- Divider --*/}
            <div className="divider"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="d-none" width="28" height="28" viewBox="0 0 28 28"
                 fill="none">
                <symbol id="checkIcon" viewBox="0 0 28 28">
                    <g clipPath="url(#clip0_1_544)">
                        <path
                            d="M13.9317 26.7618C21.0176 26.7618 26.7618 21.0176 26.7618 13.9317C26.7618 6.84581 21.0176 1.10156 13.9317 1.10156C6.84581 1.10156 1.10156 6.84581 1.10156 13.9317C1.10156 21.0176 6.84581 26.7618 13.9317 26.7618Z"
                            fill="#052E26"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M8.81362 13.0307C8.34112 12.7152 7.70994 12.7869 7.31911 13.1999C6.92886 13.6123 6.89211 14.247 7.23336 14.7014L10.7334 19.3681C10.9445 19.6493 11.2712 19.8207 11.6229 19.8342C11.9741 19.847 12.313 19.7012 12.5446 19.4363L20.7113 10.103C21.1144 9.64274 21.0928 8.94916 20.6623 8.51399C20.2318 8.07882 19.5388 8.05082 19.0739 8.44866L11.5786 14.8735L8.81362 13.0307Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M13.9327 0.519531C6.52939 0.519531 0.519531 6.52939 0.519531 13.9327C0.519531 21.336 6.52939 27.3458 13.9327 27.3458C21.336 27.3458 27.3458 21.336 27.3458 13.9327C27.3458 6.52939 21.336 0.519531 13.9327 0.519531ZM13.9327 1.68557C20.6921 1.68557 26.1798 7.17329 26.1798 13.9327C26.1798 20.6921 20.6921 26.1798 13.9327 26.1798C7.17329 26.1798 1.68557 20.6921 1.68557 13.9327C1.68557 7.17329 7.17329 1.68557 13.9327 1.68557Z"
                              fill="#052E26"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M9.13872 12.5428C8.42939 12.0697 7.48265 12.177 6.89698 12.796C6.31073 13.4155 6.25648 14.3669 6.76806 15.0488L10.2681 19.7155C10.5848 20.1378 11.0748 20.3945 11.6021 20.4143C12.1295 20.4341 12.6376 20.2148 12.9852 19.8181L21.1519 10.4848C21.7562 9.79355 21.7241 8.75347 21.0784 8.1013C20.4326 7.44855 19.3926 7.40595 18.6961 8.00329L11.5356 14.1406L9.13872 12.5428ZM8.4918 13.5135L11.2562 15.3568C11.4738 15.5015 11.7608 15.484 11.9597 15.3142L19.455 8.88938C19.6871 8.68988 20.0342 8.70446 20.2495 8.92204C20.4647 9.13904 20.4752 9.48613 20.274 9.71654L12.1073 19.0499C11.9912 19.1817 11.8221 19.2552 11.6459 19.2482C11.4703 19.2418 11.307 19.156 11.2014 19.0155L7.7014 14.3488C7.53106 14.1213 7.54913 13.8045 7.74455 13.598C7.93938 13.3915 8.25497 13.356 8.4918 13.5135Z"
                              fill="#052E26"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1_544">
                            <rect width="28" height="28" fill="white"/>
                        </clipPath>
                    </defs>
                </symbol>
            </svg>
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-12 col-lg-6">
                        {/*-- About Image --*/}
                        <div className="about-img">
                            <div className="row g-4 align-items-end">
                                <div className="col-6">
                                    <div className="d-flex flex-column gap-4">
                                        {/*-- Image --*/}
                                        <Image className="first-img img-anim-left h-auto" data-delay="0.5"
                                               src={bgImg6} alt=""/>
                                        {/*-- Experience Card --*/}
                                        <div className="experience-card">
                                            <h2 className="mb-0 text-white">
                                                <Counter countNumber={10}/>+
                                            </h2>
                                            <h5 className="mb-0">Years of Impact</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex flex-column gap-4">
                                        <Image className="dots-img" src={imgDots} alt=""/>
                                        <Image className="first-img-reverse img-anim-right" data-delay="0.8"
                                               src={bgImg7} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="section-heading ps-xxl-5">
                            <span className="subtitle">About Us</span>
                            <h2 className="mb-3 color-change">Building stronger institutions for sustainable development</h2>
                            <p className="mb-4">We are a capacity building and institutional development organization dedicated
                            to strengthening systems, empowering communities, and improving service delivery. Through practical
                             training, strategic consulting, and evidence-based approaches, we help organizations grow their
                              impact and achieve long-term sustainability.</p>

                            {/*-- About List --*/}
                            <ul className="list-unstyled about-list mb-5">
                                <li>
                                    <svg width="28" height="28">
                                        <use href="#checkIcon"></use>
                                    </svg>
                                    Strengthening organizational capacity for long-term impact
                                </li>
                                <li>
                                    <svg width="28" height="28">
                                        <use href="#checkIcon"></use>
                                    </svg>
                                    Delivering data-driven and sustainable development solutions
                                </li>
                                <li>
                                    <svg width="28" height="28">
                                        <use href="#checkIcon"></use>
                                    </svg>
                                    Empowering institutions through training and technical support
                                </li>
                            </ul>

                            {/*-- Button --*/}
                            <Link href="/about-us" className="btn btn-primary">
                                <span>Learn More About Our Work</span>
                                <span>More About Us</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    )
}