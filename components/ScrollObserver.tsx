"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/dist/Observer";

// Register the Observer plugin
gsap.registerPlugin(Observer);

interface ScrollObserverProps {
    onScrollDown?: () => void;
    onScrollUp?: () => void;
    children?: React.ReactNode;
}

export default function ScrollObserver({ onScrollDown, onScrollUp, children }: ScrollObserverProps) {
    const observerRef = useRef<any>(null);

    useEffect(() => {
        // Create Observer instance
        observerRef.current = Observer.create({
            target: window,
            type: "wheel,touch,pointer",
            wheelSpeed: -1,

            onDown: () => {
                console.log("Scrolling/Swiping down");
                onScrollDown?.();
            },

            onUp: () => {
                console.log("Scrolling/Swiping up");
                onScrollUp?.();
            },

            onLeft: () => {
                console.log("Swiping left");
            },

            onRight: () => {
                console.log("Swiping right");
            },

            tolerance: 10,
            preventDefault: false // Set to true if you want to prevent default scroll
        });

        // Cleanup
        return () => {
            observerRef.current?.kill();
        };
    }, [onScrollDown, onScrollUp]);

    return <>{children}</>;
}
