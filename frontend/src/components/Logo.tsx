type LogoProps = {
  compact?: boolean
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3" aria-label="MysterBotz Events & Experiences logo">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6b57a] bg-[#171614] text-xs font-semibold tracking-[0.24em] text-[#f4efe7]">
        MB
      </div>
      {!compact && (
        <div className="leading-none">
          <div className="text-sm font-medium uppercase tracking-[0.32em] text-[#f4efe7]">MysterBotz</div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#d6b57a]">Events & Experiences</div>
        </div>
      )}
    </div>
  )
}
