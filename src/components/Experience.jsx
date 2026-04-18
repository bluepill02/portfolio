import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    date: 'Jan 2025 — Present',
    role: 'Freelance Web Developer',
    company: 'Contra & Fiverr · Remote',
    bullets: [
      'Delivered responsive SPAs for clients using React.js, HTML5, CSS3, and JavaScript (ES6+)',
      'Integrated RESTful APIs and Firebase backend services for dynamic data and auth',
      'Applied AI-assisted development (GitHub Copilot, LLM scaffolding) to accelerate delivery',
      'Maintained consistent 5-star quality across freelance platforms',
      'Configured deployment on Vercel and GitHub Pages for zero-downtime production',
    ],
  },
  {
    date: '2024 — Present',
    role: 'Data Science & AI (Ongoing)',
    company: 'DataCamp · Online',
    bullets: [
      'Studying Python, Statistics, and Machine Learning fundamentals',
      'Building analytical skills to complement full-stack development',
    ],
  },
  {
    date: '2021 — 2023',
    role: 'Bachelor of Medicine & Surgery',
    company: 'Government Medical College, Chennai',
    bullets: [
      'Completed two years of structured pre-clinical medical curriculum',
      'Demonstrated strong academic aptitude and capacity for rigorous technical learning',
    ],
  },
];

const Experience = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'revealed' : ''}`}>
          <span className="section-label">// journey</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            From medical science to software engineering — a path driven by curiosity and building things that matter.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <TimelineItem key={i} {...exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ date, role, company, bullets, index }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div ref={ref} className={`timeline-item reveal reveal-delay-${index + 1} ${isVisible ? 'revealed' : ''}`}>
      <div className="timeline-dot"></div>
      <span className="timeline-date">{date}</span>
      <h3 className="timeline-role">{role}</h3>
      <p className="timeline-company">{company}</p>
      <ul className="timeline-bullets">
        {bullets.map((b, j) => (
          <li key={j}>{b}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
