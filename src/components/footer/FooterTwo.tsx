import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/core-img/logo.png";
import shape4 from "@/assets/img/core-img/shape4.png";

export default function FooterTwo() {
    return (
        <footer className="footer-section bg-img bg-dark style-two jarallax footer-two-bg">
            {/*-- Divider --*/}
            <div className="divider"></div>

            {/*-- Shape --*/}
            <div className="shape">
                <Image src={shape4} alt=""/>
            </div>

            <div className="container">
                <div className="row g-5 g-md-4 g-xl-5">
                    {/*-- Footer Card --*/}
                    <div className="col-12 col-sm-6 col-md-4 col-xl-5">
                        <div className="footer-card me-lg-5">
                            {/*-- Footer Logo --*/}
                            <Link href="/" className="footer-logo mb-4">
                                <Image src={logo} alt="" className="h-auto"/>
                            </Link>
                            <p>Each demo built with Teba will look different. You can customize almost anything
                                appearance
                                of your website with only a few.</p>
                            <ul className="list-unstyled footer-nav style-two">
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             viewBox="0 0 20 20"
                                             fill="none">
                                            <path
                                                d="M16.625 17.5C14.8889 17.5 13.1701 17.125 11.4688 16.375C9.76736 15.625 8.22222 14.5556 6.83333 13.1667C5.44444 11.7778 4.375 10.2361 3.625 8.54167C2.875 6.84722 2.5 5.125 2.5 3.375V2.5H7.41667L8.1875 6.6875L5.8125 9.08333C6.11806 9.625 6.45833 10.1389 6.83333 10.625C7.20833 11.1111 7.61111 11.5625 8.04167 11.9792C8.44444 12.3819 8.88542 12.7674 9.36458 13.1354C9.84375 13.5035 10.3611 13.8472 10.9167 14.1667L13.3333 11.75L17.5 12.6042V17.5H16.625Z"
                                                fill="white"/>
                                        </svg>
                                        123-456-7890
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             viewBox="0 0 20 20"
                                             fill="none">
                                            <path
                                                d="M1.66602 16.6654V3.33203H18.3327V16.6654H1.66602ZM9.99935 10.832L16.666 6.66536V4.9987L9.99935 9.16536L3.33268 4.9987V6.66536L9.99935 10.832Z"
                                                fill="white"/>
                                        </svg>
                                        bizora@example.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*-- Footer Card --*/}
                    <div className="col-12 col-sm-6 col-md">
                        <div className="footer-card">
                            <h5 className="mb-4 text-white">Quick Links</h5>
                            <ul className="list-unstyled footer-nav">
                                <li><a href="#"><span></span>About Us</a></li>
                                <li><a href="#"><span></span>Our Team</a></li>
                                <li><a href="#"><span></span>Pricing Plans</a></li>
                                <li><a href="#"><span></span>Blogs</a></li>
                                <li><a href="#"><span></span>Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    {/*-- Footer Card --*/}
                    <div className="col-12 col-sm-6 col-md">
                        <div className="footer-card">
                            <h5 className="mb-4 text-white">Services</h5>
                            <ul className="list-unstyled footer-nav">
                                <li><a href="#"><span></span>UI/UX Design</a></li>
                                <li><a href="#"><span></span>App Development</a></li>
                                <li><a href="#"><span></span>Digital Marketing</a></li>
                                <li><a href="#"><span></span>Web Development</a></li>
                                <li><a href="#"><span></span>Cyber Security</a></li>
                            </ul>
                        </div>
                    </div>

                    {/*-- Footer Card --*/}
                    <div className="col-12 col-sm-6 col-md">
                        <div className="footer-card">
                            <h5 className="mb-4 text-white">Information</h5>
                            <ul className="list-unstyled footer-nav">
                                <li><a href="#"><span></span>Working Process</a></li>
                                <li><a href="#"><span></span>Privacy Policy</a></li>
                                <li><a href="#"><span></span>Terms &amp; Conditions</a></li>
                                <li><a href="#"><span></span>FAQs</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>

            {/*-- Copyright --*/}
            <div className="container">
                <div
                    className="copyright-section style-two d-flex flex-wrap flex-md-nowrap align-items-center justify-content-center justify-content-md-between gap-4">
                    <p className="mb-0 copyright">Copyright &copy; <span id="year">2025</span>
                        <a href="#">DevStarIT</a>
                        All rights reserved.</p>

                    {/*-- Social Nav --*/}
                    <div className="social-nav">
                        <a href="#">
                            <i className="ti ti-brand-facebook"></i>
                        </a>
                        <a href="#">
                            <i className="ti ti-brand-linkedin"></i>
                        </a>
                        <a href="#">
                            <i className="ti ti-brand-x"></i>
                        </a>
                        <a href="#">
                            <i className="ti ti-brand-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}