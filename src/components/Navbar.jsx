import { useState, useEffect } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            vinusha<span>.</span>
          </a>

          <div className="nav-links">
            {navItems.map(item => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <span className="hire-badge">
              <span className="pulse-dot"></span>
              Available for Hire
            </span>
            <a
              href="./Resume_Vinu_SM.docx"
              download
              className="btn-outline btn-small"
            >
              Resume ↓
            </a>
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <a key={item.label} href={item.href} className="nav-link" onClick={handleLinkClick}>
            {item.label}
          </a>
        ))}
        <a href="./Resume_Vinu_SM.docx" download className="btn-primary" onClick={handleLinkClick}>
          Download Resume
        </a>
      </div>
    </>
  );
};

export default Navbar;
