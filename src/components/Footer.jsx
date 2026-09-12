import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-10 md:px-10 md:py-12 border-t border-ink/[0.1]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        {/* Left: brand */}
        <div className="flex items-center gap-3">
          <span className="font-kanit font-semibold text-ink text-sm tracking-wide">
            Gloria Ogbodo
          </span>
          <span className="text-ink/20">—</span>
          <span className="eyebrow text-ink/40">Full-Stack & Systems Engineer</span>
        </div>

        {/* Right: copyright */}
        <p className="text-xs text-ink/30 font-kanit font-light">
          © {currentYear} • Lagos, Nigeria
        </p>
      </div>
    </footer>
  );
}
