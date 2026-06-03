"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function OpeningAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const compositionRef = useRef<HTMLDivElement>(null);
  const birdRef = useRef<HTMLImageElement>(null);
  const unitedRef = useRef<HTMLDivElement>(null);
  const hopeRef = useRef<HTMLDivElement>(null);
  const foundationRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setAnimationDone(true)
    });
    tl.timeScale(1.3);

    const el = compositionRef.current!;
    const elW = el.offsetWidth;
    const elH = el.offsetHeight;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Start: centered on screen
    const startX = vw / 2 - elW / 2;
    const startY = vh / 2 - elH / 2;

    // End: top-left, scaled down to fit navbar
    // The navbar logo (logo-enhanced.png) will be 68px × 68px at top: 6px, left: 24px
    // We want the composition to move to roughly that area
    const endScale = 0.36;
    const desiredCenterX = 24 + 34; // left:24px + half of 68px logo
    const desiredCenterY = 6 + 34;  // top:6px + half of 68px logo
    // With GSAP default center-origin transform:
    // visual center = startX + elW/2 + (x - startX) after animation... 
    // Actually: element left=0, top=0. With transform x=endX:
    // visual left edge = endX, visual center = endX + elW/2
    // But scaled: visual center stays at endX + elW/2, rendered half-width = elW*endScale/2
    // So: desiredCenterX = endX + elW/2
    const endX = desiredCenterX - elW / 2;
    const endY = desiredCenterY - elH / 2;

    gsap.set(compositionRef.current, { x: startX, y: startY, scale: 1, force3D: true });
    gsap.set(birdRef.current, { opacity: 0, scale: 0.92 });
    gsap.set([unitedRef.current, hopeRef.current, foundationRef.current], { opacity: 0, y: 6 });
    gsap.set(taglineRef.current, { opacity: 0 });
    gsap.set(highlightRef.current, { opacity: 0 });

    // STEP 1: Bird appears
    tl.to(birdRef.current, { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" });

    // STEP 2: UNITED
    tl.to(unitedRef.current, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }, "+=0.35");

    // STEP 3: H.O.P.E
    tl.to(hopeRef.current, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }, "+=0.2");

    // STEP 4: FOUNDATION
    tl.to(foundationRef.current, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }, "+=0.2");

    // STEP 5: TAGLINE
    tl.to(taglineRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" }, "+=0.2");

    // STEP 6: HIGHLIGHT
    tl.to(highlightRef.current, { opacity: 1, duration: 1.0, ease: "power2.inOut" }, "-=0.2");

    // Hold
    tl.to({}, { duration: 0.6 });

    // STEP 7: Move composition toward top-left WHILE fading it out mid-journey
    // This prevents the "going inside circle" glitch — composition never fully arrives
    tl.to(highlightRef.current, { opacity: 0, duration: 0.25, ease: "power2.out" }, "move");

    // Move only partway toward top-left (60% of the distance)
    const midX = startX + (endX - startX) * 0.6;
    const midY = startY + (endY - startY) * 0.6;

    tl.to(compositionRef.current, {
      x: midX,
      y: midY,
      scale: endScale * 1.4, // scale down but not all the way
      opacity: 0,
      duration: 0.85,
      ease: "power2.inOut",
      force3D: true,
    }, "move");

    // Fade out bg overlay
    tl.to(containerRef.current, { opacity: 0, duration: 0.65, ease: "power2.inOut" }, "move+=0.15");

    // Navbar logo fades in at its fixed position
    tl.to(".nav-logo", { opacity: 1, duration: 0.5, ease: "power2.out" }, "move+=0.5");

    // Navbar links reveal
    tl.to(".nav-link", {
      opacity: 1, y: 0,
      duration: 0.7, stagger: 0.07, ease: "power2.out"
    }, "move+=0.55");

  }, []);

  return (
    <>
      {/* Matte black overlay */}
      {!animationDone && (
        <div ref={containerRef} className="fixed inset-0 z-40 bg-[#0B0B0B] pointer-events-none" />
      )}

      {/* ── OPENING ANIMATION COMPOSITION (centered) ── */}
      <div
        ref={compositionRef}
        className="fixed top-0 left-0 z-50 flex flex-col items-center pointer-events-none"
        style={{ width: "300px", willChange: "transform" }}
      >
        {/* Ambient highlight */}
        <div
          ref={highlightRef}
          className="absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full pointer-events-none opacity-0"
          style={{
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          }}
        />

        {/* Bird */}
        <img
          ref={birdRef}
          src="/birdmain.png"
          alt="Hummingbird"
          className="w-[110px] h-[110px] object-contain mb-4 opacity-0 relative z-10"
          style={{ mixBlendMode: "screen" }}
        />

        {/* Typography */}
        <div className="flex flex-col items-center text-center relative z-10 w-full">
          <div ref={unitedRef} className="font-inter font-light text-[28px] uppercase tracking-[0.2em] pl-[0.2em] text-white leading-none mb-1 opacity-0">
            UNITED
          </div>
          <div ref={hopeRef} className="font-inter font-light text-[28px] uppercase tracking-[0.18em] pl-[0.18em] leading-none mb-2 flex justify-center opacity-0">
            <span style={{ color: "#27aae1" }}>H.</span>
            <span style={{ color: "#8cc63f" }}>O.</span>
            <span style={{ color: "#f7931e" }}>P.</span>
            <span style={{ color: "#ed1c24" }}>E</span>
          </div>
          <div ref={foundationRef} className="font-inter font-light text-[15px] uppercase tracking-[0.28em] pl-[0.28em] text-white leading-none mb-3 opacity-0">
            FOUNDATION
          </div>
          <div ref={taglineRef} className="font-inter font-light text-[7.5px] uppercase tracking-[0.18em] pl-[0.18em] translate-x-[3px] text-white/60 leading-none opacity-0 whitespace-nowrap">
            HUMANITY.OPPORTUNITY.PEOPLE.EDUCATION
          </div>
        </div>
      </div>
    </>
  );
}
