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
            <h1 className="text-center text-4xl font-semibold tracking-tight md:text-5xl">
  Credit & Funding Program
</h1>

            <p className="mt-4 text-zinc-300 leading-7">
              We help people clean up their credit, build strong profiles, and
              position themselves to get approved for lines of credit, loans, cars, housing, etc
              
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {[
                "Credit Sweep",
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

            

           
          </div>

          {/* Consultation Card */}
       
<h2 className="mb-3 text-center text-lg font-semibold text-white">
  Free Consultation
</h2>
          <div
            id="consult"
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
           





  

<form action="/api/consult" method="post" className="mt-5 grid gap-3">
  <input
    name="name"
    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-center text-sm text-white placeholder:text-zinc-500 outline-none"
    placeholder="Full name"
  />
  <input
    name="phone"
    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-center text-sm text-white placeholder:text-zinc-500 outline-none"
    placeholder="Phone number"
    inputMode="tel"
  />
  <input
    name="email"
    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-center text-sm text-white placeholder:text-zinc-500 outline-none"
    placeholder="Email"
    inputMode="email"
  />



  <button
    type="submit"
    className="mt-1 w-full rounded-xl bg-white px-4 py-3 text-sm font-bold text-black transition active:scale-[0.99]"
  >
    Request Consultation
  </button>

  <div className="rounded-xl border border-white/10 bg-zinc-900 p-4 text-xs text-zinc-300">
    <div className="font-semibold text-white">What happens next?</div>
    <p className="mt-2">
      You’ll get a text from me with the next step.
    </p>
  </div>
</form>
            </div>
          
        </section>

        {/* Story */}
       

        {/* Footer */}
    <footer className="mt-10 text-center text-xs text-zinc-500">
  <div className="mb-2 space-y-1">
    <div>
      📞 <a href="tel:8723445076" className="hover:underline">
        872-344-5076
      </a>
    </div>
    <div>
      ✉️ <a
        href="mailto:contact@bowiemanagment.com"
        className="hover:underline"
      >
        contact@bowiemanagment.com
      </a>
    </div>
  </div>

  <div className="mt-4">
    © {new Date().getFullYear()} Bowie Management LLC
  </div>
</footer>
      </div>
    </main>
  );
}