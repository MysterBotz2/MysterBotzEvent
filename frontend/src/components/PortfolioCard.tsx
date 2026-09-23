type PortfolioCardProps = {
  title: string
  category: string
  summary: string
  image: string
}

export function PortfolioCard({ title, category, summary, image }: PortfolioCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#151515]">
      <div className="overflow-hidden border-b border-white/10">
        <img src={image} alt={title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#c8a96b]">{category}</p>
        <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[#f5f0e6]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#aaa49a] sm:text-base">{summary}</p>
      </div>
    </article>
  )
}
