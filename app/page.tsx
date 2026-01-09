import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-5 py-10">
        {/* Top bar */}
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/bowie-logo.png"
              alt="Bowie Management Logo"
              width={50}
              height={50}
              priority
            />
            <span className="text-sm font-semibold tracking-wide">
              Bowie Management LLC
            </span>
          </div>
          <div className="text-xs text-zinc-400">
            Credit Repair • Funding
          </div>
        </header>

        {/* Hero */}
        <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Credit & Funding Specialist
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

            

            <p className="mt-3 text-xs text-zinc-500">
              After you submit your info, I’ll text you the next step.
            </p>
          </div>

          {/* Consultation Card */}
          <p className="mb-4 text-sm text-zinc-300 leading-6">
  Go to <span className="font-semibold text-white">EXPERIAN.COM</span> and create
  an account. When you sign up, please <span className="font-semibold text-white">
  UPGRADE</span> the account and put a card on file to utilize the
  <span className="font-semibold text-white"> FREE TRIAL</span> so we can see all
  three credit bureaus. You will not be charged — I will
  <span className="font-semibold text-white"> downgrade</span> you to the free
  version before the trial ends.
</p>
          <div
            id="consult"
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-lg font-semibold">Free Consultation</h2>

<p className="mt-2 text-sm text-zinc-300 leading-6">
  Go to <span className="font-semibold text-white">EXPERIAN.COM</span> and create
  an account. When you sign up, please{" "}
  <span className="font-semibold text-white">upgrade</span> the account and put a
  card on file to use the{" "}
  <span className="font-semibold text-white">free trial</span> so we can view all
  three credit bureaus. You will not be charged — I will downgrade you to the
  free version before the trial ends.
</p>

<p className="mt-3 text-sm text-zinc-300">
  Enter your info below and I’ll text you the next step.
</p>

            <div className="mt-5 grid gap-3">
              <input
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-center text-sm text-white placeholder:text-zinc-500 outline-none"
                placeholder="Full name"
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-center text-sm text-white placeholder:text-zinc-500 outline-none"
                placeholder="Phone number"
                inputMode="tel"
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-center text-sm text-white placeholder:text-zinc-500 outline-none"
                placeholder="Email"
                inputMode="email"
              />

              {/* Experian fields */}
              <input
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-center text-sm text-white placeholder:text-zinc-500 outline-none"
                placeholder="Experian Username"
              />
              <input
                type="password"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-center text-sm text-white placeholder:text-zinc-500 outline-none"
                placeholder="Experian Password"
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-center text-sm text-white placeholder:text-zinc-500 outline-none"
                placeholder="Security Answer"
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-center text-sm text-white placeholder:text-zinc-500 outline-none"
                placeholder="PIN"
                inputMode="numeric"
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
     

        {/* Footer */}
        <footer className="mt-10 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Bowie Management LLC
        </footer>
      </div>
    </main>
  );
}