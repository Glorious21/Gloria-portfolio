import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Header bar with centered octagon menu button */}
      <header className="absolute inset-x-0 top-0 z-50 px-6 pt-6 md:px-10 md:pt-10">
        <div className="relative flex items-center justify-center">
          {/* Horizontal line */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 h-px bg-ink/[0.2]"
          />

          {/* Octagon Menu Button */}
          <button
            type="button"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="group relative flex cursor-pointer items-center gap-2.5 rounded-full border border-ink/25 bg-background py-1.5 pl-1.5 pr-5 text-ink transition-colors duration-300 hover:border-ink/70 hover:bg-ink/10 sm:gap-3 sm:pr-6"
          >
            {/* Octagon SVG with hamburger lines */}
            <span className="size-10 shrink-0 sm:size-11">
              <svg viewBox="0 0 100 100" aria-hidden="true" className="size-full">
                <polygon
                  points="30,4 70,4 96,30 96,70 70,96 30,96 4,70 4,30"
                  fill="var(--tw-bg-background, #0c0c0c)"
                  className="fill-background"
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
                  <line
                    x1="28" y1="36" x2="72" y2="36"
                    style={{
                      transformOrigin: '50px 50px',
                      transition: 'transform 400ms cubic-bezier(0.16,1,0.32,1), opacity 200ms ease',
                      ...(menuOpen ? { transform: 'rotate(45deg)', opacity: 1 } : {}),
                    }}
                  />
                  <line
                    x1="28" y1="50" x2="72" y2="50"
                    style={{
                      transformOrigin: '50px 50px',
                      transition: 'transform 400ms cubic-bezier(0.16,1,0.32,1), opacity 200ms ease',
                      opacity: menuOpen ? 0 : 1,
                    }}
                  />
                  <line
                    x1="28" y1="64" x2="72" y2="64"
                    style={{
                      transformOrigin: '50px 50px',
                      transition: 'transform 400ms cubic-bezier(0.16,1,0.32,1), opacity 200ms ease',
                      ...(menuOpen ? { transform: 'rotate(-45deg)', opacity: 1 } : {}),
                    }}
                  />
                </g>
              </svg>
            </span>
            <span className="nav-label">{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-0 z-40 overflow-hidden bg-background transition-opacity duration-500 ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        inert={menuOpen ? undefined : ''}
      >
        {/* Blurred project thumbnails background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(120% 80% at 50% 45%, rgba(12,12,12,.96) 0%, rgba(12,12,12,.88) 45%, rgba(12,12,12,.98) 100%)',
          }}
        />

        <nav className="relative flex h-full flex-col items-center justify-center gap-3 px-6 pb-10 pt-28 md:gap-5 md:pt-32">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
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

          <div
            className="mt-14 flex flex-col items-center gap-3 sm:flex-row sm:gap-10"
            style={{
              opacity: menuOpen ? 1 : 0,
              transition: 'opacity 600ms ease 400ms',
            }}
          >
            <a
              href="mailto:gloriaogbodo21@gmail.com"
              className="eyebrow text-ink/60 transition-opacity hover:opacity-70"
            >
              gloriaogbodo21@gmail.com
            </a>
            <a
              href="tel:09035977820"
              className="eyebrow text-ink/60 transition-opacity hover:opacity-70"
            >
              +234 903 597 7820
            </a>
            <span className="eyebrow text-ink/40">Lagos, Nigeria</span>
          </div>
        </nav>
      </div>
    </>
  );
}
