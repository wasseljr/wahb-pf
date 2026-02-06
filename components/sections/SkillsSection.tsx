"use client";
import { portfolioData } from "@/data/portfolio";
import { Download } from "lucide-react";

export default function SkillsSection() {
    const { skills, languages } = portfolioData;

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Skills & Languages</h2>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {/* Marketing & Digital */}
                <div className="reveal-item p-6 rounded-2xl bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-cyan-400 dark:text-cyan-400 mb-4">
                        Marketing & Digital
                    </h3>
                    <ul className="space-y-2">
                        {skills.marketing.map((skill, i) => (
                            <li
                                key={i}
                                className="text-gray-700 dark:text-gray-300 flex items-start gap-2"
                            >
                                <span className="text-cyan-400 dark:text-cyan-400 mt-1">•</span>
                                <span>{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tools & Technologies */}
                <div className="reveal-item p-6 rounded-2xl bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-cyan-400 dark:text-cyan-400 mb-4">
                        Tools & Technologies
                    </h3>
                    <ul className="space-y-2">
                        {skills.tools.map((tool, i) => (
                            <li
                                key={i}
                                className="text-gray-700 dark:text-gray-300 flex items-start gap-2"
                            >
                                <span className="text-cyan-400 dark:text-cyan-400 mt-1">•</span>
                                <span>{tool}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Soft Skills */}
                <div className="reveal-item p-6 rounded-2xl bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-cyan-400 dark:text-cyan-400 mb-4">
                        Soft Skills
                    </h3>
                    <ul className="space-y-2">
                        {skills.soft.map((skill, i) => (
                            <li
                                key={i}
                                className="text-gray-700 dark:text-gray-300 flex items-start gap-2"
                            >
                                <span className="text-cyan-400 dark:text-cyan-400 mt-1">•</span>
                                <span>{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Languages */}
            <div className="p-6 rounded-2xl bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-cyan-400 dark:text-cyan-400 mb-4">
                    Languages
                </h3>
                <div className="flex flex-wrap gap-4 lg:gap-52">
                    {languages.map((lang, i) => (
                        <div
                            key={i}
                            className="px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30"
                        >
                            <span className="text-gray-900 dark:text-white font-medium">{lang.language}</span>
                            <span className="text-cyan-400 dark:text-cyan-400 text-sm ml-2">
                                ({lang.level})
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Export CV Button */}
            <div className="flex justify-center mt-8">
                <a
                    href="/download_files/CV_MENASRIA_Ouahb.docx"
                    download
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                    <Download className="w-5 h-5" />
                    Export CV
                </a>
            </div>
        </div>
    );
}
