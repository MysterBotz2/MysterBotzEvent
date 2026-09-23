type ServiceCardProps = {
  index: number
  title: string
  description: string
}

export function ServiceCard({ index, title, description }: ServiceCardProps) {
  return (
    <article className="group rounded-[1.5rem] border border-white/10 bg-[#151515] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#c8a96b]/60 sm:p-6">
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c8a96b] bg-[#0d0d0d] text-xs font-semibold tracking-[0.2em] text-[#c8a96b]">
        {String(index).padStart(2, '0')}
      </div>
      <h3 className="text-xl font-medium text-[#f5f0e6] sm:text-2xl">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#aaa49a] sm:text-base">{description}</p>
    </article>
  )
}
