const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          &copy; {year} Vinusha Srithar. Built with React & shipped via GitHub Pages.
        </p>
        <div className="footer-links">
          <a href="https://github.com/bluepill02" target="_blank" rel="noreferrer" className="footer-link">
            GitHub
          </a>
          <a href="https://contra.com/bluepill02" target="_blank" rel="noreferrer" className="footer-link">
            Contra
          </a>
          <a href="mailto:smvinu69@gmail.com" className="footer-link">
            Email
          </a>
          <a href="https://www.datacamp.com/portfolio/smvinu69?view=true" target="_blank" rel="noreferrer" className="footer-link">
            DataCamp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
