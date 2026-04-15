"use client";

import Image from "next/image";
import circularLines from "@/assets/img/core-img/small-circular-lines.png";
import bgImg33 from "@/assets/img/bg-img/33.png";

interface PricingSectionTwoProps {
    classes?: string,
    priceClasses?: string,
}

export default function PricingSectionTwo({ classes, priceClasses }: PricingSectionTwoProps) {

    const packages = [
        {
            name: "Open Training Programs",
            desc: "Scheduled training for professionals across sectors, focusing on practical skills and real-world application.",
            price: "Per Participant",
        },
        {
            name: "In-House Training",
            desc: "Customized programs delivered within your organization, aligned to your goals and capacity development needs.",
            price: "Custom Packages",
        },
        {
            name: "Consultancy Services",
            desc: "Expert advisory services to strengthen governance, improve performance, and enhance institutional effectiveness.",
            price: "Project-Based",
        },
    ];

    return (
        <section className={`pricing-section ${classes}`}>
            <div className="divider"></div>

            <div className="shape">
                <Image src={circularLines} alt="" />
            </div>

            <div className="container">
                <div className="row g-4 align-items-end justify-content-between">
                    <div className="col-12 col-sm-6 col-xl-4">
                        <div className="section-heading">
                            <span className="subtitle">Our Packages</span>
                            <h2 className="mb-0">Flexible Engagement Models</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider-sm"></div>

            <div className="container">
                <div className="row price-table g-4">

                    <div className="col-12 col-md-5 col-lg-4 price-banner">
                        <div className="price-banner-card">
                            <h4 className="mb-3 text-white">Partner With SITRAC</h4>
                            <p className="mb-4">
                                Flexible training and consultancy solutions for institutions across sectors and industries.
                            </p>
                            <Image className="fadeInUp h-auto" src={bgImg33} alt="" />
                        </div>
                    </div>

                    <div className="col-12 col-md-7 price-table-cards col-lg-8">
                        <div className="d-flex flex-column gap-4">
                            {packages.map((pkg, index) => (
                                <div className={`price-card price-table-one ${priceClasses}`} key={index}>
                                    <div className="pricing-info">
                                        <h4 className="mb-1">{pkg.name}</h4>
                                        <p className="mb-0 small">{pkg.desc}</p>
                                    </div>
                                    <div className="pricing-value">
                                        <h5 className="mb-0">{pkg.price}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <div className="divider"></div>
        </section>
    )
}