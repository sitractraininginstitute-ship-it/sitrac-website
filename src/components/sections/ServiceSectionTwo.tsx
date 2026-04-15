import Image from "next/image";
import unionImg from "@/assets/img/core-img/union.png";
import Link from "next/link";

export default function ServiceSectionTwo() {
    return (
        <section className="service-section style-two bg-secondary">
            {/*-- Shape --*/}
            <div className="shape">
                <Image src={unionImg} alt="" className="h-auto"/>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
                        <div className="section-heading text-center">
                            <span className="subtitle">Services</span>
                            <h2 className="mb-0">Excellence in consultation for every client</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider-sm"></div>

            <div className="container">
                <div className="row justify-content-center g-4">
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 translateY8">
                        <div className="service-card fadeInUp" data-delay="0.5">
                            <div className="service-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"
                                     fill="none">
                                    <g clipPath="url(#clip0_1_1292)">
                                        <path
                                            d="M32.1489 15.5293H30.524V1.05882C30.524 0.474071 30.0499 0 29.4652 0H1.44164C0.856883 0 0.382812 0.474071 0.382812 1.05882V28.1809C0.382812 30.1055 1.94825 31.6884 3.87241 31.7095C3.8763 31.7096 3.88018 31.7096 3.88406 31.7096H3.89324H10.0683V34.9412C10.0683 35.5259 10.5424 36 11.1271 36H34.5475C35.1323 36 35.6063 35.5259 35.6063 34.9412V18.9875C35.6063 17.0807 34.0554 15.5293 32.1489 15.5293ZM2.50046 2.11765H28.4063V15.5293H8.72846C8.72797 15.5293 8.72754 15.5294 8.72712 15.5294H8.72218C6.86317 15.5294 5.3458 16.9836 5.2678 18.8399C5.26717 18.8548 5.26688 18.8696 5.26688 18.8844V28.1809C5.26688 28.9464 4.645 29.5782 3.88074 29.5914C3.11839 29.575 2.50053 28.9456 2.50053 28.1809L2.50046 2.11765ZM7.08778 29.592C7.27561 29.1654 7.38446 28.6781 7.38446 28.181V18.9099C7.42406 18.202 8.00655 17.6471 8.72846 17.6471C9.46724 17.6471 10.0682 18.2484 10.0682 18.9875V29.592H7.08778ZM33.4887 33.8824H12.1859C12.1859 33.4878 12.1859 19.3726 12.1859 18.9875C12.1859 18.5215 12.0896 18.0594 11.9156 17.6471C12.5807 17.6471 31.5059 17.647 32.1489 17.647C32.8877 17.647 33.4887 18.2483 33.4887 18.9875V33.8824Z"
                                            fill="#052E26"/>
                                        <path
                                            d="M5.87132 7.20651H6.95005V11.3428C6.95005 11.9276 7.42412 12.4017 8.00888 12.4017C8.59363 12.4017 9.0677 11.9276 9.0677 11.3428V7.20651H10.1464C10.7312 7.20651 11.2053 6.73244 11.2053 6.14769C11.2053 5.56294 10.7312 5.08887 10.1464 5.08887H5.87132C5.28657 5.08887 4.8125 5.56294 4.8125 6.14769C4.8125 6.73244 5.28657 7.20651 5.87132 7.20651Z"
                                            fill="#052E26"/>
                                        <path
                                            d="M13.0198 12.4016C13.6045 12.4016 14.0786 11.9275 14.0786 11.3428V10.7299H16.236V11.3428C16.236 11.9275 16.7101 12.4016 17.2949 12.4016C17.8796 12.4016 18.3537 11.9275 18.3537 11.3428V8.28524C18.3537 6.52273 16.9198 5.08887 15.1573 5.08887C13.3948 5.08887 11.9609 6.52273 11.9609 8.28524V11.3428C11.9609 11.9275 12.435 12.4016 13.0198 12.4016ZM15.1573 7.20644C15.7521 7.20644 16.236 7.69033 16.236 8.28517V8.61228H14.0786V8.28517C14.0786 7.69033 14.5625 7.20644 15.1573 7.20644Z"
                                            fill="#052E26"/>
                                        <path
                                            d="M20.1048 12.1605C20.5561 12.532 21.2236 12.4674 21.5952 12.0157L22.9152 10.4117L24.2351 12.0157C24.6068 12.4674 25.2741 12.5319 25.7255 12.1605C26.177 11.7889 26.2418 11.1217 25.8703 10.6702L24.2863 8.74538L25.8703 6.82058C26.2418 6.36909 26.177 5.70175 25.7255 5.33025C25.274 4.95853 24.6067 5.02333 24.2351 5.47502L22.9152 7.07907L21.5952 5.47502C21.2236 5.02354 20.5564 4.95874 20.1048 5.33025C19.6533 5.70175 19.5885 6.36909 19.9601 6.82058L21.544 8.74538L19.9601 10.6702C19.5884 11.1217 19.6533 11.7889 20.1048 12.1605Z"
                                            fill="#052E26"/>
                                        <path
                                            d="M22.8759 22.2354H15.5823C14.9975 22.2354 14.5234 22.7094 14.5234 23.2942C14.5234 23.8789 14.9975 24.353 15.5823 24.353H22.8759C23.4606 24.353 23.9347 23.8789 23.9347 23.2942C23.9347 22.7094 23.4606 22.2354 22.8759 22.2354Z"
                                            fill="#052E26"/>
                                        <path
                                            d="M22.8759 27.3174H15.5823C14.9975 27.3174 14.5234 27.7915 14.5234 28.3762C14.5234 28.961 14.9975 29.435 15.5823 29.435H22.8759C23.4606 29.435 23.9347 28.961 23.9347 28.3762C23.9347 27.7915 23.4606 27.3174 22.8759 27.3174Z"
                                            fill="#052E26"/>
                                        <path
                                            d="M30.8072 22.2354H27.2307C26.6459 22.2354 26.1719 22.7094 26.1719 23.2942C26.1719 23.8789 26.6459 24.353 27.2307 24.353H30.8072C31.3919 24.353 31.866 23.8789 31.866 23.2942C31.866 22.7094 31.3919 22.2354 30.8072 22.2354Z"
                                            fill="#052E26"/>
                                        <path
                                            d="M30.8072 27.3174H27.2307C26.6459 27.3174 26.1719 27.7915 26.1719 28.3762C26.1719 28.961 26.6459 29.435 27.2307 29.435H30.8072C31.3919 29.435 31.866 28.961 31.866 28.3762C31.866 27.7915 31.3919 27.3174 30.8072 27.3174Z"
                                            fill="#052E26"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_1292">
                                            <rect width="36" height="36" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h4>Community Development Support</h4>
                            <p className="mb-4">We help communities design and implement impactful development programs that improve livelihoods and promote long-term sustainability.</p>
                            {/*-- Button --*/}
                            <Link href="/services/details" className="btn-view-more">
                                <span><i className="ti ti-plus"></i></span>
                                <span><i className="ti ti-plus"></i> View Details</span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 translateY8">
                        <div className="service-card fadeInUp" data-delay="0.7">
                            <div className="service-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                     fill="none">
                                    <mask id="mask0_1_1311" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="0"
                                          y="0"
                                          width="32" height="32">
                                        <path d="M0 3.8147e-06H32V32H0V3.8147e-06Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_1_1311)">
                                        <path
                                            d="M13.1523 16.2498L15.0298 11.3202C15.0682 11.2264 15.201 11.2263 15.2395 11.32L17.1 16.2498"
                                            stroke="#052E26" strokeWidth="1.5625" strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path d="M13.7422 15.0222H16.5282" stroke="#052E26" strokeWidth="1.5625"
                                              strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M19.9785 11.2498L23.4959 16.2498" stroke="#052E26"
                                              strokeWidth="1.5625"
                                              strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M23.2508 11.2498L19.7285 16.2498" stroke="#052E26"
                                              strokeWidth="1.5625"
                                              strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8.5 11.2495H11.2613" stroke="#052E26" strokeWidth="1.5625"
                                              strokeMiterlimit="10"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9.875 11.4094V16.2498" stroke="#052E26" strokeWidth="1.5625"
                                              strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M4.75 0.937259H21L27.25 7.18726V31.0623H4.75V0.937259Z"
                                              stroke="#052E26"
                                              strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                        <path d="M27.25 7.18701H21V0.937013" stroke="#052E26" strokeWidth="1.875"
                                              strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8.5 21.562H23.5" stroke="#052E26" strokeWidth="1.875"
                                              strokeMiterlimit="10"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8.5 25.312H23.5" stroke="#052E26" strokeWidth="1.875"
                                              strokeMiterlimit="10"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8.5 6.56201H14.75" stroke="#052E26" strokeWidth="1.875"
                                              strokeMiterlimit="10"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                            <h4>Capacity Building & Training</h4>
                            <p className="mb-4">We offer training programs for individuals and organizations to strengthen skills in leadership, governance, and project management.</p>
                            {/*-- Button --*/}
                            <Link href="/services/details" className="btn-view-more">
                                <span><i className="ti ti-plus"></i></span>
                                <span><i className="ti ti-plus"></i> View Details</span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 translateY8">
                        <div className="service-card fadeInUp" data-delay="0.9">
                            <div className="service-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"
                                     fill="none">
                                    <g clipPath="url(#clip0_1_1351)">
                                        <path d="M33.25 30.4214H21.9531V34.9402H33.25V30.4214Z" stroke="#052E26"
                                              strokeWidth="1.875"
                                              strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M34.375 25.9014H23.0781V30.4201H34.375V25.9014Z" stroke="#052E26"
                                              strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                        <path d="M33.25 21.3862H21.9531V25.905H33.25V21.3862Z" stroke="#052E26"
                                              strokeWidth="1.875"
                                              strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M1.61719 16.8659C3.7992 14.6837 7.34302 14.6837 9.52502 16.8659C11.707 14.6837 15.2509 14.6837 17.4329 16.8659C19.6149 14.6837 23.1587 14.6837 25.3407 16.8659C27.5227 14.6837 31.0665 14.6837 33.2485 16.8659C33.2485 8.13702 26.1619 1.05029 17.4329 1.05029C8.70377 1.05029 1.61719 8.13702 1.61719 16.8659Z"
                                            stroke="#052E26" strokeWidth="1.875" strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M25.339 16.8659C25.339 8.13702 21.7958 1.05029 17.4313 1.05029C13.0668 1.05029 9.52344 8.13702 9.52344 16.8659"
                                            stroke="#052E26" strokeWidth="1.875" strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M17.4297 16.8662V27.5982C17.4297 29.157 16.1645 30.4225 14.6055 30.4225C13.0465 30.4225 11.7812 29.157 11.7812 27.5982"
                                            stroke="#052E26" strokeWidth="1.875" strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path d="M17.4297 1.05029V16.8659" stroke="#052E26" strokeWidth="1.875"
                                              strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_1351">
                                            <rect width="36" height="36" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h4>Advocacy & Policy Support</h4>
                            <p className="mb-4">We support advocacy initiatives and policy engagement to amplify community voices and drive meaningful social change.</p>
                            {/*-- Button --*/}
                            <Link href="/services/details" className="btn-view-more">
                                <span><i className="ti ti-plus"></i></span>
                                <span><i className="ti ti-plus"></i> View Details</span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 translateY8">
                        <div className="service-card fadeInUp" data-delay="1.1">
                            <div className="service-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"
                                     fill="none">
                                    <mask id="mask0_1_1369" style={{ maskType:'luminance' }} maskUnits="userSpaceOnUse" x="0"
                                          y="0"
                                          width="36" height="36">
                                        <path d="M35.9688 35.9688V0.03125H0.03125V35.9688H35.9688Z" fill="white"
                                              stroke="white"
                                              strokeWidth="0.0625"/>
                                    </mask>
                                    <g mask="url(#mask0_1_1369)">
                                        <path
                                            d="M4.26367 5.39543C13.4184 0.031288 22.5731 -0.80079 31.7279 5.39543V17.8175C31.7279 21.6596 30.6808 25.3522 27.6282 27.6619L18.0022 34.9453L8.36788 27.6626C5.31238 25.3528 4.26367 21.6583 4.26367 17.8136V5.39543Z"
                                            stroke="#052E26" strokeWidth="1.875" strokeMiterlimit="22.926"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path d="M10.6172 14.5923L18 8.26416L25.3828 14.5923" stroke="#052E26"
                                              strokeWidth="1.875"
                                              strokeMiterlimit="22.926" strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                        <path d="M23.2628 13.4137V21.8696H12.7266V13.5043" stroke="#052E26"
                                              strokeWidth="1.875"
                                              strokeMiterlimit="22.926" strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                        <path d="M23.2637 12.8296V9.77521" stroke="#052E26" strokeWidth="1.875"
                                              strokeMiterlimit="22.926" strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                            <h4>Project Management & Implementation</h4>
                            <p className="mb-4">We assist in planning, executing, and monitoring projects to ensure efficiency, accountability, and measurable impact.</p>
                            {/*-- Button --*/}
                            <Link href="/services/details" className="btn-view-more">
                                <span><i className="ti ti-plus"></i></span>
                                <span><i className="ti ti-plus"></i> View Details</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider-sm"></div>

            <div className="container">
                <div className="text-center">
                    <p className="mb-0 heading-word" data-delay="1">We also offer tailored consultancy services. Feel free to contact us to discuss how we can support your organization or community project.</p>
                </div>
            </div>

            {/*-- Divider */}
            <div className="divider"></div>
        </section>
    )
}