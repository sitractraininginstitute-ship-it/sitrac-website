import Image from "next/image";
import bgImg21 from "@/assets/img/bg-img/21.jpg";
import bgImg22 from "@/assets/img/bg-img/22.jpg";
import bgImg23 from "@/assets/img/bg-img/23.jpg";
import Link from "next/link";

export default function BlogSectionOne() {
    return (
        <section className="blog-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
                        <div className="section-heading text-center">
                            <span className="subtitle fadeInUp" data-delay="0.5">Latest Blog</span>
                            <h2 className="mb-0 heading-line" data-delay="0.6">Take a look at the latest articles from
                                blog</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider-sm"></div>

            <div className="container">
                <div className="row g-4 justify-content-center">
                    {/*-- Blog Card --*/}
                    <div className="col-12 col-md-6 col-lg-4 translateY8">
                        <div className="blog-card fadeInUp" data-delay="0.5">
                            <div className="blog-img">
                                <Image src={bgImg21} alt="" className="h-auto"/>
                            </div>
                            <div className="blog-body">
                                <div className="blog-meta mb-2">
                                    <a href="#" className="post-category">Knowledge</a>
                                    <span className="dot"></span>
                                    <a className="post-date" href="#">26 June 2025</a>
                                </div>
                                <Link href="/blog/details" className="post-title">How You Can Find A Design Job You
                                    Will
                                    Truly</Link>
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
                    <div className="col-12 col-md-6 col-lg-4 translateY8">
                        <div className="blog-card fadeInUp" data-delay="0.75">
                            <div className="blog-img">
                                <Image src={bgImg22} alt="" className="h-auto"/>
                            </div>
                            <div className="blog-body">
                                <div className="blog-meta mb-2">
                                    <a href="#" className="post-category">Knowledge</a>
                                    <span className="dot"></span>
                                    <a className="post-date" href="#">26 June 2025</a>
                                </div>
                                <Link href="/blog/details" className="post-title">The Missing Advice I Needed When
                                    Starting My
                                    Career</Link>
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
                    <div className="col-12 col-md-6 col-lg-4 translateY8">
                        <div className="blog-card fadeInUp" data-delay="1">
                            <div className="blog-img">
                                <Image src={bgImg23} alt="" className="h-auto"/>
                            </div>
                            <div className="blog-body">
                                <div className="blog-meta mb-2">
                                    <a href="#" className="post-category">Knowledge</a>
                                    <span className="dot"></span>
                                    <a className="post-date" href="#">26 June 2025</a>
                                </div>
                                <Link href="/blog/details" className="post-title">How to Craft The Perfect Web Design
                                    and
                                    Developer</Link>
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