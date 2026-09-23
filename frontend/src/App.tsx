import { useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import { Logo } from './components/Logo'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { InquiryPage } from './pages/InquiryPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { ServicesPage } from './pages/ServicesPage'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#f5f0e6]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0d0d]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" aria-label="MysterBotz home" className="shrink-0" onClick={() => setMenuOpen(false)}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? 'text-[#c8a96b]' : 'text-[#ebe3d5] hover:text-[#c8a96b]'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/inquire" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#c8a96b] px-5 text-sm font-medium text-[#141311] transition hover:bg-[#e0c184] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a96b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]">
              Plan Your Event
            </Link>
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <Link to="/inquire" className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#c8a96b] px-4 text-sm font-medium text-[#141311] transition hover:bg-[#e0c184]">
              Plan Your Event
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#151515] text-[#f5f0e6]"
            >
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 rounded-full bg-current" />
                <span className="block h-0.5 w-5 rounded-full bg-current" />
                <span className="block h-0.5 w-5 rounded-full bg-current" />
              </span>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div id="mobile-menu" className="border-t border-white/10 bg-[#0d0d0d] md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-3 text-base font-medium transition ${isActive ? 'bg-[#151515] text-[#c8a96b]' : 'text-[#f5f0e6] hover:bg-[#151515]'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        ) : null}
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/inquire" element={<InquiryPage />} />
      </Routes>

      <footer className="border-t border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <Logo compact />
            <p className="mt-4 max-w-xs text-sm leading-7 text-[#aaa49a]">Beautifully planned. Brilliantly unnoticed.</p>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#c8a96b]">Explore</p>
            <ul className="mt-4 space-y-3 text-sm text-[#ddd5c9]">
              <li><Link to="/services" className="hover:text-[#c8a96b]">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#c8a96b]">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-[#c8a96b]">About</Link></li>
              <li><Link to="/contact" className="hover:text-[#c8a96b]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#c8a96b]">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-[#ddd5c9]">
              <li>markboton.mysterbotz@gmail.com</li>
              <li>+63 (000) 000-0000</li>
              <li>Philippines</li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#c8a96b]">Follow</p>
            <ul className="mt-4 space-y-3 text-sm text-[#ddd5c9]">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 text-center text-[10px] uppercase tracking-[0.24em] text-[#aaa49a]">
          © 2026 MysterBotz Events & Experiences
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
