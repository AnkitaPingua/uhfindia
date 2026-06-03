"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Globe, Shield, Users } from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";
import { useRouter } from "next/navigation";

const values = [
  { icon: <Heart size={22} />, title: "Compassion", desc: "Every action we take is rooted in genuine care for the communities we serve." },
  { icon: <Shield size={22} />, title: "Integrity", desc: "We operate with complete transparency — every rupee is accounted for." },
  { icon: <Globe size={22} />, title: "Impact", desc: "We measure success not in donations raised, but in lives genuinely changed." },
  { icon: <Users size={22} />, title: "Community", desc: "We build long-term relationships, not just one-time charity interventions." },
];

const team = [
  { name: "Priya Sharma", role: "Founder & Executive Director", img: "/story_women.png" },
  { name: "Arjun Nair", role: "Head of Programs", img: "/hero_image.png" },
  { name: "Sunita Reddy", role: "Community Outreach Lead", img: "/documentary_bg.png" },
];

export default function AboutPage() {
  const router = useRouter();

  return (
    <SmoothScroll>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="w-full min-h-screen bg-[#0B0B0B] text-white overflow-hidden"
      >
        {/* Nav */}
        <div className="fixed top-0 left-0 w-full h-[72px] z-50 flex items-center justify-between px-6 lg:px-12 bg-[#0B0B0B]/80 backdrop-blur-md border-b border-white/5">
          <button onClick={() => router.push("/")} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group">
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-inter font-medium text-[11px] tracking-[0.2em] uppercase">Home</span>
          </button>
          <span className="font-cormorant font-light text-[15px] tracking-[0.18em] text-white/70 uppercase hidden sm:block">About Us</span>
          <div className="w-20" />
        </div>

        <div className="pt-[72px]">
          {/* Hero */}
          <section className="relative px-[5vw] py-28 border-b border-white/5 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#FF9A3C]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
              <div className="w-full md:w-[55%]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-6 h-[1px] bg-white/30" />
                  <span className="font-inter text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF]">Who We Are</span>
                </div>
                <h1 className="font-cormorant font-light text-[56px] md:text-[72px] leading-[1.05] text-[#F5F5F5] mb-6 tracking-[-0.02em]">
                  Built on <span className="italic text-[#FF9A3C]">Hope.</span><br />Driven by Action.
                </h1>
                <p className="font-inter text-[15px] leading-[1.8] text-[#9CA3AF] max-w-[500px]">
                  United H.O.P.E Foundation was established with a single belief — that every child, regardless of their circumstances, deserves a fair chance at life. We work in the villages and communities that the world often forgets.
                </p>
              </div>
              <div className="w-full md:w-[42%] h-[380px] rounded-3xl overflow-hidden relative">
                <img src="/story_kids.png" alt="Children" className="w-full h-full object-cover grayscale brightness-50 contrast-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="px-[5vw] py-24 border-b border-white/5">
            <div className="max-w-[900px] mx-auto text-center">
              <span className="font-inter text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF]">Our Mission</span>
              <h2 className="font-cormorant font-light text-[44px] text-[#F5F5F5] mt-4 mb-8 leading-[1.2]">
                "To restore dignity and expand what's possible for every child, woman, and family we reach."
              </h2>
              <p className="font-inter text-[15px] leading-[1.8] text-[#9CA3AF]">
                We run grassroots programmes in education, nutrition, healthcare, and women empowerment — all funded by a transparent network of donors and fundraising interns across India.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="px-[5vw] py-24 border-b border-white/5">
            <div className="max-w-[1200px] mx-auto">
              <div className="mb-16 text-center">
                <span className="font-inter text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF]">What Drives Us</span>
                <h2 className="font-cormorant font-light text-[44px] text-[#F5F5F5] mt-4">Our Core Values</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((v, i) => (
                  <div key={i} className="bg-[#0F0F0F] border border-white/[0.07] rounded-3xl p-8 flex flex-col gap-5 hover:border-[#FF9A3C]/25 transition-colors group">
                    <div className="text-[#FF9A3C]">{v.icon}</div>
                    <h3 className="font-cormorant text-[24px] text-[#F5F5F5]">{v.title}</h3>
                    <p className="font-inter text-[13px] leading-[1.7] text-[#9CA3AF]">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Impact numbers */}
          <section className="px-[5vw] py-24 border-b border-white/5">
            <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "12,000+", label: "Lives Impacted" },
                { value: "200+", label: "Active Interns" },
                { value: "₹42L+", label: "Funds Raised" },
                { value: "8 yrs", label: "Of Service" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <p className="font-cormorant text-[52px] text-[#FF9A3C] leading-none">{s.value}</p>
                  <p className="font-inter text-[11px] text-[#9CA3AF] uppercase tracking-[0.15em]">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section className="px-[5vw] py-24">
            <div className="max-w-[1200px] mx-auto">
              <div className="mb-16 text-center">
                <span className="font-inter text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF]">Leadership</span>
                <h2 className="font-cormorant font-light text-[44px] text-[#F5F5F5] mt-4">Our Team</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((m, i) => (
                  <div key={i} className="bg-[#0F0F0F] border border-white/[0.07] rounded-3xl overflow-hidden group hover:border-white/15 transition-colors">
                    <div className="h-[260px] overflow-hidden">
                      <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-60 transition-all duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <p className="font-cormorant text-[22px] text-[#F5F5F5]">{m.name}</p>
                      <p className="font-inter text-[12px] text-[#9CA3AF] mt-1 uppercase tracking-[0.1em]">{m.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <footer className="border-t border-white/5 py-12 px-[5vw] text-center">
            <p className="font-inter text-[11px] text-[#9CA3AF] uppercase tracking-[0.2em]">UNITED H.O.P.E FOUNDATION © 2026</p>
          </footer>
        </div>
      </motion.main>
    </SmoothScroll>
  );
}
