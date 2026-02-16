import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)', marginTop: '4rem' }}>
            <p style={{ fontSize: '0.9rem' }}>
                &copy; {new Date().getFullYear()} bluepill02. Built with React & GitHub Pages.
            </p>
        </footer>
    );
};

export default Footer;
