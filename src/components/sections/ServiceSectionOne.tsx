import Image from "next/image";
import shape from "@/assets/img/core-img/shape.png";
import magnet from "@/assets/img/core-img/magnet.png";
import Link from "next/link";

export default function ServiceSectionOne() {
    return (
        <section className="service-section bg-secondary">
            {/*-- Shape --*/}
            <div className="shape">
                <Image src={shape} alt=""/>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row g-5">
                    <div className="col-12 col-sm-5 col-lg-4">
                        <div className="section-heading pe-xxl-4">
                            <span className="subtitle">Our Services</span>
                            <h2 className="mb-3">Delivering Top Digital Agency Solutions</h2>
                            <p className="mb-5">Iscover Moving Experience Like No Other At OutgridWe Go Beyond.</p>
                            <Link href="/services" className="btn btn-primary">
                                <span>View All Services</span>
                                <span>View All Services</span>
                            </Link>
                            {/*-- Magnet Image --*/}
                            <div className="magnet-img scroll-image">
                                <Image src={magnet} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-7 col-lg-8">
                        <div className="row g-4">
                            <div className="col-12 col-lg-6 translateY8">
                                <div className="service-card fadeInUp" data-delay="0.5">
                                    <div className="service-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                             viewBox="0 0 48 48"
                                             fill="none">
                                            <g clipPath="url(#clip0_1_599)">
                                                <path
                                                    d="M36.6539 30.1883V30.0969C36.6539 28.5342 35.3871 27.2673 33.8244 27.2673H32.1928C30.6301 27.2673 29.3633 28.5342 29.3633 30.0969V30.1369C29.3633 31.6996 30.6301 32.9665 32.1928 32.9665H33.8244C35.3871 32.9665 36.6539 34.2333 36.6539 35.7961C36.6539 37.3588 35.3871 38.6256 33.8244 38.6256H32.1928C30.6301 38.6256 29.3633 37.3588 29.3633 35.7961V35.6762"
                                                    stroke="#052E26" strokeWidth="2.34375" strokeMiterlimit="10"/>
                                                <path d="M33.0095 27.2653V23.365" stroke="#052E26"
                                                      strokeWidth="2.34375"
                                                      strokeMiterlimit="10"/>
                                                <path d="M33.0095 42.5231V38.6228" stroke="#052E26"
                                                      strokeWidth="2.34375"
                                                      strokeMiterlimit="10"/>
                                                <path
                                                    d="M33.0105 46.5433C40.5132 46.5433 46.5953 40.4612 46.5953 32.9585C46.5953 25.4559 40.5132 19.3738 33.0105 19.3738C25.5079 19.3738 19.4258 25.4559 19.4258 32.9585C19.4258 40.4612 25.5079 46.5433 33.0105 46.5433Z"
                                                    stroke="#052E26" strokeWidth="2.34375" strokeMiterlimit="10"/>
                                                <path
                                                    d="M28.2492 20.2328V11.2247H31.5763L23.8018 2.20679L16.0273 11.2247H19.3358V23.6877"
                                                    stroke="#052E26" strokeWidth="2.34375" strokeMiterlimit="10"/>
                                                <path d="M19.3355 18.3074H10.3613V46.5445H19.3355V18.3074Z"
                                                      stroke="#052E26"
                                                      strokeWidth="2.34375" strokeMiterlimit="10"/>
                                                <path d="M10.3617 25.0215H1.40625V46.5442H10.3617V25.0215Z"
                                                      stroke="#052E26"
                                                      strokeWidth="2.34375" strokeMiterlimit="10"/>
                                                <path d="M19.3359 46.5427H33.0239" stroke="#052E26"
                                                      strokeWidth="2.34375"
                                                      strokeMiterlimit="10"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_599">
                                                    <rect width="48" height="48" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h4>Investment Policy</h4>
                                    <p className="mb-4">Each demo built with Teba will look different. You customize
                                        almost
                                        anything in the appearance of your website.</p>
                                    {/*-- Button --*/}
                                    <Link href="/services/details" className="btn-view-more">
                                        <span><i className="ti ti-plus"></i></span>
                                        <span><i className="ti ti-plus"></i> View Details</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 translateY8">
                                <div className="service-card fadeInUp" data-delay="0.7">
                                    <div className="service-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                             viewBox="0 0 48 48"
                                             fill="none">
                                            <g clipPath="url(#clip0_1_642A)">
                                                <path d="M11.7891 8.4707H23.0832V11.2942H11.7891V8.4707Z"
                                                      fill="#052E26"/>
                                                <path d="M11.7891 14.1172H24.4949V16.9407H11.7891V14.1172Z"
                                                      fill="#052E26"/>
                                                <path d="M11.7891 19.7646H23.0832V22.5882H11.7891V19.7646Z"
                                                      fill="#052E26"/>
                                                <path
                                                    d="M47.2276 21.1749C45.4243 17.3208 42.2052 14.7608 38.6118 14.2243V9.2976L29.3142 0H6.1412V2.82353H0.494141V48H35.7883V42.3529H38.6118V29.3223C42.2052 28.7858 45.4243 26.2258 47.2276 22.3715L47.5076 21.7733L47.2276 21.1749ZM30.1412 4.82005L33.7917 8.47059H30.1412V4.82005ZM32.9647 45.1765H3.31767V5.64706H6.1412V42.3529H32.9647V45.1765ZM8.96473 39.5294V2.82353H27.3177V11.2941H35.7883V14.2243C32.1948 14.7608 28.9758 17.3208 27.1725 21.1749L26.8925 21.7732L27.1725 22.3714C28.9758 26.2256 32.1948 28.7856 35.7883 29.3222V39.5294H8.96473ZM37.2 26.6055C34.345 26.6055 31.6469 24.7705 30.0308 21.7733C31.6469 18.776 34.345 16.9412 37.2 16.9412C40.0552 16.9412 42.7533 18.776 44.3693 21.7733C42.7533 24.7705 40.0552 26.6055 37.2 26.6055Z"
                                                    fill="#052E26"/>
                                                <path d="M35.7891 20.3613H38.6126V23.1849H35.7891V20.3613Z"
                                                      fill="#052E26"/>
                                                <path
                                                    d="M16.0229 31.8861L14.1977 30.0608L12.2012 32.0574L16.0229 35.8791L22.6683 29.2338L20.6718 27.2373L16.0229 31.8861Z"
                                                    fill="#052E26"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_642A">
                                                    <rect width="48" height="48" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h4>Finance Planning</h4>
                                    <p className="mb-4">Each demo built with Teba will look different. You customize
                                        almost
                                        anything in the appearance of your website.</p>
                                    {/*-- Button --*/}
                                    <Link href="/services/details" className="btn-view-more">
                                        <span><i className="ti ti-plus"></i></span>
                                        <span><i className="ti ti-plus"></i> View Details</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 translateY8">
                                <div className="service-card fadeInUp" data-delay="0.9">
                                    <div className="service-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                             viewBox="0 0 48 48"
                                             fill="none">
                                            <g clipPath="url(#clip0_1_642)">
                                                <path d="M11.7891 8.4707H23.0832V11.2942H11.7891V8.4707Z"
                                                      fill="#052E26"/>
                                                <path d="M11.7891 14.1172H24.4949V16.9407H11.7891V14.1172Z"
                                                      fill="#052E26"/>
                                                <path d="M11.7891 19.7646H23.0832V22.5882H11.7891V19.7646Z"
                                                      fill="#052E26"/>
                                                <path
                                                    d="M47.2276 21.1749C45.4243 17.3208 42.2052 14.7608 38.6118 14.2243V9.2976L29.3142 0H6.1412V2.82353H0.494141V48H35.7883V42.3529H38.6118V29.3223C42.2052 28.7858 45.4243 26.2258 47.2276 22.3715L47.5076 21.7733L47.2276 21.1749ZM30.1412 4.82005L33.7917 8.47059H30.1412V4.82005ZM32.9647 45.1765H3.31767V5.64706H6.1412V42.3529H32.9647V45.1765ZM8.96473 39.5294V2.82353H27.3177V11.2941H35.7883V14.2243C32.1948 14.7608 28.9758 17.3208 27.1725 21.1749L26.8925 21.7732L27.1725 22.3714C28.9758 26.2256 32.1948 28.7856 35.7883 29.3222V39.5294H8.96473ZM37.2 26.6055C34.345 26.6055 31.6469 24.7705 30.0308 21.7733C31.6469 18.776 34.345 16.9412 37.2 16.9412C40.0552 16.9412 42.7533 18.776 44.3693 21.7733C42.7533 24.7705 40.0552 26.6055 37.2 26.6055Z"
                                                    fill="#052E26"/>
                                                <path d="M35.7891 20.3613H38.6126V23.1849H35.7891V20.3613Z"
                                                      fill="#052E26"/>
                                                <path
                                                    d="M16.0229 31.8861L14.1977 30.0608L12.2012 32.0574L16.0229 35.8791L22.6683 29.2338L20.6718 27.2373L16.0229 31.8861Z"
                                                    fill="#052E26"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_642">
                                                    <rect width="48" height="48" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h4>Audit & Assurance</h4>
                                    <p className="mb-4">Each demo built with Teba will look different. You customize
                                        almost
                                        anything in the appearance of your website.</p>
                                    {/*-- Button --*/}
                                    <Link href="/services/details" className="btn-view-more">
                                        <span><i className="ti ti-plus"></i></span>
                                        <span><i className="ti ti-plus"></i> View Details</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 translateY8">
                                <div className="service-card fadeInUp" data-delay="1.1">
                                    <div className="service-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                             viewBox="0 0 48 48"
                                             fill="none">
                                            <g clipPath="url(#clip0_1_659)">
                                                <path
                                                    d="M28.0938 20.1635V24.7408L17.0479 30.1208V33.8856L6.0479 39.1111V45.1875H3V48H45V45.1875H41.9521V12.6358L28.0938 20.1635ZM30.9063 21.8364L39.1397 17.3642V45.1875H30.9063V21.8364ZM19.8605 31.8793L28.0938 27.8691V45.1875H19.8605V31.8793ZM8.8605 40.8889L17.0479 36.9993V45.1875H8.8605V40.8889Z"
                                                    fill="#052E26"/>
                                                <mask id="mask0_1_659" style={{ maskType: 'luminance'}}
                                                      maskUnits="userSpaceOnUse" x="0"
                                                      y="0" width="48" height="48">
                                                    <path d="M0 3.8147e-06H48V48H0V3.8147e-06Z" fill="white"/>
                                                </mask>
                                                <g mask="url(#mask0_1_659)">
                                                    <path
                                                        d="M36.3517 8.50578L38.4696 5.31903L39.0315 7.75653L41.772 7.12475L40.1372 0.0326595L33.0451 1.66738L33.6768 4.40806L36.0637 3.85785L35.7728 4.29547L34.0093 6.94916C31.1362 11.2723 26.9281 14.9134 21.8397 17.4789C17.6077 19.6126 13.0116 20.89 8.41603 21.2238C7.60997 21.2823 6.804 21.3125 6 21.3125V24.125C11.8258 24.125 17.7409 22.6952 23.1059 19.9903C28.6289 17.2056 33.2092 13.2343 36.3517 8.50578Z"
                                                        fill="#052E26"/>
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_659">
                                                    <rect width="48" height="48" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h4>Performance Analysis</h4>
                                    <p className="mb-4">Each demo built with Teba will look different. You customize
                                        almost
                                        anything in the appearance of your website.</p>
                                    {/*-- Button --*/}
                                    <Link href="/services/details" className="btn-view-more">
                                        <span><i className="ti ti-plus"></i></span>
                                        <span><i className="ti ti-plus"></i> View Details</span>
                                    </Link>
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