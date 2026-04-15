import Link from "next/link";

export default function HeroSectionTwo() {
    return (
        <section className="hero-section bg-img style-two bg-dark jarallax hero-two-bg">
            <div className="container">
                <div className="row g-4 g-xl-5 align-items-center">
                    {/*-- Hero Content --*/}
                    <div className="col-12 col-md-6 col-lg-7">
                        <div className="hero-content pt-lg-0 pe-xl-5">
                            <h2 className="text-white mb-4 heading-chars" data-delay="0.5">Build a bright <span
                                className="text-primary">financial</span> future
                                with ease</h2>
                            <p className="text-white mb-5 heading-line" data-delay="0.75">Studio agencies excel in
                                graphic
                                design, design, branding, visual
                                elements, offering comprehensive solutions for needs graphic platforms.</p>

                            <Link href="/contact" className="btn btn-primary fadeInUp" data-delay="1">
                                <span>Request a Consultation</span>
                                <span>Request a Consultation</span>
                            </Link>
                        </div>
                    </div>

                    {/*-- Hero Form --*/}
                    <div className="col-12 col-md-6 col-lg-5">
                        <div className="hero-form fadeInUp" data-delay="1.5">
                            <h4 className="mb-4">Get In Touch</h4>

                            <form action="#">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <input type="text" id="name" name="name" className="form-control"
                                               placeholder="Your Name*"/>
                                    </div>
                                    <div className="col-12">
                                        <input type="email" id="email" name="email" className="form-control"
                                               placeholder="Your Email*"/>
                                    </div>
                                    <div className="col-12">
                           <textarea name="message" id="message" className="form-control"
                                     placeholder="Your Message*"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-dark mt-4 w-100">
                                            <span>Send Message</span>
                                            <span>Send Message</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    )
}