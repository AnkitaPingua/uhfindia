"use client";

import { useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ReactLenis root options={{ lerp: 0.5, duration: 0.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
