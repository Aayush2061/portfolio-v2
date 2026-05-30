export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '0.65rem',
          color: 'var(--text-dim)',
          letterSpacing: '0.1em',
        }}
      >
        Aayush Bhandari — {new Date().getFullYear()}
      </span>
      <span
        style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '0.65rem',
          color: 'var(--text-dim)',
          letterSpacing: '0.1em',
        }}
      >
        Built with Next.js
      </span>
    </footer>
  );
}
