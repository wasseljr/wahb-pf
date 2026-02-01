"use client";

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimatedTextProps {
    text: string;
    className?: string;
}

export default function ScrollAnimatedText({
    text,
    className = "",
}: ScrollAnimatedTextProps) {
    const containerRef = useRef<HTMLParagraphElement>(null);
    const words = text.split(" ");

    useLayoutEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const wordElements = el.querySelectorAll(".word");

        // Animate each word based on scroll with different movements
        wordElements.forEach((word, index) => {
            const wordClass = index % 4; // Cycle through 4 different animation patterns

            let xMovement = 0;
            switch (wordClass) {
                case 0:
                    xMovement = 0; // No horizontal movement
                    break;
                case 1:
                    xMovement = -2; // Move left (moderate)
                    break;
                case 2:
                    xMovement = 2; // Move right (moderate)
                    break;
                case 3:
                    xMovement = -2; // Move more left (moderate)
                    break;
            }

            gsap.fromTo(
                word,
                {
                    x: 0,
                    opacity: 1,
                },
                {
                    x: xMovement,
                    opacity: 0.3,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 60%",
                        end: "bottom 20%",
                        scrub: 0.5, // Faster animation
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [text]);

    return (
        <p
            ref={containerRef}
            className={className}
            style={{ whiteSpace: 'pre-wrap' }}
        >
            {words.map((word, wordIndex) => {
                const wordClass = wordIndex % 4;
                return (
                    <span
                        key={wordIndex}
                        className={`word word${wordClass} inline-block`}
                        style={{
                            whiteSpace: 'nowrap',
                            marginRight: '0.25em'
                        }}
                    >
                        {word}
                    </span>
                );
            })}
        </p>
    );
}
