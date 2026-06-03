"use client";

import React from "react";
import { 
  Database, 
  Activity, 
  Users, 
  ShieldCheck, 
  CreditCard, 
  Webhook, 
  Settings, 
  HardDrive, 
  BarChart3,
  ArrowUpRight,
  Zap,
  CheckCircle2,
  Lock,
  Globe,
  Network,
  TerminalSquare,
  ShieldAlert,
  ServerCrash
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 lg:p-16 font-sans selection:bg-[#D4AF37]/30">
      
      {/* Hero: Command Center */}
      <header className="mb-24 relative">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-semibold mb-6 flex items-center gap-3">
              <ShieldCheck className="w-4 h-4" /> System Administration
            </p>
            <h1 className="text-6xl md:text-8xl font-serif font-light tracking-tight leading-none mb-6" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
              Mission <span className="italic text-[#D4AF37]">Control.</span>
            </h1>
            <p className="text-white/50 text-lg font-light max-w-xl leading-relaxed">
              Global platform oversight. Real-time infrastructure monitoring, role provisioning, and systemic financial analytics.
            </p>
          </div>
          
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 min-w-[240px]">
            <p className="text-white/40 text-[10px] uppercase tracking-widest mb-3">Platform Health</p>
            <div className="flex items-center gap-4 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="font-mono text-sm tracking-wider">Operational</span>
            </div>
            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
              <div className="bg-green-500 w-[99.9%] h-full" />
            </div>
            <p className="text-[9px] text-white/30 text-right mt-2 font-mono">99.99% Uptime</p>
          </div>
        </div>
      </header>

      {/* Grid Layout - Max 2 widgets per row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative z-10">

        {/* 1. Platform Overview Metrics (Full Width) */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-10 md:p-14 lg:col-span-2 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-14">
            <Globe className="w-6 h-6 text-[#D4AF37]" />
            <h2 className="text-2xl font-serif tracking-wide" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Platform Scale</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-6 md:pt-0 md:pr-12">
              <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-4">Total Transaction Volume</p>
              <p className="text-6xl font-serif text-white mb-3" style={{ fontFamily: 'var(--font-cormorant), serif' }}>₹84.2M</p>
              <p className="text-sm text-green-400 flex items-center gap-1 font-mono tracking-wider"><ArrowUpRight className="w-4 h-4" /> +12.4% ARR</p>
            </div>
            
            <div className="pt-6 md:pt-0 md:px-12">
              <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-4">Registered Users</p>
              <p className="text-6xl font-serif text-white mb-3" style={{ fontFamily: 'var(--font-cormorant), serif' }}>1,248</p>
              <p className="text-sm text-white/50 flex items-center gap-1 font-mono tracking-wider">Across 4 Tier Levels</p>
            </div>
            
            <div className="pt-6 md:pt-0 md:pl-12">
              <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-4">Database Operations</p>
              <p className="text-6xl font-serif text-[#D4AF37] mb-3" style={{ fontFamily: 'var(--font-cormorant), serif' }}>2.1M</p>
              <p className="text-sm text-white/50 flex items-center gap-1 font-mono tracking-wider">Requests / Month</p>
            </div>
          </div>
        </div>

        {/* 2. Fundraising Analytics */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-10 md:p-14">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-5 h-5 text-white/40" />
              <h2 className="text-xl font-serif tracking-wide" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Fundraising Velocity</h2>
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-4xl font-serif mb-2" style={{ fontFamily: 'var(--font-cormorant), serif' }}>₹4.2M / mo</p>
              <p className="text-xs text-white/40 uppercase tracking-widest">Current Run Rate</p>
            </div>
            
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-white/60">Recurring Donors</span>
                  <span className="font-mono text-[#D4AF37]">45%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#D4AF37] w-[45%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-white/60">One-Time Donors</span>
                  <span className="font-mono text-white/70">55%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-white/40 w-[55%]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Growth Analytics */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-10 md:p-14">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-white/40" />
              <h2 className="text-xl font-serif tracking-wide" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Growth Trajectory</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <p className="text-3xl font-serif mb-2" style={{ fontFamily: 'var(--font-cormorant), serif' }}>342</p>
              <p className="text-xs text-white/40 uppercase tracking-widest">New Users (Q3)</p>
            </div>
            <div>
              <p className="text-3xl font-serif mb-2 text-green-400" style={{ fontFamily: 'var(--font-cormorant), serif' }}>12.4%</p>
              <p className="text-xs text-white/40 uppercase tracking-widest">MoM Growth</p>
            </div>
          </div>
          
          <div className="bg-white/5 p-6 rounded-2xl flex items-center justify-between border border-white/5">
            <div>
              <p className="text-sm font-medium mb-1">Conversion Rate</p>
              <p className="text-xs text-white/40">Campaign visits to donation</p>
            </div>
            <p className="text-2xl font-serif text-[#D4AF37]" style={{ fontFamily: 'var(--font-cormorant), serif' }}>8.2%</p>
          </div>
        </div>

        {/* 4. User Management Center (Full Width) */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-10 md:p-14 lg:col-span-2">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-[#D4AF37]" />
              <h2 className="text-2xl font-serif tracking-wide" style={{ fontFamily: 'var(--font-cormorant), serif' }}>User Management</h2>
            </div>
            <button className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors">
              Directory Access
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer flex flex-col justify-between aspect-square">
              <ShieldCheck className="w-6 h-6 text-red-400 mb-6" />
              <div>
                <p className="text-4xl font-serif mb-2" style={{ fontFamily: 'var(--font-cormorant), serif' }}>4</p>
                <p className="text-sm font-medium">Administrators</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Superuser Access</p>
              </div>
            </div>
            
            <div className="p-8 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer flex flex-col justify-between aspect-square">
              <Globe className="w-6 h-6 text-[#D4AF37] mb-6" />
              <div>
                <p className="text-4xl font-serif mb-2" style={{ fontFamily: 'var(--font-cormorant), serif' }}>12</p>
                <p className="text-sm font-medium">Executives</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Global Overview</p>
              </div>
            </div>
            
            <div className="p-8 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer flex flex-col justify-between aspect-square">
              <Network className="w-6 h-6 text-white mb-6" />
              <div>
                <p className="text-4xl font-serif mb-2" style={{ fontFamily: 'var(--font-cormorant), serif' }}>48</p>
                <p className="text-sm font-medium">Team Leaders</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Squad Management</p>
              </div>
            </div>
            
            <div className="p-8 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer flex flex-col justify-between aspect-square">
              <Activity className="w-6 h-6 text-white/50 mb-6" />
              <div>
                <p className="text-4xl font-serif mb-2" style={{ fontFamily: 'var(--font-cormorant), serif' }}>1,184</p>
                <p className="text-sm font-medium">Interns</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Fundraisers</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Role Assignment Management */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-10 md:p-14">
          <div className="flex items-center gap-3 mb-10">
            <Lock className="w-5 h-5 text-white/40" />
            <h2 className="text-xl font-serif tracking-wide" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Role Provisioning</h2>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-xs text-white/50 uppercase tracking-widest mb-4">Elevate User Access</p>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Search user by email or ID..." 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#D4AF37] transition-colors"
              />
              <select defaultValue="" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#D4AF37] transition-colors text-white">
                <option value="" disabled>Select new role...</option>
                <option value="admin">Administrator</option>
                <option value="executive">Executive</option>
                <option value="team_leader">Team Leader</option>
                <option value="intern">Intern</option>
              </select>
              <button className="w-full bg-[#D4AF37] hover:bg-[#b5952f] text-black font-semibold py-3 rounded-xl transition-colors text-sm">
                Apply Role Changes
              </button>
            </div>
          </div>
        </div>

        {/* 8. Payment Monitoring (Stripe/Razorpay Integration) */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-10 md:p-14">
          <div className="flex items-center gap-3 mb-10">
            <CreditCard className="w-5 h-5 text-white/40" />
            <h2 className="text-xl font-serif tracking-wide" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Payment Gateways</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#635BFF]/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-[#635BFF]" />
                </div>
                <div>
                  <p className="font-medium text-sm">Stripe (International)</p>
                  <p className="text-xs text-green-400">Connected & Live</p>
                </div>
              </div>
              <p className="font-mono text-sm tracking-wider">₹24.5M</p>
            </div>
            
            <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-sm">Razorpay (Domestic)</p>
                  <p className="text-xs text-green-400">Connected & Live</p>
                </div>
              </div>
              <p className="font-mono text-sm tracking-wider">₹59.7M</p>
            </div>
          </div>
        </div>

        {/* 6 & 7. Security Events & Audit Logs (Full Width Split) */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] overflow-hidden lg:col-span-2 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/5">
          
          {/* Security */}
          <div className="p-10 md:p-14 flex-1">
            <div className="flex items-center gap-3 mb-10">
              <ShieldAlert className="w-5 h-5 text-white/40" />
              <h2 className="text-xl font-serif tracking-wide" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Security Events</h2>
            </div>
            <div className="space-y-6">
              {[
                { event: "Failed Admin Login", ip: "192.168.1.45", time: "10m ago", severity: "high" },
                { event: "Role Escalation: TL", user: "exec@uhf.org", time: "2h ago", severity: "info" },
                { event: "Multiple Failed Logins", ip: "103.45.2.1", time: "5h ago", severity: "med" },
              ].map((log, i) => (
                <div key={i} className="flex justify-between items-start">
                  <div>
                    <p className={`text-sm font-medium mb-1 ${log.severity === 'high' ? 'text-red-400' : log.severity === 'med' ? 'text-yellow-400' : 'text-white'}`}>
                      {log.event}
                    </p>
                    <p className="text-[10px] font-mono text-white/40">{log.user || log.ip}</p>
                  </div>
                  <span className="text-[10px] text-white/30 uppercase tracking-widest">{log.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* System Logs */}
          <div className="p-10 md:p-14 flex-1">
            <div className="flex items-center gap-3 mb-10">
              <TerminalSquare className="w-5 h-5 text-white/40" />
              <h2 className="text-xl font-serif tracking-wide" style={{ fontFamily: 'var(--font-cormorant), serif' }}>System Audit Logs</h2>
            </div>
            <div className="font-mono text-xs text-white/60 space-y-3 leading-relaxed">
              <p className="opacity-50">[14:32:01] INFO: DB Snapshot completed.</p>
              <p className="opacity-50">[14:35:22] INFO: Webhook /razorpay received 200 OK.</p>
              <p className="text-yellow-400/80">[14:40:05] WARN: Storage bucket &apos;gallery&apos; approaching 80% quota.</p>
              <p className="opacity-50">[14:41:12] INFO: Supabase Auth sync executed.</p>
              <p className="text-[#D4AF37]">[14:45:00] INFO: Admin user &apos;sysadmin&apos; logged in.</p>
            </div>
          </div>
        </div>

        {/* 9 & 10. Webhook Health & Infrastructure (Side by side) */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-10 md:p-14">
          <div className="flex items-center gap-3 mb-10">
            <Webhook className="w-5 h-5 text-white/40" />
            <h2 className="text-xl font-serif tracking-wide" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Webhook Health</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-white/5 px-5 py-4 rounded-xl border border-white/5">
              <span className="text-sm font-medium font-mono">/api/webhooks/stripe</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-xs text-green-400">100% Success</span>
              </div>
            </div>
            <div className="flex justify-between items-center bg-white/5 px-5 py-4 rounded-xl border border-white/5">
              <span className="text-sm font-medium font-mono">/api/webhooks/razorpay</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-xs text-green-400">100% Success</span>
              </div>
            </div>
            <div className="flex justify-between items-center bg-white/5 px-5 py-4 rounded-xl border border-white/5">
              <span className="text-sm font-medium font-mono">/api/mail/bounce</span>
              <div className="flex items-center gap-2">
                <ServerCrash className="w-4 h-4 text-red-400" />
                <span className="text-xs text-red-400">Failing</span>
              </div>
            </div>
          </div>
        </div>

        {/* 11. Storage & Config */}
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-10 md:p-14 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <HardDrive className="w-5 h-5 text-white/40" />
              <h2 className="text-xl font-serif tracking-wide" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Storage & Database</h2>
            </div>
            
            <div className="mb-8">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-white/60">PostgreSQL DB Usage</span>
                <span className="font-mono text-white">42% (2.1GB/5GB)</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#D4AF37] w-[42%]" />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-white/60">S3 Media Storage</span>
                <span className="font-mono text-yellow-400">81% (40.5GB/50GB)</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-400 w-[81%]" />
              </div>
            </div>
          </div>
          
          <button className="w-full flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5 py-4 rounded-xl text-xs font-semibold uppercase tracking-widest mt-8 transition-colors">
            <Settings className="w-4 h-4" /> Advanced Configuration
          </button>
        </div>
        
        {/* 12. Organization Performance Analytics */}
        <div className="bg-gradient-to-tr from-[#1A1A1A] to-[#0A0A0A] border border-white/10 rounded-[2rem] p-10 md:p-14 lg:col-span-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-full bg-[#D4AF37]/5 blur-[100px] pointer-events-none" />
          
          <div className="flex justify-between items-start mb-14 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Database className="w-5 h-5 text-[#D4AF37]" />
                <h2 className="text-2xl font-serif tracking-wide" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Global Ecosystem Health</h2>
              </div>
              <p className="text-sm text-white/40">Macro-level performance summary of all foundation activities.</p>
            </div>
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full text-xs font-semibold transition-colors">
              Export Full Report
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            <div>
              <p className="text-4xl font-serif mb-2" style={{ fontFamily: 'var(--font-cormorant), serif' }}>94%</p>
              <p className="text-xs text-white/50 uppercase tracking-widest">Fund Utilization</p>
            </div>
            <div>
              <p className="text-4xl font-serif mb-2" style={{ fontFamily: 'var(--font-cormorant), serif' }}>1.2M</p>
              <p className="text-xs text-white/50 uppercase tracking-widest">Lives Impacted</p>
            </div>
            <div>
              <p className="text-4xl font-serif mb-2 text-green-400" style={{ fontFamily: 'var(--font-cormorant), serif' }}>+22%</p>
              <p className="text-xs text-white/50 uppercase tracking-widest">YoY Efficiency</p>
            </div>
            <div>
              <p className="text-4xl font-serif mb-2 text-[#D4AF37]" style={{ fontFamily: 'var(--font-cormorant), serif' }}>A+</p>
              <p className="text-xs text-white/50 uppercase tracking-widest">Global Audit Rating</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
