import Image from "next/image";
import bgImg25 from "@/assets/img/bg-img/25.jpg";
import bgImg26 from "@/assets/img/bg-img/26.jpg";
import bgImg27 from "@/assets/img/bg-img/27.jpg";
import Link from "next/link";

export default function BlogSectionTwo() {
    return (
        <section className="blog-section bg-secondary">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
                        <div className="section-heading text-center">
                            <span className="subtitle fadeInUp" data-delay="0.3">Latest Blog</span>
                            <h2 className="mb-0 fadeInUp" data-delay="0.5">Take a look at the latest articles from
                                blog</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider-sm"></div>

            <div className="container">
                <div className="row g-4 justify-content-center">

                    {/*-- Blog Card --*/}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="blog-card-two translateY8 fadeInUp" data-delay="0.5">
                            <Image src={bgImg25} alt="" className="h-auto"/>
                            <div className="blog-body">
                                <div className="blog-meta mb-2">
                                    <a href="#" className="post-category">Consulting</a>
                                    <span className="dot"></span>
                                    <a className="post-date" href="#">26 June 2025</a>
                                </div>
                                <Link href="/blog/details" className="post-title">The Role of Data in Modern Marketing
                                    Campaign</Link>
                                {/*-- Button --*/}
                                <div className="d-block mt-4">
                                    <Link href="/blog/details" className="btn-view-more">
                                        <span><i className="ti ti-plus"></i></span>
                                        <span><i className="ti ti-plus"></i> View Details</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*-- Blog Card --*/}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="blog-card-two translateY8 fadeInUp" data-delay="0.75">
                            <Image src={bgImg26} alt="" className="h-auto"/>
                            <div className="blog-body">
                                <div className="blog-meta mb-2">
                                    <a href="#" className="post-category">Consulting</a>
                                    <span className="dot"></span>
                                    <a className="post-date" href="#">26 June 2025</a>
                                </div>
                                <Link href="/blog/details" className="post-title">The Role of Data in Modern Marketing
                                    Campaign</Link>
                                {/*-- Button --*/}
                                <div className="d-block mt-4">
                                    <Link href="/blog/details" className="btn-view-more">
                                        <span><i className="ti ti-plus"></i></span>
                                        <span><i className="ti ti-plus"></i> View Details</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*-- Blog Card --*/}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="blog-card-two translateY8 fadeInUp" data-delay="1">
                            <Image src={bgImg27} alt="" className="h-auto"/>
                            <div className="blog-body">
                                <div className="blog-meta mb-2">
                                    <a href="#" className="post-category">Consulting</a>
                                    <span className="dot"></span>
                                    <a className="post-date" href="#">26 June 2025</a>
                                </div>
                                <Link href="/blog/details" className="post-title">The Role of Data in Modern Marketing
                                    Campaign</Link>
                                {/*-- Button --*/}
                                <div className="d-block mt-4">
                                    <Link href="/blog/details" className="btn-view-more">
                                        <span><i className="ti ti-plus"></i></span>
                                        <span><i className="ti ti-plus"></i> View Details</span>
                                    </Link>
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