import Link from "next/link";
import Image from "next/image";
import bgImg21 from "@/assets/img/bg-img/21.jpg";
import bgImg22 from "@/assets/img/bg-img/22.jpg";
import bgImg23 from "@/assets/img/bg-img/23.jpg";
import bgImg64 from "@/assets/img/bg-img/64.jpg";
import bgImg65 from "@/assets/img/bg-img/65.jpg";
import bgImg66 from "@/assets/img/bg-img/66.jpg";
import bgImg67 from "@/assets/img/bg-img/67.jpg";
import bgImg68 from "@/assets/img/bg-img/68.jpg";
import bgImg69 from "@/assets/img/bg-img/69.jpg";

export default function BlogGridSection() {
    return (
        <div className="blog-section bg-white">
            {/*-- Divider --*/}
            <div className="divider"></div>

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

                    {/*-- Blog Card --*/}
                    <div className="col-12 col-md-6 col-lg-4 translateY8">
                        <div className="blog-card fadeInUp" data-delay="0.5">
                            <div className="blog-img">
                                <Image src={bgImg64} alt="" className="h-auto"/>
                            </div>
                            <div className="blog-body">
                                <div className="blog-meta mb-2">
                                    <a href="#" className="post-category">Knowledge</a>
                                    <span className="dot"></span>
                                    <a className="post-date" href="#">26 June 2025</a>
                                </div>
                                <Link href="/blog/details" className="post-title">Essential for Effective Market
                                    Research &
                                    Analysis</Link>
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
                                <Image src={bgImg65} alt="" className="h-auto"/>
                            </div>
                            <div className="blog-body">
                                <div className="blog-meta mb-2">
                                    <a href="#" className="post-category">Knowledge</a>
                                    <span className="dot"></span>
                                    <a className="post-date" href="#">26 June 2025</a>
                                </div>
                                <Link href="/blog/details" className="post-title">Digital Transformation Services Can
                                    Revolutionize</Link>
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
                                <Image src={bgImg66} alt="" className="h-auto"/>
                            </div>
                            <div className="blog-body">
                                <div className="blog-meta mb-2">
                                    <a href="#" className="post-category">Knowledge</a>
                                    <span className="dot"></span>
                                    <a className="post-date" href="#">26 June 2025</a>
                                </div>
                                <Link href="/blog/details" className="post-title">The Ultimate Guide to Financial
                                    Advisory and
                                    Planning</Link>
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
                        <div className="blog-card fadeInUp" data-delay="0.5">
                            <div className="blog-img">
                                <Image src={bgImg67} alt="" className="h-auto"/>
                            </div>
                            <div className="blog-body">
                                <div className="blog-meta mb-2">
                                    <a href="#" className="post-category">Knowledge</a>
                                    <span className="dot"></span>
                                    <a className="post-date" href="#">26 June 2025</a>
                                </div>
                                <Link href="/blog/details" className="post-title">Importance of Management in Achieving
                                    Organizational</Link>
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
                                <Image src={bgImg68} alt="" className="h-auto"/>
                            </div>
                            <div className="blog-body">
                                <div className="blog-meta mb-2">
                                    <a href="#" className="post-category">Knowledge</a>
                                    <span className="dot"></span>
                                    <a className="post-date" href="#">26 June 2025</a>
                                </div>
                                <Link href="/blog/details" className="post-title">Enhance Customer Experience and Boost
                                    Loyalty</Link>
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
                                <Image src={bgImg69} alt="" className="h-auto"/>
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

            <div className="divider-sm"></div>

            {/*-- Pagination --*/}
            <div className="container">
                <ul className="bizora-pagination fadeInUp list-unstyled">
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#"><i className="ti ti-chevron-right"></i></a></li>
                </ul>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </div>
    )
}