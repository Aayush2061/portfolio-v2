'use client';

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '7rem 2rem',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <div style={{ marginBottom: '4rem' }}>
        <span className="section-label">05 — Contact</span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        <div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
            }}
          >
            Let&apos;s build
            <br />
            <span className="font-serif" style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
              something real.
            </span>
          </h2>

          <p
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              maxWidth: '400px',
            }}
          >
            I&apos;m actively looking for internships and junior engineering roles. If you&apos;re
            building something interesting — or just want to connect — reach out.
          </p>

          <a
            href="mailto:yourmail@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.9rem 2rem',
              background: 'var(--accent)',
              color: '#0a0a0a',
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Say hello ↗
          </a>
        </div>

        <div>
          {[
            {
              label: 'Email',
              value: 'yourmail@gmail.com',
              href: 'mailto:yourmail@gmail.com',
            },
            {
              label: 'LinkedIn',
              value: 'linkedin.com/in/yourlinkedin',
              href: 'https://linkedin.com/in/yourlinkedin',
            },
            {
              label: 'GitHub',
              value: 'github.com/yourgithub',
              href: 'https://github.com/yourgithub',
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
                padding: '1.25rem 0',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <span
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.6rem',
                  color: 'var(--text-dim)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                {item.label}
              </span>
              <a
                href={item.href}
                target="_blank"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {item.value} ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
