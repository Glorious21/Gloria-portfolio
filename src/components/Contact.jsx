import React, { useState, useEffect, useRef } from 'react';
import { GithubIcon, LinkedinIcon, XIcon } from './SocialIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const emailAddress = 'gloriaogbodo21@gmail.com';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 sm:py-32 md:py-40 px-6 md:px-10"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p
          className="eyebrow text-ink/50 mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(15px)',
            transition: 'all 600ms ease',
          }}
        >
          Get In Touch
        </p>

        <h2
          className="display-lg chrome-text mb-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms ease 100ms',
          }}
        >
          Let's build something exceptional.
        </h2>

        <p
          className="body-md text-ink/60 max-w-lg mx-auto mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(15px)',
            transition: 'all 600ms ease 200ms',
          }}
        >
          Available for full-stack engineering roles, distributed systems, and end-to-end product architecture. Let's connect.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(15px)',
            transition: 'all 600ms ease 300ms',
          }}
        >
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=Engineering%20Collaboration%20with%20Gloria%20Ogbodo`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta bg-ink/[0.06] hover:bg-ink/[0.12]"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Say Hello
          </a>

          <button
            onClick={handleCopy}
            className="btn-cta"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
                <span className="font-mono text-xs">{emailAddress}</span>
              </>
            )}
          </button>
        </div>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-6"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 600ms ease 450ms',
          }}
        >
          <a
            href="https://github.com/Glorious21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-ink/40 hover:text-ink transition-colors duration-300"
          >
            <GithubIcon className="w-5 h-5" />
            <span className="eyebrow hidden sm:inline">GitHub</span>
          </a>

          <span className="text-ink/15">|</span>

          <a
            href="https://ng.linkedin.com/in/gloria-ogbodo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-ink/40 hover:text-ink transition-colors duration-300"
          >
            <LinkedinIcon className="w-5 h-5" />
            <span className="eyebrow hidden sm:inline">LinkedIn</span>
          </a>

          <span className="text-ink/15">|</span>

          <a
            href="https://x.com/Glo_rious9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-ink/40 hover:text-ink transition-colors duration-300"
          >
            <XIcon className="w-5 h-5" />
            <span className="eyebrow hidden sm:inline">X</span>
          </a>
        </div>
      </div>
    </section>
  );
}
