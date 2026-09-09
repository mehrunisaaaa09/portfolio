import { ArrowUpRight, Linkedin, Mail, Phone } from 'lucide-react'
import { siteConfig } from '../data/config.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './Contact.css'

const LINKS = [
  { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone}`, icon: Phone },
  { label: 'LinkedIn', value: 'LinkedIn', href: siteConfig.linkedin, icon: Linkedin },
]

export default function Contact() {
  const revealRef = useScrollReveal()

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__card reveal" ref={revealRef}>
          <span className="dot contact__dot contact__dot--one" aria-hidden="true" />
          <span className="dot contact__dot contact__dot--two" aria-hidden="true" />
          <span className="contact__star" aria-hidden="true">✦</span>

          <span className="eyebrow contact__eyebrow">07 — Get in touch</span>

          <h2 className="contact__heading">
            Have an idea?
            <br />
            Let's create something.
          </h2>

          <p className="contact__subtitle">
            I'm always interested in creative projects, internships and
            opportunities where technology meets design.
          </p>

          <div className="contact__links">
            {LINKS.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === 'Email' || label === 'Phone' ? undefined : '_blank'}
                rel={label === 'Email' || label === 'Phone' ? undefined : 'noreferrer'}
                className="contact__link"
              >
                <Icon className="btn-icon" aria-hidden="true" />
                {value}
                <ArrowUpRight className="contact__link-arrow" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
