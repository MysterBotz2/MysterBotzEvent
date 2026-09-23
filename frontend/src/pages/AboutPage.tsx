const reasons = [
  'Thoughtful planning',
  'Personalized experiences',
  'Detailed coordination',
  'Calm problem-solving',
  'Reliable execution',
  'Client-centered service',
]

const values = [
  { letter: 'M', title: 'Meaning', text: 'Every event has a reason, a feeling, and a story worth protecting.' },
  { letter: 'Y', title: 'Your Moment Matters', text: 'The way guests feel is part of the event architecture, not an afterthought.' },
  { letter: 'S', title: 'Service with Heart', text: 'We work in a way that feels attentive, reassuring, and genuinely human.' },
  { letter: 'T', title: 'Trust', text: 'Clear planning and honest communication keep every decision grounded.' },
  { letter: 'E', title: 'Excellence', text: 'We aim for effortless execution, not just good intentions.' },
  { letter: 'R', title: 'Resourcefulness', text: 'We know the back-up plan is part of the plan and we always have one.' },
]

export function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header className="mb-10 max-w-3xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#c8a96b]">About</p>
        <h1 className="mt-3 text-4xl font-medium leading-tight tracking-[-0.06em] text-[#f5f0e6] sm:text-5xl">We keep the detail where it belongs.</h1>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-[#151515] p-6 sm:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#c8a96b]">Who we are</p>
          <p className="mt-5 text-base leading-8 text-[#aaa49a] sm:text-lg">
            MysterBotz Events & Experiences helps clients create meaningful experiences without carrying the operational weight themselves. We plan, coordinate, and solve the moving pieces behind the scenes so the people at the center of the event can stay present.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#151515] p-6 sm:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#c8a96b]">Mission</p>
          <p className="mt-5 text-base leading-8 text-[#aaa49a] sm:text-lg">
            To design event experiences that feel seamless, intentional, and genuinely welcoming from the first welcome to the final farewell.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-[2rem] border border-white/10 bg-[#151515] p-6 sm:p-8">
        <blockquote className="border-l-2 border-[#c8a96b] pl-5 text-2xl font-medium italic leading-relaxed text-[#f5f0e6] sm:text-3xl">
          “The event is what we manage. The moment is what we protect.”
        </blockquote>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-medium tracking-[-0.06em] text-[#f5f0e6]">Why clients bring us in</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => (
            <div key={reason} className="rounded-[1.5rem] border border-white/10 bg-[#151515] p-5 sm:p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#c8a96b] bg-[#0d0d0d] text-xs font-medium text-[#c8a96b]">
                {String(index + 1).padStart(2, '0')}
              </div>
              <p className="text-lg font-medium text-[#f5f0e6]">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-[2rem] border border-white/10 bg-[#151515] p-6 sm:p-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#c8a96b]">Core values</p>
        <h2 className="mt-4 text-3xl font-medium tracking-[-0.06em] text-[#f5f0e6]">M.Y.S.T.E.R.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value) => (
            <div key={value.letter} className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-5">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#c8a96b] text-sm font-semibold text-[#141311]">{value.letter}</div>
              <p className="text-lg font-medium text-[#f5f0e6]">{value.title}</p>
              <p className="mt-2 text-sm leading-7 text-[#aaa49a]">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#c8a96b]">Our philosophy</p>
        <p className="mt-4 text-2xl font-medium tracking-[-0.05em] text-[#f5f0e6] sm:text-3xl">Beautifully planned. Brilliantly unnoticed.</p>
      </section>
    </main>
  )
}
