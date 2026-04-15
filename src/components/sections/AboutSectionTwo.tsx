import Image from "next/image";
import bgImg44 from "@/assets/img/bg-img/44.jpg";
import bgImg38 from "@/assets/img/bg-img/38.png";
import AboutCoolFacts from "@/components/sections/AboutCoolFacts";
import Link from "next/link";

export default function AboutSectionTwo() {
    return (
        <section className="about-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-12 col-md-6">
                        {/*-- Section Heading --*/}
                        <div className="section-heading">
                            <span className="subtitle">About us</span>
                            <h2 className="mb-4">Success starts with the right plan</h2>
                            <p className="mb-5">Monotonectally synergize granular markets and front markets.
                                Collaboratively
                                visualize strat fomediaries after based models, Synergistically task.</p>
                        </div>

                        {/*-- About Cool Facts --*/}
                        <AboutCoolFacts/>

                        {/*-- Button --*/}
                        <Link href="/about-us" className="btn btn-primary">
                            <span>More About Us</span>
                            <span>More About Us</span>
                        </Link>
                    </div>

                    <div className="col-12 col-md-6">
                        {/*-- Features Image --*/}
                        <div className="features-img style-two">
                            <Image className="img-anim-right tilt-image h-auto" data-delay="0.5" src={bgImg44}
                                 alt=""/>
                            <Image className="float-img scroll-image h-auto" data-delay="1" src={bgImg38}
                                 alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    )
}