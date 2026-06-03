"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * /donate redirects to the demo intern donation page.
 * In production this would resolve the intern code from the user's session
 * or a campaign URL parameter.
 */
export default function DonatePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the demo intern-code donate experience
    router.replace("/donate/HOPE-2026");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-[#FF9A3C] border-t-transparent animate-spin" />
        <p className="font-inter text-[13px] text-white/40 tracking-[0.15em] uppercase">
          Loading donation page…
        </p>
      </div>
    </div>
  );
}
