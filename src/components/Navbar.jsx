import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../data/config.js'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen)
    return () => document.body.classList.remove('no-scroll')
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" aria-label={`${siteConfig.name} — home`}>
          {siteConfig.initial}
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <nav className="navbar__mobile-links" aria-label="Mobile">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
