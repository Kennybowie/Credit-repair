import Image from "next/image";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5Zm4.25 4.25A5.75 5.75 0 1 1 6.25 14 5.76 5.76 0 0 1 12 8.25Zm0 2A3.75 3.75 0 1 0 15.75 14 3.75 3.75 0 0 0 12 10.25ZM18 7.1a1.1 1.1 0 1 1-1.1-1.1A1.1 1.1 0 0 1 18 7.1Z"
      />
    </svg>
  );
}

export default function Home() {
  // logo-matching green (tweak if you want):
  const brandGreen = "#1ea84a";

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Top contact bar */}
      <div
        className="w-full border-b border-white/10"
        style={{ backgroundColor: brandGreen }}
      >
        <div className="mx-auto max-w-5xl px-5 py-2">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            {/* Phone */}
            <a
              href="tel:+18723445076"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black/90"
            >
              <span aria-hidden>📞</span>
              <span className="whitespace-nowrap">872-344-5076</span>
            </a>

            {/* Email + IG */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@bowiemanagment.com"
                className="inline-flex items-center gap-2 text-sm font-semibold text-black/90"
              >
                <span aria-hidden>✉️</span>
                <span className="whitespace-nowrap">
                  contact@bowiemanagment.com
                </span>
              </a>

              <a
                href="https://instagram.com/YOURINSTAGRAM"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-black/15 p-2 text-black/90 hover:bg-black/25"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-10">
        {/* Top bar */}
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm font-semibold tracking-wide">
            <Image
              src="/bowie-logo.png"
              alt="Bowie Management"
              width={34}
              height={34}
              className="h-[34px] w-[34px] object-contain"
              priority
            />
            <span>Bowie Management LLC</span>
          </div>
          <div className="hidden text-xs text-zinc-400 sm:block">
            Credit Repair • Funding
          </div>
        </header>

        {/* Hero */}
        <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Credit &amp; Funding Specialist
              <span className="block text-zinc-300">
                structured for real-life goals.
              </span>
            </h1>

            <p className="mt-4 text-zinc-300 leading-7">
              I help people clean up their credit, build strong profiles, and
              position themselves to get approved for lines of credit — whether
              you’re working toward a house, a car, or more financial freedom.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Dispute strategy + cleanup",
                "Credit building plan",
                "Utilization + reporting optimization",
                "Funding roadmap",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#consult"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-black transition active:scale-[0.99]"
              >
                Start with a Consultation
              </a>
              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition active:scale-[0.99]"
              >
                My Story
              </a>
            </div>

            <p className="mt-3 text-xs text-zinc-500">
              After you submit your info, I’ll text you the next step.
            </p>
          </div>

          {/* Card + form */}
          <div
            id="consult"
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-lg font-semibold">Initial Consultation</h2>
            <p className="mt-1 text-sm text-zinc-300">
              Enter your info and I’ll text you the next step.
            </p>

            <div className="mt-5 grid gap-3">
              <input
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-center text-sm text-white placeholder:text-zinc-500 outline-none"
                placeholder="Full name"
                name="name"
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-center text-sm text-white placeholder:text-zinc-500 outline-none"
                placeholder="Phone number"
                inputMode="tel"
                name="phone"
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-center text-sm text-white placeholder:text-zinc-500 outline-none"
                placeholder="Email"
                inputMode="email"
                name="email"
              />

              <button className="mt-1 w-full rounded-xl bg-white px-4 py-3 text-sm font-bold text-black transition active:scale-[0.99]">
                Request Consultation
              </button>

              <div className="rounded-xl border border-white/10 bg-zinc-900 p-4 text-xs text-zinc-300">
                <div className="font-semibold text-white">What happens next?</div>
                <p className="mt-2">
                  You’ll get a text from me with the next step and what I need to
                  review your situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section
          id="story"
          className="mt-12 grid gap-8 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-[180px,1fr]"
        >
          <div className="mx-auto">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
              <Image
                src="/kenny.jpg"
                alt="Bowie Management"
                width={360}
                height={360}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">My Story</h3>
            <p className="mt-3 text-zinc-300 leading-7">
              I got into credit because I saw how much it affects everything —
              the car you drive, the home you can buy, the opportunities you can
              access, and even your peace of mind. Over time I learned how credit
              works, what lenders actually look for, and how to build profiles the
              right way.
            </p>

            <p className="mt-3 text-zinc-300 leading-7">
              My approach is simple: no fluff — just a clear plan, step-by-step,
              based on your goal. If you’re serious about leveling up your credit,
              I’ll show you exactly what to do next.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-zinc-900 p-4">
                <div className="text-sm font-semibold">Goal-focused</div>
                <div className="mt-1 text-xs text-zinc-400">
                  House, car, or funding — built around your target.
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-zinc-900 p-4">
                <div className="text-sm font-semibold">Simple steps</div>
                <div className="mt-1 text-xs text-zinc-400">
                  Clear actions, no confusing credit jargon.
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-zinc-900 p-4">
                <div className="text-sm font-semibold">Text updates</div>
                <div className="mt-1 text-xs text-zinc-400">
                  You’ll know what’s happening at each step.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Bowie Management LLC
        </footer>
      </div>
    </main>
  );
}