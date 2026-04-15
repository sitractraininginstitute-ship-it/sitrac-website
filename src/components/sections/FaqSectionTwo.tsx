import Image from "next/image";
import questionMark from "@/assets/img/core-img/question-mark.png";
import Link from "next/link";

export default function FaqSectionTwo() {
    return (
        <section className="faq-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row g-4 g-lg-5">
                    {/*-- Section Heading --*/}
                    <div className="col-12 col-md-6">
                        <div className="section-heading pe-xxl-5">
                            <span className="subtitle">Question</span>
                            <h2 className="mb-4">Frequently Asked Questions</h2>
                            <p className="mb-5">Find answers to common questions about our services, process, timelines, and how we work with clients and partners.</p>
                            <Link href="/contact" className="btn btn-primary">
                                <span>Everything you need to know</span>
                                <span>Ask Your Question</span>
                            </Link>
                            {/*-- Question Mark --*/}
                            <div className="question-mark scroll-image">
                                <Image src={questionMark} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        {/*-- FAQ Accordion --*/}
                        <div className="faq-accordion">
                            <div className="accordion" id="faqAccordion">
                                {/*-- Accordion Item --*/}
                                <div className="accordion-item">
                                    <div className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#faqQuestion1" aria-expanded="true"
                                                aria-controls="faqQuestion1">
                                            What services do you offer?
                                        </button>
                                    </div>
                                    <div id="faqQuestion1" className="accordion-collapse collapse show"
                                         data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                        We provide capacity building, institutional development, and strategic support services designed to strengthen organizations and improve performance.
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
                                            Who can use your services?
                                        </button>
                                    </div>
                                    <div id="faqQuestion2" className="accordion-collapse collapse"
                                         data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                        Our services are available to NGOs, government institutions, private organizations, and community-based groups.
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
                                            How do you start working with clients?
                                        </button>
                                    </div>
                                    <div id="faqQuestion3" className="accordion-collapse collapse"
                                         data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                        We begin with an initial consultation to understand your needs, after which we design a tailored solution for your organization.
                                        </div>
                                    </div>
                                </div>

                                {/*-- Accordion Item --*/}
                                <div className="accordion-item">
                                    <div className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faqQuestion4" aria-expanded="false"
                                                aria-controls="faqQuestion4">
                                            How long does a project take?
                                        </button>
                                    </div>
                                    <div id="faqQuestion4" className="accordion-collapse collapse"
                                         data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                        Project duration depends on scope and complexity, but most engagements range from a few weeks to several months.
                                        </div>
                                    </div>
                                </div>

                                {/*-- Accordion Item --*/}
                                <div className="accordion-item">
                                    <div className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faqQuestion5" aria-expanded="false"
                                                aria-controls="faqQuestion5">
                                            Do you offer customized solutions?
                                        </button>
                                    </div>
                                    <div id="faqQuestion5" className="accordion-collapse collapse"
                                         data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                        Yes. All our services are tailored to meet the specific needs and goals of each client.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    )
}