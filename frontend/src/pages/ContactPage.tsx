export function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-10">
        <p className="text-xs uppercase tracking-[0.32em] text-[#d6b57a]">Contact</p>
        <h1 className="mt-3 text-4xl font-medium tracking-[-0.05em] text-[#f4efe7] sm:text-5xl">Tell us what you’re planning.</h1>
      </header>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-[#2a2927] bg-[#171614] p-6 text-[#d9d1c5]">
          <p className="text-lg font-medium text-[#f4efe7]">Client inquiries</p>
          <p className="mt-4">Email: hello@mysterbotz.events</p>
          <p className="mt-2">Mobile: +63 (000) 000-0000</p>
          <p className="mt-2">Based in the Philippines</p>
        </div>
        <div className="rounded-2xl border border-[#2a2927] bg-[#171614] p-6">
          <p className="text-[#d9d1c5]">We work best with clear objectives, timing, and a few important details. Send your brief and we’ll respond with the next step.</p>
        </div>
      </div>
    </main>
  )
}
