'use client';

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'React Native', 'HTML/CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Flask', 'REST APIs'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'Mongoose'],
  },
  {
    category: 'AI / ML',
    skills: ['Gemini API', 'Prompt Engineering', 'Supervised Learning', 'NumPy', 'Pandas'],
  },
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C/C++'],
  },
  {
    category: 'Tools & Infra',
    skills: ['Git', 'GitHub', 'Google Cloud Platform', 'Render', 'Postman', 'VS Code'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: '7rem 2rem',
        background: 'var(--bg-2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem' }}>
          <span className="section-label">02 — Skills</span>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              marginTop: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            What I build with
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
          }}
        >
          {skillGroups.map((group, i) => (
            <div
              key={i}
              style={{
                padding: '1.75rem',
                background: 'var(--bg-2)',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'var(--bg-3)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'var(--bg-2)')}
            >
              <p
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.6rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '1rem',
                }}
              >
                {group.category}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '0.75rem',
                      color: 'var(--text)',
                      padding: '0.3rem 0.6rem',
                      border: '1px solid var(--border-light)',
                      background: 'var(--bg)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
