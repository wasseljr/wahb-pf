"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function TopHeader() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <>
            <div className={`overflow-hidden fixed left-4 lg:left-8 right-[140px] lg:right-[240px] top-4.5 lg:top-6 grid grid-cols-1 lg:grid-cols-8 gap-4 lg:gap-6 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md" : ""}`}>
                {
                    <div className="hidden lg:block lg:col-span-3">
                        <span className="block overflow-hidden">
                            <div
                                className={`block font-medium text-[clamp(16px,1.2vw,20px)] ${isDark ? "text-white" : "text-gray-900"
                                    }`}
                                style={{ transform: "none" }}
                            >
                                Menasria Ouahb
                            </div>
                        </span>
                        <span className="block overflow-hidden">
                            <div
                                className={`block font-medium text-[clamp(16px,1.2vw,20px)] ${isDark ? "text-neutral-400" : "text-gray-600"
                                    }`}
                                style={{ transform: "none" }}
                            >
                                Marketing Student
                            </div>
                        </span>
                    </div>

                }
                <div className="col-span-1 lg:col-span-3 text-center">
                    <span className="block overflow-hidden">
                        <div
                            className={`block font-medium text-[clamp(16px,1.2vw,20px)] ${isDark ? "text-white" : "text-gray-900"
                                }`}
                            style={{ transform: "none" }}
                        >
                            Based in Algeria
                        </div>
                    </span>
                    <span className="block overflow-hidden">
                        <div
                            className="block font-medium text-[clamp(16px,1.2vw,20px)]"
                            style={{ transform: "none" }}
                        >
                            <a
                                href="https://maps.app.goo.gl/BabLDgo1hQSE4XRK7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                            >
                                <div className="overflow-hidden h-6">
                                    <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1/2">
                                        <span
                                            className={`text-[clamp(16px,1.2vw,20px)] font-medium mb-1.5 ${isDark ? "text-purple-400" : "text-purple-600"
                                                }`}
                                        >
                                            Mahelma, Zeralda
                                        </span>
                                        <span
                                            className={`text-[clamp(16px,1.2vw,20px)] font-medium mb-1.5 ${isDark ? "text-purple-400" : "text-purple-600"
                                                }`}
                                        >
                                            Mahelma, Zeralda
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </span>
                </div>
            </div>

            <a
                href="mailto:menasriawahb@gmail.com"
                className="fixed right-4 lg:right-8 top-4 lg:top-6 group cursor-pointer z-50"
                aria-label="Send me an email"
                role="button"
                style={{ opacity: 1, transform: "none" }}
            >
                <div className="relative">
                    {/* Emoji Background */}
                    <div
                        className={`absolute left-0 top-0 w-12 3xl:w-14 h-12 3xl:h-14 rounded-full flex items-center justify-center rotate-180 scale-95 group-hover:scale-100 group-hover:rotate-0 group-hover:-translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] -z-10 ${isDark
                            ? "bg-neutral-900 border border-neutral-800"
                            : "bg-white border border-gray-300"
                            }`}
                    >
                        <span className="text-lg lg:text-xl 3xl:text-2xl">🤝</span>
                    </div>

                    {/* Button */}
                    <div
                        className={`flex items-center relative px-5 lg:px-6 h-12 lg:h-14 rounded-full font-semibold text-[clamp(16px,1.2vw,20px)] z-10 ${isDark
                            ? "bg-neutral-900 text-neutral-100 border border-neutral-800"
                            : "bg-white text-gray-900 border border-gray-300"
                            }`}
                    >
                        <div className="overflow-hidden h-6 lg:h-7">
                            <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1/2">
                                <span
                                    className={`text-[clamp(16px,1.2vw,20px)] font-semibold mb-1.5 ${isDark ? "text-neutral-100" : "text-gray-900"
                                        }`}
                                >
                                    Let's Connect
                                </span>
                                <span
                                    className={`text-[clamp(16px,1.2vw,20px)] font-semibold mb-1.5 ${isDark ? "text-neutral-100" : "text-gray-900"
                                        }`}
                                >
                                    Let's Connect
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
}
