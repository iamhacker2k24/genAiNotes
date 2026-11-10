import React from 'react';
import { servicesData, personalInfo } from '../data/portfolioData';
import Icon from './Icons';

export const About = () => {
  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title">
            Passionate About Crafting <span className="gradient-text">Impactful Software</span>
          </h2>
          <p className="section-desc">
            Combining engineering precision with product design to build resilient web solutions.
          </p>
        </div>

        {/* Narrative & Highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '5rem'
        }}>
          {/* Left Column: Story */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
              Engineering Scalable Systems with Intuitive Interfaces
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.8 }}>
              I started coding with an innate curiosity about how the web works at scale. Over the past 5+ years, I have architected and deployed applications ranging from real-time collaborative workspaces to enterprise-grade AI knowledge copilots.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.8 }}>
              My engineering philosophy revolves around three main tenets: <strong>Performance First</strong>, <strong>Accessibility as a Priority</strong>, and <strong>Reliable, Clean Architecture</strong>. I enjoy turning complex data flows into seamless end-user experiences.
            </p>

            {/* Checklist */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem', marginBottom: '2rem' }}>
              {[
                'Full-Stack Architecture',
                'TypeScript & Type Safety',
                'Performance Optimization',
                'Generative AI & LLMs',
                'Database Schema Design',
                'Automated Testing & CI/CD'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  <span style={{ color: 'var(--accent-emerald)' }}>
                    <Icon name="check" size={16} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ fontSize: '0.9rem' }}
              >
                <span>Hire Alex</span>
                <Icon name="arrowRight" size={16} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-secondary"
                style={{ fontSize: '0.9rem' }}
              >
                <span>Download Resume</span>
                <Icon name="download" size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Key Service Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {servicesData.map((service, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start'
                }}
              >
                <div style={{
                  minWidth: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(99, 102, 241, 0.12)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon name={service.icon} size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                    {service.title}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
