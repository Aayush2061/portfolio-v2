'use client';
import { useState, useEffect } from 'react';

const jachaoScreenshots = [
  '/jachao-ss/ss1.webp',
  '/jachao-ss/ss2.webp',
  '/jachao-ss/ss3.webp',
  '/jachao-ss/ss4.webp',
  '/jachao-ss/ss5.webp',
  '/jachao-ss/ss6.webp',
  '/jachao-ss/ss7.webp',
  '/jachao-ss/ss8.webp',
];

function ScreenshotCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = jachaoScreenshots.length;

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 2500);
    return () => clearInterval(interval);
  }, [paused, total]);

  return (
    <div style={{ marginTop: '1.5rem' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main image */}
      <div style={{
        width: '100%', height: '380px',
        overflow: 'hidden', border: '1px solid var(--border)',
        position: 'relative', background: 'var(--bg-3)',
      }}>
        <img
          key={current}
          src={jachaoScreenshots[current]}
          alt={`Jachao screenshot ${current + 1}`}
          style={{
            width: '100%', height: '100%',
            objectFit: 'contain', display: 'block',
            animation: 'fadeIn 0.4s ease',
          }}
        />

        {/* Prev */}
        <button
          onClick={() => { setPaused(true); setCurrent((c) => (c - 1 + total) % total); }}
          style={{
            position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(10,10,10,0.85)', border: '1px solid var(--border-light)',
            color: 'var(--text)', width: '30px', height: '30px',
            cursor: 'pointer', fontSize: '1rem', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}
        >‹</button>

        {/* Next */}
        <button
          onClick={() => { setPaused(true); setCurrent((c) => (c + 1) % total); }}
          style={{
            position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(10,10,10,0.85)', border: '1px solid var(--border-light)',
            color: 'var(--text)', width: '30px', height: '30px',
            cursor: 'pointer', fontSize: '1rem', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}
        >›</button>

        {/* Counter */}
        <div style={{
          position: 'absolute', bottom: '8px', right: '8px',
          background: 'rgba(10,10,10,0.85)', padding: '0.2rem 0.5rem',
          fontFamily: 'DM Mono, monospace', fontSize: '0.55rem',
          color: 'var(--text-dim)', letterSpacing: '0.1em',
        }}>
          {current + 1} / {total}
        </div>

        {/* Auto-play indicator */}
        <div style={{
          position: 'absolute', bottom: '8px', left: '8px',
          fontFamily: 'DM Mono, monospace', fontSize: '0.55rem',
          color: paused ? 'var(--text-dim)' : 'var(--accent)',
          letterSpacing: '0.1em',
        }}>
          {paused ? '⏸ paused' : '▶ auto'}
        </div>
      </div>

      {/* Dot indicators */}
      <div style={{
        display: 'flex', gap: '6px', marginTop: '10px',
        justifyContent: 'center',
      }}>
        {jachaoScreenshots.map((_, i) => (
          <div
            key={i}
            onClick={() => { setPaused(true); setCurrent(i); }}
            style={{
              width: i === current ? '20px' : '6px',
              height: '6px',
              borderRadius: '3px',
              background: i === current ? 'var(--accent)' : 'var(--border-light)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    number: '01',
    name: 'Jachao',
    tagline: "Nepal's AI-Powered HealthTech App",
    description:
      'Built and launched a full-featured healthtech mobile app serving Nepali users with AI-powered symptom diagnosis, lab report analysis with photo capture, period tracking with cycle predictions, first aid assistance, and mental health support.',
    stack: ['React Native', 'Node.js', 'Flask', 'MongoDB', 'Gemini API', 'GCP'],
    highlights: ['1,000+ Play Store downloads', 'Deployed on Google Cloud', 'Next.js landing page'],
    links: {
      playstore: 'https://play.google.com/store/apps/details?id=com.jachao.app&hl=en_US',
      github: 'https://github.com/Aayush2061/jachaoo',
      live: 'https://www.jachaoo.com/',
    },
    featured: true,
    accentColor: '#4fffb0',
  },
  {
    number: '02',
    name: 'MERN E-Commerce Platform',
    tagline: 'Full-Stack Shopping Application',
    description:
      'Production-ready e-commerce web application with user authentication, product management, shopping cart, and order functionality. Built with the full MERN stack and deployed on Render.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    highlights: ['JWT Authentication', 'REST APIs', 'Deployed on Render'],
    links: {
      github: 'https://github.com/Aayush2061/ecommerce-webapp',
      live: '#',
    },
    featured: false,
    accentColor: '#4fffb0',
  },
  {
    number: '03',
    name: 'Word Saver Chrome Extension',
    tagline: 'Browser Productivity Tool',
    description:
      'Chrome extension for saving important words, sentences and notes while browsing any website. Features persistent local storage and a clean popup UI for quick access.',
    stack: ['JavaScript', 'HTML/CSS', 'Chrome Extension API'],
    highlights: ['Persistent storage', 'Instant capture', 'Clean popup UI'],
    links: {
      github: 'https://github.com/Aayush2061/word-saver',
    },
    featured: false,
    accentColor: '#4fffb0',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '7rem 2rem',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <div style={{ marginBottom: '4rem' }}>
        <span className="section-label">03 — Projects</span>
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 700,
            marginTop: '1rem',
            letterSpacing: '-0.02em',
          }}
        >
          Things I&apos;ve built
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
        {projects.map((project, i) => (
          <div
            key={i}
            style={{
              background: 'var(--bg)',
              padding: project.featured ? '3rem' : '2.25rem',
              position: 'relative',
              overflow: 'hidden',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'var(--bg-2)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'var(--bg)')}
          >
            {/* Accent bar */}
            {project.featured && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '3px',
                  height: '100%',
                  background: 'var(--accent)',
                }}
              />
            )}

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: project.featured ? '1fr 1fr' : '2fr 1fr',
                gap: '3rem',
                alignItems: 'start',
              }}
            >
              {/* Left */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '0.6rem',
                      color: 'var(--text-dim)',
                      letterSpacing: '0.15em',
                    }}
                  >
                    {project.number}
                  </span>
                  {project.featured && (
                    <span
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '0.6rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        padding: '0.2rem 0.5rem',
                        border: '1px solid var(--accent-dim)',
                        background: 'var(--accent-glow)',
                      }}
                    >
                      Featured
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: project.featured ? '1.8rem' : '1.3rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    marginBottom: '0.25rem',
                  }}
                >
                  {project.name}
                </h3>

                <p
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.7rem',
                    color: 'var(--accent)',
                    marginBottom: '1rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  {project.tagline}
                </p>

                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.8,
                    marginBottom: '1.5rem',
                    maxWidth: '460px',
                  }}
                >
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.stack.map((tech, j) => (
                    <span
                      key={j}
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '0.65rem',
                        color: 'var(--text-dim)',
                        padding: '0.2rem 0.5rem',
                        border: '1px solid var(--border)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '0.68rem',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        letterSpacing: '0.08em',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.links.live && project.links.live !== '#' && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '0.68rem',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        letterSpacing: '0.08em',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                      Live ↗
                    </a>
                  )}
                  {'playstore' in project.links && (
                    <a
                      href={(project.links as {playstore?: string}).playstore}
                      target="_blank"
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '0.68rem',
                        color: 'var(--accent)',
                        textDecoration: 'none',
                        letterSpacing: '0.08em',
                        transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                    >
                      Play Store ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Right: highlights */}
              <div>
                <p
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--text-dim)',
                    marginBottom: '1rem',
                  }}
                >
                  Highlights
                </p>
                {project.highlights.map((h, j) => (
                  <div
                    key={j}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.6rem 0',
                      borderBottom: j < project.highlights.length - 1 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    <span style={{ color: 'var(--accent)', fontSize: '0.6rem' }}>▸</span>
                    <span
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '0.72rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {h}
                    </span>
                  </div>
                ))}

                {/* Screenshot carousel for featured project */}
                {project.featured && <ScreenshotCarousel />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}