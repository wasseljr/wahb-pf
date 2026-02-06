"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import { portfolioData } from "@/data/portfolio";
import Folder from "./Folder";
import SplitText from "./SplitText";

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
                        <div className="p-6 rounded-2xl bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 backdrop-blur-sm">
                            <SplitText
                                text={portfolioData.intro}
                                className="text-lg lg:text-xl font-bold text-gray-800 dark:text-gray-300 leading-relaxed font-saira"
                                delay={0.3}
                            />
                        </div>
                    </div>

                    {/* Single Folder with 3 Papers */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-center mt-20">
                        <Folder
                            color="#5227FF"
                            size={1.5}
                            items={[
                                <button
                                    key="about"
                                    onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                                    className="flex items-center justify-center h-full text-xs font-bold text-purple-600 w-full cursor-pointer hover:scale-110 transition-transform"
                                >
                                    About
                                </button>,
                                <button
                                    key="projects"
                                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                                    className="flex items-center justify-center h-full text-xs font-bold text-orange-600 w-full cursor-pointer hover:scale-110 transition-transform"
                                >
                                    Projects
                                </button>,
                                <button
                                    key="skills"
                                    onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                                    className="flex items-center justify-center h-full text-xs font-bold text-cyan-600 w-full cursor-pointer hover:scale-110 transition-transform"
                                >
                                    Skills
                                </button>,
                            ]}
                        />
                    </div>
                </div>

                {/* Scrollable Content Sections */}
                <div className="space-y-32 max-w-4xl mx-auto">
                    {/* About Section */}
                    <div id="education" ref={(el) => { if (el) sectionsRef.current[0] = el; }}>
                        <AboutSection />
                    </div>

                    {/* Projects Section */}
                    <div id="projects" ref={(el) => { if (el) sectionsRef.current[1] = el; }}>
                        <ProjectsSection />
                    </div>

                    {/* Skills Section */}
                    <div id="skills" ref={(el) => { if (el) sectionsRef.current[2] = el; }}>
                        <SkillsSection />
                    </div>
                </div>
            </div>
        </div>
    );
}
