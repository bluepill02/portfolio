import React from 'react';

const About = () => {
    return (
        <section className="container" style={{ padding: '4rem 2rem' }}>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                    Why Work With Me?
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                    {/* Strengths */}
                    <div>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>My Strengths</h3>
                        <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                            <li style={{ marginBottom: '0.8rem' }}>✓ <strong>Documentation:</strong> I don't just write code; I hand over maintainable projects with architecture docs and deployment guides.</li>
                            <li style={{ marginBottom: '0.8rem' }}>✓ <strong>Accessibility & UX:</strong> I build for inclusivity—neurodiversity modes, reduced motion, and intuitive flows are standard.</li>
                            <li style={{ marginBottom: '0.8rem' }}>✓ <strong>Production Ready:</strong> I understand SEO (sitemaps, canonicals) and safe deployment patterns (Firebase/Vercel).</li>
                            <li style={{ marginBottom: '0.8rem' }}>✓ <strong>Stack Versatility:</strong> Comfortable across React Native (Expo), Next.js 14, and plain static HTML when speed matters.</li>
                        </ul>
                    </div>

                    {/* Growth Areas (Weaknesses presented humbly) */}
                    <div>
                        <h3 style={{ color: '#e3b341', marginBottom: '1rem' }}>Areas I'm Growing</h3>
                        <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                            <li style={{ marginBottom: '0.8rem' }}>⚡ <strong>Complex Backend Architecture:</strong> I'm great with Supabase/Firebase, but still mastering complex custom backend systems.</li>
                            <li style={{ marginBottom: '0.8rem' }}>⚡ <strong>Testing at Scale:</strong> I write unit tests (Vitest), but I'm actively working on building a more systematic TDD culture.</li>
                            <li style={{ marginBottom: '0.8rem' }}>⚡ <strong>Scope Management:</strong> I'm ambitious with features. I'm learning to prioritize MVPs even more ruthlessly.</li>
                        </ul>
                    </div>
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center', backgroundColor: 'rgba(48, 54, 61, 0.3)', padding: '1.5rem', borderRadius: '8px' }}>
                    <p style={{ fontStyle: 'italic', color: 'var(--text-primary)' }}>
                        "I may not have decades of experience, but I deliver documented, user-centric, and tested code. I'm looking for clients who value transparency and a product mindset."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
