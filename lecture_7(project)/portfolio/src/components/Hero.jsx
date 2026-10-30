import React from 'react';
import { personalInfo } from '../data/portfolioData';
import Icon from './Icons';

export const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background ambient lighting */}
      <div
        className="bg-glow-sphere"
        style={{
          top: '15%',
          left: '10%',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.4), rgba(168, 85, 247, 0.2))'
        }}
      />
      <div
        className="bg-glow-sphere"
        style={{
          bottom: '10%',
          right: '5%',
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.3))'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Left Text Column */}
          <div>
            {/* Status Badge */}
            <div className="badge" style={{ marginBottom: '1.5rem' }}>
              <span className="badge-pulse" />
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem'
            }}>
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              <br />
              <span style={{ color: 'var(--text-primary)', opacity: 0.95 }}>
                {personalInfo.role}
              </span>
            </h1>

            {/* Tagline */}
            <p style={{
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '540px'
            }}>
              {personalInfo.tagline} {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <Icon name="arrowRight" size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Contact Me</span>
                <Icon name="mail" size={18} />
              </a>
            </div>

            {/* Social Links & Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="glass-card"
                  style={{
                    width: '42px',
                    height: '42px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    borderRadius: '50%',
                    textDecoration: 'none'
                  }}
                >
                  <Icon name="github" size={20} />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="glass-card"
                  style={{
                    width: '42px',
                    height: '42px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    borderRadius: '50%',
                    textDecoration: 'none'
                  }}
                >
                  <Icon name="linkedin" size={20} />
                </a>
                <a
                  href={personalInfo.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="glass-card"
                  style={{
                    width: '42px',
                    height: '42px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    borderRadius: '50%',
                    textDecoration: 'none'
                  }}
                >
                  <Icon name="twitter" size={20} />
                </a>
              </div>

              <div style={{ height: '24px', width: '1px', background: 'var(--border-color)' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <Icon name="mapPin" size={16} style={{ color: 'var(--accent-primary)' }} />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Visual / Code Showcase Card */}
          <div style={{ position: 'relative' }}>
            {/* Terminal Mockup Card */}
            <div
              className="glass-card"
              style={{
                borderRadius: '1.25rem',
                overflow: 'hidden',
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)'
              }}
            >
              {/* Terminal Title Bar */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.4)',
                padding: '0.85rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  developer-profile.ts
                </div>
                <div style={{ width: '40px' }} />
              </div>

              {/* Code Snippet */}
              <div style={{ padding: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', lineHeight: 1.7, color: '#e2e8f0' }}>
                <div style={{ color: '#64748b' }}>// Constantly learning & shipping production code</div>
                <div>
                  <span style={{ color: '#ec4899' }}>const</span> <span style={{ color: '#38bdf8' }}>developer</span>: <span style={{ color: '#a855f7' }}>DeveloperProfile</span> = &#123;
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>name:</span> <span style={{ color: '#34d399' }}>'{personalInfo.name}'</span>,
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>specialization:</span> [
                </div>
                <div style={{ paddingLeft: '2.5rem', color: '#34d399' }}>
                  'Full-Stack Web Dev', 'AI & RAG Workflows', 'Cloud Architecture'
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>],</div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>coreStack:</span> [
                </div>
                <div style={{ paddingLeft: '2.5rem', color: '#fbbf24' }}>
                  'React', 'TypeScript', 'Node.js', 'FastAPI', 'TailwindCSS'
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>],</div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>passion:</span> <span style={{ color: '#34d399' }}>'Building resilient software with clean UX'</span>,
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span style={{ color: '#94a3b8' }}>currentlyShipping:</span> <span style={{ color: '#ec4899' }}>true</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Terminal Footer Indicator */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.25)',
                padding: '0.75rem 1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.8rem',
                color: '#64748b'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Icon name="terminal" size={14} style={{ color: '#10b981' }} />
                  <span>Build Status: Passing</span>
                </div>
                <span>UTF-8</span>
              </div>
            </div>

            {/* Floating metric mini badge */}
            <div
              className="glass-card"
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                padding: '0.85rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.4)',
                background: 'var(--bg-secondary)',
                borderRadius: '0.85rem'
              }}
            >
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Icon name="check" size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>100% Tested</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Clean Architecture & CI/CD</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{
          marginTop: '5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.5rem'
        }}>
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.5rem',
                textAlign: 'center',
                border: '1px solid var(--border-color)'
              }}
            >
              <div style={{
                fontSize: '2.25rem',
                fontWeight: '800',
                color: 'var(--accent-primary)',
                lineHeight: 1,
                marginBottom: '0.5rem'
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
