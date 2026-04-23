import { useScrollReveal } from '../hooks/useScrollReveal';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: '🚀',
    title: 'MVP Development',
    desc: 'Full products from concept to deployment. From exam prep tools to AI marketplaces — I turn your idea into shipped code.',
  },
  {
    icon: '⚛️',
    title: 'React & Next.js Apps',
    desc: 'Full-stack with App Router, authentication, database integration. Modern, scalable web applications built right.',
  },
  {
    icon: '🌏',
    title: 'SEO & Localization',
    desc: 'JSON-LD structured data, sitemaps, canonicals. Multilingual support and cultural UX built for real users.',
  },
  {
    icon: '🔧',
    title: 'Bug Fixes & Features',
    desc: 'Quick turnaround on fixes, feature additions, and code optimization. Clean PRs, tested code, zero drama.',
  },
];

const Services = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'revealed' : ''}`}>
          <span className="section-label">// services</span>
          <h2 className="section-title">How I Can Help</h2>
          <p className="section-subtitle">
            Whether it's a full product build or a quick feature, I deliver documented, tested, production-ready code.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
