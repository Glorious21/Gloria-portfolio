import React, { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape' && menuOpen) setMenuOpen(false); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#toolkit' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Header bar */}
      <header className="absolute inset-x-0 top-0 z-50 px-6 pt-6 md:px-10 md:pt-10">
        <div className="relative flex items-center justify-center">
          {/* Horizontal line */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 h-px"
            style={{ background: 'var(--border)' }}
          />

          {/* Menu Button */}
          <button
            type="button"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="group relative flex cursor-pointer items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-5 transition-colors duration-300 sm:gap-3 sm:pr-6"
            style={{
              border: '1.5px solid var(--border)',
              background: 'var(--bg)',
              color: 'var(--text)',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.background = 'var(--card-bg)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg)'; }}
          >
            <span className="size-10 shrink-0 sm:size-11">
              <svg viewBox="0 0 100 100" aria-hidden="true" className="size-full">
                <polygon
                  points="30,4 70,4 96,30 96,70 70,96 30,96 4,70 4,30"
                  fill="var(--bg)"
                />
                <polygon
                  points="30,4 70,4 96,30 96,70 70,96 30,96 4,70 4,30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.32,1)] group-hover:rotate-[22.5deg]"
                  style={{ transformOrigin: '50px 50px' }}
                />
                <g stroke="currentColor" strokeWidth="7" strokeLinecap="round">
                  <line x1="28" y1="36" x2="72" y2="36"
                    style={{
                      transformOrigin: '50px 50px',
                      transition: 'transform 400ms cubic-bezier(0.16,1,0.32,1), opacity 200ms ease',
                      ...(menuOpen ? { transform: 'rotate(45deg)' } : {}),
                    }}
                  />
                  <line x1="28" y1="50" x2="72" y2="50"
                    style={{
                      transformOrigin: '50px 50px',
                      transition: 'transform 400ms cubic-bezier(0.16,1,0.32,1), opacity 200ms ease',
                      opacity: menuOpen ? 0 : 1,
                    }}
                  />
                  <line x1="28" y1="64" x2="72" y2="64"
                    style={{
                      transformOrigin: '50px 50px',
                      transition: 'transform 400ms cubic-bezier(0.16,1,0.32,1), opacity 200ms ease',
                      ...(menuOpen ? { transform: 'rotate(-45deg)' } : {}),
                    }}
                  />
                </g>
              </svg>
            </span>
            <span className="nav-label">{menuOpen ? 'Close' : 'Menu'}</span>
          </button>

          {/* Theme Toggle — hidden on mobile (available inside menu overlay) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-0 z-40 overflow-hidden transition-opacity duration-500 ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        style={{ background: 'var(--bg)' }}
        inert={menuOpen ? undefined : ''}
      >
        <nav className="relative flex h-full flex-col items-center justify-center gap-3 px-6 pb-10 pt-28 md:gap-5 md:pt-32">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="display-md chrome-text rounded-2xl outline-offset-8 transition-opacity duration-300 hover:opacity-60"
              style={{
                transform: menuOpen ? 'translateY(0)' : 'translateY(30px)',
                opacity: menuOpen ? 1 : 0,
                transition: `opacity 500ms cubic-bezier(0.16,1,0.32,1) ${100 + i * 70}ms, transform 500ms cubic-bezier(0.16,1,0.32,1) ${100 + i * 70}ms`,
              }}
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle in menu */}
          <div className="mt-6" style={{ opacity: menuOpen ? 1 : 0, transition: 'opacity 600ms ease 350ms' }}>
            <ThemeToggle showLabel={true} />
          </div>

          {/* Contact info */}
          <div
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-10"
            style={{ opacity: menuOpen ? 1 : 0, transition: 'opacity 600ms ease 400ms' }}
          >
            <a href="mailto:glorious27@gmail.com" className="eyebrow transition-opacity hover:opacity-60">
              glorious27@gmail.com
            </a>
            <a href="tel:+2349035977820" className="eyebrow transition-opacity hover:opacity-60">
              +234 903 597 7820
            </a>
            <span className="eyebrow">Lagos / Ogun State, Nigeria</span>
          </div>
        </nav>
      </div>
    </>
  );
}
