import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './Skills.css'

const CATEGORIES = [
  {
    title: 'Design',
    accent: 'pink',
    skills: ['Canva', 'figma', 'Branding', 'Social Media Design', 'Content Creation','adobe illustrator'],
  },
  {
    title: 'Development',
    accent: 'mint',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Git / GitHub'],
  },
  {
    title: 'Research & Strategy',
    accent: 'lavender',
    skills: ['Market Research', 'Product Research', 'Trend Research', 'Problem Solving', 'Competitor Analysis'],
  },
]

export default function Skills() {
  const revealRef = useScrollReveal()

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="skills__heading">
          <span className="eyebrow">05 — Toolkit</span>
          <h2 className="section-heading">
            What I
            <br />
            work with.
          </h2>
        </div>

        <div className="skills__grid reveal" ref={revealRef}>
          {CATEGORIES.map((category) => (
            <div className={`skills__card skills__card--${category.accent}`} key={category.title}>
              <h3 className="skills__card-title">{category.title}</h3>
              <ul className="skills__pills">
                {category.skills.map((skill) => (
                  <li key={skill} className="pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
