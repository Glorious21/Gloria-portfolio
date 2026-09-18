import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { GithubIcon } from './SocialIcons';

export default function Experience() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      period: 'September 2025 – Present',
      title: 'Backend & Blockchain Developer',
      company: 'SuiHub Africa',
      badge: 'Current Role',
      badgeClass: 'badge-green',
      github: 'https://github.com/Arewa100/Gigstream.git',
      bullets: [
        'Work as a Full-Stack & Blockchain Developer, building scalable web and Sui blockchain applications using JavaScript and Move.',
        'Contributed to GigStream, a Sui hackathon-winning application, handling backend development and API integration for user data and workflows.',
        'Collaborate with cross-functional teams to design, build, and ship full-stack features across the entire development lifecycle.',
        'Apply Move smart contract development alongside JavaScript-based backend and frontend engineering to deliver production-ready blockchain-integrated solutions.',
      ],
      tags: ['Sui Blockchain', 'Move', 'JavaScript', 'Node.js', 'Smart Contracts', 'GigStream Hackathon Winner', 'Full-Stack'],
    },
    {
      period: 'Open Source & University Infrastructure',
      title: 'Backend Developer — Voting Platform',
      company: 'SOCSUNIBEN (University of Benin)',
      badge: 'Production Systems',
      badgeClass: 'badge-blue',
      github: 'https://github.com/socscuniben/voting-platform.git',
      bullets: [
        'Contributed to the development of a secure, backend-driven voting platform for university election management.',
        'Implemented rigorous server-side verification logic for handling ballot submissions, preventing double-voting and tampering.',
        'Engineered resilient REST API endpoints to manage dynamic voting data, real-time status, and automated tallying responses.',
        'Collaborated with a cross-functional engineering team to ensure high data integrity, fault tolerance, and audit reliability.',
      ],
      tags: ['Node.js', 'REST APIs', 'Audit Security', 'PostgreSQL / MongoDB', 'Double-Vote Prevention'],
    },
    {
      period: 'Independent & Developer Community',
      title: 'Full-Stack Web2 & Web3 Engineer',
      company: 'Client Projects, Hackathons & Open Source',
      badge: 'End-to-End Delivery',
      badgeClass: 'badge-green',
      bullets: [
        'Architected and deployed full-stack web applications end-to-end, spanning database schema design to accessible, reactive frontends.',
        'Built CampusCore, a live student management dashboard on Render with Express and MongoDB Atlas, delivering complete academic CRUD analytics.',
        'Developed Fluency, an interactive Sui & Move blockchain quiz platform on Vercel with bespoke curriculum and sandbox modules.',
        'Engineered Pius Primacy Beauty World with accessible vanilla JavaScript, ARIA live-announcements, and responsive retail cart state.',
        'Active contributor in developer communities, open-source repositories, and technical hackathon circles.',
      ],
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Move', 'TypeScript', 'REST APIs', 'ARIA'],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 sm:py-32 md:py-40 px-6 md:px-10 border-t border-ink/[0.10]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <p className="eyebrow text-ink/60 mb-3">Work & Track Record</p>
            <h2 className="display-lg chrome-text">Experience</h2>
          </div>
          <p className="body-sm text-ink/70 max-w-sm">
            Proven engineering across hackathon sprints, production university platforms, and full-stack systems architecture.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8 sm:space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="group relative rounded-2xl sm:rounded-3xl border border-ink/[0.18] bg-ink/[0.03] p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-ink/40 hover:bg-ink/[0.05]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 600ms cubic-bezier(0.16, 1, 0.32, 1) ${index * 120}ms`,
              }}
            >
              {/* Top metadata row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-ink/70 uppercase tracking-wider">
                    {exp.period}
                  </span>
                  <span className="text-ink/30 hidden sm:inline">•</span>
                  <span className="text-xs font-semibold text-ink/80 hidden sm:inline">
                    {exp.company}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`exp-badge ${exp.badgeClass}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {exp.badge}
                  </span>
                  {exp.github && (
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-ink/70 hover:text-ink transition-colors p-1"
                      title="View repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span className="hidden sm:inline font-mono">Repo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Organization */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold font-kanit chrome-text mb-1">
                  {exp.title}
                </h3>
                <p className="text-sm font-medium text-ink/80">
                  {exp.company}
                </p>
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5 my-6 text-ink/80 body-sm">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink/50 mt-2 shrink-0 group-hover:bg-ink transition-colors" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-ink/[0.12]">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-mono border border-ink/20 bg-ink/[0.05] text-ink/85"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Highlight Card */}
        <div
          className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl border border-ink/[0.18] bg-gradient-to-br from-ink/[0.04] to-ink/[0.02] p-6 sm:p-8 md:p-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 600ms cubic-bezier(0.16, 1, 0.32, 1) 400ms',
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="eyebrow text-ink/60">Formal Education</span>
                <span className="exp-badge badge-green">
                  Second Class Upper (2:1)
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-kanit chrome-text mb-1">
                University of Benin, Benin City, Nigeria
              </h3>
              <p className="text-sm sm:text-base font-medium text-ink/85">
                Bachelor of Engineering (B.Eng.) — Computer Engineering
              </p>
              <p className="body-sm text-ink/70 mt-2 max-w-xl">
                Comprehensive engineering foundation in systems architecture, computer networks, data structures, algorithms, operating systems, and distributed computing.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-ink/10">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-ink">
                2025
              </span>
              <span className="eyebrow text-ink/60 mt-1">Graduation Year</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
