"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] pt-32 pb-12 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-[5vw]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-20 border-b border-white/10">

          {/* Left - Logo & About */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-6">
              <img src="/logo-enhanced.png" alt="Logo" className="w-10 h-10 object-contain rounded-full" />
              <div className="flex flex-col">
                <span className="font-inter font-medium text-[11px] uppercase tracking-[0.22em] text-[#F5F2EB] leading-tight">UNITED H.O.P.E</span>
                <span className="font-inter font-medium text-[11px] uppercase tracking-[0.22em] text-[#F5F2EB] opacity-60 leading-tight">FOUNDATION</span>
              </div>
            </div>
            <p className="font-inter text-[13px] leading-relaxed text-[#7C7C7C] max-w-[320px]">
              United H.O.P.E Foundation supports underserved communities through education, healthcare, nutrition, and human dignity initiatives across India.
            </p>
          </div>

          {/* Center Links 1 */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <a href="#" className="font-inter font-medium text-[12px] uppercase tracking-wider text-[#D8D2CA] hover:text-white transition-colors">About</a>
            <a href="#" className="font-inter font-medium text-[12px] uppercase tracking-wider text-[#D8D2CA] hover:text-white transition-colors">Programs</a>
            <a href="#" className="font-inter font-medium text-[12px] uppercase tracking-wider text-[#D8D2CA] hover:text-white transition-colors">Stories</a>
            <a href="#" className="font-inter font-medium text-[12px] uppercase tracking-wider text-[#D8D2CA] hover:text-white transition-colors">Events</a>
          </div>

          {/* Center Links 2 */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <a href="#" className="font-inter font-medium text-[12px] uppercase tracking-wider text-[#D8D2CA] hover:text-white transition-colors">Annual Reports</a>
            <a href="#" className="font-inter font-medium text-[12px] uppercase tracking-wider text-[#D8D2CA] hover:text-white transition-colors">Volunteer</a>
            <a href="#" className="font-inter font-medium text-[12px] uppercase tracking-wider text-[#D8D2CA] hover:text-white transition-colors">Contact</a>
            <a href="#" className="font-inter font-medium text-[12px] uppercase tracking-wider text-[#D8D2CA] hover:text-white transition-colors">Privacy Policy</a>
          </div>

          {/* Right Newsletter */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-start md:items-end w-full">
            <span className="font-inter font-medium text-[12px] uppercase tracking-wider text-[#D8D2CA] mb-4">Newsletter</span>
            <div className="flex w-full md:w-auto mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-white/20 text-white font-inter text-[13px] px-4 py-3 w-full md:w-[220px] focus:outline-none focus:border-white/50 transition-colors"
              />
              <button className="bg-white text-black font-inter font-medium text-[11px] tracking-[0.1em] px-6 uppercase hover:bg-gray-200 transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-inter text-[12px] text-[#7C7C7C] tracking-wide">
            © 2026 UNITED H.O.P.E FOUNDATION. ALL RIGHTS RESERVED.
          </span>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
