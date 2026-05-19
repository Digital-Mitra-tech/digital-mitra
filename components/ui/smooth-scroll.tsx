"use client"

import { ReactLenis, useLenis } from "lenis/react"
import { usePathname } from "next/navigation"
import { useEffect, type ReactNode } from "react"

interface SmoothScrollProps {
  children: ReactNode
}

function ScrollReset() {
  const lenis = useLenis()
  const pathname = usePathname()

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }
  }, [pathname, lenis])

  return null
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <ScrollReset />
      {children}
    </ReactLenis>
  )
}
