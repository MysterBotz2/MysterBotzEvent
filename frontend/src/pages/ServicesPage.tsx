import { useEffect, useState } from 'react'
import { api, type ServiceItem } from '../services/api'

export function ServicesPage() {
  const [services, setServices] = useState<ServiceItem[]>([])

  useEffect(() => {
    api.getServices().then((data) => setServices(data.items)).catch(() => undefined)
  }, [])

  const items = services.length ? services : [
    'Weddings & Celebrations',
    'Corporate Events',
    'Conferences & Institutional Events',
    'Debuts & Milestones',
    'Product Launches',
    'Private Events',
    'School & University Events',
    'Live & Experiential Events',
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-10">
        <p className="text-xs uppercase tracking-[0.32em] text-[#d6b57a]">Services</p>
        <h1 className="mt-3 text-4xl font-medium tracking-[-0.05em] text-[#f4efe7] sm:text-5xl">Careful management for every kind of event.</h1>
      </header>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((service, index) => (
          <article key={service} className="rounded-2xl border border-[#2a2927] bg-[#171614] p-6">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d6b57a] text-sm font-medium text-[#d6b57a]">
              {String(index + 1).padStart(2, '0')}
            </div>
            <h2 className="text-2xl font-medium text-[#f4efe7]">{service}</h2>
            <p className="mt-3 text-[#d9d1c5]">
              From planning and pacing to vendor flow and guest experience, we keep the details running without drama.
            </p>
          </article>
        ))}
      </div>
    </main>
  )
}
