'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    const lines: { points: {x: number, y: number}[], opacity: number }[] = [];
    for (let i = 0; i < 10; i++) {
      const points = [];
      const baseY = (window.innerHeight / 10) * i;
      for (let x = -50; x < window.innerWidth + 50; x += 40) {
        points.push({ x, y: baseY + Math.sin(x * 0.008 + i) * 35 + Math.sin(x * 0.02 + i * 2) * 15 });
      }
      lines.push({ points, opacity: Math.random() * 0.06 + 0.02 });
    }

    let t = 0;
    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.004;
      lines.forEach((line) => {
        ctx.beginPath();
        line.points.forEach((p, i) => {
          const y = p.y + Math.sin(t + i * 0.3) * 6;
          if (i === 0) ctx.moveTo(p.x, y); else ctx.lineTo(p.x, y);
        });
        ctx.strokeStyle = `rgba(79, 255, 176, ${line.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section id="top" style={{
      width: '100%',
      height: '100vh',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      {/* Glow */}
      <div style={{
        position: 'absolute', left: '0', top: '20%',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79,255,176,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Centering wrapper — fills full height, centers content */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '60px', /* offset for navbar */
      }}>
        {/* Inner grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 260px',
          gap: '4rem',
          alignItems: 'center',
          width: '100%',
          maxWidth: '960px',
          padding: '0 3rem',
        }}>

          {/* LEFT: text */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              marginBottom: '1.5rem', padding: '0.25rem 0.75rem',
              border: '1px solid var(--accent-dim)', background: 'var(--accent-glow)',
            }}>
              <span style={{
                width: '5px', height: '5px', borderRadius: '50%',
                background: 'var(--accent)', display: 'inline-block',
                animation: 'pulse-accent 2s infinite',
              }} />
              <span className="section-label">Open to internships &amp; full-time roles</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              fontWeight: 800, lineHeight: 1.05,
              letterSpacing: '-0.02em', marginBottom: '0.9rem',
            }}>
              Aayush<br />
              <span style={{ color: 'var(--accent)' }}>Bhandari</span>
            </h1>

            <p className="font-serif" style={{
              fontSize: '1rem', color: 'var(--text-muted)',
              fontStyle: 'italic', marginBottom: '0.3rem',
            }}>
              Full Stack &amp; AI Application Developer
            </p>

            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '0.65rem',
              color: 'var(--text-dim)', marginBottom: '1.1rem', letterSpacing: '0.06em',
            }}>
              Kathmandu, Nepal — IOE Tribhuvan University
            </p>

            <p style={{
              fontSize: '0.8rem', color: 'var(--text-muted)',
              maxWidth: '400px', lineHeight: 1.85, marginBottom: '1.75rem',
            }}>
              Building production-ready web &amp; mobile apps with React, Node.js, React Native and AI.
              Shipped Jachao — a healthtech app with 1,000+ Play Store downloads.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {[
                { label: 'Resume ↗', href: '/resume.pdf', primary: true },
                { label: 'GitHub ↗', href: 'https://github.com/Aayush2061', primary: false },
                { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/aayush-bhandari-68b70933a/', primary: false },
              ].map((btn) => (
                <a key={btn.label} href={btn.href} target="_blank" style={{
                  padding: '0.6rem 1.3rem',
                  background: btn.primary ? 'var(--accent)' : 'transparent',
                  color: btn.primary ? '#0a0a0a' : 'var(--text)',
                  border: btn.primary ? 'none' : '1px solid var(--border-light)',
                  fontFamily: 'DM Mono, monospace', fontSize: '0.68rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase' as const,
                  textDecoration: 'none', fontWeight: btn.primary ? 600 : 400,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (btn.primary) e.currentTarget.style.opacity = '0.85';
                  else e.currentTarget.style.borderColor = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                  if (!btn.primary) e.currentTarget.style.borderColor = 'var(--border-light)';
                }}>
                  {btn.label}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: photo */}
          {/* RIGHT: photo */}
<div
  style={{
    position: 'relative',
    marginTop: '2rem',
    justifySelf: 'center',
  }}
>
  {/* Background frame */}
  <div
    style={{
      position: 'absolute',
      top: '12px',
      left: '12px',
      width: '320px',
      height: '400px',
      border: '1px solid var(--accent)',
      opacity: 0.35,
      zIndex: 0,
    }}
  />

  {/* Main image */}
  <div
    style={{
      position: 'relative',
      zIndex: 1,
      width: '320px',
      height: '400px',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.08)',
      background: '#111',
    }}
  >
    <img
      src="/me.jpeg"
      alt="Aayush Bhandari"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center 65%',
        filter:
          'grayscale(10%) contrast(1.08) brightness(0.9)',
        display: 'block',
      }}
    />

    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'linear-gradient(to bottom, transparent 55%, rgba(10,10,10,0.6) 100%)',
      }}
    />
  </div>

  {/* Label */}
  <div
    style={{
      position: 'absolute',
      bottom: '-14px',
      right: '-14px',
      zIndex: 2,
      background: 'var(--bg)',
      border: '1px solid var(--border-light)',
      padding: '0.45rem 0.8rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
    }}
  >
    <span style={{ fontSize: '0.7rem' }}>🏔️</span>

    <span
      style={{
        fontFamily: 'DM Mono, monospace',
        fontSize: '0.58rem',
        color: 'var(--accent)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
      }}
    >
      Himalayan Trail
    </span>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}