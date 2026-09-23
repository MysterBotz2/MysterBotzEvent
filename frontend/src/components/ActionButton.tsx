import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ActionButtonProps = {
  to: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

export function ActionButton({ to, children, variant = 'primary', className = '' }: ActionButtonProps) {
  const base = 'inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a96b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]'

  const variants = {
    primary: 'bg-[#c8a96b] text-[#141311] hover:bg-[#e0c184]',
    secondary: 'border border-[#c8a96b] bg-transparent text-[#f5f0e6] hover:border-[#e0c184] hover:text-[#f8ead1]',
    ghost: 'bg-[#1d1c1a] text-[#f5f0e6] hover:bg-[#24211f]',
  }

  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
