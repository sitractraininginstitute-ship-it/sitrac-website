import ProjectSliderTwo from "@/components/sliders/ProjectSliderTwo";

export default function ProjectsSectionTwo() {
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

                    {/*-- Pricing Plan Switching --*/}
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
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider-sm"></div>

            <div className="container">
                <ProjectSliderTwo/>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    )
}