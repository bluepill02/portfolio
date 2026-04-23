import { useState, useEffect } from 'react';

const roles = [
  'Full Stack Developer',
  'AI-Native Workflows',
  'React Specialist',
  'Node.js & Supabase',
];

const techs = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Express',
  'PostgreSQL', 'Supabase', 'Firebase', 'Prisma', 'Vercel', 'Git',
  'Tailwind CSS', 'Figma', 'Python', 'GitHub Copilot',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Background orbs */}
      <div className="hero-orb hero-orb-1" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-2" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-3" aria-hidden="true"></div>

      <div className="hero-content">
        <p className="hero-handle hero-anim-1">@bluepill02</p>

        <h1 className="hero-name hero-anim-2">
          Vinusha{' '}
          <span className="gradient-text">Srithar</span>
        </h1>

        <p className="hero-role hero-anim-3">
          I build modern web apps with{' '}
          <span key={roleIndex} className="role-word">
            {roles[roleIndex]}
          </span>
        </p>

        <div className="hero-ctas hero-anim-4">
          <a href="#contact" className="btn-primary">
            Start a Project →
          </a>
          <a href="#projects" className="btn-outline">
            View My Work
          </a>
        </div>
      </div>

      {/* Tech ticker strip */}
      <div className="ticker-section hero-anim-5">
        <div className="ticker-track">
          {[...techs, ...techs].map((tech, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-dot"></span>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <span>scroll</span>
        <span className="scroll-line"></span>
      </div>
    </section>
  );
};

export default Hero;
