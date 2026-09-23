type LogoProps = {
  compact?: boolean
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <div className="flex items-center" aria-label="MysterBotz Events & Experiences logo">
      <img
        src="/brand/mysterbotz-logo.png"
        alt="MysterBotz Events & Experiences logo"
        className={compact ? 'h-11 w-auto' : 'h-16 w-auto sm:h-20'}
      />
    </div>
  )
}
