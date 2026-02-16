import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section className="hero-section" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
            <div className={`container ${loaded ? 'animate-fade-in' : ''}`} style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s ease' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
                    Hello, I'm <span className="text-accent">bluepill02</span>.
                </h1>
                <p className="font-mono" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                    Building type-safe web apps with React & TypeScript. I value clarity, clean code, and real-world results.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="https://github.com/bluepill02" target="_blank" rel="noreferrer"
                        style={{
                            padding: '0.8rem 1.5rem',
                            background: 'var(--accent-color)',
                            color: '#fff',
                            textDecoration: 'none',
                            borderRadius: '6px',
                            fontWeight: '600'
                        }}>
                        View GitHub
                    </a>
                    <a href="https://www.datacamp.com/portfolio/smvinu69?view=true" target="_blank" rel="noreferrer"
                        style={{
                            padding: '0.8rem 1.5rem',
                            background: 'transparent',
                            color: 'var(--accent-color)',
                            border: '2px solid var(--accent-color)',
                            textDecoration: 'none',
                            borderRadius: '6px',
                            fontWeight: '600'
                        }}>
                        DataCamp Portfolio
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
