"use client";

import React from "react";
import { 
  Users, 
  Target, 
  TrendingUp, 
  AlertTriangle, 
  Award, 
  MessageSquare, 
  Activity, 
  ChevronRight, 
  Star, 
  ShieldAlert,
  ArrowUpRight,
  UserCheck
} from "lucide-react";

export default function TeamLeaderDashboard() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 lg:p-16 font-sans selection:bg-[#D4AF37]/30">
      
      {/* Hero Greeting */}
      <header className="mb-16 relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#D4AF37]/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
          <div>
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
              Team Leader Portal
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
              Team <span className="italic">Vanguard.</span>
            </h1>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-6 backdrop-blur-md">
            <div>
              <p className="text-white/50 text-[10px] uppercase tracking-widest mb-1">Total Interns</p>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#D4AF37]" />
                <p className="font-mono text-xl tracking-wider text-white">12</p>
              </div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="text-white/50 text-[10px] uppercase tracking-widest mb-1">Team Rank</p>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#D4AF37]" />
                <p className="font-mono text-xl tracking-wider text-white">#2</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Grid Layout - Max 2 widgets per row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative z-10">

        {/* 1. Combined Team Progress Gauge */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group col-span-1 lg:col-span-2">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="text-2xl font-serif mb-2" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Collective Impact</h2>
              <p className="text-sm text-white/50">Cumulative fundraising by Team Vanguard</p>
            </div>
            <div className="bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full text-xs font-semibold tracking-wider flex items-center gap-2">
              <Target className="w-4 h-4" /> 68% OF GOAL
            </div>
          </div>
          
          <div className="relative h-6 bg-white/5 rounded-full overflow-hidden mb-8">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#8C7323] via-[#D4AF37] to-[#F9E596] w-[68%] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
          </div>
          
          <div className="flex justify-between items-end">
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest mb-2">Total Raised</p>
              <p className="text-5xl md:text-6xl font-serif" style={{ fontFamily: 'var(--font-cormorant), serif' }}>₹8,50,000</p>
            </div>
            <div className="text-right">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-2">Team Target</p>
              <p className="text-3xl font-serif text-white/70" style={{ fontFamily: 'var(--font-cormorant), serif' }}>₹12,50,000</p>
            </div>
          </div>
        </div>

        {/* 2. Top Performer Spotlight */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-10 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#D4AF37]/10 blur-[80px] pointer-events-none" />
          
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-2xl font-serif" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Intern of the Week</h2>
            <Star className="text-[#D4AF37] w-6 h-6 fill-[#D4AF37]" />
          </div>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-gradient-to-b from-[#D4AF37]/20 to-transparent">
              <span className="font-serif text-3xl text-[#D4AF37]" style={{ fontFamily: 'var(--font-cormorant), serif' }}>NK</span>
            </div>
            <div>
              <h3 className="text-3xl font-serif text-white mb-1" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Neha Kapoor</h3>
              <p className="text-sm text-[#D4AF37]">₹1,25,000 Raised</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Donors</p>
              <p className="text-xl font-medium">42</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Growth</p>
              <p className="text-xl font-medium text-green-400 flex items-center gap-1">
                <ArrowUpRight className="w-4 h-4" /> 18%
              </p>
            </div>
          </div>
        </div>

        {/* 3. Low Performance Alerts */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Requires Attention</h2>
            <div className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" /> 2 ALERTS
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              { name: "Rahul Sharma", issue: "No donations in 7 days", impact: "High Risk" },
              { name: "Anjali Gupta", issue: "Below 20% of target", impact: "Needs Coaching" },
            ].map((alert, i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-gradient-to-r from-red-500/5 to-transparent border border-red-500/10 rounded-2xl group cursor-pointer hover:border-red-500/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-white">{alert.name}</p>
                    <p className="text-xs text-white/50">{alert.issue}</p>
                  </div>
                </div>
                <button className="text-xs font-medium text-red-400 group-hover:text-red-300 flex items-center gap-1">
                  Message <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Team Overview Metrics */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-10">
          <h2 className="text-2xl font-serif mb-8" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Team Analytics</h2>
          
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="bg-white/5 rounded-2xl p-6 flex flex-col justify-center">
              <Activity className="w-6 h-6 text-[#D4AF37] mb-4" />
              <p className="text-3xl font-serif mb-1" style={{ fontFamily: 'var(--font-cormorant), serif' }}>₹70.8K</p>
              <p className="text-xs text-white/50 uppercase tracking-widest">Avg per Intern</p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-6 flex flex-col justify-center">
              <UserCheck className="w-6 h-6 text-[#D4AF37] mb-4" />
              <p className="text-3xl font-serif mb-1" style={{ fontFamily: 'var(--font-cormorant), serif' }}>9/12</p>
              <p className="text-xs text-white/50 uppercase tracking-widest">Active Today</p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-6 flex flex-col justify-center col-span-2 flex-row items-center justify-between">
              <div>
                <p className="text-2xl font-serif mb-1" style={{ fontFamily: 'var(--font-cormorant), serif' }}>324</p>
                <p className="text-xs text-white/50 uppercase tracking-widest">Total Donors</p>
              </div>
              <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                <TrendingUp className="w-5 h-5" /> +12%
              </div>
            </div>
          </div>
        </div>

        {/* 5. Team Leaderboard */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Intern Rankings</h2>
            <button className="text-xs text-[#D4AF37] hover:text-white transition-colors">View All</button>
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              { name: "Neha Kapoor", amount: "₹1,25,000", progress: 100 },
              { name: "Vikram Singh", amount: "₹98,500", progress: 85 },
              { name: "Aarav Patel", amount: "₹82,000", progress: 75 },
              { name: "Priya Desai", amount: "₹76,000", progress: 65 },
              { name: "Rohan Das", amount: "₹65,000", progress: 55 },
            ].map((intern, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer">
                <span className="text-[#D4AF37] font-serif italic text-xl w-6 text-center" style={{ fontFamily: 'var(--font-cormorant), serif' }}>{i + 1}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium text-sm">{intern.name}</p>
                    <p className="font-mono text-sm tracking-widest text-[#D4AF37]">{intern.amount}</p>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#D4AF37] rounded-full"
                      style={{ width: `${intern.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Donation Activity Feed */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-10 lg:col-span-2">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Live Team Activity</h2>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs text-white/50 uppercase tracking-widest">Live</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { donor: "Anonymous", amount: "₹10,000", intern: "Neha Kapoor", time: "10 mins ago" },
              { donor: "Sanjay Gupta", amount: "₹5,000", intern: "Vikram Singh", time: "1 hour ago" },
              { donor: "Meera Reddy", amount: "₹2,500", intern: "Priya Desai", time: "2 hours ago" },
            ].map((activity, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37] opacity-50 group-hover:opacity-100 transition-opacity" />
                <p className="text-sm text-white/50 mb-1">{activity.time}</p>
                <p className="font-serif text-2xl text-white mb-4" style={{ fontFamily: 'var(--font-cormorant), serif' }}>{activity.amount}</p>
                <div className="flex justify-between items-end border-t border-white/10 pt-4 mt-auto">
                  <div>
                    <p className="text-[10px] uppercase text-white/40 mb-1">Donor</p>
                    <p className="text-xs font-medium">{activity.donor}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase text-[#D4AF37]/70 mb-1">Intern</p>
                    <p className="text-xs font-medium text-[#D4AF37]">{activity.intern}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Notifications & Messages */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-10 lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="text-2xl font-serif" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Messages & Updates</h2>
            </div>
            <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-xl text-xs font-medium transition-colors">
              Broadcast Message
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold tracking-wider text-[#D4AF37] uppercase">From Admin</span>
                <span className="text-xs text-white/40">Today, 9:00 AM</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-4">
                Great job hitting 68% of the goal, Vanguard! Please ensure all low-performing interns are briefed on the new WhatsApp strategy before the weekend.
              </p>
              <button className="text-xs text-white/50 hover:text-white underline decoration-white/30 transition-colors">Reply to Admin</button>
            </div>
            
            <div className="bg-white/5 p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold tracking-wider text-white uppercase">Intern Query</span>
                <span className="text-xs text-white/40">Yesterday, 4:30 PM</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-4">
                <strong>Rohan Das:</strong> Hi! I&apos;m having trouble downloading the new Instagram stories from the assets toolkit. Could you please send them directly?
              </p>
              <button className="text-xs text-[#D4AF37] hover:text-white underline decoration-[#D4AF37]/30 transition-colors">Reply to Rohan</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
