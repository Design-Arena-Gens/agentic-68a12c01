import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: "footwear",
    title: "Footwear",
    description:
      "Engineered for motion with adaptive soles, recycled leathers, and a silhouette that flows from street to studio.",
    highlights: [
      "Adaptive FlowForm™ cushioning",
      "Breathable ocean-knit upper",
      "Modular insoles for varied support",
    ],
    badge: "Available now",
    accent: "from-cyan-300/80 via-cyan-200/20 to-transparent",
    href: "#footwear",
  },
  {
    id: "accessories",
    title: "Men's Accessories",
    description:
      "Everyday layers that flex with your routine. Utility-first bags, cuffs, and belts designed to complement our core footwear line.",
    highlights: [
      "Hydro-treated vegetable tan leather",
      "Mag-lock hardware",
      "Modular carry system",
    ],
    badge: "Available now",
    accent: "from-amber-300/70 via-amber-200/10 to-transparent",
    href: "#accessories",
  },
  {
    id: "future",
    title: "Up Next",
    description:
      "Coming drops extend the Pravaah ethos into outerwear, technical layers, and studio-ready essentials.",
    highlights: [
      "Layerable performance outerwear",
      "Versatile studio-to-street sets",
      "Collaborations with flow artists",
    ],
    badge: "In development",
    accent: "from-slate-200/40 via-slate-200/5 to-transparent",
    href: "#updates",
  },
];

const spotlights = [
  {
    title: "Dynamic Fit Study",
    stat: "92%",
    subtitle: "of testers reported day-long comfort during commute + training.",
  },
  {
    title: "Sustainable Build",
    stat: "68%",
    subtitle: "average recycled content across the core footwear collection.",
  },
  {
    title: "Modular Future",
    stat: "4",
    subtitle: "interchangeable accessory modules launching this year.",
  },
];

const drops = [
  {
    season: "SS25 capsule",
    title: "Liquid Motion Loafer",
    copy: "A slip-on reinterpretation of our flagship sneaker, tuned for hybrid schedules and lightweight travel.",
    tags: ["Adaptive sole", "Deboss suede", "Neutral sand"],
  },
  {
    season: "Q3 limited",
    title: "Tidal Arc Weekender",
    copy: "Carry system with magnetic dividers, recycled sailcloth shell, and fluid curves that echo our logo mark.",
    tags: ["30L capacity", "Weather ready", "Mag-lock"],
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-[-25%] z-[-1] h-[480px] bg-[radial-gradient(circle_at_center,_rgba(248,199,89,0.18),_transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-y-48 right-[-20%] z-[-1] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(109,197,217,0.12),_transparent_60%)] blur-3xl" />

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 pb-24 pt-10 md:px-10 lg:px-16">
        <header className="flex flex-col gap-6 rounded-3xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold text-white shadow-[0_18px_40px_-20px_rgba(0,0,0,0.8)]">
                <Image
                  src="/pravaah-mark.svg"
                  alt="Pravaah emblem"
                  width={36}
                  height={36}
                  priority
                />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-sm uppercase tracking-[0.4em] text-white/50">
                  Pravaah
                </span>
                <span className="text-lg font-semibold text-white">
                  Fluid Form Studio
                </span>
              </div>
            </Link>
            <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
              <Link href="#footwear" className="transition hover:text-white">
                Footwear
              </Link>
              <Link href="#accessories" className="transition hover:text-white">
                Accessories
              </Link>
              <Link href="#updates" className="transition hover:text-white">
                Future drops
              </Link>
            </nav>
            <Link
              href="#newsletter"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
            >
              Join flow
              <span className="text-lg transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.18] via-white/[0.05] to-transparent p-8 shadow-[0_25px_60px_-35px_rgba(0,0,0,0.7)] md:flex-row md:items-center md:gap-12 md:pl-12">
            <div className="flex flex-1 flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
                Flow in motion
              </span>
              <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                Footwear and accessories that move with you and adapt to whatever
                comes next.
              </h1>
              <p className="max-w-2xl text-pretty text-sm text-white/70 md:text-base">
                Pravaah is Hindi for “flow.” Our studio fuses craftsman detail
                with modular design so your essentials transition from commute to
                studio to night effortlessly. Footwear now, accessories today, and
                more categories on the horizon.
              </p>
              <div className="flex flex-col gap-3 text-sm sm:flex-row">
                <Link
                  href="#footwear"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-cyan-300 px-6 py-3 font-semibold text-stone-900 shadow-[0_18px_40px_-20px_rgba(248,199,89,0.8)] transition hover:shadow-[0_18px_40px_-18px_rgba(248,199,89,0.9)]"
                >
                  Explore footwear
                  <span className="text-base">↘</span>
                </Link>
                <Link
                  href="#story"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
                >
                  Our story
                </Link>
              </div>
            </div>
            <div className="relative flex h-full flex-1 items-center justify-center">
              <div className="relative flex h-64 w-full max-w-[320px] items-center justify-center rounded-[48px] border border-white/15 bg-white/[0.06] p-6 shadow-[0_25px_60px_-35px_rgba(0,0,0,0.6)]">
                <div className="absolute inset-6 rounded-[40px] border border-white/15 bg-[radial-gradient(circle_at_top,_rgba(248,199,89,0.25),_transparent_70%)]" />
                <Image
                  src="/hero-sneaker.svg"
                  alt="Pravaah Fluid Motion sneaker"
                  width={420}
                  height={320}
                  className="relative z-10 h-auto w-full rotate-[-6deg] drop-shadow-[0_40px_60px_rgba(0,0,0,0.45)]"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="flex flex-col gap-20">
          <section className="grid gap-8 md:grid-cols-3" id="footwear">
            {categories.map((category) => (
              <article
                key={category.id}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-[0_25px_60px_-40px_rgba(0,0,0,0.7)] transition hover:border-white/20 hover:bg-white/[0.08]"
                id={category.id}
              >
                <div
                  className={`pointer-events-none absolute inset-0 z-0 bg-gradient-to-br ${category.accent}`}
                />
                <div className="relative z-10 flex flex-col gap-4">
                  <span className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
                    {category.badge}
                  </span>
                  <h2 className="text-2xl font-semibold text-white">
                    {category.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-white/70">
                    {category.description}
                  </p>
                  <ul className="flex flex-col gap-2 text-sm text-white/80">
                    {category.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-pretty"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={category.href}
                  className="relative z-10 inline-flex items-center gap-3 text-sm font-semibold text-white/80 transition group-hover:text-white"
                >
                  {category.id === "future" ? "Request capsule update" : "View collection"}
                  <span className="text-base transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </section>

          <section
            className="rounded-3xl border border-white/10 bg-white/[0.05] p-10 shadow-[0_25px_60px_-40px_rgba(0,0,0,0.7)]"
            id="story"
          >
            <div className="flex flex-col gap-10 lg:flex-row">
              <div className="flex-1 space-y-6">
                <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
                  Why Pravaah
                </span>
                <h2 className="text-3xl font-semibold text-white md:text-4xl">
                  Crafted to mirror the rhythm of water—fluid, reflective, and
                  endlessly adaptable.
                </h2>
                <p className="text-sm text-white/70 md:text-base">
                  We build in cycles, testing each release with movement artists,
                  commuters, and creators. Footwear was our first canvas. Men&rsquo;s
                  accessories followed as a natural extension. Every new category
                  will keep the same promise: effortless versatility, premium
                  materials, and future-facing design.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {spotlights.map((spotlight) => (
                    <div
                      key={spotlight.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_15px_30px_-25px_rgba(0,0,0,0.8)]"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                        {spotlight.title}
                      </p>
                      <p className="mt-3 text-3xl font-semibold text-white">
                        {spotlight.stat}
                      </p>
                      <p className="mt-2 text-sm text-white/60">
                        {spotlight.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6">
                <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.06] p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,199,89,0.22),_transparent)]" />
                  <Image
                    src="/flow-grid.svg"
                    alt="Accessories grid visual"
                    width={480}
                    height={420}
                    className="relative z-10 w-full rounded-3xl border border-white/10"
                  />
                </div>
                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent p-7 text-sm text-white/70 shadow-[0_25px_40px_-35px_rgba(0,0,0,0.8)]">
                  <p>
                    Pravaah translates to a stream’s flow. It mirrors how our
                    products flex across daily transitions. Subscribe to studio
                    notes to be first in line for new category drops and limited
                    collaborations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-10 shadow-[0_25px_60px_-40px_rgba(0,0,0,0.7)] lg:grid-cols-[1.2fr_1fr]"
            id="updates"
          >
            <div className="space-y-6">
              <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
                Drop radar
              </span>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Upcoming releases extend the flow across your entire wardrobe.
              </h2>
              <p className="max-w-xl text-sm text-white/70 md:text-base">
                The studio pipeline lets Pravaah evolve while keeping the same
                design language. Expect modular outerwear, movement-ready apparel,
                and accessories that adapt as seamlessly as our footwear.
              </p>
              <div className="flex flex-col gap-4">
                {drops.map((drop) => (
                  <div
                    key={drop.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_15px_35px_-30px_rgba(0,0,0,0.85)]"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      {drop.season}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      {drop.title}
                    </p>
                    <p className="mt-2 text-sm text-white/70">{drop.copy}</p>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs">
                      {drop.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex flex-col gap-6 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.05] p-8">
              <div className="absolute inset-0 bg-[conic-gradient(from_120deg_at_50%_0%,_rgba(248,199,89,0.25),_transparent_55%)] opacity-80" />
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-semibold text-white">
                  Studio Principles
                </h3>
                <ul className="space-y-4 text-sm text-white/70">
                  <li className="flex gap-3">
                    <span className="text-xl text-amber-300">01</span>
                    <div>
                      <p className="font-semibold text-white">Fluid Silhouettes</p>
                      <p>Every curve references the Pravaah crest and the motion of water.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-xl text-amber-300">02</span>
                    <div>
                      <p className="font-semibold text-white">Material Honesty</p>
                      <p>We prioritize recycled, traceable textiles that still deliver elevated tactility.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-xl text-amber-300">03</span>
                    <div>
                      <p className="font-semibold text-white">Modular Growth</p>
                      <p>Accessories and future garments integrate through shared attachment systems.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        <section
          id="newsletter"
          className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent p-10 shadow-[0_25px_60px_-40px_rgba(0,0,0,0.75)] lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-xl space-y-4">
            <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
              Stay in flow
            </span>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Be first for new category drops, limited capsules, and studio invites.
            </h2>
            <p className="text-sm text-white/70 md:text-base">
              Sign up for the Pravaah studio signal. We send fewer than two notes per month, focused on product drops, behind-the-scenes stories, and invite-only experiences.
            </p>
          </div>
          <form className="flex w-full max-w-md flex-col gap-3 text-sm">
            <label htmlFor="email" className="text-xs uppercase tracking-[0.3em] text-white/50">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@email.com"
              className="w-full rounded-full border border-white/15 bg-white/[0.08] px-5 py-3 text-sm text-white outline-none transition focus:border-white/40 focus:bg-white/15"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-cyan-300 px-6 py-3 font-semibold text-stone-900 shadow-[0_18px_40px_-20px_rgba(248,199,89,0.8)] transition hover:shadow-[0_18px_40px_-18px_rgba(248,199,89,0.9)]"
            >
              Get studio notes
            </button>
            <p className="text-xs text-white/50">
              By subscribing, you agree to receive emails from Pravaah. Unsubscribe anytime.
            </p>
          </form>
        </section>
      </div>

      <footer className="border-t border-white/5 bg-black/30 px-6 py-8 backdrop-blur md:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-white">
            <Image
              src="/pravaah-mark.svg"
              alt="Pravaah emblem"
              width={28}
              height={28}
            />
            <span className="text-sm tracking-[0.45em] text-white/50">
              Pravaah
            </span>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Designed for flow • Crafted in limited runs • © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
