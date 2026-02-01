"use client";

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    animationFrom?: gsap.TweenVars;
    animationTo?: gsap.TweenVars;
    onAnimationComplete?: () => void;
}

export default function SplitText({
    text,
    className = "",
    delay = 0,
    animationFrom = { opacity: 0, y: 40 },
    animationTo = { opacity: 1, y: 0 },
    onAnimationComplete,
}: SplitTextProps) {
    const containerRef = useRef<HTMLParagraphElement>(null);
    const words = text.split(" ");

    useLayoutEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const chars = el.querySelectorAll(".char");

        const tl = gsap.timeline({
            delay,
            onComplete: onAnimationComplete,
        });

        tl.fromTo(
            chars,
            animationFrom,
            {
                ...animationTo,
                stagger: 0.05,
                duration: 0.5,
                ease: "power2.out",
            }
        );

        return () => {
            tl.kill();
        };
    }, [text, delay, animationFrom, animationTo, onAnimationComplete]);

    return (
        <p
            ref={containerRef}
            className={`inline-block overflow-hidden ${className}`}
            style={{ whiteSpace: 'pre-wrap' }}
        >
            {words.map((word, wordIndex) => (
                <span
                    key={wordIndex}
                    className="inline-block"
                    style={{ whiteSpace: 'nowrap' }}
                >
                    {word.split("").map((char, charIndex) => (
                        <span
                            key={charIndex}
                            className="char inline-block"
                        >
                            {char}
                        </span>
                    ))}
                    {/* Add space after word if it's not the last one */}
                    {wordIndex < words.length - 1 && (
                        <span className="inline-block">&nbsp;</span>
                    )}
                </span>
            ))}
        </p>
    );
}
