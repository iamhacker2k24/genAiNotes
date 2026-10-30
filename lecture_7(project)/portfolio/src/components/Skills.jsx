import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All'
    ? skillsData.skills
    : skillsData.skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Technical Expertise</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-desc">
            A comprehensive overview of my technical stack, modern toolsets, and proficiency levels across full-stack engineering and AI solutions.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBottom: '3rem'
        }}>
          {skillsData.categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: selectedCategory === category ? 'var(--accent-primary)' : 'var(--border-color)',
                background: selectedCategory === category ? 'var(--accent-primary)' : 'var(--bg-card)',
                color: selectedCategory === category ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: selectedCategory === category ? '0 4px 15px rgba(99, 102, 241, 0.35)' : 'none'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid-3" style={{ gap: '1.5rem' }}>
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.75rem'
                }}>
                  <span style={{
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: 'var(--text-primary)'
                  }}>
                    {skill.name}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: 'var(--accent-primary)',
                    fontWeight: 600
                  }}>
                    {skill.level}%
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.75rem'
                }}>
                  <span className="code-tag">{skill.category}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {skill.level >= 90 ? 'Mastery' : skill.level >= 85 ? 'Advanced' : 'Proficient'}
                  </span>
                </div>
              </div>

              {/* Progress Bar Container */}
              <div style={{
                width: '100%',
                height: '8px',
                background: 'rgba(255, 255, 255, 0.07)',
                borderRadius: '999px',
                overflow: 'hidden',
                marginTop: '0.5rem'
              }}>
                <div
                  style={{
                    height: '100%',
                    width: `${skill.level}%`,
                    background: 'var(--grad-primary)',
                    borderRadius: '999px',
                    transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Architecture Badges */}
        <div
          className="glass-card"
          style={{
            marginTop: '3.5rem',
            padding: '2rem',
            textAlign: 'center'
          }}
        >
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
            Core Engineering Competencies & Workflow
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem'
          }}>
            {[
              'Microservices Architecture',
              'JAMstack & SSR',
              'Relational & NoSQL Databases',
              'REST & GraphQL APIs',
              'Docker Containerization',
              'CI/CD Pipelines',
              'Core Web Vitals & SEO',
              'Vector Search & RAG',
              'Web Security & Auth',
              'Unit & E2E Testing (Vitest/Playwright)',
              'Agile/Scrum Leadership'
            ].map((tag, idx) => (
              <span
                key={idx}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)'
                }}
              >
                ✓ {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
