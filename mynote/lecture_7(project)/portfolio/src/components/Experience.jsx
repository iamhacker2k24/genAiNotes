import React from 'react';
import { experienceData } from '../data/portfolioData';
import Icon from './Icons';

export const Experience = () => {
  return (
    <section id="experience" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Career Path</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-desc">
            Demonstrated history of driving technical innovation, mentoring engineers, and delivering performant enterprise web applications.
          </p>
        </div>

        {/* Timeline Layout */}
        <div style={{
          position: 'relative',
          maxWidth: '850px',
          margin: '0 auto'
        }}>
          {/* Vertical Timeline Bar */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'linear-gradient(180deg, var(--accent-primary) 0%, rgba(99, 102, 241, 0.1) 100%)'
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  paddingLeft: '55px'
                }}
              >
                {/* Timeline Node Point */}
                <div style={{
                  position: 'absolute',
                  left: '11px',
                  top: '0',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'var(--bg-secondary)',
                  border: '3px solid var(--accent-primary)',
                  boxShadow: '0 0 12px var(--accent-primary)',
                  zIndex: 2
                }} />

                {/* Experience Card */}
                <div className="glass-card" style={{ padding: '2rem' }}>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '0.75rem'
                  }}>
                    <div>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {exp.role}
                      </h3>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--accent-primary)',
                        fontWeight: 600,
                        fontSize: '1rem',
                        marginTop: '0.2rem'
                      }}>
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500 }}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <span style={{
                      padding: '0.35rem 0.85rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '0.5rem',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-color)'
                    }}>
                      {exp.period}
                    </span>
                  </div>

                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '1.25rem',
                    fontSize: '0.95rem'
                  }}>
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.65rem'
                    }}>
                      Key Highlights:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {exp.achievements.map((item, aIdx) => (
                        <li key={aIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                          <span style={{ color: 'var(--accent-emerald)', marginTop: '2px' }}>
                            <Icon name="check" size={15} />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.tech.map((t, tIdx) => (
                      <span key={tIdx} className="code-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
