import Link from "next/link";
import ProjectCardsTwo from "@/components/sections/ProjectCardsTwo";

export default function ProjectSectionOne() {
    return (
        <section className="project-section bizora-container">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
                        <div className="section-heading text-center">
                            <span className="subtitle fadeInUp" data-delay="0.5">Our Projects</span>
                            <h2 className="mb-0 heading-line" data-delay="0.6">A Complete solution for global
                                business</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider-sm"></div>

            <ProjectCardsTwo/>

            {/*-- Divider --*/}
            <div className="divider-sm"></div>

            <div className="container text-center">
                <Link href="/projects" className="btn btn-primary">
                    <span>View All Projects</span>
                    <span>View All Projects</span>
                </Link>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    )
}