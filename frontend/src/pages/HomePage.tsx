import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api, type PortfolioItem, type ServiceItem } from '../services/api'

const valueProps = [
  'Thoughtful planning',
  'Personalized experiences',
  'Detailed coordination',
  'Calm problem-solving',
  'Reliable execution',
  'Client-centered service',
]

const processSteps = ['Discover', 'Design', 'Plan', 'Coordinate', 'Deliver']

export function HomePage() {
  const [services, setServices] = useState<ServiceItem[]>([])
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([])

  useEffect(() => {
    api.getServices().then((data) => setServices(data.items.slice(0, 8))).catch(() => undefined)
    api.getPortfolio().then((data) => setPortfolio(data.items.slice(0, 3))).catch(() => undefined)
  }, [])

  return (
    <main>
      <section className="border-b border-[#2a2927] bg-[#11100f]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.32em] text-[#d6b57a]">MysterBotz Events & Experiences</p>
            <h1 className="max-w-xl text-4xl font-medium leading-none tracking-[-0.05em] text-[#f4efe7] sm:text-5xl lg:text-7xl">
              Beautifully planned. Brilliantly unnoticed.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#d9d1c5] sm:text-lg">
              We manage the planning, logistics, coordination, and behind-the-scenes complexity so you can stay present for the moments that matter.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/inquire" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d6b57a] px-6 text-sm font-medium text-[#171614] transition hover:bg-[#e4c88f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6b57a]">
                Plan Your Event
              </Link>
              <Link to="/portfolio" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d6b57a] px-6 text-sm font-medium text-[#f4efe7] transition hover:border-[#e4c88f] hover:text-[#fbecc2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6b57a]">
                Explore Our Work
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-[2rem] border border-[#2a2927] bg-[#1a1918] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="rounded-[1.5rem] border border-[#392f20] bg-[#11100f] p-5">
                <div className="mb-5 flex items-center justify-between text-[#d9d1c5]">
                  <span className="text-xs uppercase tracking-[0.26em] text-[#d6b57a]">Event flow</span>
                  <span className="text-xs uppercase tracking-[0.26em]">On schedule</span>
                </div>
                <div className="space-y-4">
                  {[
                    'Venue and vendor coordination',
                    'Guest journey and timing',
                    'Day-of briefing and oversight',
                    'Problem solving before it reaches you',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-[#2a2927] bg-[#171614] p-3 text-sm text-[#f4efe7]">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#d6b57a]" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.34em] text-[#d6b57a]">Brand philosophy</p>
        <h2 className="mt-4 text-center text-3xl font-medium tracking-[-0.04em] text-[#f4efe7] sm:text-4xl">
          “The event is what we manage. The moment is what we protect.”
        </h2>
      </section>

      <section className="border-y border-[#2a2927] bg-[#171614]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#d6b57a]">Services</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-[#f4efe7]">Planning for the moments that matter.</h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.length ? services.map((service, index) => (
              <div key={service} className="rounded-2xl border border-[#2a2927] bg-[#11100f] p-5">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d6b57a] text-xs font-medium text-[#d6b57a]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-medium text-[#f4efe7]">{service}</h3>
              </div>
            )) : (
              [
                'Weddings & Celebrations',
                'Corporate Events',
                'Conferences & Institutional Events',
                'Debuts & Milestones',
                'Product Launches',
                'Private Events',
                'School & University Events',
                'Live & Experiential Events',
              ].map((service, index) => (
                <div key={service} className="rounded-2xl border border-[#2a2927] bg-[#11100f] p-5">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d6b57a] text-xs font-medium text-[#d6b57a]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-medium text-[#f4efe7]">{service}</h3>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.34em] text-[#d6b57a]">Why MysterBotz</p>
        <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-[#f4efe7]">Quiet execution, clear thinking.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {valueProps.map((item) => (
            <div key={item} className="rounded-2xl border border-[#2a2927] bg-[#171614] p-5 text-[#e8dfd2]">
              <div className="mb-4 h-10 w-10 rounded-full border border-[#d6b57a] bg-[#11100f]" aria-hidden="true" />
              <p className="text-lg font-medium text-[#f4efe7]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#2a2927] bg-[#171614]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#d6b57a]">Featured portfolio</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-[#f4efe7]">A few examples of meticulous work.</h2>
            </div>
            <Link to="/portfolio" className="hidden text-sm font-medium text-[#d6b57a] hover:text-[#f5d799] sm:inline-flex">
              View all work →
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {portfolio.length ? portfolio.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-2xl border border-[#2a2927] bg-[#11100f]">
                <div className="flex h-56 items-center justify-center border-b border-[#2a2927] bg-[#1d1b1a] text-sm uppercase tracking-[0.2em] text-[#d6b57a]">
                  {project.placeholder}
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#d6b57a]">{project.category}</p>
                  <h3 className="mt-3 text-2xl font-medium text-[#f4efe7]">{project.title}</h3>
                  <p className="mt-3 text-[#d9d1c5]">{project.summary}</p>
                </div>
              </article>
            )) : (
              [
                ['Private estate celebration', 'Wedding & Celebration', 'A quietly luxurious day paced with intention and ease.'],
                ['Regional conference', 'Corporate Event', 'A high-stakes experience structured for flow and clarity.'],
                ['Campus milestone evening', 'Institutional Event', 'A polished program that kept the room relaxed and engaged.'],
              ].map(([title, category, summary]) => (
                <article key={title} className="overflow-hidden rounded-2xl border border-[#2a2927] bg-[#11100f]">
                  <div className="flex h-56 items-center justify-center border-b border-[#2a2927] bg-[#1d1b1a] text-sm uppercase tracking-[0.2em] text-[#d6b57a]">
                    Placeholder
                  </div>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-[#d6b57a]">{category}</p>
                    <h3 className="mt-3 text-2xl font-medium text-[#f4efe7]">{title}</h3>
                    <p className="mt-3 text-[#d9d1c5]">{summary}</p>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.32em] text-[#d6b57a]">Process</p>
        <h2 className="mt-4 text-center text-3xl font-medium tracking-[-0.04em] text-[#f4efe7]">The magic has a workflow.</h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:flex-wrap">
          {processSteps.map((step, index) => (
            <div key={step} className="flex items-center gap-3 text-lg text-[#f4efe7]">
              <span className="rounded-full border border-[#d6b57a] bg-[#171614] px-4 py-2 text-sm uppercase tracking-[0.2em] text-[#d6b57a]">{step}</span>
              {index < processSteps.length - 1 && <span className="text-[#d6b57a]" aria-hidden="true">↓</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#2a2927] bg-[#11100f]">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-3xl font-medium tracking-[-0.04em] text-[#f4efe7] sm:text-4xl">
            Got something worth celebrating? Let’s make a plan.
          </p>
          <Link to="/inquire" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#d6b57a] px-6 text-sm font-medium text-[#171614] transition hover:bg-[#e4c88f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6b57a]">
            Plan Your Event
          </Link>
        </div>
      </section>
    </main>
  )
}
