const reasons = [
  'Thoughtful planning',
  'Personalized experiences',
  'Detailed coordination',
  'Calm problem-solving',
  'Reliable execution',
  'Client-centered service',
]

export function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-10">
        <p className="text-xs uppercase tracking-[0.32em] text-[#d6b57a]">About</p>
        <h1 className="mt-3 text-4xl font-medium tracking-[-0.05em] text-[#f4efe7] sm:text-5xl">We keep the detail where it belongs.</h1>
      </header>

      <div className="space-y-8 text-[#d9d1c5]">
        <p className="text-lg leading-8">
          MysterBotz Events & Experiences helps clients create well-run moments without carrying the operational weight themselves. We handle planning, logistics, coordination, and contingency so the people at the center of the event can stay present.
        </p>
        <blockquote className="border-l-2 border-[#d6b57a] pl-5 text-2xl font-medium italic leading-relaxed text-[#f4efe7]">
          “The event is what we manage. The moment is what we protect.”
        </blockquote>
      </div>

      <section className="mt-14">
        <h2 className="text-3xl font-medium tracking-[-0.04em] text-[#f4efe7]">Why clients bring us in</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason} className="rounded-2xl border border-[#2a2927] bg-[#171614] p-5 text-[#f4efe7]">
              <div className="mb-4 h-9 w-9 rounded-full border border-[#d6b57a] bg-[#11100f]" aria-hidden="true" />
              <p className="text-lg">{reason}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
