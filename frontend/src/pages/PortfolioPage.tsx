import { useEffect, useState } from 'react'
import { ActionButton } from '../components/ActionButton'
import { PortfolioCard } from '../components/PortfolioCard'
import { SectionHeading } from '../components/SectionHeading'
import { api, type PortfolioItem } from '../services/api'

const placeholders = [
  { title: 'Celebration Study 01', category: 'Wedding & Celebration', summary: 'A warm, layered celebration shaped for ease, atmosphere, and seamless guest flow.', image: '/placeholders/event-wedding.svg' },
  { title: 'Corporate Experience 01', category: 'Corporate Event', summary: 'A polished, high-trust environment built for clarity, momentum, and meaningful touchpoints.', image: '/placeholders/event-corporate.svg' },
  { title: 'Milestone Study 01', category: 'Debut & Milestone', summary: 'A confident, personal program designed to feel celebratory without ever feeling chaotic.', image: '/placeholders/event-milestone.svg' },
  { title: 'Conference Study 01', category: 'Conference & Institutional', summary: 'A carefully paced experience where information, energy, and logistics move in sync.', image: '/placeholders/event-conference.svg' },
]

export function PortfolioPage() {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([])

  useEffect(() => {
    api.getPortfolio().then((data) => setPortfolio(data.items)).catch(() => undefined)
  }, [])

  const items = portfolio.length ? portfolio.map((project, index) => ({ ...project, image: placeholders[index % placeholders.length].image })) : placeholders

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header className="mb-10 max-w-3xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#c8a96b]">Portfolio</p>
        <h1 className="mt-3 text-4xl font-medium leading-tight tracking-[-0.06em] text-[#f5f0e6] sm:text-5xl">Selected work that keeps the room steady.</h1>
      </header>

      <SectionHeading eyebrow="Recent studies" title="Quietly confident, thoughtfully planned, beautifully paced." />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
        {items.map((project) => (
          <PortfolioCard
            key={project.title}
            title={project.title}
            category={project.category}
            summary={project.summary}
            image={project.image || '/placeholders/event-wedding.svg'}
          />
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-2xl font-medium tracking-[-0.05em] text-[#f5f0e6] sm:text-3xl">Need an event that feels beautifully in control?</p>
        <div className="mt-7 flex justify-center">
          <ActionButton to="/inquire">Plan Your Event</ActionButton>
        </div>
      </div>
    </main>
  )
}
