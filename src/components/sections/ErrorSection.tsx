import Link from "next/link";
import Image from "next/image";
import img404 from "@/assets/img/core-img/404.png";

export default function ErrorSection() {
    return (
        <div className="error-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row g-5 justify-content-center">
                    <div className="col-12">
                        <div className="text-center">
                            <Image className="imgZoomInOut h-auto" src={img404} alt=""/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-8 col-lg-7">
                        {/*-- Error Content --*/}
                        <div className="error-content text-center">
                            <h2 className="mb-3 heading-word" data-delay="0.75">Oops, this page is lost.</h2>
                            <p className="mb-5 heading-line" data-delay="0.9">The page you're looking for can't be
                                found.
                                Double-check the URL and try again.
                                we invite you to visit our homepage.</p>
                            <Link href="/" className="btn btn-secondary fadeInUp" data-delay="1">
                                <span>Back to Homepage</span>
                                <span>Back to Homepage</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </div>
    )
}