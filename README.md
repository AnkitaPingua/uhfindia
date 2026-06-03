# United H.O.P.E Foundation (UHF)

A highly cinematic, premium, and emotionally resonant web application designed for the United H.O.P.E Foundation. The platform uses a modern architecture to ensure high performance while delivering a beautiful, fluid user experience driven by complex scroll-based animations.

## Tech Stack

**Frontend:**
- **[Next.js](https://nextjs.org/)** (App Router)
- **[Tailwind CSS](https://tailwindcss.com/)** (Styling & Layout)
- **[GSAP](https://gsap.com/)** (Complex timelines & scroll-triggered animations)
- **[Framer Motion](https://www.framer.com/motion/)** (Micro-interactions & page transitions)

**Backend:**
- **Next.js API Routes** OR **Node.js + Express** (Depending on deployment strategy and service separation)

**Database:**
- **[Supabase (PostgreSQL)](https://supabase.com/)** (Relational data for users, events, and dynamic content)

**CMS:**
- **[Sanity](https://www.sanity.io/)** (Headless content management for stories, programs, and foundation updates)

---

## File Structure

```text
uhf/

├── public/
│   ├── images/
│   ├── icons/
│   ├── logos/
│   ├── fonts/
│   └── videos/
│
├── src/
│
│   ├── app/
│   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │
│   │   ├── (public)/
│   │   │
│   │   │   ├── page.tsx
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── programs/
│   │   │   │   └── page.tsx
│   │   │   ├── events/
│   │   │   │   └── page.tsx
│   │   │   ├── stories/
│   │   │   │   └── page.tsx
│   │   │   ├── gallery/
│   │   │   │   └── page.tsx
│   │   │   ├── internship/
│   │   │   │   └── page.tsx
│   │   │   └── contact/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (auth)/
│   │   │
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── signup/
│   │   │   │   └── page.tsx
│   │   │   ├── forgot-password/
│   │   │   │   └── page.tsx
│   │   │   ├── reset-password/
│   │   │   │   └── page.tsx
│   │   │   └── auth/
│   │   │       └── callback/
│   │   │           └── route.ts
│   │   │
│   │   ├── donate/
│   │   │   └── [internCode]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (dashboard)/
│   │   │
│   │   │   ├── admin/
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   ├── users/
│   │   │   │   ├── interns/
│   │   │   │   ├── executives/
│   │   │   │   ├── teamleaders/
│   │   │   │   ├── donations/
│   │   │   │   ├── analytics/
│   │   │   │   ├── audit-logs/
│   │   │   │   ├── content/
│   │   │   │   └── settings/
│   │   │   │
│   │   │   ├── executive/
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   ├── interns/
│   │   │   │   ├── teamleaders/
│   │   │   │   ├── gallery/
│   │   │   │   ├── stories/
│   │   │   │   ├── programs/
│   │   │   │   ├── events/
│   │   │   │   └── reports/
│   │   │   │
│   │   │   ├── teamleader/
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   ├── interns/
│   │   │   │   ├── donations/
│   │   │   │   ├── reports/
│   │   │   │   └── notifications/
│   │   │   │
│   │   │   └── intern/
│   │   │       ├── layout.tsx
│   │   │       ├── page.tsx
│   │   │       ├── profile/
│   │   │       ├── donations/
│   │   │       ├── certificates/
│   │   │       ├── leaderboard/
│   │   │       └── notifications/
│   │   │
│   │   └── api/
│   │
│   │       ├── auth/
│   │       │   ├── logout/
│   │       │   └── invite-user/
│   │       │
│   │       ├── users/
│   │       │   ├── assign-teamleader/
│   │       │   ├── update-profile/
│   │       │   ├── role-management/
│   │       │   └── deactivate-user/
│   │       │
│   │       ├── payments/
│   │       │   ├── create-order/
│   │       │   ├── verify/
│   │       │   └── donation-summary/
│   │       │
│   │       ├── media/
│   │       │   ├── upload/
│   │       │   ├── delete/
│   │       │   └── update/
│   │       │
│   │       └── webhooks/
│   │           └── razorpay/
│   │               └── route.ts
│   │
│   ├── components/
│   │
│   │   ├── ui/
│   │   ├── forms/
│   │   ├── dashboard/
│   │   ├── animations/
│   │   │
│   │   ├── Hero.tsx
│   │   ├── Programs.tsx
│   │   ├── Stories.tsx
│   │   ├── Events.tsx
│   │   ├── Documentary.tsx
│   │   ├── Footer.tsx
│   │   ├── ImpactStats.tsx
│   │   ├── SmoothScroll.tsx
│   │   └── OpeningAnimation.tsx
│   │
│   ├── hooks/
│   │
│   │   ├── useAuth.ts
│   │   ├── useProfile.ts
│   │   ├── useRole.ts
│   │   ├── useDonationStats.ts
│   │   └── useNotifications.ts
│   │
│   ├── lib/
│   │
│   │   ├── supabase/
│   │   │   ├── client.ts
│   │   │   ├── server.ts
│   │   │   ├── admin.ts
│   │   │   └── middleware.ts
│   │   │
│   │   └── razorpay/
│   │       ├── client.ts
│   │       └── verify.ts
│   │
│   ├── services/
│   │
│   │   ├── auth.service.ts
│   │   ├── profile.service.ts
│   │   ├── donation.service.ts
│   │   ├── media.service.ts
│   │   └── notification.service.ts
│   │
│   ├── storage/
│   │
│   │   ├── avatars.md
│   │   ├── gallery.md
│   │   ├── stories.md
│   │   ├── certificates.md
│   │   └── documents.md
│   │
│   ├── types/
│   │
│   │   ├── database.types.ts
│   │   ├── auth.types.ts
│   │   ├── profile.types.ts
│   │   ├── transaction.types.ts
│   │   ├── notification.types.ts
│   │   └── dashboard.types.ts
│   │
│   ├── utils/
│   │
│   │   ├── formatCurrency.ts
│   │   ├── generateShareLink.ts
│   │   ├── splitText.ts
│   │   ├── dateHelpers.ts
│   │   └── constants.ts
│   │
│   ├── constants/
│   │
│   │   ├── roles.ts
│   │   ├── permissions.ts
│   │   └── routes.ts
│   │
│   └── middleware.ts
```

---

## Component Details

### Core Application (`src/app/`)
* **`layout.tsx`**: Defines the root HTML shell. It is responsible for loading the optimized web fonts (`Inter` and `Cormorant Garamond`) and injecting the `SmoothScroll` context across all routes.
* **`page.tsx`**: The primary landing page that stitches all modular sections (Hero, Programs, Stories, etc.) together to form the unified continuous scrolling experience.
* **`(auth)/login/page.tsx` & `(auth)/signup/page.tsx`**: Fully functional, animated authentication routes integrated directly with the Supabase backend via client components. The sign-up flow captures detailed user metadata (including full name and phone number) mapped to Supabase's `options.data`. Both handle session state, display robust error messages, and ensure secure redirection.
* **`donate/[internCode]/page.tsx`**: Immersive, cinematic donation flow dedicated to individual intern fundraising campaigns with tiered options.
* **`(dashboard)/admin/page.tsx`**: Premium "Mission Control" dashboard for administrators displaying platform scale, webhook health, storage quotas, role management, and global metrics.
* **`(dashboard)/executive/page.tsx`**: Editorial-style dashboard for high-level foundation oversight. Features content hub, fundraising analytics, and recent activity streams.
* **`(dashboard)/teamleader/page.tsx`**: Squad management dashboard. Shows team overview, combined progress gauges, intern leaderboards, and alerts.
* **`(dashboard)/intern/page.tsx`**: Personal fundraising dashboard for interns. Tracks individual goals and provides social sharing toolkits, recent donations feed, and QR code generation.
* **`globals.css`**: Contains Tailwind directives and custom CSS for cinematic aesthetic details, such as text-highlighting rules and custom scrollbar hiding.

### Library & Utilities (`src/lib/`)
* **`supabase/`**: Contains the configured Supabase clients needed to talk to the PostgreSQL backend via `@supabase/supabase-js` and `@supabase/ssr`.
* **`utils/animations.ts`**: Utilities for parsing and staggering text for advanced GSAP animations, ensuring high-performance letter-by-letter effects without layout breakage.

### UI & Animations (`src/components/`)
* **`OpeningAnimation.tsx`**: Manages the ultra-cinematic first load experience. Orchestrates the 120px circular logo's entrance, its zoom mechanics, its seamless diagonal translation into the top-left corner, and hosts the persistent top navigation bar.
* **`Hero.tsx`**: The first immediate visual section. Handles the bold typography mixing serif and sans-serif fonts, and seamlessly overlays a cutout image against the bottom/right edges for a 3D overlapping effect.
* **`ImpactStats.tsx`**: A scroll-triggered counter section displaying real-world metrics using GSAP to animate numbers upwards as they enter the viewport.
* **`Programs.tsx`**: A structured grid layout highlighting the core initiatives of the NGO with subtle image-scaling hover states.
* **`Stories.tsx`**: An editorial-style masonry or grid layout designed for deeply human storytelling and impact reporting.
* **`Documentary.tsx`**: A visually intensive horizontal-scroll section. It translates vertical scrolling into a horizontal pan across large, immersive black-and-white photography.
* **`Events.tsx`**: An interactive schedule component to display upcoming volunteer opportunities or foundation activities.
* **`Footer.tsx`**: The comprehensive bottom section of the application containing all site mapping, social links, contact information, and the massive foundational logo.
* **`SmoothScroll.tsx`**: A global layout wrapper that utilizes `lenis` to hijack native browser scrolling and apply a buttery-smooth, cinematic inertia to all scrolling interactions.
* **`EmotionalBreak.tsx`**: A minimal, typography-focused interstitial spacer component designed to give the user a visual and emotional pause between heavy content sections.
