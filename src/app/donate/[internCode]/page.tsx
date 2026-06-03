"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowLeft, Lock, Shield, FileText } from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function DonateExperience() {
  const router = useRouter();
  const optionsRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);

  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards reveal
      gsap.fromTo(".donate-card",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: optionsRef.current, start: "top 75%" } }
      );

      // Custom input reveal
      gsap.fromTo(".custom-donate",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power2.out", scrollTrigger: { trigger: optionsRef.current, start: "top 75%" } }
      );

      // Story reveal
      gsap.fromTo(".story-text",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", scrollTrigger: { trigger: storyRef.current, start: "top 60%" } }
      );

      // Story image subtle scale
      gsap.fromTo(".story-img",
        { scale: 1.05 },
        { scale: 1, duration: 2, ease: "power2.out", scrollTrigger: { trigger: storyRef.current, start: "top bottom" } }
      );

      gsap.fromTo(".trust-item",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: ".trust-section", start: "top 85%" } }
      );
    });

    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1200);

    return () => {
      ctx.revert();
      clearTimeout(refreshTimeout);
    };
  }, []);

  const handleBack = () => {
    gsap.to(".donate-page", { y: "100%", duration: 0.9, ease: "power3.inOut", onComplete: () => router.push("/") });
  };

  const donationOptions = [
    { amount: 24000, desc: "Provides full support including education, meals, and care.", duration: "12 MONTHS", bg: "/story_kids.png" },
    { amount: 12000, desc: "Supports intensive educational programs and health checkups.", duration: "6 MONTHS", bg: "/hero_image.png" },
    { amount: 8000, desc: "Ensures daily meals and essential learning materials.", duration: "4 MONTHS", bg: "/documentary_bg.png" },
    { amount: 6000, desc: "Covers school fees and supplementary tuition support.", duration: "3 MONTHS", bg: "/story_women.png" },
    { amount: 4000, desc: "Provides a term of notebooks, textbooks, and uniforms.", duration: "2 MONTHS", bg: "/hero_cutout.png" },
    { amount: 2000, desc: "Funds immediate nutritional and basic educational needs.", duration: "1 MONTH", bg: "/story_kids.png" },
  ];

  const handleCardClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
  };

  return (
    <SmoothScroll>
      <motion.main
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="donate-page w-full min-h-screen bg-[#0B0B0B] text-white overflow-hidden relative z-[100]"
      >
        {/* Subtle global atmosphere */}
        <div className="fixed inset-0 pointer-events-none mix-blend-overlay opacity-[0.02]" style={{ backgroundImage: "url('/paper_scene_1_1778800697156.png')", backgroundSize: "cover" }}></div>

        {/* Minimal Nav */}
        <div className="absolute top-0 left-0 w-full p-6 lg:px-12 flex justify-between items-center z-50 mix-blend-difference">
          <button onClick={handleBack} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-inter font-medium text-[11px] tracking-[0.2em] uppercase">Return to Home</span>
          </button>
        </div>

        {/* SECTION 1 - HERO */}
        <section className="relative w-full min-h-screen pt-24 px-[5vw] flex items-center justify-center border-b border-white/5">
          <div className="max-w-[1440px] w-full flex flex-col md:flex-row items-center justify-between gap-12">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              className="w-full md:w-[50%] flex flex-col items-start z-20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-6 h-[1px] bg-white/30"></div>
                <span className="font-inter font-medium text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF]">
                  EVERY CONTRIBUTION MATTERS
                </span>
              </div>

              <h1 className="font-cormorant font-light text-[56px] md:text-[80px] leading-[1.05] text-[#F5F5F5] mb-6 tracking-[-0.02em]">
                Help turn <br />
                small donations <br />
                into <span className="text-[#FF9A3C] italic">real futures.</span>
              </h1>

              <p className="font-inter text-[15px] leading-[1.8] text-[#9CA3AF] max-w-[480px] mb-12">
                Your support directly funds education, daily warm meals, essential books, and vital healthcare for children living beyond survival. You aren&apos;t just giving money; you are restoring dignity and expanding what&apos;s possible for an entire village.
              </p>

              <button onClick={() => optionsRef.current?.scrollIntoView({ behavior: "smooth" })} className="bg-white text-black font-inter font-semibold text-[11px] tracking-[0.18em] uppercase rounded-full h-[48px] px-10 hover:bg-gray-200 transition-colors">
                DONATE NOW
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="w-full md:w-[45%] h-[60vh] md:h-[80vh] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent z-10 opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-transparent to-transparent z-10 opacity-60"></div>
              <img src="/documentary_bg.png" alt="Children studying" className="w-full h-full object-cover object-center grayscale brightness-50 contrast-125 mask-image-fade" />
            </motion.div>

          </div>
        </section>

        {/* SECTION 2 - DONATION OPTIONS */}
        <section ref={optionsRef} className="w-full py-32 px-[5vw] bg-[#0B0B0B] relative z-20">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-20 text-center">
              <span className="font-inter font-medium text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF]">Choose Your Impact</span>
              <h2 className="font-cormorant font-light text-[48px] text-[#F5F5F5] mt-4">Every amount helps support a child&apos;s future.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {donationOptions.map((opt, i) => (
                <div
                  key={i}
                  onClick={() => handleCardClick(opt.amount)}
                  className={`donate-card relative cursor-pointer bg-[#151515] border rounded-2xl overflow-hidden group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] p-8 h-[260px] flex flex-col justify-between ${selectedAmount === opt.amount ? 'border-[#FF9A3C]/40 bg-[#1A1A1A]' : 'border-white/[0.08] hover:border-white/20'}`}
                >
                  {/* Atmospheric Background Image */}
                  <div className={`absolute inset-0 z-0 transition-all duration-700 ease-out group-hover:scale-105 ${selectedAmount === opt.amount ? 'opacity-15' : 'opacity-0 group-hover:opacity-15'}`}>
                    <img src={opt.bg} alt="" className="w-full h-full object-cover grayscale brightness-75 contrast-125" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/70 to-transparent"></div>
                  </div>

                  {/* Top: Amount */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-cormorant text-[40px] text-[#F5F5F5]">₹{opt.amount.toLocaleString()}</span>
                    {selectedAmount === opt.amount && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-3 h-3 rounded-full bg-[#FF9A3C] shadow-[0_0_12px_rgba(255,154,60,0.4)]" />
                    )}
                  </div>

                  {/* Middle: Desc */}
                  <div className="relative z-10 mt-auto mb-6">
                    <p className="font-inter text-[14px] leading-[1.6] text-[#9CA3AF] group-hover:text-white/80 transition-colors duration-500">
                      {opt.desc}
                    </p>
                  </div>

                  {/* Bottom: Duration Highlight */}
                  <div className="relative z-10">
                    <span className="font-inter font-bold text-[10px] tracking-[0.2em] text-[#FF9A3C] uppercase">
                      {opt.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* SECTION 3 - CUSTOM DONATION */}
            <div className="custom-donate mt-20 max-w-[600px] mx-auto flex flex-col items-center">
              <h3 className="font-cormorant text-[28px] text-[#F5F5F5] mb-8">Or choose your own contribution</h3>

              <div className="w-full relative flex items-center">
                <span className="absolute left-6 font-cormorant text-[32px] text-[#9CA3AF]">₹</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="Enter amount"
                  className="w-full bg-[#151515] border border-white/[0.08] rounded-xl h-[80px] pl-16 pr-8 font-cormorant text-[32px] text-[#F5F5F5] placeholder:text-white/20 focus:outline-none focus:border-[#FF9A3C]/50 transition-colors"
                />
              </div>

              <button onClick={() => setIsModalOpen(true)} className="mt-8 bg-[#FF9A3C] text-[#0B0B0B] font-inter font-bold text-[12px] tracking-[0.2em] uppercase rounded-full h-[56px] px-12 hover:brightness-110 transition-all flex items-center justify-center w-full sm:w-auto">
                PROCEED TO DONATE
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 4 - IMPACT STORY */}
        <section ref={storyRef} className="w-full h-[80vh] relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/story_kids.png" alt="Impact" className="story-img w-full h-full object-cover object-top grayscale brightness-[0.3]" />
            <div className="absolute inset-0 bg-[#0B0B0B]/60"></div>
          </div>

          <div className="story-text relative z-10 max-w-[800px] mx-auto text-center px-[5vw]">
            <h2 className="font-cormorant font-light text-[40px] md:text-[64px] leading-[1.1] text-[#F5F5F5] mb-8">
              “One donation can change <br /><span className="italic">an entire year for a child.”</span>
            </h2>
            <p className="font-inter text-[15px] leading-[1.8] text-[#9CA3AF] max-w-[600px] mx-auto">
              Behind every number is a name. A child who no longer has to work the fields. A young girl who can finally afford textbooks. A family that knows where their next meal is coming from. Your generosity is the quiet force rewriting these stories every single day.
            </p>
          </div>
        </section>

        {/* SECTION 5 - TRUST & TRANSPARENCY */}
        <section className="trust-section w-full py-24 px-[5vw] bg-[#0B0B0B] border-t border-white/5">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/5 pb-24">
            <div className="trust-item flex flex-col items-center text-center">
              <Lock size={24} className="text-[#9CA3AF] mb-6" strokeWidth={1.5} />
              <h4 className="font-inter font-medium text-[13px] tracking-wide text-[#F5F5F5] mb-2 uppercase tracking-[0.1em]">Secure Donation</h4>
              <p className="font-inter text-[13px] text-[#9CA3AF] max-w-[250px]">Your payment is processed through industry standard secure 256-bit encryption.</p>
            </div>

            <div className="trust-item flex flex-col items-center text-center">
              <FileText size={24} className="text-[#9CA3AF] mb-6" strokeWidth={1.5} />
              <h4 className="font-inter font-medium text-[13px] tracking-wide text-[#F5F5F5] mb-2 uppercase tracking-[0.1em]">100% Transparency</h4>
              <p className="font-inter text-[13px] text-[#9CA3AF] max-w-[250px]">We provide detailed annual reports so you know exactly where your money goes.</p>
            </div>

            <div className="trust-item flex flex-col items-center text-center">
              <Shield size={24} className="text-[#9CA3AF] mb-6" strokeWidth={1.5} />
              <h4 className="font-inter font-medium text-[13px] tracking-wide text-[#F5F5F5] mb-2 uppercase tracking-[0.1em]">Tax Benefits</h4>
              <p className="font-inter text-[13px] text-[#9CA3AF] max-w-[250px]">All donations are eligible for tax exemption under section 80G of the Income Tax Act.</p>
            </div>
          </div>
          <div className="text-center pt-12">
            <p className="font-inter text-[11px] text-[#9CA3AF] uppercase tracking-[0.2em]">UNITED H.O.P.E FOUNDATION © 2026</p>
          </div>
        </section>

      </motion.main>

      {/* DONATION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-[#151515] border border-white/10 rounded-2xl p-8 md:p-12 w-full max-w-[600px] shadow-2xl"
          >
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-[#9CA3AF] hover:text-white transition-colors">✕</button>
            <h3 className="font-cormorant text-[36px] text-[#F5F5F5] mb-2">Complete your donation</h3>
            <p className="font-inter text-[14px] text-[#9CA3AF] mb-8">You are contributing ₹{customAmount || selectedAmount || "0"} towards a child&apos;s future.</p>

            <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); alert("Payment Gateway Simulated. Thank you!"); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-inter text-[11px] text-[#9CA3AF] tracking-[0.1em] uppercase">Full Name</label>
                  <input required type="text" className="bg-[#0B0B0B] border border-white/10 rounded-lg px-4 h-[48px] text-[14px] text-white focus:outline-none focus:border-[#FF9A3C] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-inter text-[11px] text-[#9CA3AF] tracking-[0.1em] uppercase">Email Address</label>
                  <input required type="email" className="bg-[#0B0B0B] border border-white/10 rounded-lg px-4 h-[48px] text-[14px] text-white focus:outline-none focus:border-[#FF9A3C] transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-inter text-[11px] text-[#9CA3AF] tracking-[0.1em] uppercase">Phone Number</label>
                <input required type="tel" className="bg-[#0B0B0B] border border-white/10 rounded-lg px-4 h-[48px] text-[14px] text-white focus:outline-none focus:border-[#FF9A3C] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-inter text-[11px] text-[#9CA3AF] tracking-[0.1em] uppercase">PAN Number (For 80G Tax Exemption)</label>
                <input type="text" className="bg-[#0B0B0B] border border-white/10 rounded-lg px-4 h-[48px] text-[14px] text-white focus:outline-none focus:border-[#FF9A3C] transition-colors" />
              </div>
              <button type="submit" className="mt-4 w-full bg-[#FF9A3C] text-[#0B0B0B] font-inter font-bold text-[12px] tracking-[0.2em] uppercase rounded-lg h-[56px] hover:brightness-110 transition-all flex items-center justify-center">
                Proceed to Payment Securely
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </SmoothScroll>
  );
}
