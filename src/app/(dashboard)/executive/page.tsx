"use client";

import React from "react";
import { 
  Building2, 
  BarChart3, 
  Users, 
  TrendingUp, 
  Image as ImageIcon, 
  BookOpen, 
  Briefcase, 
  CalendarDays,
  Activity,
  CheckCircle2,
  Clock,
  Megaphone,
  ArrowRight,
  Globe,
  PieChart,
  Plus
} from "lucide-react";

export default function ExecutiveDashboard() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 lg:p-16 font-sans selection:bg-[#D4AF37]/30">
      
      {/* 1. Hero / Editorial Header */}
      <header className="mb-20 relative">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-white/40 uppercase tracking-[0.4em] text-[10px] font-medium mb-4 flex items-center gap-3">
              <Globe className="w-3 h-3" /> Global Administration
            </p>
            <h1 className="text-6xl md:text-8xl font-serif font-light tracking-tight leading-none mb-6" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
              Executive <span className="italic text-[#D4AF37]">Overview.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-light max-w-lg leading-relaxed">
              Monitoring global impact, team performance, and content strategy for United H.O.P.E. Foundation.
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md min-w-[200px]">
            <p className="text-white/50 text-[10px] uppercase tracking-widest mb-2">Live Status</p>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="font-mono text-sm tracking-wider text-white">All Systems Operational</span>
            </div>
          </div>
        </div>
      </header>

      {/* Grid Layout - Max 2 widgets per row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative z-10">

        {/* 2. Foundation Overview Metrics */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-12 col-span-1 lg:col-span-2 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-12">
            <Building2 className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="text-xl font-serif tracking-wide" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Foundation Metrics</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-6 md:pt-0 md:pr-12">
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-3">Total Raised (YTD)</p>
              <p className="text-5xl font-serif text-white mb-2" style={{ fontFamily: 'var(--font-cormorant), serif' }}>₹12.4M</p>
              <p className="text-sm text-green-400 flex items-center gap-1"><TrendingUp className="w-4 h-4" /> +18.2% vs last year</p>
            </div>
            
            <div className="pt-6 md:pt-0 md:px-12">
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-3">Active Donors</p>
              <p className="text-5xl font-serif text-white mb-2" style={{ fontFamily: 'var(--font-cormorant), serif' }}>8,452</p>
              <p className="text-sm text-green-400 flex items-center gap-1"><TrendingUp className="w-4 h-4" /> +4.5% this month</p>
            </div>
            
            <div className="pt-6 md:pt-0 md:px-12">
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-3">Active Campaigns</p>
              <p className="text-5xl font-serif text-[#D4AF37] mb-2" style={{ fontFamily: 'var(--font-cormorant), serif' }}>24</p>
              <p className="text-sm text-white/50">Across 6 regions</p>
            </div>
            
            <div className="pt-6 md:pt-0 md:pl-12">
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-3">Total Workforce</p>
              <p className="text-5xl font-serif text-white mb-2" style={{ fontFamily: 'var(--font-cormorant), serif' }}>142</p>
              <p className="text-sm text-white/50">Interns & Leaders</p>
            </div>
          </div>
        </div>

        {/* 3. Fundraising Analytics */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-12">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-5 h-5 text-white/50" />
              <h2 className="text-xl font-serif tracking-wide" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Fundraising Analytics</h2>
            </div>
            <select className="bg-transparent border border-white/10 text-xs text-white/70 py-1.5 px-3 rounded-lg outline-none">
              <option>This Quarter</option>
              <option>This Year</option>
            </select>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-3xl font-serif" style={{ fontFamily: 'var(--font-cormorant), serif' }}>₹3.2M</p>
                <p className="text-xs text-white/40">Quarterly Target: ₹4.5M</p>
              </div>
              <p className="text-[#D4AF37] font-medium text-lg">71%</p>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-[#D4AF37] w-[71%]" />
            </div>
            
            <div className="mt-4 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] uppercase text-white/40 mb-1">Corporate</p>
                <p className="text-xl font-serif" style={{ fontFamily: 'var(--font-cormorant), serif' }}>₹1.8M</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-white/40 mb-1">Individual</p>
                <p className="text-xl font-serif" style={{ fontFamily: 'var(--font-cormorant), serif' }}>₹1.4M</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Intern Growth Statistics */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-12">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-white/50" />
              <h2 className="text-xl font-serif tracking-wide" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Intern Growth</h2>
            </div>
            <PieChart className="w-5 h-5 text-[#D4AF37]" />
          </div>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-4xl font-serif mb-1" style={{ fontFamily: 'var(--font-cormorant), serif' }}>124</p>
              <p className="text-xs text-white/40 uppercase tracking-wider">Total Interns</p>
            </div>
            <div>
              <p className="text-4xl font-serif mb-1 text-green-400" style={{ fontFamily: 'var(--font-cormorant), serif' }}>+12</p>
              <p className="text-xs text-white/40 uppercase tracking-wider">Net New (30d)</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-white/60">Active (Fundraising)</span>
                <span className="font-mono">82%</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-white w-[82%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-white/60">Dormant (&gt;14 days)</span>
                <span className="font-mono text-red-400">18%</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-red-500/50 w-[18%]" />
              </div>
            </div>
          </div>
        </div>

        {/* 5. Content Management Hub (Full Width) */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-12 col-span-1 lg:col-span-2">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-2xl font-serif tracking-wide mb-2" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Editorial & Content Hub</h2>
              <p className="text-sm text-white/40">Manage public-facing platform content</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group cursor-pointer bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 p-6 rounded-2xl transition-all flex flex-col justify-between aspect-square">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white/10 rounded-xl text-white">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-white/0 group-hover:text-white/50 -translate-x-4 group-hover:translate-x-0 transition-all" />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-1" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Gallery</h3>
                <p className="text-xs text-white/50">242 Media Assets</p>
              </div>
            </div>
            
            <div className="group cursor-pointer bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 p-6 rounded-2xl transition-all flex flex-col justify-between aspect-square">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white/10 rounded-xl text-white">
                  <BookOpen className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-white/0 group-hover:text-white/50 -translate-x-4 group-hover:translate-x-0 transition-all" />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-1" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Stories</h3>
                <p className="text-xs text-white/50">18 Published</p>
              </div>
            </div>
            
            <div className="group cursor-pointer bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/20 p-6 rounded-2xl transition-all flex flex-col justify-between aspect-square">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-[#D4AF37]/20 rounded-xl text-[#D4AF37]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-white/0 group-hover:text-[#D4AF37] -translate-x-4 group-hover:translate-x-0 transition-all" />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-1 text-[#D4AF37]" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Programs</h3>
                <p className="text-xs text-[#D4AF37]/60">4 Active Initiatives</p>
              </div>
            </div>
            
            <div className="group cursor-pointer bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 p-6 rounded-2xl transition-all flex flex-col justify-between aspect-square">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white/10 rounded-xl text-white">
                  <CalendarDays className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-white/0 group-hover:text-white/50 -translate-x-4 group-hover:translate-x-0 transition-all" />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-1" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Events</h3>
                <p className="text-xs text-white/50">2 Upcoming</p>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Team Leader Performance */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-serif tracking-wide" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Team Leaders</h2>
            <button className="text-xs text-white/50 hover:text-white transition-colors">View All Directory</button>
          </div>
          
          <div className="flex flex-col gap-6">
            {[
              { name: "Arjun Mehta", team: "Alpha Squad", raised: "₹8.5M", active: 12 },
              { name: "Sarah Khan", team: "Beta Force", raised: "₹2.1M", active: 8 },
              { name: "David Chen", team: "Gamma Wing", raised: "₹1.4M", active: 7 },
            ].map((leader, i) => (
              <div key={i} className="flex items-center justify-between group">
                <div>
                  <p className="text-base font-medium text-white mb-1 group-hover:text-[#D4AF37] transition-colors">{leader.name}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">{leader.team} • {leader.active} Interns</p>
                </div>
                <p className="font-serif text-xl" style={{ fontFamily: 'var(--font-cormorant), serif' }}>{leader.raised}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Media Approval Queue */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-12">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-yellow-500" />
              <h2 className="text-xl font-serif tracking-wide" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Approval Queue</h2>
            </div>
            <span className="bg-yellow-500/10 text-yellow-500 text-xs px-2 py-1 rounded">3 Pending</span>
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              { type: "Story", title: "Rural Education Drive 2026", author: "Arjun Mehta", time: "2h ago" },
              { type: "Event", title: "Mumbai Charity Gala", author: "Admin", time: "5h ago" },
              { type: "Gallery", title: "15 New Campaign Photos", author: "Sarah Khan", time: "1d ago" },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-2xl flex justify-between items-center border border-white/5 hover:border-white/20 transition-all cursor-pointer">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded text-white/70">{item.type}</span>
                    <span className="text-xs text-white/40">{item.time}</span>
                  </div>
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="text-xs text-white/40">By {item.author}</p>
                </div>
                <button className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4 text-white/50" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Recent Global Activity (Donations & Users) */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-12 lg:col-span-2">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-white/50" />
              <h2 className="text-2xl font-serif tracking-wide" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Global Activity Stream</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Donations Feed */}
            <div>
              <h3 className="text-xs text-white/40 uppercase tracking-widest mb-6">Recent Donations</h3>
              <div className="space-y-6">
                {[
                  { donor: "Reliance Foundation", amount: "₹5,00,000", tag: "Corporate" },
                  { donor: "Anonymous", amount: "₹50,000", tag: "Individual" },
                  { donor: "Tata Trusts", amount: "₹2,50,000", tag: "Corporate" },
                ].map((donation, i) => (
                  <div key={i} className="flex justify-between items-start pb-6 border-b border-white/5 last:border-0">
                    <div>
                      <p className="text-base font-medium text-white mb-1">{donation.donor}</p>
                      <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/10 px-2 py-0.5 rounded">{donation.tag}</span>
                    </div>
                    <p className="font-serif text-2xl text-white" style={{ fontFamily: 'var(--font-cormorant), serif' }}>{donation.amount}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* User Activity */}
            <div>
              <h3 className="text-xs text-white/40 uppercase tracking-widest mb-6">Platform Activity</h3>
              <div className="space-y-6">
                {[
                  { user: "Priya Desai", action: "joined as Intern", time: "10 mins ago" },
                  { user: "Admin", action: "published 'Education Drive' Story", time: "45 mins ago" },
                  { user: "Arjun Mehta", action: "reached Platinum Tier", time: "2 hours ago" },
                ].map((activity, i) => (
                  <div key={i} className="flex gap-4 pb-6 border-b border-white/5 last:border-0">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-white/50" />
                    </div>
                    <div>
                      <p className="text-sm text-white/80">
                        <span className="font-medium text-white">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-xs text-white/40 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 9. Organization Announcements */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 md:p-12 lg:col-span-2 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[#D4AF37]/5 blur-[80px] pointer-events-none" />
          
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Megaphone className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-2xl font-serif tracking-wide" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Organization Announcements</h2>
              </div>
              <p className="text-sm text-white/40">Broadcast messages to all Team Leaders and Interns.</p>
            </div>
            <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors shadow-lg">
              <Plus className="w-4 h-4" /> New Broadcast
            </button>
          </div>
          
          <div className="bg-black/50 border border-white/5 rounded-2xl p-6 relative z-10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-semibold tracking-wider text-[#D4AF37] uppercase">Last Broadcast</span>
              <span className="text-xs text-white/40">Oct 24, 2026 • Sent by Admin</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              &quot;We have officially crossed the ₹10M mark for the year! Incredible work from all squads. Let&apos;s maintain this momentum as we head into the holiday giving season. New campaign assets have been added to your toolkits.&quot;
            </p>
            <div className="flex gap-4">
              <span className="text-xs text-white/40">Delivered to: 142 Users</span>
              <span className="text-xs text-white/40">Seen by: 138 Users</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
