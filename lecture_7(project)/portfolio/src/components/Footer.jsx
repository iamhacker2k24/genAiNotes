import React from 'react';
import { personalInfo } from '../data/portfolioData';
import Icon from './Icons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      background: 'var(--bg-secondary)',
      padding: '4rem 0 2.5rem 0',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid var(--border-color)'
        }}>
          {/* Logo & Tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                background: 'var(--grad-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: '800',
                fontSize: '1rem'
              }}>
                &lt;/&gt;
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                Alex<span className="gradient-text">.dev</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '350px' }}>
              Crafting reliable, scalable web architectures and AI-driven user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.9rem' }}>
            <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About</a>
            <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Skills</a>
            <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Projects</a>
            <a href="#experience" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Experience</a>
            <a href="#testimonials" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Testimonials</a>
            <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="btn btn-secondary btn-sm"
            style={{ borderRadius: '50%', width: '42px', height: '42px', padding: 0 }}
          >
            <Icon name="arrowUp" size={18} />
          </button>
        </div>

        {/* Bottom copyright & credits */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          paddingTop: '2rem',
          fontSize: '0.85rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Built with React & Vite</span>
            <span>•</span>
            <span>Performance & A11y Optimized</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
