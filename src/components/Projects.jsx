import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import MediaFrame from './MediaFrame.jsx'
import './Projects.css'

function ProjectRow({ project }) {
  const revealRef = useScrollReveal()

  if (project.featured) {
    const isScreens = project.galleryLayout === 'screens'

    return (
      <article className="project project--featured reveal" ref={revealRef}>
        <div className="project__featured-copy">
          <span className="project__number">{project.id}</span>
          <span className={`pill pill--${project.accent} project__category`}>
            {project.category}
          </span>

          <h3 className="project__title project__title--lg">{project.fullTitle}</h3>
          <p className="project__description">{project.description}</p>

          <ul className="project__tools">
            {project.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>

          <div className={isScreens ? 'project__featured-screens' : 'project__featured-gallery'}>
            {project.gallery?.map((image) => (
              <MediaFrame
                key={image}
                image={image}
                alt={`${project.title} detail`}
                accent={project.accent}
                rounded={isScreens ? 'lg' : 'md'}
                fit={isScreens ? 'contain' : 'cover'}
              />
            ))}
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="project reveal" ref={revealRef}>
      <div className="project__row">
        <div className="project__media">
          <MediaFrame image={project.image} alt={project.title} accent={project.accent} />
        </div>

        <div className="project__copy">
          <span className="project__number">{project.id}</span>

          <div className="project__heading-row">
            <h3 className="project__title">{project.title}</h3>
            <a
              href={`#${project.slug}`}
              className="project__arrow"
              aria-label={`View ${project.title}`}
            >
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <span className={`pill pill--${project.accent} project__category`}>
            {project.category}
          </span>

          <p className="project__description">{project.description}</p>

          <ul className="project__tools">
            {project.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>

      {project.gallery?.length > 0 && (
        <div className="project__gallery">
          {project.gallery.map((image) => (
            <MediaFrame
              key={image}
              image={image}
              alt={`${project.title} screenshot`}
              accent={project.accent}
              rounded="lg"
            />
          ))}
        </div>
      )}
    </article>
  )
}

export default function Projects() {
  const headingRef = useScrollReveal()

  return (
    <section id="work" className="section projects">
      <div className="container">
        <div className="projects__heading reveal" ref={headingRef}>
          <span className="eyebrow">03 — Selected work</span>
          <h2 className="section-heading">
            Things I've
            <br />
            made.
          </h2>
        </div>

        <div className="projects__list">
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
