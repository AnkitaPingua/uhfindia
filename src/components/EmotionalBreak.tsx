"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EmotionalBreak() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(bgRef.current, 
        { scale: 1 }, 
        { scale: 1.1, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: true } }
      );

      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 60%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      <div ref={bgRef} className="absolute inset-0 w-full h-full">
        <img src="/documentary_bg.png" alt="Background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div ref={contentRef} className="relative z-10 flex flex-col items-center justify-center px-4">
        <h2 className="font-cormorant font-light text-[50px] md:text-[72px] text-center text-[#F5F2EB] max-w-[800px] leading-tight">
          Hope begins when someone <br />
          <span className="italic text-white/80">chooses to care.</span>
        </h2>
        
        <div className="mt-12 flex flex-col md:flex-row items-center gap-6">
          <button className="bg-[#FF9A3C] text-black font-inter font-semibold text-[11px] tracking-[0.18em] uppercase rounded-full h-[46px] px-10 hover:brightness-110 transition-all">
            DONATE TODAY
          </button>
          <button className="bg-transparent border border-white text-white font-inter font-semibold text-[11px] tracking-[0.18em] uppercase rounded-full h-[46px] px-10 hover:bg-white/10 transition-all">
            JOIN US
          </button>
        </div>
      </div>
    </section>
  );
}
