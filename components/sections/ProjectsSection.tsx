"use client";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, FileText } from "lucide-react";

export default function ProjectsSection() {
    const { experiences } = portfolioData;

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Professional Experience</h2>

            <div className="grid gap-6">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="reveal-item group p-6 rounded-2xl bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-3">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                                    {exp.title}
                                </h3>
                                <p className="text-lg text-orange-400 dark:text-orange-400 font-medium">
                                    {exp.company}
                                </p>
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap">
                                {exp.period}
                            </span>
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            {exp.location}
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            {exp.description}
                        </p>

                        {exp.pdfLink !== null && (
                            <a
                                href={exp.pdfLink || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${exp.pdfLink
                                    ? "bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 border border-orange-500/30"
                                    : "bg-gray-500/20 text-gray-500 cursor-not-allowed border border-gray-500/30"
                                    }`}
                                onClick={(e) => !exp.pdfLink && e.preventDefault()}
                            >
                                <FileText className="w-4 h-4" />
                                {exp.pdfLink ? "View Internship Report" : "Report PDF (Coming Soon)"}
                                {exp.pdfLink && <ExternalLink className="w-3 h-3" />}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
