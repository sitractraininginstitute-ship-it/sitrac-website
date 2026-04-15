"use client";

import { useRef } from "react";

import Link from "next/link";
import Image from "next/image";
import bgImg8 from "@/assets/img/bg-img/8.jpg";
import bgImg9 from "@/assets/img/bg-img/9.jpg";
import bgImg10 from "@/assets/img/bg-img/10.jpg";
import bgImg11 from "@/assets/img/bg-img/11.jpg";
import bgImg12 from "@/assets/img/bg-img/12.jpg";
import bgImg55 from "@/assets/img/bg-img/55.jpg";
import bgImg56 from "@/assets/img/bg-img/56.jpg";
import bgImg57 from "@/assets/img/bg-img/57.jpg";
import bgImg58 from "@/assets/img/bg-img/58.jpg";
import bgImg59 from "@/assets/img/bg-img/59.jpg";
import {useIsotope} from "@/utils/useIsotope";

export default function ProjectCards() {
    const gridRef = useRef<HTMLDivElement | null>(null);

    // 👇 Initialize isotope using the extracted hook
    useIsotope(gridRef);

    return (
        <div className="container">
            <div ref={gridRef} className="row g-4 bizora-filter">

                {/*-- Project Card --*/}
                <div className="col-12 col-sm-6 col-lg-4 filter-item">
                    <div className="project-card">
                        <Link href="/projects/details" target="_blank">
                            <Image src={bgImg8} alt="" className="h-auto"/>
                            {/*-- Project Info --*/}
                            <div className="project-info">
                                <div>
                                    <h4>Business Development</h4>
                                    <p className="mb-0">Digital marketing</p>
                                </div>
                                <div className="arrow-icon">
                                    <i className="ti ti-arrow-up-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/*-- Project Card --*/}
                <div className="col-12 col-sm-6 col-lg-4 filter-item">
                    <div className="project-card">
                        <Link href="/projects/details" target="_blank">
                            <Image src={bgImg9} alt="" className="h-auto"/>
                            {/*-- Project Info --*/}
                            <div className="project-info">
                                <div>
                                    <h4>UX/UI Development</h4>
                                    <p className="mb-0">Digital marketing</p>
                                </div>
                                <div className="arrow-icon">
                                    <i className="ti ti-arrow-up-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/*-- Project Card --*/}
                <div className="col-12 col-sm-6 col-lg-4 filter-item">
                    <div className="project-card">
                        <Link href="/projects/details" target="_blank">
                            <Image src={bgImg10} alt="" className="h-auto"/>
                            {/*-- Project Info --*/}
                            <div className="project-info">
                                <div>
                                    <h4>Strategic Planning</h4>
                                    <p className="mb-0">Business Development</p>
                                </div>
                                <div className="arrow-icon">
                                    <i className="ti ti-arrow-up-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/*-- Project Card --*/}
                <div className="col-12 col-sm-6 col-lg-4 filter-item">
                    <div className="project-card">
                        <Link href="/projects/details" target="_blank">
                            <Image src={bgImg11} alt="" className="h-auto"/>
                            {/*-- Project Info --*/}
                            <div className="project-info">
                                <div>
                                    <h4>UX/UI Development</h4>
                                    <p className="mb-0">Business Development</p>
                                </div>
                                <div className="arrow-icon">
                                    <i className="ti ti-arrow-up-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/*-- Project Card --*/}
                <div className="col-12 col-sm-6 col-lg-4 filter-item">
                    <div className="project-card">
                        <Link href="/projects/details" target="_blank">
                            <Image src={bgImg12} alt="" className="h-auto"/>
                            {/*-- Project Info --*/}
                            <div className="project-info">
                                <div>
                                    <h4>Business Development</h4>
                                    <p className="mb-0">UX/UI Development</p>
                                </div>
                                <div className="arrow-icon">
                                    <i className="ti ti-arrow-up-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/*-- Project Card --*/}
                <div className="col-12 col-sm-6 col-lg-4 filter-item">
                    <div className="project-card">
                        <Link href="/projects/details" target="_blank">
                            <Image src={bgImg55} alt="" className="h-auto"/>
                            {/*-- Project Info --*/}
                            <div className="project-info">
                                <div>
                                    <h4>Business Development</h4>
                                    <p className="mb-0">Digital marketing</p>
                                </div>
                                <div className="arrow-icon">
                                    <i className="ti ti-arrow-up-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/*-- Project Card --*/}
                <div className="col-12 col-sm-6 col-lg-4 filter-item">
                    <div className="project-card">
                        <Link href="/projects/details" target="_blank">
                            <Image src={bgImg56} alt="" className="h-auto"/>
                            {/*-- Project Info --*/}
                            <div className="project-info">
                                <div>
                                    <h4>UX/UI Development</h4>
                                    <p className="mb-0">Digital marketing</p>
                                </div>
                                <div className="arrow-icon">
                                    <i className="ti ti-arrow-up-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/*-- Project Card --*/}
                <div className="col-12 col-sm-6 col-lg-4 filter-item">
                    <div className="project-card">
                        <Link href="/projects/details" target="_blank">
                            <Image src={bgImg57} alt="" className="h-auto"/>
                            {/*-- Project Info --*/}
                            <div className="project-info">
                                <div>
                                    <h4>Strategic Planning</h4>
                                    <p className="mb-0">Business Development</p>
                                </div>
                                <div className="arrow-icon">
                                    <i className="ti ti-arrow-up-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/*-- Project Card --*/}
                <div className="col-12 col-sm-6 col-lg-4 filter-item">
                    <div className="project-card">
                        <Link href="/projects/details" target="_blank">
                            <Image src={bgImg58} alt="" className="h-auto"/>
                            {/*-- Project Info --*/}
                            <div className="project-info">
                                <div>
                                    <h4>UX/UI Development</h4>
                                    <p className="mb-0">Business Development</p>
                                </div>
                                <div className="arrow-icon">
                                    <i className="ti ti-arrow-up-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/*-- Project Card --*/}
                <div className="col-12 col-sm-6 col-lg-4 filter-item">
                    <div className="project-card">
                        <Link href="/projects/details" target="_blank">
                            <Image src={bgImg59} alt="" className="h-auto"/>
                            {/*-- Project Info --*/}
                            <div className="project-info">
                                <div>
                                    <h4>Business Development</h4>
                                    <p className="mb-0">UX/UI Development</p>
                                </div>
                                <div className="arrow-icon">
                                    <i className="ti ti-arrow-up-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}