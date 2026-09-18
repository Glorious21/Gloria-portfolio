import React, { useState, useEffect, useRef } from 'react';
import { GithubIcon, LinkedinIcon, XIcon } from './SocialIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const emailAddress = 'glorious27@gmail.com';
  const phoneNumber = '+2349035977820';
  const phoneDisplay = '+234 903 597 7820';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.unobserve(entry.target); }
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

  const handlePhoneCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 3000);
  };

  const fadeIn = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(16px)',
    transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
  });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 sm:py-32 md:py-40 px-6 md:px-10 section-border"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="eyebrow mb-8" style={fadeIn(0)}>Get In Touch</p>

        <h2 className="display-lg chrome-text mb-6" style={fadeIn(100)}>
          Let's build something exceptional.
        </h2>

        <p className="body-md max-w-lg mx-auto mb-12" style={fadeIn(200)}>
          Available for full-stack engineering roles, distributed systems, and end-to-end product architecture. Let's connect.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-16" style={fadeIn(300)}>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=Engineering%20Collaboration%20with%20Gloria%20Ogbodo`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Say Hello
          </a>

          <button onClick={handleCopy} className="btn-cta" title="Copy email address">
            {copied ? (
              <>
                <svg className="w-4 h-4" style={{ color: '#16a34a' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ color: '#16a34a' }}>Copied!</span>
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

          <a href={`tel:${phoneNumber}`} className="btn-cta" title="Call 09035977820">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="font-mono text-xs">{phoneDisplay}</span>
          </a>
        </div>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-6"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 600ms ease 450ms' }}
        >
          {[
            { href: 'https://github.com/Glorious21', label: 'GitHub', Icon: GithubIcon },
            { href: 'https://www.linkedin.com/in/gloria-ogbodo', label: 'LinkedIn', Icon: LinkedinIcon },
            { href: 'https://x.com/Glo_rious9', label: 'X', Icon: XIcon },
          ].map(({ href, label, Icon }, i) => (
            <React.Fragment key={label}>
              {i > 0 && <span style={{ color: 'var(--border)' }}>|</span>}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-opacity hover:opacity-60"
                style={{ color: 'var(--text-muted)' }}
              >
                <Icon className="w-5 h-5" />
                <span className="eyebrow hidden sm:inline">{label}</span>
              </a>
            </React.Fragment>
          ))}
        </div>

        <p
          className="eyebrow mt-10"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 600ms ease 550ms', color: 'var(--text-muted)' }}
        >
          📍 Lagos / Ogun State, Nigeria
        </p>
      </div>
    </section>
  );
}
