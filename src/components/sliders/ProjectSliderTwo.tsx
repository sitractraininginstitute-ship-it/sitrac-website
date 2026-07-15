"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

interface Project {
    _id:        string;
    title:      string;
    slug:       string;
    category?:  string;
    coverImage: string;
}

interface Props {
    projects: Project[];
}

export default function ProjectSliderTwo({ projects }: Props) {
    if (projects.length === 0) {
        return (
            <div className="text-center py-5">
                <h4>No projects yet</h4>
                <p className="text-muted mb-4">
                    Check back soon for our latest work and client engagements.
                </p>
            </div>
        );
    }

    return (
        <div className="swiper project-swiper" id="projectSlider">
            <Swiper
                modules={[Navigation, Autoplay]}
                loop={projects.length > 1}
                slidesPerView={3}
                spaceBetween={24}
                navigation={{
                    nextEl: ".project-button-next",
                    prevEl: ".project-button-prev",
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                    320:  { slidesPerView: 1 },
                    576:  { slidesPerView: 2 },
                    768:  { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                }}
                className="swiper-wrapper"
            >
                {projects.map((project) => (
                    <SwiperSlide key={project._id} className="swiper-slide">
                        <div className="project-card">
                            <Link href={`/projects/${project.slug}`}>
                                {/*-- Fixed-height image container --*/}
                                <div
                                    style={{
                                        position: "relative",
                                        height:   "280px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <Image
                                        src={project.coverImage}
                                        alt={project.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                {/*-- Project Info --*/}
                                <div className="project-info">
                                    <div>
                                        <h4>{project.title}</h4>
                                        {project.category && (
                                            <p className="mb-0">{project.category}</p>
                                        )}
                                    </div>
                                    <div className="arrow-icon">
                                        <i className="ti ti-arrow-up-right"></i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}