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
    for (let i = 0; i < 12; i++) {
      const points = [];
      const baseY = (window.innerHeight / 12) * i + Math.random() * 60;
      for (let x = -50; x < window.innerWidth + 50; x += 40) {
        points.push({ x, y: baseY + Math.sin(x * 0.008 + i) * 40 + Math.sin(x * 0.02 + i * 2) * 20 });
      }
      lines.push({ points, opacity: Math.random() * 0.07 + 0.02 });
    }

    let t = 0;
    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.004;
      lines.forEach((line) => {
        ctx.beginPath();
        line.points.forEach((p, i) => {
          const y = p.y + Math.sin(t + i * 0.3) * 8;
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
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 3rem',
    }}>
      {/* Topographic canvas */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      {/* Glow */}
      <div style={{
        position: 'absolute', left: '5%', top: '20%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79,255,176,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content: two columns, perfectly centered */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1000px',
        display: 'grid',
        gridTemplateColumns: '1fr 320px',
        gap: '5rem',
        alignItems: 'center',
      }}>

        {/* LEFT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            marginBottom: '2rem', padding: '0.3rem 0.8rem',
            border: '1px solid var(--accent-dim)', background: 'var(--accent-glow)',
            width: 'fit-content',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: 'var(--accent)', display: 'inline-block',
              animation: 'pulse-accent 2s infinite',
            }} />
            <span className="section-label">Open to internships &amp; full-time roles</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 800, lineHeight: 1.0,
            letterSpacing: '-0.02em', marginBottom: '1.25rem',
          }}>
            Aayush<br />
            <span style={{ color: 'var(--accent)' }}>Bhandari</span>
          </h1>

          <p className="font-serif" style={{
            fontSize: '1.2rem', color: 'var(--text-muted)',
            fontStyle: 'italic', marginBottom: '0.4rem',
          }}>
            Full Stack &amp; AI Application Developer
          </p>

          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '0.7rem',
            color: 'var(--text-dim)', marginBottom: '1.75rem', letterSpacing: '0.06em',
          }}>
            Kathmandu, Nepal — IOE Tribhuvan University
          </p>

          <p style={{
            fontSize: '0.82rem', color: 'var(--text-muted)',
            maxWidth: '420px', lineHeight: 1.9, marginBottom: '2.25rem',
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
                padding: '0.7rem 1.5rem',
                background: btn.primary ? 'var(--accent)' : 'transparent',
                color: btn.primary ? '#0a0a0a' : 'var(--text)',
                border: btn.primary ? 'none' : '1px solid var(--border-light)',
                fontFamily: 'DM Mono, monospace', fontSize: '0.72rem',
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
        <div style={{ position: 'relative' }}>
          {/* Offset accent border */}
          <div style={{
            position: 'absolute', top: '14px', left: '14px',
            width: '320px', height: '400px',
            border: '1px solid var(--accent)', opacity: 0.35, zIndex: 0,
          }} />

          {/* Photo frame */}
          <div style={{
            position: 'relative', zIndex: 1,
            width: '320px', height: '400px', overflow: 'hidden',
          }}>
            <img
              src="/me.jpeg"
              alt="Aayush Bhandari trekking in the Himalayas"
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center 20%',
                filter: 'grayscale(25%) contrast(1.05) brightness(0.85)',
                display: 'block',
              }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, transparent 55%, rgba(10,10,10,0.5) 100%)',
            }} />
          </div>

          {/* Tag */}
          <div style={{
            position: 'absolute', bottom: '-14px', right: '-14px', zIndex: 2,
            background: 'var(--bg)', border: '1px solid var(--border-light)',
            padding: '0.45rem 0.75rem',
            display: 'flex', alignItems: 'center', gap: '0.4rem',
          }}>
            <span style={{ fontSize: '0.7rem' }}>🏔️</span>
            <span style={{
              fontFamily: 'DM Mono, monospace', fontSize: '0.6rem',
              color: 'var(--accent)', letterSpacing: '0.1em',
            }}>Himalayan trail</span>
          </div>
        </div>
      </div>
    </section>
  );
}