import React from 'react';
import { testimonialsData } from '../data/portfolioData';
import Icon from './Icons';

export const Testimonials = () => {
  return (
    <section id="testimonials" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title">
            Trusted by <span className="gradient-text">Teams & Founders</span>
          </h2>
          <p className="section-desc">
            Words from colleagues, engineering managers, and startup founders I've collaborated with.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid-3" style={{ gap: '2rem' }}>
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              {/* Star Ratings */}
              <div style={{ display: 'flex', gap: '0.25rem', color: '#fbbf24', marginBottom: '1.25rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="star" size={16} />
                ))}
              </div>

              {/* Quote Body */}
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.975rem',
                lineHeight: 1.7,
                fontStyle: 'italic',
                marginBottom: '1.75rem',
                flexGrow: 1
              }}>
                "{item.quote}"
              </p>

              {/* Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
                <img
                  src={item.avatar}
                  alt={item.author}
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--accent-primary)'
                  }}
                  loading="lazy"
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                    {item.author}
                  </div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
