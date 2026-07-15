import Link from "next/link";
import Image from "next/image";

interface ServiceData {
    _id:              string;
    title:            string;
    slug:             string;
    shortDescription: string;
    fullDescription:  string;
    coverImage:       string;
    category?:        string;
    duration?:        string;
    price?:           string;
}

interface AllService {
    _id:   string;
    title: string;
    slug:  string;
}

interface Props {
    service:     ServiceData;
    allServices: AllService[];
}

export default function ServiceDetailsSection({ service, allServices }: Props) {
    return (
        <div className="service-details-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row g-5">
                    <div className="col-12 col-md-7 col-lg-8">
                        {/*-- Service Details Content --*/}
                        <div className="service-details-content">
                            {/* Cover image */}
                            <div
                                style={{
                                    position:     "relative",
                                    height:       "380px",
                                    overflow:     "hidden",
                                    borderRadius: "12px",
                                    marginBottom: "2rem",
                                }}
                            >
                                <Image
                                    src={service.coverImage}
                                    alt={service.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>

                            {/* Meta badges */}
                            {(service.category || service.duration || service.price) && (
                                <div className="d-flex flex-wrap gap-3 mb-4">
                                    {service.category && (
                                        <span className="badge bg-primary text-white px-3 py-2">
                                            {service.category}
                                        </span>
                                    )}
                                    {service.duration && (
                                        <span className="badge bg-secondary text-white px-3 py-2">
                                            <i className="ti ti-clock me-1"></i>{service.duration}
                                        </span>
                                    )}
                                    {service.price && (
                                        <span className="badge bg-dark text-white px-3 py-2">
                                            <i className="ti ti-currency-dollar me-1"></i>{service.price}
                                        </span>
                                    )}
                                </div>
                            )}

                            <h2>Service Overview</h2>
                            <p>{service.shortDescription}</p>

                            <h2>Full Programme Details</h2>
                            {service.fullDescription.split("\n\n").map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}

                            {/* Key benefits list */}
                            <h2>What You Will Gain</h2>
                            <ul className="list-unstyled">
                                {[
                                    "Practical, hands-on skills and knowledge",
                                    "Industry-recognized competency frameworks",
                                    "Networking with peers and sector experts",
                                    "Post-training support and resources",
                                    "Certificate of completion",
                                ].map((item, i) => (
                                    <li key={i}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                            <path d="M11.6649 17.6993L22.3893 6.97485L24.0392 8.62477L11.6649 20.9991L4.24023 13.5745L5.89016 11.9246L11.6649 17.6993Z" fill="#052E26"/>
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-5 col-lg-4">
                        <div className="d-flex flex-column gap-5">
                            {/*-- Services List Widget --*/}
                            <div className="widget-card">
                                <h4 className="h4 widget-title">All Services</h4>
                                <ul className="service-list">
                                    {allServices.map((s) => (
                                        <li key={s._id} className={s.slug === service.slug ? "active" : ""}>
                                            <Link href={`/services/${s.slug}`}>
                                                {s.title} <i className="ti ti-chevron-right"></i>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/*-- Service Info Card --*/}
                            <div className="service-info-card service-details-bg">
                                <div className="icon fadeInUp" data-delay="0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                                        <g clipPath="url(#clip-contact)">
                                            <mask id="mask-contact" style={{ maskType:'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="49">
                                                <path d="M0.333984 0.3335H48.334V48.3335H0.333984V0.3335Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask-contact)">
                                                <path d="M9.70898 31.8335H7.83398C4.72739 31.8335 2.20898 29.3151 2.20898 26.2085C2.20898 23.1019 4.72739 20.5835 7.83398 20.5835H9.70898V31.8335Z" stroke="#052E26" strokeWidth="2.6" strokeMiterlimit="10"/>
                                                <path d="M38.959 31.8335H40.834C43.9406 31.8335 46.459 29.3151 46.459 26.2085C46.459 23.1019 43.9406 20.5835 40.834 20.5835H38.959V31.8335Z" stroke="#052E26" strokeWidth="2.6" strokeMiterlimit="10"/>
                                                <path d="M5.95898 20.9036V20.5835C5.95898 10.2282 13.9786 2.2085 24.334 2.2085C34.6893 2.2085 42.709 10.2282 42.709 20.5835V20.9036" stroke="#052E26" strokeWidth="2.6" strokeMiterlimit="10"/>
                                                <path d="M28.084 42.7085C28.084 44.7795 26.4051 46.4585 24.334 46.4585C22.263 46.4585 20.584 44.7795 20.584 42.7085C20.584 40.6375 22.263 38.9585 24.334 38.9585C26.4051 38.9585 28.084 40.6375 28.084 42.7085Z" stroke="#052E26" strokeWidth="2.6" strokeMiterlimit="10"/>
                                                <path d="M28.084 42.7085H35.209C39.3511 42.7085 42.709 39.3507 42.709 35.2085V31.5134" stroke="#052E26" strokeWidth="2.6" strokeMiterlimit="10"/>
                                                <path d="M16.834 16.8335V28.0835H20.584L24.334 31.8335L28.084 28.0835H31.834V16.8335H16.834Z" stroke="#052E26" strokeWidth="2.6" strokeMiterlimit="10"/>
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip-contact">
                                                <rect width="48" height="48" fill="white" transform="translate(0.333984 0.333496)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <h3 className="text-white fadeInUp" data-delay="0.7">Don&apos;t hesitate to contact us</h3>
                                <p className="text-white fadeInUp" data-delay="0.8">
                                    Ready to enroll or need more information about this programme?
                                </p>
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
    );
}