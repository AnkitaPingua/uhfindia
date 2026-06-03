"use client";

import React, { useState } from "react";
import { 
  Trophy, 
  Copy, 
  Share2, 
  QrCode, 
  MessageCircle, 
  Download, 
  TrendingUp, 
  Bell, 
  Heart, 
  ChevronRight,
  Star,
  Award,
  Check
} from "lucide-react";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function InternDashboard() {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 lg:p-16 font-sans">
      
      {/* 1. Hero Greeting */}
      <header className="mb-16 relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#D4AF37]/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
          <div>
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
              Intern Portal
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
              Welcome, <span className="italic">Alexander.</span>
            </h1>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 backdrop-blur-md">
            <div>
              <p className="text-white/50 text-[10px] uppercase tracking-widest mb-1">Your Code</p>
              <p className="font-mono text-xl tracking-wider text-[#D4AF37]">ALX-2026</p>
            </div>
            <button onClick={handleCopy} className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-white/70" />}
            </button>
          </div>
        </div>
      </header>

      {/* Grid Layout - Max 2 widgets per row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative z-10">
        
        {/* 2. Fundraising Gauge */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="flex justify-between items-start mb-12">
            <h2 className="text-2xl font-serif" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Fundraising Impact</h2>
            <div className="bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-semibold tracking-wider">
              75% COMPLETED
            </div>
          </div>
          
          <div className="relative h-4 bg-white/5 rounded-full overflow-hidden mb-6">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#8C7323] to-[#D4AF37] w-[75%] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
          </div>
          
          <div className="flex justify-between items-end">
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest mb-2">Raised</p>
              <p className="text-5xl font-serif" style={{ fontFamily: 'var(--font-cormorant), serif' }}>₹75,000</p>
            </div>
            <div className="text-right">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-2">Target</p>
              <p className="text-2xl font-serif text-white/70" style={{ fontFamily: 'var(--font-cormorant), serif' }}>₹1,00,000</p>
            </div>
          </div>
        </div>

        {/* 3. Ranking and Achievement */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-10 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#D4AF37]/10 blur-[80px] pointer-events-none" />
          
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-2xl font-serif" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Current Tier</h2>
            <Trophy className="text-[#D4AF37] w-6 h-6" />
          </div>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-gradient-to-b from-[#D4AF37]/20 to-transparent">
              <Award className="w-10 h-10 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-3xl font-serif text-[#D4AF37] mb-1" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Gold Ambassador</h3>
              <p className="text-sm text-white/50">Top 15% of all interns globally</p>
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-white/60 mb-1">Next Tier: Platinum</p>
              <p className="text-sm font-medium">₹25,000 more to unlock</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/40" />
          </div>
        </div>

        {/* 4. Fundraising Link Section */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-10">
          <h2 className="text-2xl font-serif mb-8" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Campaign Link</h2>
          
          <div className="bg-[#111] border border-white/10 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between p-2 mb-6 gap-2 sm:gap-0">
            <div className="px-4 text-sm text-white/70 truncate w-full py-2 sm:py-0">
              uhf.org/donate/ALX-2026
            </div>
            <button onClick={handleCopy} className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-center gap-2">
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />} {copied ? 'Copied' : 'Copy Link'}
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#b5952f] text-black py-4 rounded-xl font-semibold transition-colors">
              <Share2 className="w-5 h-5" /> Share
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white py-4 rounded-xl font-semibold transition-colors">
              <QrCode className="w-5 h-5" /> QR Code
            </button>
          </div>
        </div>

        {/* 5. Social Sharing Toolkit */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-10">
          <h2 className="text-2xl font-serif mb-8" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Social Assets</h2>
          
          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-between bg-white/5 border border-white/10 hover:bg-white/10 p-5 rounded-2xl transition-colors group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-tr from-yellow-500 via-red-500 to-fuchsia-500 rounded-xl">
                  <InstagramIcon />
                </div>
                <div className="text-left">
                  <p className="font-medium text-white group-hover:text-[#D4AF37] transition-colors">Instagram Story</p>
                  <p className="text-xs text-white/50">Auto-copy caption & save image</p>
                </div>
              </div>
              <Download className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
            </button>
            
            <button className="flex items-center justify-between bg-white/5 border border-white/10 hover:bg-white/10 p-5 rounded-2xl transition-colors group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#25D366] rounded-xl">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-white group-hover:text-[#D4AF37] transition-colors">WhatsApp Broadcast</p>
                  <p className="text-xs text-white/50">Forward personalized message</p>
                </div>
              </div>
              <Share2 className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* 7. Donation Trends Chart (Mock) */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-10 lg:col-span-2">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-serif" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Donation Trends</h2>
            <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-medium">
              <TrendingUp className="w-4 h-4" /> +24% this week
            </div>
          </div>
          
          <div className="h-48 w-full flex items-end justify-between gap-2 md:gap-6 px-4 pb-4 border-b border-white/10">
            {/* Bars for mock chart */}
            {[40, 70, 45, 90, 60, 110, 85].map((height, i) => (
              <div key={i} className="w-full flex flex-col items-center gap-4 group">
                <div 
                  className="w-full max-w-[40px] bg-white/10 group-hover:bg-[#D4AF37]/80 rounded-t-lg transition-all duration-300 relative"
                  style={{ height: `${Math.min(height, 100)}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-[#D4AF37] text-black text-xs py-1 px-2 rounded font-medium transition-opacity">
                    ₹{height * 100}
                  </div>
                </div>
                <span className="text-xs text-white/40">{"S M T W T F S".split(" ")[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Recent Donations Feed */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-10">
          <h2 className="text-2xl font-serif mb-8" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Recent Activity</h2>
          
          <div className="flex flex-col gap-6">
            {[
              { name: "Ananya Sharma", amount: "₹5,000", time: "2 hours ago" },
              { name: "Rahul Verma", amount: "₹2,500", time: "5 hours ago" },
              { name: "Priya Desai", amount: "₹10,000", time: "Yesterday" },
            ].map((donation, i) => (
              <div key={i} className="flex items-center justify-between pb-6 border-b border-white/5 last:border-0 last:pb-0">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base">{donation.name}</p>
                    <p className="text-xs text-white/40">{donation.time}</p>
                  </div>
                </div>
                <p className="font-serif text-xl text-[#D4AF37]" style={{ fontFamily: 'var(--font-cormorant), serif' }}>{donation.amount}</p>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 py-4 text-sm text-white/50 hover:text-white transition-colors border border-white/5 rounded-xl">
            View All Transactions
          </button>
        </div>

        {/* 8. Top Supporters List */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-10">
          <h2 className="text-2xl font-serif mb-8" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Top Supporters</h2>
          
          <div className="flex flex-col gap-6">
            {[
              { name: "Vikram Malhotra", amount: "₹25,000", rank: 1 },
              { name: "Sneha Kapoor", amount: "₹15,000", rank: 2 },
              { name: "Karan Singh", amount: "₹8,000", rank: 3 },
            ].map((supporter, i) => (
              <div key={i} className="flex items-center justify-between pb-6 border-b border-white/5 last:border-0 last:pb-0">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold ${i === 0 ? 'bg-[#D4AF37] text-black' : 'bg-white/10 text-white/70'}`}>
                    {supporter.rank}
                  </div>
                  <p className="font-medium text-sm md:text-base">{supporter.name}</p>
                </div>
                <p className="font-serif text-lg text-white/70" style={{ fontFamily: 'var(--font-cormorant), serif' }}>{supporter.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 9. Leaderboard Ranking */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Global Leaderboard</h2>
            <div className="bg-white/5 px-3 py-1 rounded-full flex items-center gap-2 text-xs">
              <Star className="w-3 h-3 text-[#D4AF37]" /> Rank: #42
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              { name: "Aisha Khan", amount: "₹2,50,000", org: "Delhi Univ." },
              { name: "Rohan Das", amount: "₹1,80,000", org: "Christ Univ." },
              { name: "Meera Reddy", amount: "₹1,45,000", org: "NMIMS" },
            ].map((leader, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                <div className="flex items-center gap-4">
                  <span className="text-[#D4AF37] font-serif italic text-xl w-4" style={{ fontFamily: 'var(--font-cormorant), serif' }}>{i + 1}</span>
                  <div>
                    <p className="font-medium text-sm">{leader.name}</p>
                    <p className="text-[10px] text-white/50">{leader.org}</p>
                  </div>
                </div>
                <p className="font-mono text-sm tracking-widest">{leader.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 10. Notifications Panel */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <Bell className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="text-2xl font-serif" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Updates</h2>
          </div>
          
          <div className="flex flex-col gap-5 border-l border-white/10 ml-2 pl-6 relative">
            <div className="relative">
              <div className="absolute -left-[29px] top-1 w-3 h-3 bg-[#D4AF37] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              <p className="text-sm font-medium mb-1">Target 75% Reached! 🎉</p>
              <p className="text-xs text-white/50">You just crossed ₹75,000. Keep pushing for the Platinum tier!</p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[29px] top-1 w-3 h-3 bg-white/20 rounded-full" />
              <p className="text-sm font-medium mb-1">New Campaign Kit Available</p>
              <p className="text-xs text-white/50">Download the new Diwali special assets from the toolkit.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
