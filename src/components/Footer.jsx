import React from 'react';
import { GithubIcon, LinkedinIcon, XIcon } from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-10 md:px-10 md:py-14 border-t border-ink/[0.1]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: brand */}
        <div className="flex items-center gap-3">
          <span className="font-kanit font-semibold text-ink text-sm tracking-wide">
            Gloria Ogbodo
          </span>
          <span className="text-ink/20">—</span>
          <span className="eyebrow text-ink/40">Full-Stack & Systems Engineer</span>
        </div>

        {/* Center: socials */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Glorious21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/30 hover:text-ink transition-colors duration-300"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://ng.linkedin.com/in/gloria-ogbodo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/30 hover:text-ink transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="https://x.com/Glo_rious9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/30 hover:text-ink transition-colors duration-300"
            aria-label="X"
          >
            <XIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Right: copyright */}
        <p className="text-xs text-ink/25 font-kanit font-light">
          © {currentYear} — Lagos, Nigeria
        </p>
      </div>
    </footer>
  );
}
