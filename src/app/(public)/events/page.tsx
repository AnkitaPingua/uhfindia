"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Clock, ChevronRight } from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";
import { useRouter } from "next/navigation";

const events = [
  {
    id: 1,
    title: "Annual Fundraising Gala 2026",
    date: "July 15, 2026",
    time: "6:00 PM — 10:00 PM",
    location: "The Leela Palace, New Delhi",
    category: "Fundraiser",
    color: "#D4AF37",
    img: "/hero_image.png",
    desc: "Join us for an evening of inspiration, music, and impact. Meet our top interns, witness live auctions, and celebrate the change we've built together.",
    featured: true,
  },
  {
    id: 2,
    title: "Community Health Camp — Rajasthan",
    date: "June 28, 2026",
    time: "9:00 AM — 5:00 PM",
    location: "Barmer Village, Rajasthan",
    category: "Outreach",
    color: "#4ADE80",
    img: "/documentary_bg.png",
    desc: "Free health checkups, nutrition kits, and medical consultations for 500+ families across three villages.",
    featured: false,
  },
  {
    id: 3,
    title: "Intern Orientation — Batch 7",
    date: "June 22, 2026",
    time: "11:00 AM — 1:00 PM",
    location: "Online (Zoom)",
    category: "Internship",
    color: "#60A5FA",
    img: "/story_kids.png",
    desc: "Welcome session for all new interns. Get your campaign code, meet your team leader, and learn how to maximise your fundraising impact.",
    featured: false,
  },
  {
    id: 4,
    title: "Education Drive — Mumbai Schools",
    date: "July 3, 2026",
    time: "10:00 AM — 4:00 PM",
    location: "Dharavi, Mumbai",
    category: "Education",
    color: "#F87171",
    img: "/story_women.png",
    desc: "Distribution of 2,000 notebooks, stationery kits, and school bags funded entirely by intern campaigns.",
    featured: false,
  },
  {
    id: 5,
    title: "Leadership Conclave 2026",
    date: "August 10, 2026",
    time: "10:00 AM — 6:00 PM",
    location: "IHC Auditorium, New Delhi",
    category: "Conference",
    color: "#A78BFA",
    img: "/hero_cutout.png",
    desc: "A full-day summit featuring guest speakers, panel discussions on social entrepreneurship, and recognition of top performers.",
    featured: false,
  },
];

export default function EventsPage() {
  const router = useRouter();
  const featured = events.find(e => e.featured)!;
  const rest = events.filter(e => !e.featured);

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
          <span className="font-cormorant font-light text-[15px] tracking-[0.18em] text-white/70 uppercase hidden sm:block">Events</span>
          <div className="w-20" />
        </div>

        <div className="pt-[72px]">
          {/* Header */}
          <section className="px-[5vw] pt-20 pb-16 border-b border-white/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-[1px] bg-white/30" />
              <span className="font-inter text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF]">What's Happening</span>
            </div>
            <h1 className="font-cormorant font-light text-[56px] md:text-[72px] leading-[1.05] text-[#F5F5F5] tracking-[-0.02em]">
              Upcoming <span className="italic text-[#FF9A3C]">Events.</span>
            </h1>
          </section>

          {/* Featured */}
          <section className="px-[5vw] py-16 border-b border-white/5">
            <div className="max-w-[1200px] mx-auto">
              <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF] mb-8">Featured Event</p>
              <div className="group relative bg-[#0F0F0F] border border-white/[0.07] rounded-3xl overflow-hidden flex flex-col md:flex-row hover:border-[#D4AF37]/30 transition-colors">
                <div className="w-full md:w-[45%] h-[300px] md:h-auto overflow-hidden relative flex-shrink-0">
                  <img src={featured.img} alt={featured.title} className="w-full h-full object-cover grayscale brightness-50 contrast-125 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F0F0F] hidden md:block" />
                  <span className="absolute top-5 left-5 font-inter font-semibold text-[10px] tracking-[0.18em] uppercase px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30">
                    {featured.category}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12 gap-5">
                  <h2 className="font-cormorant font-light text-[36px] leading-[1.2] text-[#F5F5F5]">{featured.title}</h2>
                  <p className="font-inter text-[14px] leading-[1.8] text-[#9CA3AF]">{featured.desc}</p>
                  <div className="flex flex-col gap-3 mt-2">
                    {[
                      { icon: <Calendar size={13} />, text: featured.date },
                      { icon: <Clock size={13} />, text: featured.time },
                      { icon: <MapPin size={13} />, text: featured.location },
                    ].map((d, i) => (
                      <div key={i} className="flex items-center gap-3 text-[#9CA3AF]">
                        <div className="text-[#D4AF37]">{d.icon}</div>
                        <span className="font-inter text-[13px]">{d.text}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-2 w-fit font-inter font-semibold text-[11px] tracking-[0.18em] uppercase bg-[#D4AF37] text-black rounded-full h-[44px] px-8 hover:brightness-110 transition-all flex items-center gap-2">
                    Register Now <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Rest */}
          <section className="px-[5vw] py-16">
            <div className="max-w-[1200px] mx-auto">
              <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF] mb-8">All Events</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rest.map((ev) => (
                  <div key={ev.id} className="group bg-[#0F0F0F] border border-white/[0.07] rounded-3xl overflow-hidden hover:border-white/15 transition-colors flex flex-col">
                    <div className="relative h-[200px] overflow-hidden">
                      <img src={ev.img} alt={ev.title} className="w-full h-full object-cover grayscale brightness-40 group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] to-transparent" />
                      <span className="absolute top-4 left-4 font-inter font-semibold text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full border"
                        style={{ background: `${ev.color}15`, color: ev.color, borderColor: `${ev.color}30` }}>
                        {ev.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col gap-4 flex-1">
                      <h3 className="font-cormorant text-[22px] leading-[1.3] text-[#F5F5F5]">{ev.title}</h3>
                      <p className="font-inter text-[13px] leading-[1.7] text-[#9CA3AF] flex-1">{ev.desc}</p>
                      <div className="flex flex-col gap-2 pt-3 border-t border-white/5">
                        {[
                          { icon: <Calendar size={12} />, text: ev.date },
                          { icon: <MapPin size={12} />, text: ev.location },
                        ].map((d, i) => (
                          <div key={i} className="flex items-center gap-2 text-[#9CA3AF]">
                            <div style={{ color: ev.color }}>{d.icon}</div>
                            <span className="font-inter text-[12px]">{d.text}</span>
                          </div>
                        ))}
                      </div>
                      <button className="w-fit font-inter text-[11px] tracking-[0.15em] uppercase border border-white/15 text-white/70 rounded-full h-[36px] px-6 hover:bg-white/8 hover:text-white transition-all">
                        Learn More
                      </button>
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
