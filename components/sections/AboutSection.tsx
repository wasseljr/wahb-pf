"use client";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

export default function AboutSection() {
    const { education } = portfolioData;

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>

            <div className="space-y-6">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className="reveal-item group p-6 rounded-2xl bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-3">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {edu.degree}
                            </h3>
                            <span className="text-sm text-purple-400 dark:text-purple-400 font-medium">
                                {edu.period}
                            </span>
                        </div>

                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                            {edu.institution}
                        </p>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            {edu.location}
                        </p>

                        <ul className="space-y-2">
                            {edu.description.map((item, i) => (
                                <li
                                    key={i}
                                    className="text-gray-700 dark:text-gray-300 flex items-start gap-2"
                                >
                                    <span className="text-purple-400 dark:text-purple-400 mt-1">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
