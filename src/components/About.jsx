import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './About.css'

const FACTS = ['IET Student', 'Creative Designer', 'Frontend Explorer', 'AI/ML Enthusiast']
const TAGS = [
  { label: 'Creative', accent: 'pink' },
  { label: 'Tech', accent: 'mint' },
  { label: 'Design', accent: 'yellow' },
  { label: 'Curious', accent: 'lavender' },
]

export default function About() {
  const revealRef = useScrollReveal()

  return (
    <section id="about" className="section about">
      <span className="blob about__blob" aria-hidden="true" />

      <div className="container about__grid reveal" ref={revealRef}>
        <div className="about__intro">
          <span className="eyebrow">02 — About me</span>
          <h2 className="section-heading">
            A little
            <br />
            about me.
          </h2>

          <ul className="about__tags">
            {TAGS.map((tag) => (
              <li key={tag.label} className={`pill pill--${tag.accent}`}>
                {tag.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="about__content">
          <p className="about__text">
            I'm an Information Engineering Technology student with a strong
            interest in both technology and creative design. I enjoy
            designing visual identities, social media content and digital
            experiences, while also exploring web development, React and
            AI/ML.
          </p>
          <p className="about__text about__text--muted">
            Beyond design and code, I’m interested in understanding the ideas behind a project  from business and market research to product research, competitor analysis, and turning problems into creative digital solutions.

Somewhere between a sketchbook, a browser tab, and a code editor is where I do my best work creating a brand concept one day and building an interactive web experience the next.
          </p>

          <div className="about__facts">
            {FACTS.map((fact) => (
              <div className="about__fact" key={fact}>
                <span className="about__fact-dot" aria-hidden="true" />
                {fact}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
