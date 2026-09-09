const EDUCATION = [
  {
    school: 'The University of Lahore',
    program: 'Bachelor of Information Engineering Technology',
    period: '2023 — 2028',
  },
  {
    school: 'KIPS College',
    program: 'Intermediate',
    period: '2021 — 2023',
  },
]

export default function Education() {
  return (
    <div className="timeline">
      {EDUCATION.map((item) => (
        <div className="timeline__item" key={item.school}>
          <span className="timeline__period">{item.period}</span>
          <div className="timeline__body">
            <h4 className="timeline__title">{item.school}</h4>
            <p className="timeline__subtitle">{item.program}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
