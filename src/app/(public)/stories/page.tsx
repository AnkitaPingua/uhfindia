"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Quote } from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";
import { useRouter } from "next/navigation";

const stories = [
  {
    id: 1,
    name: "Riya, 11",
    location: "Barmer, Rajasthan",
    tag: "Education",
    tagColor: "#FF9A3C",
    quote: "I used to skip school to help my mother sell vegetables. Now I top my class every term.",
    body: "Riya's family of six survived on under ₹4,000 a month. With UHF support, she received notebooks, a uniform, and a tutor — three things that changed her relationship with school forever.",
    img: "/story_kids.png",
  },
  {
    id: 2,
    name: "Sunita Bai, 34",
    location: "Sirohi, Rajasthan",
    tag: "Women Empowerment",
    tagColor: "#A78BFA",
    quote: "I was told women in my village don't need to work. UHF proved them wrong.",
    body: "A skill-development workshop funded by intern campaigns trained Sunita in tailoring. Today she runs a small unit employing four other women from her village.",
    img: "/story_women.png",
  },
  {
    id: 3,
    name: "Arjun, 8",
    location: "Dharavi, Mumbai",
    tag: "Nutrition",
    tagColor: "#4ADE80",
    quote: "Now I eat lunch every day at school. Before, some days I didn't eat at all.",
    body: "Arjun was identified by UHF field workers as severely malnourished. Monthly nutrition kits and mid-day meal sponsorship have brought his weight to a healthy range within six months.",
    img: "/documentary_bg.png",
  },
  {
    id: 4,
    name: "Fatima, 16",
    location: "Jaisalmer, Rajasthan",
    tag: "Healthcare",
    tagColor: "#F87171",
    quote: "The doctor said I had a treatable condition. Nobody in my village had ever seen a doctor before.",
    body: "A UHF health camp caught Fatima's anaemia early. With medication and dietary support funded by donors, she recovered fully and returned to school for her board exams.",
    img: "/hero_image.png",
  },
];

export default function StoriesPage() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const s = stories[active];

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
          <span className="font-cormorant font-light text-[15px] tracking-[0.18em] text-white/70 uppercase hidden sm:block">Impact Stories</span>
          <div className="w-20" />
        </div>

        <div className="pt-[72px]">
          {/* Header */}
          <section className="px-[5vw] pt-20 pb-16 border-b border-white/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-[1px] bg-white/30" />
              <span className="font-inter text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF]">Real Lives, Real Change</span>
            </div>
            <h1 className="font-cormorant font-light text-[56px] md:text-[72px] leading-[1.05] text-[#F5F5F5] tracking-[-0.02em]">
              Stories of <span className="italic text-[#FF9A3C]">Impact.</span>
            </h1>
          </section>

          {/* Featured story */}
          <section className="px-[5vw] py-16 border-b border-white/5">
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 items-start">
              {/* Image */}
              <motion.div
                key={s.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-[45%] h-[420px] rounded-3xl overflow-hidden relative flex-shrink-0"
              >
                <img src={s.img} alt={s.name} className="w-full h-full object-cover grayscale brightness-50 contrast-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-2">
                  <span className="font-inter font-semibold text-[10px] tracking-[0.18em] uppercase px-3 py-1 rounded-full border"
                    style={{ background: `${s.tagColor}15`, color: s.tagColor, borderColor: `${s.tagColor}30` }}>
                    {s.tag}
                  </span>
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex flex-col gap-6 flex-1">
                <div>
                  <p className="font-inter text-[11px] uppercase tracking-[0.2em] text-[#9CA3AF] mb-1">{s.location}</p>
                  <h2 className="font-cormorant text-[42px] text-[#F5F5F5]">{s.name}</h2>
                </div>

                <div className="relative pl-8 border-l border-[#FF9A3C]/30">
                  <Quote size={20} className="absolute -left-3 top-0 text-[#FF9A3C]" />
                  <p className="font-cormorant text-[24px] italic leading-[1.5] text-[#E5E5E5]">"{s.quote}"</p>
                </div>

                <p className="font-inter text-[14px] leading-[1.8] text-[#9CA3AF]">{s.body}</p>

                {/* Story selector */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {stories.map((st, i) => (
                    <button
                      key={st.id}
                      onClick={() => setActive(i)}
                      className={`font-inter text-[11px] tracking-[0.15em] uppercase px-4 h-[32px] rounded-full border transition-all ${
                        active === i
                          ? "bg-white text-black border-white"
                          : "border-white/15 text-white/50 hover:text-white hover:border-white/30"
                      }`}
                    >
                      {st.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* All stories grid */}
          <section className="px-[5vw] py-16">
            <div className="max-w-[1200px] mx-auto">
              <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF] mb-10">All Stories</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stories.map((st, i) => (
                  <div
                    key={st.id}
                    onClick={() => setActive(i)}
                    className={`group bg-[#0F0F0F] border rounded-3xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 ${
                      active === i ? "border-[#FF9A3C]/40" : "border-white/[0.07] hover:border-white/15"
                    }`}
                  >
                    <div className="flex gap-5 p-6 items-start">
                      <div className="w-[80px] h-[80px] rounded-2xl overflow-hidden flex-shrink-0">
                        <img src={st.img} alt={st.name} className="w-full h-full object-cover grayscale brightness-50" />
                      </div>
                      <div className="flex flex-col gap-2 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-inter text-[9px] tracking-[0.18em] uppercase px-2 py-0.5 rounded-full border"
                            style={{ background: `${st.tagColor}15`, color: st.tagColor, borderColor: `${st.tagColor}30` }}>
                            {st.tag}
                          </span>
                        </div>
                        <h3 className="font-cormorant text-[20px] text-[#F5F5F5]">{st.name}</h3>
                        <p className="font-inter text-[12px] italic text-[#9CA3AF] line-clamp-2">"{st.quote}"</p>
                        <p className="font-inter text-[11px] text-white/30 uppercase tracking-[0.1em]">{st.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Documentary CTA */}
          <section className="px-[5vw] py-16 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto">
              <div className="relative rounded-3xl overflow-hidden h-[300px]">
                <img src="/documentary_bg.png" alt="" className="w-full h-full object-cover grayscale brightness-30" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/80 via-[#0B0B0B]/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                  <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF]">Documentary</p>
                  <h2 className="font-cormorant font-light text-[40px] md:text-[56px] text-[#F5F5F5] text-center">Watch the Full Story</h2>
                  <button className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors group">
                    <Play size={20} fill="white" className="text-white ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
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
