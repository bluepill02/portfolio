import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect, useState, useRef } from 'react';

const values = [
  {
    icon: '⚡',
    title: 'Ship Fast',
    desc: 'AI-assisted workflows with GitHub Copilot and LLM scaffolding. Less boilerplate, faster iterations, cleaner codebases.',
  },
  {
    icon: '📋',
    title: 'Documented Code',
    desc: 'Architecture docs, deployment guides, and maintainable project hand-offs come standard with every delivery.',
  },
  {
    icon: '♿',
    title: 'Inclusive Design',
    desc: 'Neurodiversity modes, reduced motion, WCAG-conscious flows. I build for every user, not just the average one.',
  },
  {
    icon: '🛡️',
    title: 'Zero Risk',
    desc: 'Pay what you honestly think the work is worth. My code quality and your satisfaction speak for themselves.',
  },
];

const stats = [
  { value: 5, suffix: '+', label: 'Projects Shipped' },
  { value: 8, suffix: '+', label: 'Tech Stack' },
  { value: 5, suffix: '★', label: 'Freelance Rating' },
  { value: 100, suffix: '%', label: 'Delivery Rate' },
];

const AnimatedCounter = ({ target, suffix, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1800;
    let startTime = null;

    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target]);

  return (
    <span className="stat-number">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const [sectionRef, isVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div ref={sectionRef} className={`reveal ${isVisible ? 'revealed' : ''}`}>
          <span className="section-label">// why hire me</span>
          <h2 className="section-title">Built Different</h2>
          <p className="section-subtitle">
            I don't just write code — I ship documented, accessible, production-ready products that your users will actually love.
          </p>
        </div>

        <div className="value-grid">
          {values.map((v, i) => (
            <ValueCard key={i} {...v} delay={i} />
          ))}
        </div>

        <div ref={statsRef} className={`stats-row reveal ${statsVisible ? 'revealed' : ''}`}>
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <AnimatedCounter target={s.value} suffix={s.suffix} isVisible={statsVisible} />
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ icon, title, desc, delay }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`value-card reveal reveal-delay-${delay + 1} ${isVisible ? 'revealed' : ''}`}
    >
      <span className="value-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default About;
