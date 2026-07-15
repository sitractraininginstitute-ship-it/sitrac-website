import { unstable_noStore as noStore } from "next/cache";
import { connectToDatabase } from "@/lib/mongodb";
import TeamMemberModel from "@/models/TeamMember";
import TeamSliderOne, { TeamMemberData } from "@/components/sliders/TeamSliderOne";

export default async function TeamSectionOne() {
    noStore();

    let teamMembers: TeamMemberData[] = [];
    try {
        await connectToDatabase();
        const docs = await TeamMemberModel.find().sort({ order: 1 }).lean();
        teamMembers = docs.map((m) => ({
            _id:   (m._id as { toString(): string }).toString(),
            name:  m.name  as string,
            role:  m.role  as string,
            photo: m.photo as string,
        }));
    } catch (err) {
        console.error("TeamSectionOne: failed to load team members", err);
    }

    return (
        <section className="team-section bg-dark team-one-bg">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
                        <div className="section-heading text-center">
                            <span className="subtitle text-white">Our Team</span>
                            <h2 className="mb-0 text-white">Meet the experts behind your success</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider-sm"></div>

            <TeamSliderOne teamMembers={teamMembers} />

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    );
}