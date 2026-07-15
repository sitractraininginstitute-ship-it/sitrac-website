import { unstable_noStore as noStore } from "next/cache";
import ProjectSliderTwo from "@/components/sliders/ProjectSliderTwo";
import { connectToDatabase } from "@/lib/mongodb";
import ProjectModel from "@/models/Project";

export default async function ProjectSectionThree() {
    noStore();

    let projects: {
        _id:        string;
        title:      string;
        slug:       string;
        category?:  string;
        coverImage: string;
    }[] = [];

    try {
        await connectToDatabase();
        const docs = await ProjectModel.find().sort({ createdAt: -1 }).lean();
        projects = docs.map((p) => ({
            _id:        (p._id as { toString(): string }).toString(),
            title:      p.title      as string,
            slug:       p.slug       as string,
            category:   p.category   as string | undefined,
            coverImage: p.coverImage as string,
        }));
    } catch (err) {
        console.error("ProjectSectionThree: failed to load projects", err);
    }

    return (
        <section className="projects-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row g-4 align-items-end justify-content-between">
                    {/*-- Section Heading --*/}
                    <div className="col-12 col-sm-6 col-xxl-4">
                        <div className="section-heading">
                            <span className="subtitle">Projects</span>
                            <h2 className="mb-0">Explore our recent projects</h2>
                        </div>
                    </div>

                    {/*-- Slider Navigation (only shown when there are projects) --*/}
                    {projects.length > 0 && (
                        <div className="col-12 col-sm-6">
                            <div className="project-navigation justify-content-sm-end">
                                <div className="project-button-prev">
                                    <i className="ti ti-arrow-left"></i>
                                </div>
                                <div className="project-button-next">
                                    <i className="ti ti-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider-sm"></div>

            <div className="container">
                <ProjectSliderTwo projects={projects} />
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    );
}