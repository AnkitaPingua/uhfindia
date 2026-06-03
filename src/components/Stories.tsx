"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    img: "/story_kids.png",
    quote: "“I used to carry water for four hours every morning. Now I carry books.”",
    sub: "When we first met Aarti, she had never held a pencil. Two years later she teaches the younger children to write their names."
  },
  {
    img: "/story_kids.png",
    quote: "“Our school doesn't have walls. But it has a teacher who smiles.”",
    sub: "Ramesh's classroom is a banyan tree. He hasn't missed a single day since the foundation arrived."
  },
  {
    img: "/story_women.png",
    quote: "“They didn't hand me money. They handed me a sewing machine and a chance.”",
    sub: "Sunita now runs a small stitching cooperative employing four women from her village."
  }
];

export default function Stories() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 60%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#0B0B0B] py-32 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-[5vw]">
        
        {/* Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-white/30"></div>
            <span className="font-inter font-medium text-[11px] uppercase tracking-[0.22em] text-white/50">FIELD STORIES</span>
          </div>
          <div className="flex justify-between items-end">
            <h2 className="font-cormorant font-light text-[50px] md:text-[64px] leading-tight text-[#F5F2EB]">
              Statistics tell you we exist.<br />
              <span className="italic">Stories tell you why.</span>
            </h2>
            <a href="#" className="hidden md:flex font-inter font-medium text-[11px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors items-center gap-2">
              VIEW ALL STORIES <span className="text-[14px]">→</span>
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <div 
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#111] mb-6 rounded-sm">
                <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={story.img} 
                  alt="Story"
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 ${i === 0 ? "grayscale-0" : "grayscale"}`}
                />
              </div>
              <div className="flex flex-col px-2">
                <span className="font-cormorant text-[32px] text-white/40 mb-2 leading-none">”</span>
                <p className="font-cormorant text-[22px] md:text-[24px] text-[#F5F2EB] italic leading-tight mb-4">
                  {story.quote}
                </p>
                <p className="font-inter text-[12px] text-white/60 leading-relaxed">
                  {story.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
