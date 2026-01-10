export default function ThankYou() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-4">
          Thanks for booking!
        </h1>

        <p className="text-zinc-300 leading-7">
          Your consultation request has been received.
          <br />
          You’ll get a text within <strong>24 hours</strong> with the next step.
        </p>

        <a
          href="/"
          className="mt-6 inline-block rounded-xl bg-white px-5 py-3 text-sm font-bold text-black"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}