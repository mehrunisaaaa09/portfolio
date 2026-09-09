import { ArrowRight, Sparkles } from 'lucide-react'
import { siteConfig } from '../data/config.js'
import MediaFrame from './MediaFrame.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <span className="blob hero__blob hero__blob--one" aria-hidden="true" />
      <span className="blob hero__blob hero__blob--two" aria-hidden="true" />
      <span className="dot hero__dot hero__dot--one" aria-hidden="true" />
      <span className="dot hero__dot hero__dot--two" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            {siteConfig.availability}
          </span>

          <h1 className="hero__headline">
            Where creativity
            <br />
            <em>meets</em> technology.
          </h1>

          <p className="hero__subtitle">
            Hi, I'm {siteConfig.name} — an Information Engineering Technology
            student and creative designer who loves turning ideas into visual
            experiences and digital products.
          </p>

          <div className="hero__actions">
            <a href="#work" className="btn btn-primary">
              View my work <ArrowRight className="btn-icon" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's connect
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="false">
          <div className="hero__visual-frame">
            <MediaFrame image="hero-portrait.png" alt={`${siteConfig.name}, creative designer`} accent="pink" />

            <span className="hero__tag hero__tag--top">
              <Sparkles className="btn-icon" aria-hidden="true" /> Design × Code
            </span>

            <span className="hero__tag hero__tag--bottom">
              Based in {siteConfig.location}
            </span>

            <span className="hero__star hero__star--one" aria-hidden="true">✦</span>
            <span className="hero__star hero__star--two" aria-hidden="true">✧</span>
            <span className="hero__ring" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
