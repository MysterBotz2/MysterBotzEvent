import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ActionButton } from '../components/ActionButton'
import { PortfolioCard } from '../components/PortfolioCard'
import { ProcessStep } from '../components/ProcessStep'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceCard } from '../components/ServiceCard'
import { api, type PortfolioItem, type ServiceItem } from '../services/api'

const valueProps = [
  'Meticulous planning',
  'Personalized experiences',
  'Reliable execution',
  'Calm problem-solving',
  'Thoughtful communication',
  'Attention to detail',
]

const processSteps = [
  { step: '01', title: 'Discover', description: 'We learn the objective, audience, mood, and constraints that matter.' },
  { step: '02', title: 'Design', description: 'We shape the event concept, flow, and experience around the people who will feel it.' },
  { step: '03', title: 'Plan', description: 'The schedule, vendor strategy, logistics, and timeline are built with precision.' },
  { step: '04', title: 'Coordinate', description: 'We manage communication, moving parts, and contingencies before the day begins.' },
  { step: '05', title: 'Deliver', description: 'Everything arrives calmly, clearly, and on rhythm so your moment feels effortless.' },
]

const portfolioFallback = [
  {
    title: 'Celebration Study 01',
    category: 'Wedding & Celebration',
    summary: 'A warm, layered celebration shaped for ease, atmosphere, and seamless guest flow.',
    image: '/placeholders/event-wedding.svg',
  },
  {
    title: 'Corporate Experience 01',
    category: 'Corporate Event',
    summary: 'A polished, high-trust environment built for clarity, momentum, and meaningful touchpoints.',
    image: '/placeholders/event-corporate.svg',
  },
  {
    title: 'Milestone Study 01',
    category: 'Debut & Milestone',
    summary: 'A confident, personal program designed to feel celebratory without ever feeling chaotic.',
    image: '/placeholders/event-milestone.svg',
  },
  {
    title: 'Conference Study 01',
    category: 'Conference & Institutional',
    summary: 'A carefully paced experience where information, energy, and logistics move in sync.',
    image: '/placeholders/event-conference.svg',
  },
]

const heroImages = [
  {
    src: '/brand/hero.jfif',
    position: 'center',
  },
  {
    src: '/brand/hero2.jfif',
    position: 'center',
  },
  {
    src: '/brand/hero3.jfif',
    position: 'center',
  },
  {
    src: '/brand/hero4.jfif',
    position: 'center',
  },
]

export function HomePage() {
  const [services, setServices] = useState<ServiceItem[]>([])
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([])
  const [currentHero, setCurrentHero] = useState(0)

  useEffect(() => {
    api.getServices()
      .then((data) => setServices(data.items.slice(0, 8)))
      .catch(() => undefined)

    api.getPortfolio()
      .then((data) => setPortfolio(data.items.slice(0, 4)))
      .catch(() => undefined)
  }, [])

  useEffect(() => {
    if (heroImages.length <= 1) return

    const interval = window.setInterval(() => {
      setCurrentHero((current) => (current + 1) % heroImages.length)
    }, 6000)

    return () => window.clearInterval(interval)
  }, [])

  const serviceList = services.length ? services : [
    'Weddings & Celebrations',
    'Debuts & Milestones',
    'Corporate Events',
    'Conferences & Institutional Events',
    'Product Launches',
    'Private Events',
    'School & University Events',
    'Live & Experiential Events',
  ]

  const portfolioList = portfolio.length ? portfolio.map((project, index) => ({
    ...project,
    image: portfolioFallback[index % portfolioFallback.length].image,
  })) : portfolioFallback

  return (
    <main>
      {/* <section className="border-b border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.32em] text-[#c8a96b]">MysterBotz Events & Experiences</p>
            <h1 className="max-w-xl text-4xl font-medium leading-[0.95] tracking-[-0.06em] text-[#f5f0e6] sm:text-5xl lg:text-7xl">
              Beautifully planned.<br />Brilliantly unnoticed.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#aaa49a] sm:text-lg">
              We take care of planning, coordination, logistics, and the behind-the-scenes complexity so you can stay present for what matters most.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionButton to="/inquire">Plan Your Event</ActionButton>
              <ActionButton to="/portfolio" variant="secondary">Explore Our Work</ActionButton>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-[#151515] p-4 sm:p-5">
              <div className="rounded-[1.5rem] border border-[#c8a96b]/20 bg-[#101010] p-4 sm:p-5">
                <div className="mb-5 flex items-center justify-between gap-3 text-[#f5f0e6]">
                  <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#c8a96b]">Event flow</p>
                  <span className="text-[11px] uppercase tracking-[0.28em] text-[#aaa49a]">On schedule</span>
                </div>
                <div className="space-y-3">
                  {[
                    'Venue and vendor coordination',
                    'Guest journey and timing',
                    'Day-of briefing and oversight',
                    'Problem-solving before it reaches you',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#1d1c1a] p-3 text-sm text-[#f5f0e6]">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#c8a96b]" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative min-h-[650px] overflow-hidden border-b border-white/10 bg-[#0d0d0d]">
  {/* Background slideshow */}
  {heroImages.map((hero, index) => (
    <div
      key={hero.src}
      className={`absolute inset-0 bg-cover bg-no-repeat transition-all duration-[1500ms] ease-in-out ${
        index === currentHero
          ? 'scale-100 opacity-100'
          : 'scale-[1.03] opacity-0'
      }`}
      style={{
        backgroundImage: `url('${hero.src}')`,
        backgroundPosition: hero.position,
      }}
      aria-hidden="true"
    />
  ))}

  {/* Base dark overlay */}
  <div
    className="absolute inset-0 bg-black/55"
    aria-hidden="true"
  />

  {/* Stronger gradient behind text */}
  <div
    className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25"
    aria-hidden="true"
  />

  {/* Slight bottom gradient */}
  <div
    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"
    aria-hidden="true"
  />

  {/* Hero content */}
  <div className="relative z-10 mx-auto grid min-h-[650px] max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
    {/* Left side */}
    <div className="flex flex-col justify-center">
      <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.32em] text-[#c8a96b]">
        MysterBotz Events & Experiences
      </p>

      <h1 className="max-w-xl text-4xl font-medium leading-[0.95] tracking-[-0.06em] text-[#f5f0e6] sm:text-5xl lg:text-7xl">
        Beautifully planned.
        <br />
        Brilliantly unnoticed.
      </h1>

      <p className="mt-5 max-w-xl text-base leading-7 text-[#d0cbc2] sm:text-lg">
        We take care of planning, coordination, logistics, and the
        behind-the-scenes complexity so you can stay present for what matters
        most.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ActionButton to="/inquire">
          Plan Your Event
        </ActionButton>

        <ActionButton to="/portfolio" variant="secondary">
          Explore Our Work
        </ActionButton>
      </div>
    </div>

    {/* Right side */}
    <div className="flex items-center justify-center lg:justify-end">
      <div className="w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-[#151515]/75 p-4 shadow-2xl backdrop-blur-md sm:p-5">
        <div className="rounded-[1.5rem] border border-[#c8a96b]/20 bg-[#101010]/80 p-4 sm:p-5">
          <div className="mb-5 flex items-center justify-between gap-3 text-[#f5f0e6]">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#c8a96b]">
              Event flow
            </p>

            <span className="text-[11px] uppercase tracking-[0.28em] text-[#aaa49a]">
              On schedule
            </span>
          </div>

          <div className="space-y-3">
            {[
              'Venue and vendor coordination',
              'Guest journey and timing',
              'Day-of briefing and oversight',
              'Problem-solving before it reaches you',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#1d1c1a]/80 p-3 text-sm text-[#f5f0e6] backdrop-blur-sm"
              >
                <span
                  className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#c8a96b]"
                  aria-hidden="true"
                />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Slide indicators */}
  <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
    {heroImages.map((hero, index) => (
      <button
        key={hero.src}
        type="button"
        onClick={() => setCurrentHero(index)}
        className={`h-1 rounded-full transition-all duration-500 ${
          index === currentHero
            ? 'w-9 bg-[#c8a96b]'
            : 'w-3 bg-white/40 hover:bg-white/70'
        }`}
        aria-label={`Show slide ${index + 1}`}
        aria-current={index === currentHero ? 'true' : undefined}
      />
    ))}
  </div>
</section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Brand philosophy"
          title="The event is what we manage. The moment is what we protect."
          align="center"
        />
      </section>

      <section className="border-y border-white/10 bg-[#151515]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Services" title="Planning for the moments that matter." />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {serviceList.map((service, index) => (
              <ServiceCard key={service} index={index + 1} title={service} description="From the initial concept to the final room reset, we keep the details moving with calm precision." />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Why MysterBotz" title="Beautiful upfront. Precise backstage." />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {valueProps.map((item, index) => (
            <div key={item} className="rounded-[1.5rem] border border-white/10 bg-[#151515] p-5 sm:p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#c8a96b] bg-[#0d0d0d] text-xs font-medium text-[#c8a96b]">
                {String(index + 1).padStart(2, '0')}
              </div>
              <p className="text-lg font-medium text-[#f5f0e6]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#151515]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <SectionHeading eyebrow="Featured portfolio" title="A few examples of meticulous work." />
            <Link to="/portfolio" className="hidden text-sm font-medium text-[#c8a96b] hover:text-[#e0c184] sm:inline-flex">
              View all work →
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {portfolioList.map((project) => (
              <PortfolioCard
                key={project.title}
                title={project.title}
                category={project.category}
                summary={project.summary}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Process" title="The magic has a workflow." align="center" />
        <div className="mt-8 space-y-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((item) => (
            <ProcessStep key={item.title} step={item.step} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#151515]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#c8a96b]">We believe moments matter because people do.</p>
          <p className="mt-6 text-3xl font-medium tracking-[-0.06em] text-[#f5f0e6] sm:text-4xl lg:text-5xl">
            We believe moments matter because people do.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#aaa49a]">
            Quietly orchestrated experiences feel easy because they were thoughtfully designed to do exactly that.
          </p>
        </div>
      </section>

      <section className="bg-[#0d0d0d]">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-3xl font-medium tracking-[-0.06em] text-[#f5f0e6] sm:text-4xl">
            Got something worth celebrating?
          </p>
          <p className="mt-3 text-lg text-[#aaa49a]">Let’s make a plan.</p>
          <div className="mt-8 flex justify-center">
            <ActionButton to="/inquire">Plan Your Event</ActionButton>
          </div>
        </div>
      </section>
    </main>
  )
}
