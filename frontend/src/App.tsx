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
  return (
    <div className="min-h-screen bg-[#11100f] text-[#f4efe7]">
      <header className="sticky top-0 z-50 border-b border-[#2a2927] bg-[#11100f]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" aria-label="MysterBotz home" className="shrink-0">
            <Logo compact={false} />
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-[#d6b57a]' : 'text-[#e7e0d4] hover:text-[#d6b57a]'}`}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/inquire" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d6b57a] px-5 text-sm font-medium text-[#171614] hover:bg-[#e4c88f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6b57a]">
              Plan Your Event
            </Link>
          </nav>

          <div className="md:hidden">
            <Link to="/inquire" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d6b57a] px-4 text-sm font-medium text-[#171614]">
              Plan Your Event
            </Link>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/inquire" element={<InquiryPage />} />
      </Routes>

      <footer className="border-t border-[#2a2927] bg-[#11100f]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <Logo compact />
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#d9d1c5]">Beautifully planned. Brilliantly unnoticed.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#d6b57a]">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-[#d9d1c5]">
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#d6b57a]">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-[#d9d1c5]">
              <li>hello@mysterbotz.events</li>
              <li>+63 (000) 000-0000</li>
              <li>Philippines</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#d6b57a]">Legal</p>
            <ul className="mt-4 space-y-2 text-sm text-[#d9d1c5]">
              <li>Privacy Policy</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#2a2927] py-4 text-center text-xs uppercase tracking-[0.2em] text-[#d9d1c5]">
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
