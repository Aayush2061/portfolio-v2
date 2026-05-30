'use client';

const events = [
  {
    year: '2019–20',
    title: 'First Lines of Code',
    description:
      'High school — learned Python, built Bounce and Tic-Tac-Toe games. Learned HTML/CSS/JS basics. Won a coding competition with a friend (C, web basics, terminal). District topper in Grade 12.',
    tag: 'origin',
  },
  {
    year: '2021',
    title: 'Cracked IOE Entrance',
    description:
      'Secured rank #93 in IOE Entrance Examination after 3–4 months of focused preparation. Got admitted to the top engineering college in Nepal.',
    tag: 'milestone',
  },
  {
    year: '2022',
    title: 'MERN Stack',
    description:
      "Completed Colt Steele's full web dev course. Built Node.js, React, and MongoDB projects from scratch. Deployed an e-commerce platform and personal portfolio on Render.",
    tag: 'learning',
  },
  {
    year: '2023',
    title: 'DSA Deep Dive',
    description:
      'Spent a full semester on Data Structures & Algorithms from scratch. Covered arrays, trees, graphs, dynamic programming, and problem-solving with Code with Babber.',
    tag: 'learning',
  },
  {
    year: '2024',
    title: 'Built & Shipped Jachao',
    description:
      'Launched Jachao — an AI-powered healthtech mobile app for Nepal. Built the full stack: React Native, Node.js, Flask, MongoDB, Gemini API. Deployed on Google Cloud. Reached 1,000+ Play Store downloads through grassroots marketing.',
    tag: 'product',
  },
  {
    year: '2025',
    title: 'Now — Seeking Opportunities',
    description:
      '7th semester. Looking for my first internship or junior engineering role. Ready to bring full-stack, mobile, and AI experience to a real team.',
    tag: 'now',
    isNow: true,
  },
];

const tagColors: Record<string, string> = {
  origin: '#666',
  milestone: '#b8860b',
  learning: '#4488aa',
  product: '#4fffb0',
  now: '#4fffb0',
};

export default function Journey() {
  return (
    <section
      id="journey"
      style={{
        padding: '7rem 2rem',
        background: 'var(--bg-2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem' }}>
          <span className="section-label">04 — Journey</span>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              marginTop: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            How I got here
          </h2>
        </div>

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'var(--border)',
            }}
          />

          {events.map((event, i) => (
            <div
              key={i}
              style={{
                position: 'relative',
                paddingBottom: i < events.length - 1 ? '3rem' : '0',
              }}
            >
              {/* Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-2.4rem',
                  top: '0.3rem',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: event.isNow ? 'var(--accent)' : 'var(--border-light)',
                  border: event.isNow ? '2px solid var(--accent)' : '2px solid var(--border-light)',
                  boxShadow: event.isNow ? '0 0 10px var(--accent)' : 'none',
                }}
              />

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                <span
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.65rem',
                    color: 'var(--text-dim)',
                    letterSpacing: '0.1em',
                    minWidth: '60px',
                    paddingTop: '0.2rem',
                  }}
                >
                  {event.year}
                </span>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <h3
                      style={{
                        fontFamily: 'Syne, sans-serif',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        letterSpacing: '-0.01em',
                        color: event.isNow ? 'var(--accent)' : 'var(--text)',
                      }}
                    >
                      {event.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '0.55rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: tagColors[event.tag] || '#666',
                        padding: '0.15rem 0.4rem',
                        border: `1px solid ${tagColors[event.tag] || '#666'}22`,
                      }}
                    >
                      {event.tag}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.8,
                      maxWidth: '520px',
                    }}
                  >
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
