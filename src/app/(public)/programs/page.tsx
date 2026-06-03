"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Utensils, Heart, Laptop, Home, Leaf } from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";
import { useRouter } from "next/navigation";
import Link from "next/link";

const programs = [
  {
    icon: <BookOpen size={24} />,
    color: "#FF9A3C",
    title: "Education First",
    tag: "Education",
    img: "/story_kids.png",
    short: "Books, uniforms, tuition support, and school fees for children in under-resourced communities.",
    impact: "4,200 children supported",
    desc: "We ensure no child misses school because of financial hardship. Our Education First programme covers school enrolment fees, textbooks, uniforms, stationery, and after-school tutoring — all delivered directly to verified beneficiary families.",
  },
  {
    icon: <Utensils size={24} />,
    color: "#4ADE80",
    title: "NourishIndia",
    tag: "Nutrition",
    img: "/documentary_bg.png",
    short: "Daily nutrition kits and mid-day meal sponsorship for severely malnourished children and families.",
    impact: "3,800 families reached",
    desc: "Malnutrition is still a quiet crisis in rural India. NourishIndia delivers monthly ration kits with pulses, rice, fortified flour, and cooking oil to families flagged by our field workers, alongside supervised mid-day meals in partner schools.",
  },
  {
    icon: <Heart size={24} />,
    color: "#F87171",
    title: "Health for All",
    tag: "Healthcare",
    img: "/hero_image.png",
    short: "Free health camps, mobile clinics, and medicine distribution across remote villages.",
    impact: "12 villages covered",
    desc: "Our mobile health units visit 12 villages monthly, providing free consultations, blood tests, vaccinations, and medicine. Our camps have identified over 600 cases of treatable conditions that would otherwise have gone undiagnosed.",
  },
  {
    icon: <Laptop size={24} />,
    color: "#60A5FA",
    title: "Digital Classrooms",
    tag: "Technology",
    img: "/hero_cutout.png",
    short: "Tablet-based learning labs and digital literacy training for government school students.",
    impact: "8 schools equipped",
    desc: "We convert under-resourced classrooms into digital hubs with refurbished tablets, offline curriculum software, and trained volunteer instructors. Our students learn coding basics, typing, and career skills from Grade 4 onwards.",
  },
  {
    icon: <Home size={24} />,
    color: "#A78BFA",
    title: "Women Rise",
    tag: "Empowerment",
    img: "/story_women.png",
    short: "Skill development, micro-finance access, and entrepreneurship training for rural women.",
    impact: "620 women trained",
    desc: "Women Rise equips rural women with tailoring, handicraft, and business skills through 45-day residential workshops. Graduates receive a starter kit, micro-credit linkage, and market access through UHF's partner network.",
  },
  {
    icon: <Leaf size={24} />,
    color: "#34D399",
    title: "Green Villages",
    tag: "Environment",
    img: "/story_kids.png",
    short: "Clean water access, solar lighting, and tree plantation drives in tribal communities.",
    impact: "200 households electrified",
    desc: "Green Villages installs solar lanterns and water purification units in off-grid tribal settlements. We have planted 14,000 trees and provided clean water access to over 200 households as part of our 2025–26 initiative.",
  },
];

export default function ProgramsPage() {
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
          <span className="font-cormorant font-light text-[15px] tracking-[0.18em] text-white/70 uppercase hidden sm:block">Our Programs</span>
          <div className="w-20" />
        </div>

        <div className="pt-[72px]">
          {/* Header */}
          <section className="px-[5vw] pt-20 pb-16 border-b border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#FF9A3C]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="relative z-10 max-w-[800px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-6 h-[1px] bg-white/30" />
                <span className="font-inter text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF]">Where We Work</span>
              </div>
              <h1 className="font-cormorant font-light text-[56px] md:text-[72px] leading-[1.05] text-[#F5F5F5] tracking-[-0.02em] mb-6">
                Six Programmes. <br /><span className="italic text-[#FF9A3C]">One Mission.</span>
              </h1>
              <p className="font-inter text-[15px] leading-[1.8] text-[#9CA3AF] max-w-[560px]">
                Every programme is designed to address a root cause — not just a symptom — of poverty and inequality in underserved communities across India.
              </p>
            </div>
          </section>

          {/* Programs */}
          <section className="px-[5vw] py-20">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
              {programs.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: 0.05 * i }}
                  className={`group flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} bg-[#0F0F0F] border border-white/[0.07] rounded-3xl overflow-hidden hover:border-white/15 transition-colors`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-[40%] h-[260px] lg:h-auto overflow-hidden relative flex-shrink-0">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale brightness-40 contrast-125 group-hover:scale-105 transition-transform duration-700" />
                    <div className={`absolute inset-0 ${i % 2 === 0 ? "bg-gradient-to-r from-transparent to-[#0F0F0F]" : "bg-gradient-to-l from-transparent to-[#0F0F0F]"} hidden lg:block`} />
                    <span
                      className="absolute top-5 left-5 font-inter font-semibold text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full border"
                      style={{ background: `${p.color}15`, color: p.color, borderColor: `${p.color}30` }}
                    >
                      {p.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-8 lg:p-12 gap-5 flex-1">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${p.color}15`, color: p.color }}>
                        {p.icon}
                      </div>
                      <div>
                        <h2 className="font-cormorant text-[30px] text-[#F5F5F5] leading-none">{p.title}</h2>
                        <p className="font-inter text-[11px] text-white/40 uppercase tracking-[0.1em] mt-1" style={{ color: p.color }}>{p.impact}</p>
                      </div>
                    </div>

                    <p className="font-inter text-[14px] leading-[1.8] text-[#9CA3AF]">{p.desc}</p>

                    <div className="flex gap-4 mt-2">
                      <Link
                        href="/donate"
                        className="font-inter font-bold text-[11px] tracking-[0.15em] uppercase rounded-full h-[40px] px-8 flex items-center transition-all hover:brightness-110"
                        style={{ background: p.color, color: "#0B0B0B" }}
                      >
                        Fund This
                      </Link>
                      <button className="font-inter text-[11px] tracking-[0.15em] uppercase border border-white/15 text-white/60 rounded-full h-[40px] px-8 hover:bg-white/8 hover:text-white transition-all">
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="px-[5vw] py-20 border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF9A3C]/4 to-transparent pointer-events-none" />
            <div className="max-w-[600px] mx-auto text-center relative z-10">
              <h2 className="font-cormorant font-light text-[52px] leading-[1.1] text-[#F5F5F5] mb-6">
                Fund a programme.<br /><span className="italic text-[#FF9A3C]">Change a life.</span>
              </h2>
              <p className="font-inter text-[14px] text-[#9CA3AF] mb-10 leading-[1.8]">
                Every rupee raised by our interns flows directly into one of these six programmes. Donate now and see exactly where it goes.
              </p>
              <Link
                href="/donate"
                className="inline-flex items-center gap-3 bg-[#FF9A3C] text-black font-inter font-bold text-[12px] tracking-[0.2em] uppercase rounded-full h-[54px] px-12 hover:brightness-110 transition-all"
              >
                Donate Now ↗
              </Link>
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
