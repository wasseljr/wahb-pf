"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import { portfolioData } from "@/data/portfolio";
import Folder from "./Folder";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioContent() {
    const contentRef = useRef<HTMLDivElement>(null);
    const sectionsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        // Scroll-triggered reveal animations
        const sections = sectionsRef.current.filter(Boolean);

        sections.forEach((section, index) => {
            gsap.fromTo(
                section,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "top 50%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Animate children elements with stagger
            const children = section.querySelectorAll(".reveal-item");
            if (children.length > 0) {
                gsap.fromTo(
                    children,
                    {
                        opacity: 0,
                        y: 30,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 70%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }
        });

        return () => {
            // Cleanup ScrollTrigger instances
            gsap.killTweensOf(sections);
        };
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 lg:px-8 mt-20" ref={contentRef}>
            <div className="max-w-[1400px] mx-auto">
                {/* Intro + Folder Section */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-20">
                    {/* Intro Paragraph */}
                    <div className="order-2 lg:order-1">
                        <p className="text-lg lg:text-xl text-gray-800 dark:text-gray-300 leading-relaxed">
                            {portfolioData.intro}
                        </p>
                    </div>

                    {/* Single Folder with 3 Papers */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-center mt-20">
                        <Folder
                            color="#5227FF"
                            size={1.5}
                            items={[
                                <div key="about" className="flex items-center justify-center h-full text-xs font-bold text-purple-600">
                                    About
                                </div>,
                                <div key="projects" className="flex items-center justify-center h-full text-xs font-bold text-orange-600">
                                    Projects
                                </div>,
                                <div key="skills" className="flex items-center justify-center h-full text-xs font-bold text-cyan-600 ">
                                    Skills
                                </div>,
                            ]}
                        />
                    </div>
                </div>

                {/* Scrollable Content Sections */}
                <div className="space-y-32 max-w-4xl mx-auto">
                    {/* About Section */}
                    <div ref={(el) => { if (el) sectionsRef.current[0] = el; }}>
                        <AboutSection />
                    </div>

                    {/* Projects Section */}
                    <div ref={(el) => { if (el) sectionsRef.current[1] = el; }}>
                        <ProjectsSection />
                    </div>

                    {/* Skills Section */}
                    <div ref={(el) => { if (el) sectionsRef.current[2] = el; }}>
                        <SkillsSection />
                    </div>
                </div>
            </div>
        </div>
    );
}
