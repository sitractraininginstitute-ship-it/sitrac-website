import Image from "next/image";
import bgImg47 from "@/assets/img/bg-img/47.jpg";

export default function FaqSectionThree() {
    return (
        <section className="faq-section style-two bg-secondary faq-bg-3">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-12 col-lg-6">
                        <div className="section-heading">
                            <span className="subtitle fadeInUp" data-delay="0.5">Question</span>
                            <h2 className="mb-3 heading-line" data-delay="0.75">Frequently asked questions</h2>
                            <p className="mb-5 fadeInUp" data-delay="1">Morem ipsum dolor sit amet, consectetur
                                adipiscing elita
                                florai psum dolor sit
                                amet,consectetur amet consecteture.</p>
                        </div>

                        {/*-- FAQ Accordion --*/}
                        <div className="faq-accordion style-two fadeInUp" data-delay="1.25">
                            <div className="accordion" id="faqAccordion">
                                {/*-- Accordion Item --*/}
                                <div className="accordion-item">
                                    <div className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#faqQuestion1" aria-expanded="true"
                                                aria-controls="faqQuestion1">
                                            What Is The Design Process For Branding?
                                        </button>
                                    </div>
                                    <div id="faqQuestion1" className="accordion-collapse collapse show"
                                         data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">If you ask our clients what it's like working
                                            36, they'll
                                            about how much we care about their success.
                                        </div>
                                    </div>
                                </div>

                                {/*-- Accordion Item --*/}
                                <div className="accordion-item">
                                    <div className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faqQuestion2" aria-expanded="false"
                                                aria-controls="faqQuestion2">
                                            How Much Logo Design Services Cost?
                                        </button>
                                    </div>
                                    <div id="faqQuestion2" className="accordion-collapse collapse"
                                         data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">If you ask our clients what it's like working
                                            36, they'll
                                            about how much we care about their success.
                                        </div>
                                    </div>
                                </div>

                                {/*-- Accordion Item --*/}
                                <div className="accordion-item">
                                    <div className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faqQuestion3" aria-expanded="false"
                                                aria-controls="faqQuestion3">
                                            How Long It Take To Complete My Project?
                                        </button>
                                    </div>
                                    <div id="faqQuestion3" className="accordion-collapse collapse"
                                         data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">If you ask our clients what it's like working
                                            36, they'll
                                            about how much we care about their success.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="faq-img ps-xxl-5">
                            <Image className="img-anim-right h-auto" data-delay="0.5" src={bgImg47} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    )
}