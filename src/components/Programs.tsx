"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  "Women Empowerment",
  "Food Distribution",
  "Education",
  "Healthcare",
  "Child Welfare"
];

export default function Programs() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );

      gsap.fromTo(cardsRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 60%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#050505] py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-[5vw]">

        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-24 mb-20">
          <h2 className="font-cormorant font-light text-[48px] md:text-[62px] leading-[1.05] text-[#F5F2EB] max-w-[500px]">
            Our programs. <span className="italic">Our promise.</span>
          </h2>
          <p className="font-inter text-[14px] leading-[1.7] text-white/65 max-w-[420px] md:mt-4">
            Each program is built around children and communities living quietly beyond visibility — bringing education, nutrition, healthcare, and opportunities where they’re needed most.
          </p>
        </div>

        <div className="w-full h-[1px] bg-white/10 mb-16"></div>

        {/* Horizontal Cards */}
        <div className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x">
          {programs.map((prog, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="min-w-[280px] md:min-w-[320px] h-[450px] relative group cursor-pointer snap-start overflow-hidden rounded-sm bg-[#111]"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700 group-hover:from-black/90"></div>

              <img
                src="/story_kids.png"
                alt={prog}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000 ease-out"
              />

              <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="w-4 h-4 rounded-full border border-white/30 mb-6 group-hover:border-white/60 transition-colors"></div>
                <div className="w-full h-[1px] bg-white/20 mb-4 group-hover:bg-white/50 transition-colors"></div>
                <h3 className="font-cormorant text-[28px] text-[#F5F2EB]">{prog}</h3>
              </div>

              {/* Thin border on hover */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 z-30 transition-colors duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
