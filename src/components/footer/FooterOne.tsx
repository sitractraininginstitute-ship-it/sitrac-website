import Image from "next/image";
import shapeImg from "@/assets/img/core-img/shape4.png";
import Link from "next/link";
import logo from "@/assets/img/core-img/logo.png";

export default function FooterOne() {
    return (
        <footer className="footer-section bg-dark">
            {/*-- Divider --*/}
            <div className="divider"></div>

            {/*-- Shape --*/}
            <div className="shape">
                <Image src={shapeImg} alt=""/>
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
                            <p>SITRAC delivers training and consultancy solutions that strengthen institutions, improve governance, and build capacity across Africa.</p>
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

                    {/*-- Footer Card --*/}
                    <div className="col-12 col-sm-6 col-md">
                        <div className="footer-card">
                            <h5 className="mb-4 text-white">Quick Links</h5>
                            <ul className="list-unstyled footer-nav">
                                <li><a href="#"><span></span>About Us</a></li>
                                <li><a href="#"><span></span>Our Team</a></li>
                                <li><a href="#"><span></span>Projects & Impact</a></li>
                                <li><a href="#"><span></span>Publications & Reports</a></li>
                                <li><a href="#"><span></span>Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    {/*-- Footer Card --*/}
                    <div className="col-12 col-sm-6 col-md">
                        <div className="footer-card">
                            <h5 className="mb-4 text-white">Services</h5>
                            <ul className="list-unstyled footer-nav">
                                <li><a href="#"><span></span>Capacity Building</a></li>
                                <li><a href="#"><span></span>Institutional Development</a></li>
                                <li><a href="#"><span></span>Governance & Strategy Support</a></li>
                                <li><a href="#"><span></span>Community Development</a></li>
                                <li><a href="#"><span></span>Monitoring & Evaluation</a></li>
                            </ul>
                        </div>
                    </div>

                    {/*-- Footer Card --*/}
                    <div className="col-12 col-sm-6 col-md">
                        <div className="footer-card">
                            <h5 className="mb-4 text-white">Information</h5>
                            <ul className="list-unstyled footer-nav">
                                <li><a href="#"><span></span>Our Approach</a></li>
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
                <div className="copyright-section">
                    <p className="mb-0 copyright">Copyright &copy; <span id="year">2026</span>
                        <a href="#">SITRAC</a>
                        All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}