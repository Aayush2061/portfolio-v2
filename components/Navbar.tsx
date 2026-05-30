'use client';
import { useState, useEffect } from 'react';

const links = ['about', 'skills', 'projects', 'journey', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0 2rem',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <a
        href="#top"
        style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: '1rem',
          letterSpacing: '0.05em',
          color: 'var(--text)',
          textDecoration: 'none',
        }}
      >
        AB<span style={{ color: 'var(--accent)' }}>.</span>
      </a>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              onClick={() => setActive(link)}
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: active === link ? 'var(--accent)' : 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  active === link ? 'var(--accent)' : 'var(--text-muted)')
              }
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
