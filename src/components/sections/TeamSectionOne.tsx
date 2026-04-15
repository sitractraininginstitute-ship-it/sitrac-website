import TeamSliderOne from "@/components/sliders/TeamSliderOne";

export default function TeamSectionOne() {
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

            <TeamSliderOne/>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    )
}