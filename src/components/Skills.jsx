import { useScrollReveal } from '../hooks/useScrollReveal';

const categories = [
  {
    icon: '🎨',
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind', 'Responsive Design', 'Framer Motion'],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'Prisma ORM', 'Supabase', 'Redis'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    skills: ['Firebase', 'Vercel', 'Google Cloud', 'Microsoft Azure', 'Git', 'GitHub', 'GitHub Pages', 'CI/CD'],
  },
  {
    icon: '🤖',
    title: 'AI & Tools',
    skills: ['GitHub Copilot', 'Prompt Engineering', 'LLM Integration', 'Hugging Face', 'Figma', 'Canva', 'Python'],
  },
];

const Skills = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'revealed' : ''}`}>
          <span className="section-label">// tech stack</span>
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle">
            The tools I reach for to build fast, scalable, and beautiful products.
          </p>
        </div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <SkillCategory key={i} {...cat} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ icon, title, skills, delay }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`skill-category reveal reveal-delay-${delay + 1} ${isVisible ? 'revealed' : ''}`}
    >
      <span className="skill-category-icon">{icon}</span>
      <h3>{title}</h3>
      <div className="skill-tags">
        {skills.map((skill, j) => (
          <span key={j} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
