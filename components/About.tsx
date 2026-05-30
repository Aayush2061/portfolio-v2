'use client';

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '7rem 2rem',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <div style={{ marginBottom: '4rem' }}>
        <span className="section-label">01 — About</span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* Left: main text */}
        <div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '2rem',
            }}
          >
            Engineering products,
            <br />
            <span className="font-serif" style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
              not just code.
            </span>
          </h2>

          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              lineHeight: 1.9,
              marginBottom: '1.25rem',
            }}
          >
            I&apos;m a 4th year Computer Engineering student at IOE, Tribhuvan University. My journey
            started back in high school — writing Python, building small C games, winning a coding
            competition. I was that kid who couldn&apos;t stop experimenting.
          </p>

          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              lineHeight: 1.9,
              marginBottom: '1.25rem',
            }}
          >
            At university I went from learning MERN stack to actually shipping a real product.
            Jachao — an AI-powered healthtech app for Nepal — got 1,000+ downloads on Play Store.
            We built it from scratch: React Native frontend, Node.js + Flask backend, MongoDB, Gemini
            API, all deployed on Google Cloud.
          </p>

          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              lineHeight: 1.9,
            }}
          >
            When I&apos;m not building, I&apos;m trekking. Annapurna Base Camp, Mardi Himal, a bike
            ride to Mustang — I find the same problem-solving clarity in mountains that I find in
            code.
          </p>
        </div>

        {/* Right: quick facts */}
        <div>
          <div
            style={{
              border: '1px solid var(--border)',
              padding: '2rem',
              background: 'var(--bg-2)',
            }}
          >
            <p className="section-label" style={{ marginBottom: '1.5rem' }}>
              Quick facts
            </p>
            {[
              { label: 'University', value: 'IOE, Tribhuvan University' },
              { label: 'Degree', value: 'B.E. Computer Engineering' },
              { label: 'Year', value: '4th Year (7th Semester)' },
              { label: 'Entrance Rank', value: '#93 — IOE Entrance Exam' },
              { label: 'Location', value: 'Kathmandu, Nepal' },
              { label: 'Focus', value: 'Full Stack · Mobile · AI' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  padding: '0.75rem 0',
                  borderBottom: i < 5 ? '1px solid var(--border)' : 'none',
                  gap: '1rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.65rem',
                    color: 'var(--text-dim)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.75rem',
                    color: 'var(--text)',
                    textAlign: 'right',
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
