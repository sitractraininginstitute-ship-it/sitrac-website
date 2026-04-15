import Image from "next/image";
import shapeImg from "@/assets/img/core-img/shape3.png";
import Link from "next/link";

export default function CtaSectionOne() {
    return (
        <section className="cta-section bg-dark">
            {/*-- Divider --*/}
            <div className="divider"></div>

            {/*-- Shape --*/}
            <div className="shape">
                <Image src={shapeImg} alt=""/>
            </div>

            {/*-- CTA Content --*/}
            <div className="container">
                <div className="cta-content">
                    <div>
                        <h2 className="mb-4 heading-word" data-delay="0.5">Let’s build stronger institutions together</h2>
                        <p className="mb-0 heading-line" data-delay="0.75">We work with organizations to strengthen capacity, improve systems, and deliver sustainable impact through tailored solutions and strategic support.</p>
                    </div>
                    <Link href="/contact" className="btn btn-light fadeInUp" data-delay="1">
                        <span>Start a Conversation</span>
                        <span>Let's Start A Project</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}