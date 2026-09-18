import React, { useState, useEffect, useRef } from 'react';
import { GithubIcon } from './SocialIcons';

const projects = [
  {
    id: 'fluency',
    title: 'Fluency',
    tagline: 'Learn Sui & Move Through Quizzes',
    desc: 'Interactive platform for mastering Sui blockchain and Move programming through structured quizzes, dedicated Curriculum, Mechanics, Sandbox, Leaderboard, and on-chain Credentials.',
    image: '/images/project-fluency.png',
    tags: ['React (Vite)', 'JavaScript', 'Sui Blockchain', 'Move', 'Vercel'],
    github: 'https://github.com/Glorious21/fluency',
    live: 'https://fluencysui.vercel.app/',
    role: 'Creator & Full-Stack Architect',
  },
  {
    id: 'campuscore',
    title: 'CampusCore',
    tagline: 'Student Management & Analytics Dashboard',
    desc: 'Full-stack MERN academic management platform with complete CRUD for student records and courses, dynamic graduation/enrolment rate metrics, and live MongoDB Atlas integration.',
    image: '/images/project-campuscore.jpg',
    tags: ['Node.js', 'Express', 'MongoDB Atlas', 'Mongoose', 'Render'],
    github: 'https://github.com/Glorious21/CampusCore.git',
    live: 'https://campuscore-n4l0.onrender.com',
    role: 'Full-Stack Engineer',
  },
  {
    id: 'piusprimacy',
    title: 'Pius Primacy Beauty World',
    tagline: 'Premium Hair & Beauty E-Commerce Storefront',
    desc: 'High-performance responsive retail website featuring custom vanilla JS cart drawer with live badge counts, site-wide product search, founder spotlight, and strict ARIA accessibility.',
    image: '/images/project-piusprimacy.jpg',
    tags: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'ARIA', 'E-Commerce'],
    github: 'https://github.com/Glorious21/PiusPrimary.git',
    live: null,
    role: 'Frontend & UI Engineer',
  },
  {
    id: 'gigstream',
    title: 'GigStream',
    tagline: 'SUI Hackathon Winner — Distributed Gig Engine',
    desc: 'Hackathon-winning application engineered for real-world worker dispatching, high-concurrency user data pipelines, API integrations, and resilient fault handling under sprint deadlines.',
    image: '/images/project-gigstream.jpg',
    tags: ['Node.js', 'Express', 'Sui Hackathon Winner', 'REST APIs', 'Async Queues'],
    github: 'https://github.com/Arewa100/Gigstream.git',
    live: null,
    role: 'Backend Systems Engineer',
  },
  {
    id: 'voting',
    title: 'Voting Platform — SOCSUNIBEN',
    tagline: 'Tamper-Resistant Academic Voting Infrastructure',
    desc: 'Election backend platform for university governance. Implemented server-side voting logic, double-voting prevention, API endpoints for ballot tallies, and rigorous data consistency.',
    image: '/images/project-voting.jpg',
    tags: ['Node.js', 'REST APIs', 'Security', 'Audit Logs', 'SOCSUNIBEN'],
    github: 'https://github.com/socscuniben/voting-platform.git',
    live: null,
    role: 'Backend Developer',
  },
  {
    id: 'aggregator',
    title: 'Real-Time Data Aggregation Service',
    tagline: 'Multi-API Aggregation & SSR Engine',
    desc: 'Fault-tolerant backend service unifying asynchronous data streams from external weather, news, and quotes APIs with server-side rendering and graceful failure recovery.',
    image: '/images/project-aggregator.jpg',
    tags: ['Node.js', 'Express', 'REST APIs', 'EJS', 'MongoDB'],
    github: 'https://github.com/Glorious21/Real-Time-Data-Aggregation-Service.git',
    live: null,
    role: 'Systems & Backend Architect',
  },
  {
    id: 'ajotribe',
    title: 'Ajotribe',
    tagline: 'Fintech Protocol via Lightning Network & Nostr',
    desc: 'Community savings protocol digitizing traditional ajo/esusu circles with Bitcoin Lightning micropayments, Nostr decentralized event relays, and local payment gateways.',
    image: '/images/project-ajotribe.jpg',
    tags: ['Node.js', 'Lightning Network', 'Nostr', 'PostgreSQL'],
    github: 'https://github.com/Glorious21/Ajotribe1',
    live: null,
    role: 'Backend Developer',
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.12 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="card p-5 sm:p-7 md:p-8 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 600ms ease ${index * 80}ms, transform 600ms ease ${index * 80}ms, border-color 300ms ease, background 300ms ease`,
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Image */}
        <div className="lg:col-span-7">
          <div
            className="overflow-hidden rounded-xl shadow-sm"
            style={{ border: '1px solid var(--border)' }}
          >
            {/* Browser bar */}
            <div
              className="flex items-center justify-between px-4 py-2.5"
              style={{ background: 'var(--bg-subtle)', borderBottom: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#f87171' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#fbbf24' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#4ade80' }} />
              </div>
              <span className="font-mono text-[11px] truncate max-w-[200px]" style={{ color: 'var(--text-muted)' }}>
                {project.live
                  ? project.live.replace(/^https?:\/\//, '').replace(/\/$/, '')
                  : `${project.id}.internal`}
              </span>
              <div className="w-10" />
            </div>
            {/* Screenshot */}
            <div className="relative aspect-[16/10] overflow-hidden" style={{ background: 'var(--bg-subtle)' }}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="eyebrow">{project.role}</span>
            {project.live && (
              <span className="badge badge-green">
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                Live
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-kanit chrome-text mb-1">
            {project.title}
          </h3>
          <p className="font-medium text-sm sm:text-base mb-3" style={{ color: 'var(--text)' }}>
            {project.tagline}
          </p>
          <p className="body-sm mb-6 leading-relaxed">{project.desc}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-xs py-2 px-5"
              >
                Visit Project →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium transition-opacity hover:opacity-60"
                style={{ color: 'var(--text-muted)' }}
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {projects.map((project, i) => (
        <div
          key={project.id}
          className="card p-5 flex flex-col gap-4"
          style={{ opacity: 1 }}
        >
          {/* Image */}
          <div className="overflow-hidden rounded-lg aspect-[16/10]" style={{ background: 'var(--bg-subtle)' }}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          {/* Info */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="eyebrow">{project.role}</span>
              {project.live && (
                <span className="badge badge-green">
                  <span className="w-1 h-1 rounded-full bg-current" />
                  Live
                </span>
              )}
            </div>
            <h4 className="font-kanit font-bold text-base mb-1" style={{ color: 'var(--text)' }}>{project.title}</h4>
            <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>{project.desc}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="flex gap-3">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-cta text-xs py-1.5 px-4">Visit →</a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs transition-opacity hover:opacity-60"
                  style={{ color: 'var(--text-muted)' }}>
                  <GithubIcon className="w-3.5 h-3.5" />
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  const featured = projects.slice(0, 2);
  const rest = projects.slice(2);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 md:py-40 px-6 md:px-10 section-border"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <p className="eyebrow mb-3">Engineering Work</p>
            <h2 className="display-lg chrome-text">Projects</h2>
          </div>
          <p className="body-sm max-w-xs">
            Production platforms, hackathon winners, and open-source systems built end-to-end.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 sm:space-y-10 mb-16">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12" style={{ borderTop: '1.5px solid var(--border)', paddingTop: '2.5rem' }}>
          <p className="eyebrow">More Projects</p>
        </div>

        {/* Project Grid */}
        <ProjectGrid projects={rest} />
      </div>
    </section>
  );
}
