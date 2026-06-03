"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, MapPin, Send, Check } from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
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
          <span className="font-cormorant font-light text-[15px] tracking-[0.18em] text-white/70 uppercase hidden sm:block">Contact Us</span>
          <div className="w-20" />
        </div>

        <div className="pt-[72px]">
          {/* Header */}
          <section className="px-[5vw] pt-20 pb-16 border-b border-white/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-[1px] bg-white/30" />
              <span className="font-inter text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF]">Get In Touch</span>
            </div>
            <h1 className="font-cormorant font-light text-[56px] md:text-[72px] leading-[1.05] text-[#F5F5F5] tracking-[-0.02em]">
              We'd love to <span className="italic text-[#FF9A3C]">hear</span><br /> from you.
            </h1>
          </section>

          {/* Content */}
          <section className="px-[5vw] py-20">
            <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-16">

              {/* Left info */}
              <div className="w-full lg:w-[38%] flex flex-col gap-10">
                <div>
                  <h2 className="font-cormorant text-[28px] text-[#F5F5F5] mb-4">Contact Information</h2>
                  <p className="font-inter text-[14px] leading-[1.8] text-[#9CA3AF]">
                    Whether you want to donate, volunteer, partner with us, or simply learn more — reach out and we'll respond within 24 hours.
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  {[
                    { icon: <Mail size={18} />, label: "Email", value: "contact@unitedhope.org" },
                    { icon: <Phone size={18} />, label: "Phone", value: "+91 98765 43210" },
                    { icon: <MapPin size={18} />, label: "Address", value: "12, Sewa Marg, New Delhi — 110001, India" },
                  ].map((c, i) => (
                    <div key={i} className="flex items-start gap-5">
                      <div className="w-10 h-10 rounded-xl bg-[#FF9A3C]/10 flex items-center justify-center flex-shrink-0 text-[#FF9A3C]">
                        {c.icon}
                      </div>
                      <div>
                        <p className="font-inter text-[10px] uppercase tracking-[0.15em] text-[#9CA3AF] mb-1">{c.label}</p>
                        <p className="font-inter text-[14px] text-[#F5F5F5]">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="w-full h-[200px] rounded-2xl overflow-hidden border border-white/[0.07] relative">
                  <img src="/documentary_bg.png" alt="" className="w-full h-full object-cover grayscale brightness-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <MapPin size={28} className="text-[#FF9A3C]" />
                      <span className="font-inter text-[11px] text-white/60 uppercase tracking-[0.1em]">New Delhi, India</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right form */}
              <div className="w-full lg:w-[58%]">
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full gap-6 py-20 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#FF9A3C]/10 flex items-center justify-center">
                      <Check size={28} className="text-[#FF9A3C]" />
                    </div>
                    <h3 className="font-cormorant text-[36px] text-[#F5F5F5]">Message Sent!</h3>
                    <p className="font-inter text-[14px] text-[#9CA3AF] max-w-[360px]">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button onClick={() => setSent(false)} className="font-inter text-[11px] uppercase tracking-[0.15em] border border-white/15 text-white/60 rounded-full h-[40px] px-8 hover:bg-white/8 transition-all">
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { label: "Full Name", key: "name", type: "text" },
                        { label: "Email Address", key: "email", type: "email" },
                      ].map((f) => (
                        <div key={f.key} className="flex flex-col gap-2">
                          <label className="font-inter text-[11px] uppercase tracking-[0.12em] text-[#9CA3AF]">{f.label}</label>
                          <input
                            required
                            type={f.type}
                            value={form[f.key as keyof typeof form]}
                            onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                            className="bg-[#111] border border-white/[0.08] rounded-xl h-[52px] px-5 font-inter text-[14px] text-[#F5F5F5] placeholder:text-white/20 focus:outline-none focus:border-[#FF9A3C]/50 transition-colors"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-inter text-[11px] uppercase tracking-[0.12em] text-[#9CA3AF]">Subject</label>
                      <input
                        required
                        type="text"
                        value={form.subject}
                        onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                        className="bg-[#111] border border-white/[0.08] rounded-xl h-[52px] px-5 font-inter text-[14px] text-[#F5F5F5] placeholder:text-white/20 focus:outline-none focus:border-[#FF9A3C]/50 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-inter text-[11px] uppercase tracking-[0.12em] text-[#9CA3AF]">Message</label>
                      <textarea
                        required
                        rows={6}
                        value={form.message}
                        onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                        className="bg-[#111] border border-white/[0.08] rounded-xl px-5 py-4 font-inter text-[14px] text-[#F5F5F5] placeholder:text-white/20 focus:outline-none focus:border-[#FF9A3C]/50 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full md:w-fit bg-[#FF9A3C] text-black font-inter font-bold text-[12px] tracking-[0.2em] uppercase rounded-full h-[52px] px-12 hover:brightness-110 transition-all flex items-center justify-center gap-3"
                    >
                      Send Message <Send size={14} />
                    </button>
                  </form>
                )}
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
