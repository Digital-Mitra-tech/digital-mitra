'use client'
import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Custom hook to initialize Lenis smooth scrolling
 * @param lerp - The lerp value for smooth scrolling (default: 0.1)
 * @param smoothWheel - Whether to enable smooth wheel scrolling (default: true)
 */
export function useSmoothScroll(lerp: number = 0.1, smoothWheel: boolean = true) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp,
      smoothWheel,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [lerp, smoothWheel]);
}
