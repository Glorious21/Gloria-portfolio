import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="px-6 py-10 md:px-10 md:py-12 section-border"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        {/* Left: brand */}
        <div className="flex items-center gap-3">
          <span className="font-kanit font-semibold text-sm tracking-wide" style={{ color: 'var(--text)' }}>
            Gloria Modupe Ogbodo
          </span>
          <span style={{ color: 'var(--border)' }}>—</span>
          <span className="eyebrow">Full-Stack Web2 &amp; Web3 Developer</span>
        </div>

        {/* Right: copyright */}
        <p className="text-xs font-kanit font-light" style={{ color: 'var(--text-muted)' }}>
          © {currentYear} • Lagos / Ogun State, Nigeria
        </p>
      </div>
    </footer>
  );
}
