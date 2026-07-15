import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { connectToDatabase } from "@/lib/mongodb";
import TeamMemberModel from "@/models/TeamMember";

const DELAYS = ["0.5", "0.6", "0.7", "0.8", "0.9", "1.0"];

export default async function TeamSectionTwo() {
    noStore();

    let members: { _id: string; name: string; role: string; photo: string; slug: string }[] = [];
    try {
        await connectToDatabase();
        const docs = await TeamMemberModel.find().sort({ order: 1 }).lean();
        members = docs.map((m) => ({
            _id:   (m._id as { toString(): string }).toString(),
            name:  m.name  as string,
            role:  m.role  as string,
            photo: m.photo as string,
            slug:  m.slug  as string,
        }));
    } catch (err) {
        console.error("TeamSectionTwo: failed to load team members", err);
    }

    return (
        <section className="team-section bg-white">
            <div className="divider"></div>

            <div className="container">
                <div className="row g-4 justify-content-center">
                    {members.map((member, index) => (
                        <div key={member._id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                            <Link href={`/team/${member.slug}`} className="d-block text-decoration-none">
                                <div className="team-card fadeInUp" data-delay={DELAYS[index] ?? "0.5"}>
                                    {/*-- Photo with fixed-height crop --*/}
                                    <div
                                        style={{
                                            position:     "relative",
                                            height:       "320px",
                                            overflow:     "hidden",
                                        }}
                                    >
                                        <Image
                                            src={member.photo}
                                            alt={member.name}
                                            fill
                                            style={{ objectFit: "cover", objectPosition: "center top" }}
                                        />
                                    </div>

                                    {/*-- Social placeholder --*/}
                                    <div className="social-nav">
                                        <a href="#" onClick={(e) => e.preventDefault()}>
                                            <i className="ti ti-brand-linkedin"></i>
                                        </a>
                                        <a href="#" onClick={(e) => e.preventDefault()}>
                                            <i className="ti ti-brand-x"></i>
                                        </a>
                                        <a href="#" onClick={(e) => e.preventDefault()}>
                                            <i className="ti ti-brand-instagram"></i>
                                        </a>
                                    </div>

                                    <div className="team-body">
                                        <h5>{member.name}</h5>
                                        <p className="mb-0">{member.role}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="divider"></div>
        </section>
    );
}
