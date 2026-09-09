import { siteConfig } from '../data/config.js'
import './Footer.css'

const YEAR = new Date().getFullYear()

const SOCIALS = [
  { label: 'LinkedIn', href: siteConfig.linkedin, external: true },
  { label: 'Phone', href: `tel:${siteConfig.phone}` },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{siteConfig.name}</p>
          <p className="footer__tagline">Creative Designer × Tech Enthusiast</p>
        </div>

        <nav className="footer__socials" aria-label="Social links">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.external ? '_blank' : undefined}
              rel={social.external ? 'noreferrer' : undefined}
            >
              {social.label}
            </a>
          ))}
        </nav>

        <p className="footer__copy">
          © {YEAR} {siteConfig.name}
        </p>
      </div>
    </footer>
  )
}
