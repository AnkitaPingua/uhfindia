"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { num: "1,24,000+", label: "Children Supported", color: "#F5F2EB" },
  { num: "480,000+", label: "Meals Served", color: "#8BCF63" },
  { num: "37", label: "Villages Reached", color: "#FF9A3C" },
  { num: "₹1.8cr", label: "Raised", color: "#D95B5B" },
  { num: "38", label: "Active Volunteers", color: "#4D8EFF" },
];

export default function ImpactStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#0B0B0B] py-32 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-[5vw] flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-4">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            ref={(el) => { statsRef.current[i] = el; }}
            className="flex flex-col space-y-3"
          >
            <span 
              className="font-cormorant font-light text-[38px] md:text-[44px] leading-none"
              style={{ color: stat.color }}
            >
              {stat.num}
            </span>
            <span className="font-inter font-medium text-[11px] uppercase tracking-[0.16em] text-white/40">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
