import React from 'react';
import ServiceCard from './ServiceCard';

const servicesData = [
    {
        title: "🚀 MVP Development",
        description: "I build full products, not just pages. From exam prep tools (LinguaLeap) to marketplaces (PromptPulse), I turn concepts into shipped code."
    },
    {
        title: "⚛️ Next.js & Supabase",
        description: "Full-stack capability with the App Router, authenticaton, and database integration. I build modern, scalable web applications."
    },
    {
        title: "🌏 Localization & SEO",
        description: "I build for real users, ensuring your site is found (SEO/JSON-LD) and accessible to diverse audiences (Localization/Neurodiversity)."
    }
];

const Services = () => {
    return (
        <section className="container" style={{ padding: '2rem 2rem' }}>
            <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', borderLeft: '4px solid #e3b341', paddingLeft: '1rem' }}>
                How I Can Help You
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </section>
    );
};

export default Services;
