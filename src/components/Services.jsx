import React from 'react';

const Services = () => {
    return (
        <section className="container" style={{ padding: '2rem 2rem' }}>
            <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', borderLeft: '4px solid #e3b341', paddingLeft: '1rem' }}>
                How I Can Help You
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>

                <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '1px solid var(--border-color)' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>🚀 MVP Development</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        I build full products, not just pages. From exam prep tools (LinguaLeap) to marketplaces (PromptPulse), I turn concepts into shipped code.
                    </p>
                </div>

                <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '1px solid var(--border-color)' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>⚛️ Next.js & Supabase</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        Full-stack capability with the App Router, authenticaton, and database integration. I build modern, scalable web applications.
                    </p>
                </div>

                <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '1px solid var(--border-color)' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>🌏 Localization & SEO</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        I build for real users, ensuring your site is found (SEO/JSON-LD) and accessible to diverse audiences (Localization/Neurodiversity).
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Services;
