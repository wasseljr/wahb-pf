"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/dist/Observer";

// Register the Observer plugin
gsap.registerPlugin(Observer);

export default function ObserverDemo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const currentSection = useRef(0);
    const isAnimating = useRef(false);

    useEffect(() => {
        if (!containerRef.current) return;

        const sections = containerRef.current.querySelectorAll(".section");

        // Create Observer instance
        Observer.create({
            target: window,
            type: "wheel,touch,pointer",
            wheelSpeed: -1,
            onDown: () => !isAnimating.current && gotoSection(currentSection.current - 1, -1),
            onUp: () => !isAnimating.current && gotoSection(currentSection.current + 1, 1),
            tolerance: 10,
            preventDefault: true
        });

        function gotoSection(index: number, direction: number) {
            index = wrap(index); // make sure it's valid
            isAnimating.current = true;

            gsap.to(sections, {
                yPercent: -index * 100,
                duration: 1,
                ease: "power2.inOut",
                onComplete: () => {
                    isAnimating.current = false;
                }
            });

            currentSection.current = index;
        }

        function wrap(index: number) {
            if (index < 0) return sections.length - 1;
            if (index >= sections.length) return 0;
            return index;
        }

        // Initialize first section
        gsap.set(sections, { yPercent: 0 });

    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 overflow-hidden"
            style={{ height: "100vh" }}
        >
            <div className="section h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600">
                <div className="text-center text-white">
                    <h2 className="text-6xl font-bold mb-4">Section 1</h2>
                    <p className="text-xl">Scroll or swipe to navigate</p>
                </div>
            </div>

            <div className="section h-screen flex items-center justify-center bg-gradient-to-br from-pink-600 to-orange-600">
                <div className="text-center text-white">
                    <h2 className="text-6xl font-bold mb-4">Section 2</h2>
                    <p className="text-xl">Observer detects your gestures</p>
                </div>
            </div>

            <div className="section h-screen flex items-center justify-center bg-gradient-to-br from-green-600 to-teal-600">
                <div className="text-center text-white">
                    <h2 className="text-6xl font-bold mb-4">Section 3</h2>
                    <p className="text-xl">Smooth transitions between sections</p>
                </div>
            </div>

            <div className="section h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600">
                <div className="text-center text-white">
                    <h2 className="text-6xl font-bold mb-4">Section 4</h2>
                    <p className="text-xl">Works with wheel, touch, and pointer</p>
                </div>
            </div>
        </div>
    );
}
