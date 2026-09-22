import { useEffect, useState } from 'react'
import { api, type PortfolioItem } from '../services/api'

export function PortfolioPage() {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([])

  useEffect(() => {
    api.getPortfolio().then((data) => setPortfolio(data.items)).catch(() => undefined)
  }, [])

  const items = portfolio.length ? portfolio : [
    {
      title: 'Private estate celebration',
      category: 'Wedding & Celebration',
      summary: 'A quietly luxurious day paced with intention and ease.',
      placeholder: 'Placeholder',
    },
    {
      title: 'Regional conference',
      category: 'Corporate Event',
      summary: 'A high-stakes experience structured for flow and clarity.',
      placeholder: 'Placeholder',
    },
    {
      title: 'Campus milestone evening',
      category: 'Institutional Event',
      summary: 'A polished program that kept the room relaxed and engaged.',
      placeholder: 'Placeholder',
    },
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-10">
        <p className="text-xs uppercase tracking-[0.32em] text-[#d6b57a]">Portfolio</p>
        <h1 className="mt-3 text-4xl font-medium tracking-[-0.05em] text-[#f4efe7] sm:text-5xl">Selected work that keeps the room steady.</h1>
      </header>
      <div className="grid gap-5 lg:grid-cols-3">
        {items.map((project) => (
          <article key={project.title} className="overflow-hidden rounded-2xl border border-[#2a2927] bg-[#171614]">
            <div className="flex h-64 items-center justify-center border-b border-[#2a2927] bg-[#1a1918] text-sm uppercase tracking-[0.2em] text-[#d6b57a]">
              {project.placeholder}
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-[#d6b57a]">{project.category}</p>
              <h2 className="mt-3 text-2xl font-medium text-[#f4efe7]">{project.title}</h2>
              <p className="mt-3 text-[#d9d1c5]">{project.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
