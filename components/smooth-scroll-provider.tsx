"use client";

import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

/**
 * Client component wrapper that initializes smooth scrolling
 * Use this to wrap server component content when you need smooth scroll
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    useSmoothScroll();
    return <>{children}</>;
}
