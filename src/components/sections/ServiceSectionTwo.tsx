import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import unionImg from "@/assets/img/core-img/union.png";
import { connectToDatabase } from "@/lib/mongodb";
import ServiceModel from "@/models/Service";

/**
 * Index-based Tabler icon set — one distinct icon per card, cycles if there
 * are more than 6 services. Replace with a `icon` field on the Service model
 * later if per-service icons are needed.
 */
const CARD_ICONS = [
    "ti ti-school",
    "ti ti-briefcase",
    "ti ti-device-laptop",
    "ti ti-chart-bar",
    "ti ti-chart-line",
    "ti ti-users",
];

const DELAYS = ["0.5", "0.7", "0.9", "1.1", "1.3", "1.5"];

export default async function ServiceSectionTwo() {
    noStore();

    let services: { _id: string; title: string; shortDescription: string; slug: string }[] = [];
    try {
        await connectToDatabase();
        const docs = await ServiceModel
            .find({ featured: true })
            .sort({ order: 1 })
            .limit(4)
            .lean();
        services = docs.map((s) => ({
            _id:              (s._id as { toString(): string }).toString(),
            title:            s.title            as string,
            shortDescription: s.shortDescription as string,
            slug:             s.slug             as string,
        }));
    } catch (err) {
        console.error("ServiceSectionTwo: failed to load services", err);
    }

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

            {services.length > 0 && (
                <div className="container">
                    <div className="row justify-content-center g-4">
                        {services.map((service, index) => (
                            <div key={service._id} className="col-12 col-sm-6 col-lg-4 col-xl-3 translateY8">
                                <div
                                    className="service-card fadeInUp"
                                    data-delay={DELAYS[index] ?? "0.5"}
                                >
                                    <div className="service-icon">
                                        <i className={CARD_ICONS[index % CARD_ICONS.length]}></i>
                                    </div>
                                    <h4>{service.title}</h4>
                                    <p className="mb-4">{service.shortDescription}</p>
                                    {/*-- Button --*/}
                                    <Link href={`/services/${service.slug}`} className="btn-view-more">
                                        <span><i className="ti ti-plus"></i></span>
                                        <span><i className="ti ti-plus"></i> View Details</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/*-- View All --*/}
            <div className="container mt-4">
                <div className="row justify-content-end">
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
                <div className="text-center">
                    <p className="mb-0 heading-word" data-delay="1">
                        We also offer tailored consultancy services. Feel free to contact us to discuss
                        how we can support your organization or community project.
                    </p>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    );
}