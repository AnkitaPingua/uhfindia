"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Share2, Users, TrendingUp, Clock } from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

// ── Mock fundraiser campaigns ──────────────────────────────────────────────
const campaigns = [
  {
    id: 1,
    internCode: "ALX-2026",
    name: "Ankita Pingua",
    title: "Help me fund education for 50 children",
    raised: 75000,
    goal: 100000,
    donors: 32,
    daysLeft: 18,
    bg: "/story_kids.png",
    tag: "Education",
  },
  {
    id: 2,
    internCode: "PRI-2026",
    name: "Priya Mehta",
    title: "Nutrition kits for families in rural Rajasthan",
    raised: 42000,
    goal: 80000,
    donors: 19,
    daysLeft: 24,
    bg: "/story_women.png",
    tag: "Nutrition",
  },
  {
    id: 3,
    internCode: "ROH-2026",
    name: "Rohan Das",
    title: "Books & uniforms for 100 students",
    raised: 28500,
    goal: 60000,
    donors: 14,
    daysLeft: 30,
    bg: "/documentary_bg.png",
    tag: "Learning",
  },
  {
    id: 4,
    internCode: "AIS-2026",
    name: "Aisha Khan",
    title: "Healthcare camps in tribal villages",
    raised: 95000,
    goal: 120000,
    donors: 47,
    daysLeft: 7,
    bg: "/hero_image.png",
    tag: "Healthcare",
  },
  {
    id: 5,
    internCode: "SNE-2026",
    name: "Sneha Reddy",
    title: "Digital classrooms for 3 government schools",
    raised: 12000,
    goal: 50000,
    donors: 8,
    daysLeft: 45,
    bg: "/hero_cutout.png",
    tag: "Technology",
  },
  {
    id: 6,
    internCode: "VIK-2026",
    name: "Vikram Malhotra",
    title: "Clean water access for 200 households",
    raised: 110000,
    goal: 150000,
    donors: 63,
    daysLeft: 12,
    bg: "/story_kids.png",
    tag: "Welfare",
  },
];

const TAG_COLORS: Record<string, string> = {
  Education: "#FF9A3C",
  Nutrition: "#4ADE80",
  Learning: "#60A5FA",
  Healthcare: "#F87171",
  Technology: "#A78BFA",
  Welfare: "#34D399",
};

// ──────────────────────────────────────────────────────────────────────────────

export default function FundraiserPage() {
  const router = useRouter();
  const cardsRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".campaign-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
        }
      );
    });
    const t = setTimeout(() => ScrollTrigger.refresh(), 800);
    return () => { ctx.revert(); clearTimeout(t); };
  }, []);

  const tags = ["All", ...Array.from(new Set(campaigns.map((c) => c.tag)))];
  const filtered = filter === "All" ? campaigns : campaigns.filter((c) => c.tag === filter);

  const totalRaised = campaigns.reduce((s, c) => s + c.raised, 0);
  const totalDonors = campaigns.reduce((s, c) => s + c.donors, 0);

  return (
    <SmoothScroll>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="w-full min-h-screen bg-[#0B0B0B] text-white overflow-hidden"
      >
        {/* ── Nav ────────────────────────────────────────── */}
        <div className="fixed top-0 left-0 w-full px-6 lg:px-12 h-[72px] flex items-center justify-between z-50 bg-[#0B0B0B]/80 backdrop-blur-md border-b border-white/5">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-inter font-medium text-[11px] tracking-[0.2em] uppercase">Home</span>
          </button>

          <span className="font-cormorant font-light text-[15px] tracking-[0.18em] text-white/80 uppercase hidden sm:block">
            Fundraiser Campaigns
          </span>

          <div className="w-20" /> {/* spacer */}
        </div>

        <div className="pt-[72px]">

          {/* ── Hero ───────────────────────────────────────── */}
          <section className="relative w-full py-24 px-[5vw] flex flex-col items-center text-center border-b border-white/5 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF9A3C]/5 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative z-10 max-w-[760px] mx-auto"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-6 h-[1px] bg-white/30" />
                <span className="font-inter font-medium text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF]">
                  Intern-Led Campaigns
                </span>
                <div className="w-6 h-[1px] bg-white/30" />
              </div>

              <h1 className="font-cormorant font-light text-[56px] md:text-[80px] leading-[1.05] text-[#F5F5F5] mb-6 tracking-[-0.02em]">
                Every Intern is <br />
                <span className="italic text-[#FF9A3C]">a Change-Maker.</span>
              </h1>

              <p className="font-inter text-[15px] leading-[1.8] text-[#9CA3AF] max-w-[540px] mx-auto mb-10">
                Our interns run independent fundraising campaigns to support education, nutrition, healthcare and welfare
                across India. Find a campaign that moves you and donate directly.
              </p>

              {/* Global stats */}
              <div className="flex flex-wrap items-center justify-center gap-8 mt-4">
                {[
                  { icon: <TrendingUp size={16} />, value: `₹${(totalRaised / 100000).toFixed(1)}L`, label: "Total Raised" },
                  { icon: <Users size={16} />, value: totalDonors.toString(), label: "Total Donors" },
                  { icon: <Heart size={16} />, value: campaigns.length.toString(), label: "Active Campaigns" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2 text-[#FF9A3C]">
                      {s.icon}
                      <span className="font-cormorant text-[36px] leading-none">{s.value}</span>
                    </div>
                    <span className="font-inter text-[10px] text-[#9CA3AF] uppercase tracking-[0.2em]">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* ── Filters ────────────────────────────────────── */}
          <section className="px-[5vw] py-10 flex items-center gap-3 flex-wrap border-b border-white/5">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`font-inter text-[11px] tracking-[0.15em] uppercase px-5 h-[34px] rounded-full border transition-all duration-300 ${filter === tag
                    ? "bg-white text-black border-white"
                    : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
                  }`}
              >
                {tag}
              </button>
            ))}
          </section>

          {/* ── Campaign Cards ─────────────────────────────── */}
          <section ref={cardsRef} className="px-[5vw] py-20">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filtered.map((campaign) => {
                const pct = Math.min((campaign.raised / campaign.goal) * 100, 100);
                const tagColor = TAG_COLORS[campaign.tag] ?? "#FF9A3C";

                return (
                  <div
                    key={campaign.id}
                    className="campaign-card group relative bg-[#111] border border-white/[0.07] rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-1 flex flex-col"
                  >
                    {/* Cover image */}
                    <div className="relative h-[220px] overflow-hidden flex-shrink-0">
                      <img
                        src={campaign.bg}
                        alt=""
                        className="w-full h-full object-cover grayscale brightness-50 contrast-125 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />

                      {/* Tag */}
                      <span
                        className="absolute top-4 left-4 font-inter font-semibold text-[10px] tracking-[0.18em] uppercase px-3 py-1 rounded-full"
                        style={{ background: `${tagColor}20`, color: tagColor, border: `1px solid ${tagColor}40` }}
                      >
                        {campaign.tag}
                      </span>

                      {/* Days left */}
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 text-white/60 text-[11px]">
                        <Clock size={11} />
                        <span>{campaign.daysLeft} days left</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6">
                      <p className="font-inter text-[11px] text-[#9CA3AF] tracking-[0.1em] uppercase mb-2">
                        by {campaign.name}
                      </p>
                      <h3 className="font-cormorant font-light text-[22px] leading-[1.3] text-[#F5F5F5] mb-5 group-hover:text-white transition-colors">
                        {campaign.title}
                      </h3>

                      {/* Progress */}
                      <div className="mt-auto">
                        <div className="flex justify-between text-[12px] mb-2">
                          <span className="text-[#9CA3AF]">{pct.toFixed(0)}% funded</span>
                          <span className="text-white/60">of ₹{(campaign.goal / 1000).toFixed(0)}K</span>
                        </div>
                        <div className="relative h-[3px] bg-white/10 rounded-full overflow-hidden mb-5">
                          <div
                            className="absolute inset-y-0 left-0 rounded-full"
                            style={{ width: `${pct}%`, background: tagColor }}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-white/50 text-[12px]">
                            <Users size={12} />
                            <span>{campaign.donors} donors</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button className="p-2 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
                              <Share2 size={14} className="text-white/50" />
                            </button>
                            <button
                              onClick={() => window.open(`/donate/${campaign.internCode}`, "_blank")}
                              className="font-inter text-[11px] tracking-[0.15em] uppercase bg-white text-black px-5 py-2.5 rounded-xl hover:bg-[#FF9A3C] hover:text-black transition-all font-semibold"
                            >
                              Donate
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-24 text-white/30 font-inter text-sm tracking-wide">
                No campaigns found for "{filter}"
              </div>
            )}
          </section>

          {/* ── Footer note ────────────────────────────────── */}
          <footer className="border-t border-white/5 py-16 px-[5vw] text-center">
            <p className="font-inter text-[11px] text-[#9CA3AF] uppercase tracking-[0.2em]">
              UNITED H.O.P.E FOUNDATION © 2026 — All donations are 80G tax exempt
            </p>
          </footer>
        </div>
      </motion.main>
    </SmoothScroll>
  );
}
