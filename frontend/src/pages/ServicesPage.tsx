import { useEffect, useState } from 'react'
import { ActionButton } from '../components/ActionButton'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceCard } from '../components/ServiceCard'
import { api, type ServiceItem } from '../services/api'

export function ServicesPage() {
  const [services, setServices] = useState<ServiceItem[]>([])

  useEffect(() => {
    api.getServices().then((data) => setServices(data.items)).catch(() => undefined)
  }, [])

  const items = services.length ? services : [
    'Weddings & Celebrations',
    'Debuts & Milestones',
    'Corporate Events',
    'Conferences & Institutional Events',
    'Product Launches',
    'Private Events',
    'School & University Events',
    'Live & Experiential Events',
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header className="mb-10 max-w-3xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#c8a96b]">Services</p>
        <h1 className="mt-3 text-4xl font-medium leading-tight tracking-[-0.06em] text-[#f5f0e6] sm:text-5xl">Careful management for every kind of event.</h1>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((service, index) => (
          <ServiceCard
            key={service}
            index={index + 1}
            title={service}
            description="From the first brief to the final room reset, we build calm structure around the details that matter most to your experience."
          />
        ))}
      </div>

      <section className="mt-16 rounded-[2rem] border border-white/10 bg-[#151515] p-6 sm:p-8 lg:p-10">
        <SectionHeading eyebrow="How we work" title="Thoughtful planning, clear communication, steady execution." />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Discovery', 'We clarify the goals, atmosphere, audience, and non-negotiables that shape the event.'],
            ['Coordination', 'We manage the moving parts, vendor rhythm, timing, and contingency planning with discipline.'],
            ['Delivery', 'We keep the details moving so your guests feel looked after and your team feels supported.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#c8a96b]">{title}</p>
              <p className="mt-3 text-sm leading-7 text-[#aaa49a]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16 text-center">
        <p className="text-2xl font-medium tracking-[-0.05em] text-[#f5f0e6] sm:text-3xl">Need a plan that feels effortless from the start?</p>
        <div className="mt-7 flex justify-center">
          <ActionButton to="/inquire">Plan Your Event</ActionButton>
        </div>
      </div>
    </main>
  )
}
