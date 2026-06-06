"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleInternshipClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      router.push("/internship");
    }, 600);
  };

  const handleDonateClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      router.push("/donate");
    }, 600);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 3.5 }); // Wait for navbar entrance

      tl.fromTo(subtitleRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
      );

      tl.fromTo(headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
        "-=0.5"
      );

      tl.fromTo(paraRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
        "-=1.0"
      );

      tl.fromTo(btnsRef.current?.children ? Array.from(btnsRef.current.children) : [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" },
        "-=0.8"
      );

      tl.fromTo(imageRef.current,
        { opacity: 0, x: 50, scale: 1.05 },
        { opacity: 1, x: 0, scale: 1, duration: 2, ease: "power3.out" },
        "-=1.5"
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen pt-[160px] pb-12 overflow-hidden flex items-center">
      <div className="max-w-[1440px] w-full mx-auto px-[5vw] flex flex-col md:flex-row items-center justify-between relative z-10 h-full">

        {/* Left Content */}
        <div className="w-full md:w-[60%] flex flex-col z-20 mt-12 md:mt-0">
          <div ref={subtitleRef} className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-white/30"></div>
            <span className="font-inter font-medium text-[11px] uppercase tracking-[0.2em] text-white/50">
              A FOUNDATION BUILT ON HOPE
            </span>
          </div>

          <h1
            ref={headlineRef}
            className="font-cormorant font-light text-[56px] md:text-[84px] lg:text-[96px] leading-[1.05] text-[#F5F2EB] max-w-[650px] tracking-[-0.02em]"
          >
            Together We Can <br />
            <span className="italic">Change</span> <br />
            <span className="text-[#ECA543]">Lives.</span>
          </h1>

          <p
            ref={paraRef}
            className="mt-8 font-inter text-[15px] leading-[1.7] text-white/60 max-w-[500px]"
          >
            United H.O.P.E Foundation works with the deprieved children, women and families in villages where school books, warm meals and medical care still feel like distant dreams. We don&apos;t promise miracles. We show up.
          </p>

          <div ref={btnsRef} className="mt-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <button onClick={handleInternshipClick} className="bg-transparent border border-white/30 text-white font-inter font-semibold text-[12px] tracking-[0.18em] uppercase rounded-full h-[56px] px-10 transition-all duration-500 hover:-translate-y-1 hover:bg-[#D95B5B] hover:border-[#D95B5B] hover:shadow-[0_10px_30px_rgba(217,91,91,0.4)] w-full sm:w-auto">
              BECOME A CHANGEMAKER INTERN
            </button>
            <button onClick={handleDonateClick} className="relative overflow-hidden group bg-white text-black font-inter font-bold text-[13px] tracking-[0.2em] uppercase rounded-full h-[56px] px-12 flex items-center justify-center transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#ECA543] hover:shadow-[0_10px_30px_rgba(236,165,67,0.5)] w-full sm:w-auto">
              <span className="relative z-10 flex items-center">
                DONATE <span className="ml-3 font-normal text-[18px] leading-none mb-[2px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            </button>
          </div>
        </div>

        {/* Right Content - Cutout Image */}
        <div className="absolute bottom-0 right-[-10vw] md:right-[-5vw] w-[85vw] md:w-[65vw] lg:w-[55vw] max-w-[1000px] flex items-end justify-end pointer-events-none z-10">
          <img
            ref={imageRef}
            src="/hero_cutout.png"
            alt="Children with balloons"
            className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[100] bg-[#050505] animate-fade-in-fast pointer-events-none"></div>
      )}
    </section>
  );
}
