import React from 'react';

const ServiceCard = ({ title, description }) => {
    return (
        <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;
