"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowLeft, Award, BookOpen, Clock, HeartHandshake, Megaphone, ShieldCheck, Trophy, Users, Crown, Medal, CheckCircle, ArrowRight } from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";
import { useRouter } from "next/navigation";
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import { createClient } from "@/lib/supabase/client";

gsap.registerPlugin(ScrollTrigger);

export default function InternshipExperience() {
  const router = useRouter();
  const formRef = useRef<HTMLElement>(null);
  const perksRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // ScrollTrigger animations for sections
    const ctx = gsap.context(() => {
      // Why matters reveal
      gsap.fromTo(".why-text",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", scrollTrigger: { trigger: ".why-section", start: "top 75%" } }
      );

      // Perks reveal
      gsap.fromTo(".perk-card",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: perksRef.current, start: "top 75%" } }
      );

      // Leaderboard reveal
      gsap.fromTo(".leaderboard-row",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power2.out", scrollTrigger: { trigger: ".leaderboard-section", start: "top 75%" } }
      );

      // Form reveal
      gsap.fromTo(".form-element",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, ease: "power2.out", scrollTrigger: { trigger: formRef.current, start: "top 75%" } }
      );

    });

    // Framer Motion entry animation takes 1s.
    // ScrollTrigger calculates positions immediately on mount, which is wrong because elements are sliding up.
    // We must refresh ScrollTrigger after the slide-up transition finishes so the triggers align properly.
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1200);

    return () => {
      ctx.revert();
      clearTimeout(refreshTimeout);
    };
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPerks = () => {
    perksRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBack = () => {
    // Transition back out smoothly
    gsap.to(".internship-page", { y: "100%", duration: 0.8, ease: "power3.inOut", onComplete: () => router.push("/") });
  };

  const perks = [
    { icon: <ShieldCheck size={28} className="text-[#FF9A3C]" />, title: "Internship Certificate", desc: "Official certification of your contribution and hours worked.", bgImage: "/story_kids.png" },
    { icon: <HeartHandshake size={28} className="text-[#FF9A3C]" />, title: "Crowdfunding Experience", desc: "Learn to build and run real impact campaigns.", bgImage: "/hero_image.png" },
    { icon: <Award size={28} className="text-[#FF9A3C]" />, title: "LinkedIn Recommendation", desc: "Verified skill endorsements from our leadership team.", bgImage: "/documentary_bg.png" },
    { icon: <BookOpen size={28} className="text-[#FF9A3C]" />, title: "Letter of Recommendation", desc: "For top performers, assisting in university or job applications.", bgImage: "/story_women.png" },
    { icon: <Clock size={28} className="text-[#FF9A3C]" />, title: "Flexible Work Hours", desc: "100% remote. Contribute based on your personal schedule.", bgImage: "/story_kids.png" },
    { icon: <Megaphone size={28} className="text-[#FF9A3C]" />, title: "Social Media Shoutout", desc: "Features on our official handles for exceptional milestones.", bgImage: "/hero_image.png" },
    { icon: <Users size={28} className="text-[#FF9A3C]" />, title: "Leadership Experience", desc: "Lead smaller teams and community initiatives.", bgImage: "/documentary_bg.png" },
    { icon: <Trophy size={28} className="text-[#FF9A3C]" />, title: "Performance Stipend", desc: "Token of appreciation for extraordinary fundraising targets.", bgImage: "/story_women.png" },
  ];

  const leaderboard = [
    { rank: 1, name: "Aarav Sharma", funds: "₹85,000", campaigns: 12, impact: "98" },
    { rank: 2, name: "Priya Desai", funds: "₹72,400", campaigns: 9, impact: "94" },
    { rank: 3, name: "Rahul Verma", funds: "₹64,100", campaigns: 8, impact: "91" },
    { rank: 4, name: "Neha Gupta", funds: "₹45,000", campaigns: 6, impact: "85" },
    { rank: 5, name: "Karan Patel", funds: "₹38,500", campaigns: 5, impact: "82" },
  ];

  const [submitted, setSubmitted] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [countryCode, setCountryCode] = useState("+91");
  const [loading, setLoading] = useState(false);

  const callingCodes = useMemo(() => {
    return Array.from(new Set(getCountries().map(c => `+${getCountryCallingCode(c)}`)))
      .sort((a, b) => parseInt(a.replace(/\D/g, '')) - parseInt(b.replace(/\D/g, '')));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!resumeFile) {
      alert("Please upload your resume.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const full_name = formData.get("full_name") as string;
      const email = formData.get("email") as string;
      const rawPhone = formData.get("phone") as string;
      const city = formData.get("city") as string;
      const institution = formData.get("institution") as string;
      const degree = formData.get("degree") as string;
      const motivation = formData.get("motivation") as string;
      const linkedin = formData.get("linkedin") as string;

      const supabase = createClient();

      const fileName = `${Date.now()}-${resumeFile.name}`;
      const { error: uploadError } = await supabase.storage
        .from("intern-resumes")
        .upload(fileName, resumeFile);

      if (uploadError) throw uploadError;

      const resume_url = fileName;

      const response = await fetch("/api/internship/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name,
          email,
          phone: `${countryCode} ${rawPhone}`,
          college: degree ? `${institution} - ${degree}` : institution,
          city,
          linkedin,
          motivation,
          resume_url,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data);
        throw new Error(data.error || "Application failed");
      }
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong submitting your application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SmoothScroll>
      <motion.main
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="internship-page w-full min-h-screen bg-[#0B0B0B] text-white overflow-hidden relative z-[100]"
      >
        {/* Minimal Nav */}
        <div className="absolute top-0 left-0 w-full p-6 lg:px-12 flex justify-between items-center z-50 mix-blend-difference">
          <button onClick={handleBack} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-inter font-medium text-[11px] tracking-[0.2em] uppercase">Return to Home</span>
          </button>
        </div>

        {/* SECTION 1 - HERO */}
        <section ref={heroRef} className="relative w-full min-h-screen pt-24 px-[5vw] flex items-center justify-center">
          <div className="max-w-[1440px] w-full flex flex-col md:flex-row items-center justify-between gap-12">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="w-full md:w-[45%] h-[60vh] md:h-[80vh] relative overflow-hidden"
            >
              {/* Image cutout style */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent z-10 opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-transparent to-transparent z-10 opacity-50"></div>
              <img src="/story_kids.png" alt="Internship impact" className="w-full h-full object-cover object-bottom grayscale brightness-90 mask-image-fade" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              className="w-full md:w-[50%] flex flex-col items-start z-20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-6 h-[1px] bg-white/30"></div>
                <span className="font-inter font-medium text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF]">
                  UNITED H.O.P.E INTERNSHIP PROGRAM
                </span>
              </div>

              <h1 className="font-cormorant font-light text-[56px] md:text-[80px] leading-[1.05] text-[#F5F5F5] mb-6 tracking-[-0.02em]">
                Turn your voice <br />
                into <span className="text-[#FF9A3C] italic">impact.</span>
              </h1>

              <p className="font-inter text-[15px] leading-[1.8] text-[#9CA3AF] max-w-[480px] mb-12">
                As an intern, you are the bridge between those who want to help and those who need it most.
                Drive crowdfunding campaigns, spread awareness, share real stories, and build education initiatives that reshape futures.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                <button onClick={scrollToForm} className="w-full sm:w-auto bg-[#151515] border border-white/10 text-[#F5F5F5] font-inter font-semibold text-[11px] tracking-[0.18em] uppercase rounded-full h-[48px] px-10 hover:bg-white hover:text-black transition-all duration-300">
                  APPLY NOW
                </button>
                <button onClick={scrollToPerks} className="w-full sm:w-auto text-[#9CA3AF] font-inter font-semibold text-[11px] tracking-[0.18em] uppercase flex items-center justify-center gap-2 hover:text-[#F5F5F5] transition-colors h-[48px] px-6">
                  VIEW PERKS <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>

          </div>
        </section>

        {/* SECTION 2 - WHY IT MATTERS */}
        <section className="why-section w-full py-32 px-[5vw] flex items-center justify-center border-t border-white/5 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <div className="w-[1px] h-full bg-white"></div>
            <div className="w-[1px] h-full bg-white absolute left-1/4"></div>
            <div className="w-[1px] h-full bg-white absolute right-1/4"></div>
          </div>
          <div className="why-text max-w-[800px] mx-auto text-center z-10">
            <h2 className="font-cormorant font-light text-[40px] md:text-[56px] leading-[1.1] text-[#F5F5F5] mb-8">
              “You will help transform <br /><span className="italic text-white/50">small donations</span> into real opportunities.”
            </h2>
            <p className="font-inter text-[15px] leading-[1.8] text-[#9CA3AF] max-w-[600px] mx-auto">
              This isn't about fetching coffee. It's about reaching out to your community, raising critical funds, and seeing exactly how your communication skills put a child in school or a meal on a table. You grow as a leader, they grow into a future.
            </p>
          </div>
        </section>

        {/* SECTION 3 - PERKS */}
        <section ref={perksRef} className="w-full py-32 px-[5vw] border-t border-white/5 bg-[#0B0B0B] relative">
          {/* Subtle noise/grain texture overlay for atmosphere */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('/paper_scene_1_1778800697156.png')", backgroundSize: "cover" }}></div>

          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="mb-20 text-center">
              <span className="font-inter font-medium text-[11px] uppercase tracking-[0.25em] text-[#9CA3AF]">What you earn</span>
              <h2 className="font-cormorant font-light text-[48px] text-[#F5F5F5] mt-4">Internship Perks</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((perk, i) => (
                <div key={i} className="perk-card relative bg-[#151515] border border-white/[0.08] rounded-xl overflow-hidden group hover:border-[#FF9A3C]/40 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] h-[280px]">

                  {/* Atmospheric Background Image */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-all duration-700 ease-out group-hover:scale-105">
                    <img src={perk.bgImage} alt="" className="w-full h-full object-cover grayscale brightness-75 contrast-125" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/70 to-transparent"></div>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <div className="w-14 h-14 rounded-full border border-white/10 bg-[#0B0B0B]/80 backdrop-blur-sm flex items-center justify-center mb-auto group-hover:border-[#FF9A3C]/50 transition-colors duration-500">
                      {perk.icon}
                    </div>

                    <div className="group-hover:-translate-y-[2px] transition-transform duration-500 ease-out mt-6">
                      <h3 className="font-inter font-semibold tracking-wide text-[14px] text-[#F5F5F5] mb-3">{perk.title}</h3>
                      <p className="font-inter text-[13px] leading-[1.6] text-[#9CA3AF] group-hover:text-white/80 transition-colors duration-500">
                        {perk.desc}
                      </p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 - LEADERBOARD */}
        <section className="leaderboard-section w-full py-32 px-[5vw] bg-[#080808] border-t border-white/5">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-cormorant font-light text-[48px] text-[#F5F5F5] mb-4">Impact Leaderboard</h2>
              <p className="font-inter text-[14px] text-[#9CA3AF]">Every contribution creates change.</p>
            </div>

            <div className="w-full border border-white/5 rounded-xl overflow-hidden bg-[#0B0B0B]">
              <div className="grid grid-cols-12 gap-4 p-6 border-b border-white/5 text-[#9CA3AF] font-inter font-medium text-[11px] uppercase tracking-[0.15em]">
                <div className="col-span-2 md:col-span-1 text-center">Rank</div>
                <div className="col-span-6 md:col-span-5">Intern Name</div>
                <div className="col-span-4 md:col-span-3 text-right">Funds Raised</div>
                <div className="hidden md:block col-span-2 text-center">Campaigns</div>
                <div className="hidden md:block col-span-1 text-center">Score</div>
              </div>

              <div className="flex flex-col">
                {leaderboard.map((user, i) => (
                  <div key={i} className={`leaderboard-row grid grid-cols-12 gap-4 p-6 border-b border-white/5 items-center transition-colors hover:bg-white/[0.02] ${i === 0 ? "bg-[#B8860B]/5 border-l-2 border-l-[#B8860B]" : i === 1 ? "bg-[#C0C0C0]/5 border-l-2 border-l-[#C0C0C0]" : i === 2 ? "bg-[#CD7F32]/5 border-l-2 border-l-[#CD7F32]" : "border-l-2 border-l-transparent"}`}>
                    <div className="col-span-2 md:col-span-1 flex justify-center">
                      {i === 0 ? <Crown className="text-[#B8860B]" size={20} /> : i === 1 ? <Medal className="text-[#C0C0C0]" size={20} /> : i === 2 ? <Award className="text-[#CD7F32]" size={20} /> : <span className="font-inter text-[13px] text-[#9CA3AF] font-medium">{user.rank}</span>}
                    </div>
                    <div className="col-span-6 md:col-span-5 font-inter text-[14px] text-[#F5F5F5] font-medium">{user.name}</div>
                    <div className={`col-span-4 md:col-span-3 text-right font-inter font-medium text-[14px] ${i === 0 ? "text-[#B8860B]" : i === 1 ? "text-[#C0C0C0]" : i === 2 ? "text-[#CD7F32]" : "text-[#F5F5F5]"}`}>{user.funds}</div>
                    <div className="hidden md:block col-span-2 text-center font-inter text-[13px] text-[#9CA3AF]">{user.campaigns}</div>
                    <div className="hidden md:block col-span-1 text-center font-inter text-[13px] text-[#9CA3AF]">{user.impact}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border border-white/5 rounded-xl p-6 flex justify-between items-center bg-[#151515]">
              <span className="font-inter text-[13px] text-[#9CA3AF]">Your Position: <strong className="text-white">Unranked</strong></span>
              <button onClick={scrollToForm} className="font-inter text-[11px] text-[#FF9A3C] tracking-[0.1em] uppercase hover:opacity-80">Start Fundraising →</button>
            </div>
          </div>
        </section>

        {/* SECTION 5 - APPLICATION FORM */}
        <section ref={formRef} className="w-full py-32 px-[5vw] border-t border-white/5 bg-[#0B0B0B]">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-20">

            <div className="w-full lg:w-[40%] flex flex-col">
              <h2 className="font-cormorant font-light text-[48px] md:text-[64px] leading-[1.05] text-[#F5F5F5] mb-8">
                Your journey <br /><span className="italic">starts here.</span>
              </h2>

              <div className="space-y-8 mt-4">
                <div>
                  <h4 className="font-inter font-medium text-[11px] uppercase tracking-[0.2em] text-[#9CA3AF] mb-2">Duration</h4>
                  <p className="font-inter text-[14px] text-[#F5F5F5]">1 Month</p>
                </div>
                <div>
                  <h4 className="font-inter font-medium text-[11px] uppercase tracking-[0.2em] text-[#9CA3AF] mb-2">Structure</h4>
                  <p className="font-inter text-[14px] text-[#F5F5F5]">100% Remote, Flexible Hours</p>
                </div>
                <div>
                  <h4 className="font-inter font-medium text-[11px] uppercase tracking-[0.2em] text-[#9CA3AF] mb-2">The Goal</h4>
                  <p className="font-inter text-[14px] text-[#F5F5F5]">Mobilize resources, tell impactful stories, and champion human dignity.</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[60%] bg-[#151515] border border-white/5 p-8 md:p-12 rounded-xl">
              {!submitted ? (
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 form-element">
                    <div className="flex flex-col gap-2">
                      <label className="font-inter text-[11px] text-[#9CA3AF] tracking-[0.1em] uppercase">Full Name<span className="text-[#FF9A3C] ml-1">*</span></label>
                      <input name="full_name" required type="text" className="bg-[#0B0B0B] border border-white/10 rounded-lg px-4 h-[48px] text-[14px] text-white focus:outline-none focus:border-[#FF9A3C] transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-inter text-[11px] text-[#9CA3AF] tracking-[0.1em] uppercase">Email<span className="text-[#FF9A3C] ml-1">*</span></label>
                      <input name="email" required type="email" className="bg-[#0B0B0B] border border-white/10 rounded-lg px-4 h-[48px] text-[14px] text-white focus:outline-none focus:border-[#FF9A3C] transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 form-element">
                    <div className="flex flex-col gap-2">
                      <label className="font-inter text-[11px] text-[#9CA3AF] tracking-[0.1em] uppercase">WhatsApp Number<span className="text-[#FF9A3C] ml-1">*</span></label>
                      <div className="flex gap-2">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="bg-[#0B0B0B] border border-white/10 rounded-lg px-2 w-[80px] h-[48px] text-[14px] text-white focus:outline-none focus:border-[#FF9A3C] transition-colors appearance-none text-center cursor-pointer hover:bg-white/5"
                        >
                          {callingCodes.map(code => (
                            <option key={code} value={code} className="bg-[#0B0B0B] text-white">{code}</option>
                          ))}
                        </select>
                        <input name="phone" required type="tel" pattern="[0-9]{10}" maxLength={10} title="Please enter exactly 10 digits" className="bg-[#0B0B0B] border border-white/10 rounded-lg px-4 h-[48px] text-[14px] text-white focus:outline-none focus:border-[#FF9A3C] transition-colors flex-1" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-inter text-[11px] text-[#9CA3AF] tracking-[0.1em] uppercase">City<span className="text-[#FF9A3C] ml-1">*</span></label>
                      <input name="city" required type="text" className="bg-[#0B0B0B] border border-white/10 rounded-lg px-4 h-[48px] text-[14px] text-white focus:outline-none focus:border-[#FF9A3C] transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 form-element">
                    <div className="flex flex-col gap-2">
                      <label className="font-inter text-[11px] text-[#9CA3AF] tracking-[0.1em] uppercase">Institution<span className="text-[#FF9A3C] ml-1">*</span></label>
                      <input name="institution" required type="text" className="bg-[#0B0B0B] border border-white/10 rounded-lg px-4 h-[48px] text-[14px] text-white focus:outline-none focus:border-[#FF9A3C] transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-inter text-[11px] text-[#9CA3AF] tracking-[0.1em] uppercase">Degree</label>
                      <input name="degree" type="text" className="bg-[#0B0B0B] border border-white/10 rounded-lg px-4 h-[48px] text-[14px] text-white focus:outline-none focus:border-[#FF9A3C] transition-colors" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 form-element">
                    <label className="font-inter text-[11px] text-[#9CA3AF] tracking-[0.1em] uppercase">Why do you want to join?</label>
                    <textarea name="motivation" rows={4} className="bg-[#0B0B0B] border border-white/10 rounded-lg p-4 text-[14px] text-white focus:outline-none focus:border-[#FF9A3C] transition-colors resize-none"></textarea>
                  </div>

                  <div className="flex flex-col gap-2 form-element">
                    <label className="font-inter text-[11px] text-[#9CA3AF] tracking-[0.1em] uppercase">Social Media URL<span className="text-[#FF9A3C] ml-1"></span></label>
                    <input name="linkedin" type="url" className="bg-[#0B0B0B] border border-white/10 rounded-lg px-4 h-[48px] text-[14px] text-white focus:outline-none focus:border-[#FF9A3C] transition-colors" />
                  </div>

                  <div className="flex flex-col gap-2 form-element">
                    <label className="font-inter text-[11px] text-[#9CA3AF] tracking-[0.1em] uppercase">Resume<span className="text-[#FF9A3C] ml-1">*</span></label>
                    <input
                      name="resume_url"
                      required
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                      className="bg-[#0B0B0B] border border-white/10 rounded-lg px-4 h-[48px] text-[14px] text-[#9CA3AF] focus:outline-none focus:border-[#FF9A3C] transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[11px] file:font-inter file:font-medium file:bg-white/10 file:text-white hover:file:bg-white/20 pt-[6px]"
                    />
                  </div>

                  <button type="submit" disabled={loading} className="form-element mt-6 w-full bg-[#FF9A3C] text-[#0B0B0B] font-inter font-bold text-[12px] tracking-[0.2em] uppercase rounded-lg h-[56px] hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                    {loading ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center h-full text-center py-20"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FF9A3C]/10 flex items-center justify-center mb-6">
                    <CheckCircle className="text-[#FF9A3C]" size={32} />
                  </div>
                  <h3 className="font-cormorant text-[36px] text-[#F5F5F5] mb-4">Application Received</h3>
                  <p className="font-inter text-[15px] text-[#9CA3AF] max-w-[300px]">
                    Thank you for stepping up. Our team will review your application and reach out within 48 hours.
                  </p>
                </motion.div>
              )}
            </div>

          </div>
        </section>
      </motion.main>
    </SmoothScroll>
  );
}
