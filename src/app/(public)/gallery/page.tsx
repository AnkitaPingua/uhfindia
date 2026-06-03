"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";
import { useRouter } from "next/navigation";

const images = [
  { id: 1, src: "/story_kids.png", caption: "Children at the learning centre, Barmer", category: "Education" },
  { id: 2, src: "/story_women.png", caption: "Women Rise graduation ceremony", category: "Empowerment" },
  { id: 3, src: "/documentary_bg.png", caption: "Health camp at Sirohi village", category: "Healthcare" },
  { id: 4, src: "/hero_image.png", caption: "Annual Gala — New Delhi 2025", category: "Events" },
  { id: 5, src: "/hero_cutout.png", caption: "Children at nutrition drive, Mumbai", category: "Nutrition" },
  { id: 6, src: "/story_kids.png", caption: "Digital classroom inauguration", category: "Education" },
  { id: 7, src: "/documentary_bg.png", caption: "Tree plantation — Green Villages initiative", category: "Environment" },
  { id: 8, src: "/story_women.png", caption: "Tailoring workshop, Jaisalmer", category: "Empowerment" },
  { id: 9, src: "/hero_image.png", caption: "Intern orientation — Batch 6", category: "Events" },
];

const categories = ["All", ...Array.from(new Set(images.map(i => i.category)))];

const CAT_COLORS: Record<string, string> = {
  Education: "#FF9A3C",
  Empowerment: "#A78BFA",
  Healthcare: "#F87171",
  Events: "#D4AF37",
  Nutrition: "#4ADE80",
  Environment: "#34D399",
};

export default function GalleryPage() {
  const router = useRouter();
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter(i => i.category === filter);

  const prev = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  };
  const next = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % filtered.length);
  };

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
          <span className="font-cormorant font-light text-[15px] tracking-[0.18em] text-white/70 uppercase hidden sm:block">Gallery</span>
          <div className="w-20" />
        </div>

        <div className="pt-[72px]">
          {/* Header */}
          <section className="px-[5vw] pt-20 pb-12 border-b border-white/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-[1px] bg-white/30" />
              <span className="font-inter text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF]">Visual Archive</span>
            </div>
            <h1 className="font-cormorant font-light text-[56px] md:text-[72px] leading-[1.05] text-[#F5F5F5] tracking-[-0.02em]">
              A Year in <span className="italic text-[#FF9A3C]">Pictures.</span>
            </h1>
          </section>

          {/* Filter bar */}
          <section className="px-[5vw] py-8 flex flex-wrap gap-3 border-b border-white/5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setLightbox(null); }}
                className={`font-inter text-[11px] tracking-[0.15em] uppercase px-5 h-[34px] rounded-full border transition-all ${
                  filter === cat ? "bg-white text-black border-white" : "border-white/15 text-white/50 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </section>

          {/* Masonry grid */}
          <section className="px-[5vw] py-16">
            <div className="max-w-[1300px] mx-auto columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {filtered.map((img, i) => {
                const color = CAT_COLORS[img.category] ?? "#FF9A3C";
                return (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    onClick={() => setLightbox(i)}
                    className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer border border-white/[0.07] hover:border-white/20 transition-all"
                  >
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-auto object-cover grayscale brightness-50 contrast-125 group-hover:brightness-60 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                      <span
                        className="font-inter text-[9px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border mb-2 inline-block"
                        style={{ background: `${color}15`, color, borderColor: `${color}30` }}
                      >
                        {img.category}
                      </span>
                      <p className="font-inter text-[12px] text-white/80 leading-[1.5]">{img.caption}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <footer className="border-t border-white/5 py-12 px-[5vw] text-center">
            <p className="font-inter text-[11px] text-[#9CA3AF] uppercase tracking-[0.2em]">UNITED H.O.P.E FOUNDATION © 2026</p>
          </footer>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
                className="relative max-w-[900px] w-full"
              >
                <img
                  src={filtered[lightbox].src}
                  alt={filtered[lightbox].caption}
                  className="w-full h-auto rounded-2xl object-cover max-h-[75vh]"
                />
                <p className="font-inter text-[13px] text-white/60 mt-4 text-center">{filtered[lightbox].caption}</p>

                {/* Controls */}
                <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <X size={16} className="text-white" />
                </button>
                <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <ChevronLeft size={18} className="text-white" />
                </button>
                <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <ChevronRight size={18} className="text-white" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.main>
    </SmoothScroll>
  );
}
