import { useScrollReveal } from '../hooks/useScrollReveal.js'
import Education from './Education.jsx'
import './Experience.css'

const RESPONSIBILITIES = [
  'Conducted market research',
  'Performed competitor analysis',
  'Assisted with lead generation',
  'Supported business development activities',
]

export default function Experience() {
  const revealRef = useScrollReveal()

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="experience__heading">
          <span className="eyebrow">06 — Experience &amp; education</span>
        </div>

        <div className="experience__columns reveal" ref={revealRef}>
          <div className="experience__column">
            <h3 className="experience__column-title">Experience</h3>

            <div className="timeline">
              <div className="timeline__item">
                <span className="timeline__period">Sep 2024 — Oct 2024</span>
                <div className="timeline__body">
                  <h4 className="timeline__title">Business Development Intern</h4>
                  <p className="timeline__subtitle">ezee.pk</p>
                  <ul className="experience__list">
                    {RESPONSIBILITIES.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="experience__column">
            <h3 className="experience__column-title">Education</h3>
            <Education />
          </div>
        </div>
      </div>
    </section>
  )
}
