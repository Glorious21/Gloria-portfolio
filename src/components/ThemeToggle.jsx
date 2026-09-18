import React, { useEffect, useState } from 'react';

/** Read current theme directly from DOM — works before React hydration */
function getInitialTheme() {
  if (typeof document !== 'undefined') {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  }
  return 'dark';
}

export default function ThemeToggle({ className = '', showLabel = false }) {
  const [theme, setTheme] = useState(getInitialTheme);

  /* Keep React state in sync if the class changes externally (e.g. OS switch) */
  useEffect(() => {
    const obs = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  const setMode = (mode) => {
    localStorage.setItem('theme', mode);
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    /* state will update via MutationObserver above */
  };

  return (
    <div
      className={`inline-flex items-center rounded-full border p-0.5 sm:p-1 shadow-sm backdrop-blur-md transition-colors duration-300 ${className}`}
      style={{
        borderColor: 'rgb(var(--color-ink-rgb) / 0.20)',
        backgroundColor: 'rgb(var(--color-background-rgb) / 0.85)',
      }}
      role="radiogroup"
      aria-label="Theme mode switcher"
    >
      {/* ── Light Button ── */}
      <button
        type="button"
        onClick={() => setMode('light')}
        aria-checked={theme === 'light'}
        role="radio"
        title="Switch to Light mode"
        style={theme === 'light' ? {
          backgroundColor: 'rgb(var(--color-ink-rgb))',
          color: 'rgb(var(--color-background-rgb))',
        } : {
          color: 'rgb(var(--color-ink-rgb) / 0.6)',
        }}
        className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-mono font-medium transition-all duration-300 cursor-pointer hover:opacity-80"
      >
        <svg className="size-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <span>Light</span>
      </button>

      {/* ── Dark Button ── */}
      <button
        type="button"
        onClick={() => setMode('dark')}
        aria-checked={theme === 'dark'}
        role="radio"
        title="Switch to Dark mode"
        style={theme === 'dark' ? {
          backgroundColor: 'rgb(var(--color-ink-rgb))',
          color: 'rgb(var(--color-background-rgb))',
        } : {
          color: 'rgb(var(--color-ink-rgb) / 0.6)',
        }}
        className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-mono font-medium transition-all duration-300 cursor-pointer hover:opacity-80"
      >
        <svg className="size-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        <span>Dark</span>
      </button>
    </div>
  );
}
