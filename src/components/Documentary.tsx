"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Documentary() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(rowRef.current, {
        xPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#050505] pt-32 pb-40 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-[5vw] mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-[1px] bg-white/30"></div>
          <span className="font-inter font-medium text-[11px] uppercase tracking-[0.22em] text-white/50">DOCUMENTARY</span>
        </div>
        <h2 className="font-cormorant font-light text-[48px] md:text-[58px] leading-[1.1] text-[#F5F2EB] max-w-[600px]">
          Captured in the field.<br />
          <span className="italic text-white/70">No filters. No staging.</span>
        </h2>
      </div>

      <div ref={rowRef} className="flex gap-4 md:gap-8 px-[5vw] w-[200vw] md:w-[120vw]">
        <div className="w-[45vw] md:w-[35vw] h-[50vh] md:h-[60vh] relative bg-[#111] overflow-hidden rounded-sm">
          <img src="/hero_image.png" alt="Field 1" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="w-[35vw] md:w-[25vw] h-[50vh] md:h-[60vh] relative bg-[#111] overflow-hidden rounded-sm flex flex-col gap-4 md:gap-8 bg-transparent">
          <div className="w-full h-[50%] relative overflow-hidden rounded-sm"><img src="/story_kids.png" alt="Field 2" className="absolute inset-0 w-full h-full object-cover grayscale" /></div>
          <div className="w-full h-[50%] relative overflow-hidden rounded-sm"><img src="/story_women.png" alt="Field 3" className="absolute inset-0 w-full h-full object-cover grayscale" /></div>
        </div>
        <div className="w-[40vw] md:w-[30vw] h-[50vh] md:h-[60vh] relative bg-[#111] overflow-hidden rounded-sm">
          <img src="/story_kids.png" alt="Field 4" className="absolute inset-0 w-full h-full object-cover grayscale" />
        </div>
      </div>
    </section>
  );
}
