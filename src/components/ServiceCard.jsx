import { useScrollReveal } from '../hooks/useScrollReveal';

const ServiceCard = ({ icon, title, desc, delay }) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`service-card reveal reveal-delay-${delay + 1} ${isVisible ? 'revealed' : ''}`}
    >
      <span className="service-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default ServiceCard;
