"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimationDemo() {
    const section1Ref = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);
    const section3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate section 1
        if (section1Ref.current) {
            gsap.fromTo(
                section1Ref.current.querySelector(".content"),
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section1Ref.current,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: 1,
                        markers: false, // Set to true to see scroll trigger markers
                    },
                }
            );
        }

        // Animate section 2
        if (section2Ref.current) {
            gsap.fromTo(
                section2Ref.current.querySelector(".content"),
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section2Ref.current,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: 1,
                    },
                }
            );
        }

        // Animate section 3
        if (section3Ref.current) {
            gsap.fromTo(
                section3Ref.current.querySelector(".content"),
                { opacity: 0, x: -100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section3Ref.current,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: 1,
                    },
                }
            );
        }
    }, []);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600">
                <div className="text-center text-white">
                    <h1 className="text-7xl font-bold mb-4">Smooth Scroll Demo</h1>
                    <p className="text-2xl">Scroll down to see animations</p>
                </div>
            </section>

            {/* Section 1 */}
            <section
                ref={section1Ref}
                className="min-h-screen flex items-center justify-center bg-gray-900"
            >
                <div className="content text-center text-white max-w-2xl px-4">
                    <h2 className="text-5xl font-bold mb-6">Fade In Animation</h2>
                    <p className="text-xl leading-relaxed">
                        This section fades in and moves up as you scroll. The animation is
                        controlled by ScrollTrigger and synced with Lenis smooth scroll.
                    </p>
                </div>
            </section>

            {/* Section 2 */}
            <section
                ref={section2Ref}
                className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-600 to-orange-600"
            >
                <div className="content text-center text-white max-w-2xl px-4">
                    <h2 className="text-5xl font-bold mb-6">Scale Animation</h2>
                    <p className="text-xl leading-relaxed">
                        This section scales up from 80% to 100% as you scroll into view.
                        Perfect for drawing attention to important content.
                    </p>
                </div>
            </section>

            {/* Section 3 */}
            <section
                ref={section3Ref}
                className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 to-teal-600"
            >
                <div className="content text-center text-white max-w-2xl px-4">
                    <h2 className="text-5xl font-bold mb-6">Slide In Animation</h2>
                    <p className="text-xl leading-relaxed">
                        This section slides in from the left. You can combine multiple
                        properties for more complex animations.
                    </p>
                </div>
            </section>

            {/* Final Section */}
            <section className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="text-center text-white">
                    <h2 className="text-5xl font-bold mb-6">That's It!</h2>
                    <p className="text-xl">
                        Smooth scrolling powered by Lenis + GSAP ScrollTrigger
                    </p>
                </div>
            </section>
        </div>
    );
}
