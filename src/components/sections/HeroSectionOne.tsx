import Image from "next/image";
import bigCircularLines from "@/assets/img/core-img/big-circular-lines.png";
import boxes from "@/assets/img/core-img/boxes.png";
import bgImg3 from "@/assets/img/bg-img/3.jpg";
import bgImg2 from "@/assets/img/bg-img/2.jpg";
import bgImg1 from "@/assets/img/bg-img/1.jpg";
import Counter from "@/components/Counter";
import Link from "next/link";

export default function HeroSectionOne() {
    return (
        <section className="hero-section">
            <div className="shape1">
                <Image src={bigCircularLines} alt=""/>
            </div>
            <div className="shape2 scroll-image">
                <Image src={boxes} alt=""/>
            </div>

            <div className="container">
                <div className="row justify-content-between g-4">
                    {/*-- Hero Content --*/}
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="hero-content">
                            <h2 className="text-white mb-0 heading-chars" data-delay="0.5">Consultations drive <span
                                className="text-primary">business</span> growth</h2>
                        </div>
                    </div>

                    {/*-- Hero Content --*/}
                    <div className="col-12 col-md-6 col-lg-5">
                        <div className="hero-content">
                            <p className="mb-5 text-white heading-line" data-delay="0.7">Studio agencies excel in
                                graphic
                                design, design,
                                branding, and visual
                                elements, offering comprehensive solutions for businesses' design needs graphic
                                platforms.
                            </p>
                            <Link href="/about-us" className="btn btn-light mb-5 fadeInUp" data-delay="0.9">
                                <span>Explore More</span>
                                <span>Explore more</span>
                            </Link>

                            {/*-- Images Group Wrap --*/}
                            <div className="imgs-group-wrap d-flex align-items-center fadeInUp" data-delay="1.2">
                                <div className="imgs-group">
                                    <Image src={bgImg3} alt="" className="h-auto"/>
                                    <Image src={bgImg2} alt="" className="h-auto"/>
                                    <div>
                                        <Counter countNumber={10}/>k
                                    </div>
                                </div>
                                <h5 className="mb-0">More than 10k+ <br/> trusted customers</h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/*-- Divider --*/}
                <div className="divider"></div>

                {/*-- Hero Image --*/}
                <div className="container">
                    <div className="hero-image fadeInUp mt-0" data-delay="1.5">
                        <div className="overlay-text heading-chars">Business Consulting</div>
                        <div className="hero-img-container">
                            <Image src={bgImg1} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    )
}