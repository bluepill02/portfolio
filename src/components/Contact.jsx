import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div ref={ref} className={`contact-card reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="contact-title">Let's Build Something Together</h2>

          <div className="contact-promise">
            <h3>The Zero Risk Promise</h3>
            <ul className="contact-promise-steps">
              <li>
                <span className="step-number">1</span>
                <span>We discuss your project <em>(text/email — I don't do calls)</em></span>
              </li>
              <li>
                <span className="step-number">2</span>
                <span>I build it</span>
              </li>
              <li>
                <span className="step-number">3</span>
                <span>You review it</span>
              </li>
              <li>
                <span className="step-number">4</span>
                <span className="step-highlight">You pay what you honestly think the work is worth</span>
              </li>
            </ul>
          </div>

          <a href="mailto:smvinu69@gmail.com" className="btn-primary" id="contact-cta">
            Start a Project →
          </a>

          <div className="contact-channels">
            <a href="mailto:smvinu69@gmail.com" className="contact-channel">
              📧 smvinu69@gmail.com
            </a>
            <a href="https://github.com/bluepill02" target="_blank" rel="noreferrer" className="contact-channel">
              🐙 GitHub
            </a>
            <a href="https://contra.com/bluepill02" target="_blank" rel="noreferrer" className="contact-channel">
              💼 Contra
            </a>
            <a href="https://fiverr.com" target="_blank" rel="noreferrer" className="contact-channel">
              🎯 Fiverr
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
