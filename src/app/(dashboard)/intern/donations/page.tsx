"use client";

import React, { useState } from "react";
import {
  Copy,
  Check,
  Share2,
  QrCode,
  Heart,
  TrendingUp,
  ArrowLeft,
  ExternalLink,
  Download,
  MessageCircle,
  IndianRupee,
} from "lucide-react";
import Link from "next/link";

// ─── Mock Data ────────────────────────────────────────────────────────────────
const INTERN_CODE = "ALX-2026";
const DONATE_URL = `uhf.org/donate/${INTERN_CODE}`;

const donationHistory = [
  { id: 1, name: "Ananya Sharma", amount: 5000, time: "2 hours ago", message: "Keep up the great work!" },
  { id: 2, name: "Rahul Verma", amount: 2500, time: "5 hours ago", message: "" },
  { id: 3, name: "Priya Desai", amount: 10000, time: "Yesterday", message: "Proud to support you!" },
  { id: 4, name: "Kunal Mehta", amount: 1000, time: "2 days ago", message: "" },
  { id: 5, name: "Shruti Nair", amount: 7500, time: "3 days ago", message: "Amazing initiative!" },
  { id: 6, name: "Vikram Malhotra", amount: 25000, time: "4 days ago", message: "Godspeed." },
];

const weeklyData = [
  { day: "S", amount: 4000 },
  { day: "M", amount: 7000 },
  { day: "T", amount: 4500 },
  { day: "W", amount: 9000 },
  { day: "T", amount: 6000 },
  { day: "F", amount: 11000 },
  { day: "S", amount: 8500 },
];
const maxWeekly = Math.max(...weeklyData.map((d) => d.amount));
// ─────────────────────────────────────────────────────────────────────────────

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function InternDonationsPage() {
  const [copied, setCopied] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://${DONATE_URL}`).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const totalRaised = donationHistory.reduce((s, d) => s + d.amount, 0);
  const target = 100000;
  const progress = Math.min((totalRaised / target) * 100, 100);
  const visible = showAll ? donationHistory : donationHistory.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans p-6 md:p-10 lg:p-14">

      {/* ── Back Button ───────────────────────────────── */}
      <Link
        href="/intern"
        className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm mb-10 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </Link>

      {/* ── Page Header ───────────────────────────────── */}
      <div className="mb-12">
        <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
          Fundraising Hub
        </p>
        <h1
          className="text-4xl md:text-6xl font-serif font-medium tracking-tight"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Your Donations
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* ── Campaign Progress ─────────────────────────── */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="flex justify-between items-start mb-8">
            <h2 className="text-2xl font-serif" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              Campaign Progress
            </h2>
            <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-semibold tracking-wider">
              {progress.toFixed(0)}% DONE
            </span>
          </div>

          <div className="relative h-3 bg-white/5 rounded-full overflow-hidden mb-6">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#8C7323] to-[#D4AF37] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Total Raised</p>
              <p className="text-4xl font-serif" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                ₹{totalRaised.toLocaleString("en-IN")}
              </p>
            </div>
            <div className="text-right">
              <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Target</p>
              <p className="text-xl font-serif text-white/60" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                ₹{target.toLocaleString("en-IN")}
              </p>
            </div>
          </div>

          {/* Quick stats row */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Total Donors", value: donationHistory.length.toString() },
              { label: "Avg. Donation", value: `₹${Math.round(totalRaised / donationHistory.length).toLocaleString("en-IN")}` },
              { label: "Days Left", value: "18" },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 rounded-2xl p-4 text-center">
                <p className="text-lg font-serif text-[#D4AF37]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  {s.value}
                </p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Campaign Link ─────────────────────────────── */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 flex flex-col gap-6">
          <h2 className="text-2xl font-serif" style={{ fontFamily: "var(--font-cormorant), serif" }}>
            Your Campaign Link
          </h2>

          {/* URL bar */}
          <div className="bg-[#111] border border-white/10 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between p-2 gap-2">
            <div className="flex items-center gap-3 px-3 py-2">
              <ExternalLink className="w-4 h-4 text-white/30 flex-shrink-0" />
              <span className="text-sm text-white/60 truncate">{DONATE_URL}</span>
            </div>
            <button
              onClick={handleCopy}
              className="sm:flex-shrink-0 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>

          {/* Share buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#b5952f] text-black py-4 rounded-xl font-semibold transition-colors text-sm">
              <Share2 className="w-4 h-4" /> Share
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white py-4 rounded-xl font-semibold transition-colors text-sm">
              <QrCode className="w-4 h-4" /> QR Code
            </button>
          </div>

          {/* Social toolkit */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] text-white/30 uppercase tracking-widest">Social Toolkit</p>

            <button className="flex items-center justify-between bg-white/5 border border-white/10 hover:bg-white/10 p-4 rounded-2xl transition-colors group">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gradient-to-tr from-yellow-500 via-red-500 to-fuchsia-500 rounded-xl">
                  <InstagramIcon />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium group-hover:text-[#D4AF37] transition-colors">Instagram Story</p>
                  <p className="text-[11px] text-white/40">Auto-copy caption & save image</p>
                </div>
              </div>
              <Download className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
            </button>

            <button className="flex items-center justify-between bg-white/5 border border-white/10 hover:bg-white/10 p-4 rounded-2xl transition-colors group">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#25D366] rounded-xl">
                  <MessageCircle className="w-[18px] h-[18px] text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium group-hover:text-[#D4AF37] transition-colors">WhatsApp Broadcast</p>
                  <p className="text-[11px] text-white/40">Forward personalized message</p>
                </div>
              </div>
              <Share2 className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* ── Weekly Chart ──────────────────────────────── */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 lg:col-span-2">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              Weekly Donations
            </h2>
            <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-medium">
              <TrendingUp className="w-4 h-4" /> +24% this week
            </div>
          </div>

          <div className="h-44 w-full flex items-end justify-between gap-2 md:gap-6 px-2 pb-4 border-b border-white/10">
            {weeklyData.map((d, i) => {
              const heightPct = (d.amount / maxWeekly) * 100;
              return (
                <div key={i} className="w-full flex flex-col items-center gap-3 group">
                  <div
                    className="w-full max-w-[40px] bg-white/10 group-hover:bg-[#D4AF37]/80 rounded-t-lg transition-all duration-300 relative"
                    style={{ height: `${heightPct}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-[#D4AF37] text-black text-[11px] py-1 px-2 rounded font-medium transition-opacity whitespace-nowrap">
                      ₹{d.amount.toLocaleString("en-IN")}
                    </div>
                  </div>
                  <span className="text-xs text-white/40">{d.day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Donation History ──────────────────────────── */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 lg:col-span-2">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              Donation History
            </h2>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <IndianRupee className="w-4 h-4" />
              {donationHistory.length} donations
            </div>
          </div>

          <div className="flex flex-col gap-0">
            {visible.map((d, i) => (
              <div
                key={d.id}
                className={`flex items-center justify-between py-5 ${i < visible.length - 1 ? "border-b border-white/5" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{d.name}</p>
                    {d.message && (
                      <p className="text-[12px] text-white/40 italic mt-0.5">"{d.message}"</p>
                    )}
                    <p className="text-[11px] text-white/30 mt-0.5">{d.time}</p>
                  </div>
                </div>
                <p
                  className="font-serif text-xl text-[#D4AF37] flex-shrink-0"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  ₹{d.amount.toLocaleString("en-IN")}
                </p>
              </div>
            ))}
          </div>

          {donationHistory.length > 3 && (
            <button
              onClick={() => setShowAll((p) => !p)}
              className="w-full mt-6 py-4 text-sm text-white/50 hover:text-white transition-colors border border-white/5 rounded-xl"
            >
              {showAll ? "Show Less" : `View All ${donationHistory.length} Transactions`}
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
