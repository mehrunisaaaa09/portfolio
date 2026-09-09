import { playgroundItems } from '../data/playground.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import MediaFrame from './MediaFrame.jsx'
import './CreativeWork.css'

export default function CreativeWork() {
  const headingRef = useScrollReveal()

  return (
    <section id="playground" className="section playground">
      <span className="blob playground__blob" aria-hidden="true" />

      <div className="container">
        <div className="playground__heading reveal" ref={headingRef}>
          <span className="eyebrow">03 — Creative playground</span>
          <h2 className="section-heading">
            A little
            <br />
            extra.
          </h2>
          <p className="playground__intro">
            Visual experiments, brand ideas and designs made just because I
            had an idea.
          </p>
        </div>

        <div className="playground__grid">
          {playgroundItems.map((item, index) => {
            const rotate = index % 3 === 0 ? '-1.5deg' : index % 3 === 1 ? '1deg' : '0deg'
            return (
              <figure
                key={item.id}
                className="playground__item"
                style={{ '--rotate': rotate, '--ratio': item.ratio || 4 / 5 }}
              >
                <MediaFrame
                  image={item.image}
                  video={item.video}
                  alt={item.title}
                  accent={item.accent}
                  rounded="md"
                />
                <figcaption className="playground__caption">
                  <span className="playground__caption-title">{item.title}</span>
                  <span className={`pill pill--${item.accent} playground__caption-tag`}>
                    {item.category}
                  </span>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
