type ProcessStepProps = {
  step: string
  title: string
  description: string
}

export function ProcessStep({ step, title, description }: ProcessStepProps) {
  return (
    <div className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-[#151515] p-5 sm:p-6">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c8a96b] bg-[#0d0d0d] text-sm font-medium text-[#c8a96b]">
        {step}
      </div>
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#c8a96b]">{title}</p>
        <p className="mt-2 text-sm leading-7 text-[#aaa49a]">{description}</p>
      </div>
    </div>
  )
}
