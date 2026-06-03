"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const events = [
  { month: "JUNE", title: "Annual Education Drive" },
  { month: "JULY", title: "Monsoon Health Camp" },
  { month: "AUG 12", title: "Independence Day Meals" },
];

export default function Events() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1.2, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } }
      );

      gsap.fromTo(itemsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 60%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#050505] py-32 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-[5vw] flex flex-col md:flex-row justify-between gap-16 md:gap-0">

        {/* Left Side */}
        <div ref={leftRef} className="w-full md:w-[45%]">
          <h2 className="font-cormorant font-light italic text-[48px] md:text-[56px] leading-[1.05] text-[#F5F2EB] max-w-[400px]">
            Where you&apos;ll find us this season.
          </h2>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[50%] flex flex-col">
          <div className="w-full h-[1px] bg-white/10"></div>
          {events.map((ev, i) => (
            <div
              key={i}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="flex items-center justify-between py-8 border-b border-white/10 group cursor-pointer hover:bg-white/5 transition-colors px-4 -mx-4"
            >
              <span className="font-inter font-medium text-[13px] tracking-[0.2em] text-[#D8D2CA] uppercase w-[120px]">
                {ev.month}
              </span>
              <span className="font-inter text-[18px] text-[#F5F2EB] flex-1">
                {ev.title}
              </span>
              <span className="font-inter text-[18px] text-white/30 transform group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
