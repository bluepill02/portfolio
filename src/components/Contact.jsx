import React from 'react';

const Contact = () => {
    return (
        <section className="container" style={{ padding: '4rem 2rem 6rem' }}>
            <div className="glass-card" style={{
                padding: '3rem',
                textAlign: 'center',
                background: 'linear-gradient(145deg, rgba(22, 27, 34, 0.9), rgba(13, 17, 23, 0.95))',
                border: '1px solid var(--accent-color)'
            }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let's Work Together</h2>

                <div style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>
                    <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem', fontSize: '1.2rem' }}>
                        MY "ZERO RISK" PROMISE
                    </h3>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                        I know hiring a beginner feels risky. So let's remove the risk.
                    </p>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        1. We discuss your project <strong>(Text/Email only - I don't do calls)</strong>.<br />
                        2. I build it.<br />
                        3. You review it.<br />
                        <strong style={{ color: 'var(--text-primary)' }}>4. You pay me what you honestly think the work is worth.</strong>
                    </p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '1rem', fontStyle: 'italic' }}>
                        Does that sound fair?
                    </p>
                </div>

                <a href="mailto:bluepill02@example.com" // Ideally user provides email, using placeholder or repo issues for now
                    style={{
                        display: 'inline-block',
                        padding: '1rem 2.5rem',
                        fontSize: '1.1rem',
                        background: 'var(--accent-color)',
                        color: '#fff',
                        textDecoration: 'none',
                        borderRadius: '50px',
                        fontWeight: '700',
                        boxShadow: '0 4px 14px 0 rgba(46, 160, 67, 0.39)'
                    }}>
                    Start a Project
                </a>
                <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    (or reach out via <a href="https://github.com/bluepill02" style={{ color: 'var(--accent-color)' }}>GitHub</a>)
                </div>
            </div>
        </section>
    );
};

export default Contact;
