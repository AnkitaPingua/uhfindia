"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { target: 124000, suffix: "+", prefix: "", isIndian: true, isDecimal: false, label: "Children Supported", color: "#F5F2EB" },
  { target: 480000, suffix: "+", prefix: "", isIndian: false, isDecimal: false, label: "Meals Served", color: "#8BCF63" },
  { target: 37, suffix: "", prefix: "", isIndian: false, isDecimal: false, label: "Villages Reached", color: "#FF9A3C" },
  { target: 1.8, suffix: "cr", prefix: "₹", isIndian: false, isDecimal: true, label: "Raised", color: "#D95B5B" },
  { target: 38, suffix: "", prefix: "", isIndian: false, isDecimal: false, label: "Active Volunteers", color: "#4D8EFF" },
];

export default function ImpactStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%", // Trigger when the section comes into view
          toggleActions: "restart none none reset", // Instantly resets when scrolled out of view backwards
        }
      });

      // Fade and slide container up
      tl.fromTo(
        statsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        }
      );

      // Super fast counter animation from 1 to target
      statsData.forEach((stat, i) => {
        let counter = { val: 1 };
        tl.to(counter, {
          val: stat.target,
          duration: 1.5,
          ease: "power3.out",
          onUpdate: () => {
            if (numRefs.current[i]) {
              let formattedVal = "";
              if (stat.isDecimal) {
                formattedVal = counter.val.toFixed(1);
              } else if (stat.isIndian) {
                formattedVal = Math.floor(counter.val).toLocaleString('en-IN');
              } else {
                formattedVal = Math.floor(counter.val).toLocaleString('en-US');
              }
              numRefs.current[i]!.innerText = `${stat.prefix}${formattedVal}${stat.suffix}`;
            }
          }
        }, "<0.1"); // Start slightly after the fade-in begins
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#0B0B0B] py-32 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-[5vw] flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-4">
        {statsData.map((stat, i) => (
          <div 
            key={i} 
            ref={(el) => { statsRef.current[i] = el; }}
            className="flex flex-col space-y-3"
          >
            <span 
              ref={(el) => { numRefs.current[i] = el; }}
              className="font-cormorant font-light text-[38px] md:text-[44px] leading-none"
              style={{ color: stat.color }}
            >
              1{stat.suffix}
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
