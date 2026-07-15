import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { connectToDatabase } from "@/lib/mongodb";
import ServiceModel from "@/models/Service";
import PartnerSliderOne from "@/components/sliders/PartnerSliderOne";

export default async function ServiceSectionThree() {
    noStore();

    let services: { _id: string; title: string; shortDescription: string; coverImage: string }[] = [];
    try {
        await connectToDatabase();
        const docs = await ServiceModel
            .find({ featured: true })
            .sort({ order: 1 })
            .limit(3)
            .lean();
        services = docs.map((s) => ({
            _id:              (s._id as { toString(): string }).toString(),
            title:            s.title            as string,
            shortDescription: s.shortDescription as string,
            coverImage:       s.coverImage       as string,
        }));
    } catch (err) {
        console.error("ServiceSectionThree: failed to load services", err);
    }

    const DELAYS = ["0.5", "0.75", "1"];

    return (
        <section className="service-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row g-4 align-items-end justify-content-between">
                    {/*-- Section Heading --*/}
                    <div className="col-12 col-sm-7 col-lg-6 col-xxl-5">
                        <div className="section-heading">
                            <span className="subtitle fadeInUp" data-delay="0.5">Services</span>
                            <h2 className="mb-0 heading-line" data-delay="0.75">Training &amp; Institutional Development</h2>
                        </div>
                    </div>

                    {/*-- View All --*/}
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

            {services.length > 0 && (
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        {services.map((service, index) => (
                            <div key={service._id} className="col-12 col-md-6 col-lg-4 translateY8">
                                <div className="service-card-two fadeInUp" data-delay={DELAYS[index] ?? "0.5"}>
                                    <h4 className="mb-3">{service.title}</h4>
                                    <p className="mb-4">{service.shortDescription}</p>
                                    <div
                                        className="tilt-image"
                                        style={{
                                            position:     "relative",
                                            height:       "325px",
                                            overflow:     "hidden",
                                            borderRadius: "12px",
                                        }}
                                    >
                                        <Image
                                            src={service.coverImage}
                                            alt={service.title}
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="container">
                <div className="partner-content style-two">
                    {/*-- Partner Title --*/}
                    <h4 className="partner-title mb-0">Our Trusted<br/> Clients</h4>
                    <PartnerSliderOne/>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    );
}
