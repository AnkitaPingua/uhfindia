"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signup } from "../actions";
import { ArrowLeft } from "lucide-react";

export default function SignupPage() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const result = await signup(formData);

        console.log("SIGNUP RESULT:", result);

        if (result?.error) {
            alert(result.error);
            setLoading(false);
            return;
        }

        if (result?.success) {
            alert("Signup successful");
            setLoading(false);
            return;
        }

        alert("No response received");
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f9a826] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

            {/* Back Button */}
            <Link href="/" className="absolute top-6 left-6 md:top-8 md:left-8 text-white/50 hover:text-white transition-colors flex items-center gap-2 group z-50">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs md:text-sm font-medium uppercase tracking-widest hidden sm:block">Back</span>
            </Link>

            <div className="w-full max-w-[400px] z-10 flex flex-col items-center mt-12 mb-12">
                {/* Logo */}
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-black mb-8 overflow-hidden">
                    <Image
                        src="/logo-enhanced.png"
                        alt="UHF Logo"
                        width={48}
                        height={48}
                        className="object-contain"
                    />
                </div>

                {/* Headings */}
                <h1 className="text-4xl md:text-5xl text-white font-serif mb-2 text-center" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
                    Join the <span className="text-[#f9a826] italic">Movement.</span>
                </h1>
                <p className="text-[10px] md:text-xs text-white/50 tracking-[0.2em] uppercase mb-10 text-center font-medium">
                    Create Your Account
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-md text-center">
                            {error}
                        </div>
                    )}

                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] text-white/50 uppercase tracking-widest font-medium">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Full Name"
                            className="w-full bg-[#1a1a1a] text-white px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[#f9a826] transition-all placeholder:text-white/20 font-medium border border-white/10 focus:bg-[#f4f7fe] focus:text-black focus:placeholder:text-gray-400 data-[filled=true]:bg-[#f4f7fe] data-[filled=true]:text-black"
                            onChange={(e) => {
                                if (e.target.value) {
                                    e.target.setAttribute('data-filled', 'true');
                                } else {
                                    e.target.removeAttribute('data-filled');
                                }
                            }}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] text-white/50 uppercase tracking-widest font-medium">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full bg-[#1a1a1a] text-white px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[#f9a826] transition-all placeholder:text-white/20 font-medium border border-white/10 focus:bg-[#f4f7fe] focus:text-black focus:placeholder:text-gray-400 data-[filled=true]:bg-[#f4f7fe] data-[filled=true]:text-black"
                            onChange={(e) => {
                                if (e.target.value) {
                                    e.target.setAttribute('data-filled', 'true');
                                } else {
                                    e.target.removeAttribute('data-filled');
                                }
                            }}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] text-white/50 uppercase tracking-widest font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="name@example.com"
                            className="w-full bg-[#f4f7fe] text-black px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[#f9a826] transition-all placeholder:text-gray-400 font-medium"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] text-white/50 uppercase tracking-widest font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="••••••••"
                            className="w-full bg-[#f4f7fe] text-black px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[#f9a826] transition-all placeholder:text-gray-400 font-medium"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#f9a826] hover:bg-[#e89a20] text-black font-bold uppercase tracking-widest text-sm py-4 rounded-full mt-4 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? "Signing up..." : "Sign Up"}
                    </button>
                </form>

                <p className="text-white/40 text-xs mt-8">
                    Already have an account?{" "}
                    <Link href="/login" className="text-[#f9a826] hover:text-[#e89a20] transition-colors">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
