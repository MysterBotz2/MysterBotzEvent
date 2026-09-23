type SectionHeadingProps = {
  eyebrow: string
  title: string
  text?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, text, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`mb-8 flex flex-col gap-3 ${alignment}`}>
      <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#c8a96b]">{eyebrow}</p>
      <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.06em] text-[#f5f0e6] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? <p className="max-w-2xl text-base leading-7 text-[#aaa49a] sm:text-lg">{text}</p> : null}
    </div>
  )
}
