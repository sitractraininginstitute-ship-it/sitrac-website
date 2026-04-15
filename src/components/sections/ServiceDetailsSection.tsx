import Link from "next/link";
import Image from "next/image";
import bgImg82 from "@/assets/img/bg-img/82.jpg";
import bgImg83 from "@/assets/img/bg-img/83.jpg";
import bgImg84 from "@/assets/img/bg-img/84.jpg";

export default function ServiceDetailsSection() {
    return (
        <div className="service-details-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row g-5">
                    <div className="col-12 col-md-7 col-lg-8">
                        {/*-- Service Details Content --*/}
                        <div className="service-details-content">
                            <Image src={bgImg82} alt="" className="h-auto"/>
                            <h2>Service Overview</h2>
                            <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui beatae
                                dolorem ipsum quia var quaed inventore veritatis et quasi architecto beatae vitae dict
                                sunt
                                explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet
                                finibu
                                eros. Lorem Ipsum is simply dummy text of the been printing.</p>
                            <p>When an unknown printer took a galley of type and scrambled it to make a type book. It
                                leap
                                survive not only five centurie, but also the leap into electronic typesetting, unchange
                                Lorem
                                ipsum dolor sit amet consec tetur adipis icing elit.</p>
                            <h2>Service Center</h2>
                            <p>With over a decade of experience, we've established ourselves as one pioneering agencies
                                in
                                the region. Our small, flexible, agile and design-led structures and processes allo
                                highly
                                responsive and innovative. We're of passionate leaders, strategists, managers,
                                developers,
                                animators and designers who work together under one umbrella.</p>
                            <div className="row g-4">
                                <div className="col-12 col-sm-6">
                                    <Image src={bgImg83} alt="" className="h-auto"/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <Image src={bgImg84} alt="" className="h-auto"/>
                                </div>
                            </div>
                            <p>When an unknown printer took a galley of type and scrambled it to make a type book. It
                                has
                                leap survive not only five centurie, but also the leap into electronic typesetting
                                essentiall
                                dolor unchange Lorem ipsum dolor sit amet consec tetur adipis icing elit.</p>
                            <h2>Services All Details</h2>
                            <p>Cast obscure badger jeep quail congenialy when changed as cat jeepers affectionate thus
                                facilisi goodness this far like ipsum dolor sit amet, consectetur adipisicing elits
                                eiusmod
                                tempo et incididunt et laboret dolore magna aliqua enim ad minim. Eveniet in vulputate
                                esse
                                molestie consequat, illum dolore.</p>
                            <ul className="list-unstyled">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                                         fill="none">
                                        <path
                                            d="M11.6649 17.6993L22.3893 6.97485L24.0392 8.62477L11.6649 20.9991L4.24023 13.5745L5.89016 11.9246L11.6649 17.6993Z"
                                            fill="#052E26"/>
                                    </svg>
                                    Creating and editing content
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                                         fill="none">
                                        <path
                                            d="M11.6649 17.6993L22.3893 6.97485L24.0392 8.62477L11.6649 20.9991L4.24023 13.5745L5.89016 11.9246L11.6649 17.6993Z"
                                            fill="#052E26"/>
                                    </svg>
                                    Workflows, reporting, and content organization
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                                         fill="none">
                                        <path
                                            d="M11.6649 17.6993L22.3893 6.97485L24.0392 8.62477L11.6649 20.9991L4.24023 13.5745L5.89016 11.9246L11.6649 17.6993Z"
                                            fill="#052E26"/>
                                    </svg>
                                    User & role-based administration and security
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                                         fill="none">
                                        <path
                                            d="M11.6649 17.6993L22.3893 6.97485L24.0392 8.62477L11.6649 20.9991L4.24023 13.5745L5.89016 11.9246L11.6649 17.6993Z"
                                            fill="#052E26"/>
                                    </svg>
                                    Flexibility, scalability, and performance and analysis
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                                         fill="none">
                                        <path
                                            d="M11.6649 17.6993L22.3893 6.97485L24.0392 8.62477L11.6649 20.9991L4.24023 13.5745L5.89016 11.9246L11.6649 17.6993Z"
                                            fill="#052E26"/>
                                    </svg>
                                    Multilingual content capabilities
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-5 col-lg-4">
                        <div className="d-flex flex-column gap-5">
                            {/*-- Widget --*/}
                            <div className="widget-card">
                                <h4 className="h4 widget-title">Services List</h4>

                                {/*-- Service Widget --*/}
                                <ul className="service-list">
                                    <li>
                                        <Link href="/services/details">Customer Support <i
                                            className="ti ti-chevron-right"></i></Link>
                                    </li>
                                    <li>
                                        <Link href="/services/details">Project Management <i
                                            className="ti ti-chevron-right"></i></Link>
                                    </li>
                                    <li>
                                        <Link href="/services/details">Advanced Software <i
                                            className="ti ti-chevron-right"></i></Link>
                                    </li>
                                    <li>
                                        <Link href="/services/details">Human Resources <i
                                            className="ti ti-chevron-right"></i></Link>
                                    </li>
                                    <li>
                                        <Link href="/services/details">Cyber Security <i
                                            className="ti ti-chevron-right"></i></Link>
                                    </li>
                                    <li>
                                        <Link href="/services/details">Email Marketing <i
                                            className="ti ti-chevron-right"></i></Link>
                                    </li>
                                </ul>
                            </div>

                            {/*-- Service Info Card --*/}
                            <div className="service-info-card service-details-bg">
                                <div className="icon fadeInUp" data-delay="0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49"
                                         fill="none">
                                        <g clipPath="url(#clip0_1_4378)">
                                            <mask id="mask0_1_4378" style={{ maskType:'luminance' }}
                                                  maskUnits="userSpaceOnUse" x="0" y="0"
                                                  width="49" height="49">
                                                <path d="M0.333984 0.3335H48.334V48.3335H0.333984V0.3335Z"
                                                      fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_1_4378)">
                                                <path
                                                    d="M9.70898 31.8335H7.83398C4.72739 31.8335 2.20898 29.3151 2.20898 26.2085C2.20898 23.1019 4.72739 20.5835 7.83398 20.5835H9.70898V31.8335Z"
                                                    stroke="#052E26" strokeWidth="2.6" strokeMiterlimit="10"/>
                                                <path
                                                    d="M38.959 31.8335H40.834C43.9406 31.8335 46.459 29.3151 46.459 26.2085C46.459 23.1019 43.9406 20.5835 40.834 20.5835H38.959V31.8335Z"
                                                    stroke="#052E26" strokeWidth="2.6" strokeMiterlimit="10"/>
                                                <path
                                                    d="M5.95898 20.9036V20.5835C5.95898 10.2282 13.9786 2.2085 24.334 2.2085C34.6893 2.2085 42.709 10.2282 42.709 20.5835V20.9036"
                                                    stroke="#052E26" strokeWidth="2.6" strokeMiterlimit="10"/>
                                                <path
                                                    d="M28.084 42.7085C28.084 44.7795 26.4051 46.4585 24.334 46.4585C22.263 46.4585 20.584 44.7795 20.584 42.7085C20.584 40.6375 22.263 38.9585 24.334 38.9585C26.4051 38.9585 28.084 40.6375 28.084 42.7085Z"
                                                    stroke="#052E26" strokeWidth="2.6" strokeMiterlimit="10"/>
                                                <path
                                                    d="M28.084 42.7085H35.209C39.3511 42.7085 42.709 39.3507 42.709 35.2085V31.5134"
                                                    stroke="#052E26" strokeWidth="2.6" strokeMiterlimit="10"/>
                                                <path
                                                    d="M16.834 16.8335V28.0835H20.584L24.334 31.8335L28.084 28.0835H31.834V16.8335H16.834Z"
                                                    stroke="#052E26" strokeWidth="2.6" strokeMiterlimit="10"/>
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_4378">
                                                <rect width="48" height="48" fill="white"
                                                      transform="translate(0.333984 0.333496)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <h3 className="text-white fadeInUp" data-delay="0.7">Don't hesitate to contact us</h3>
                                <p className="text-white fadeInUp" data-delay="0.8">At our IT solution company, we are
                                    committed
                                    to exceptional</p>
                                <Link href="/contact" className="btn btn-primary fadeInUp" data-delay="0.9">
                                    <span>Get in Touch</span>
                                    <span>Get in Touch</span>
                                </Link>
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