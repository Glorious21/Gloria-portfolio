import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GithubIcon } from './SocialIcons';

const projects = [
  {
    id: 'fluency',
    title: 'Fluency',
    tagline: 'Build Real Fluency in Sui and Move',
    desc: 'Interactive platform with scored code challenges, concept explorers, compiler IDE, and verifiable on-chain credentials that build real Move smart contract muscle.',
    image: '/images/project-fluency.png',
    tags: ['React 19', 'Move', 'Sui Blockchain', 'Vite'],
    github: 'https://github.com/Glorious21/fluency',
    live: 'https://fluencysui.vercel.app/',
    role: 'Creator & Full-Stack Architect',
  },
  {
    id: 'ajotribe',
    title: 'Ajotribe',
    tagline: 'Fintech Protocol via Lightning Network & Nostr',
    desc: 'AI-powered platform digitizing traditional ajo/esusu community savings circles with Bitcoin Lightning micropayments, Nostr relays, and local payment rails.',
    image: '/images/project-ajotribe.jpg',
    tags: ['Node.js', 'Lightning Network', 'Nostr', 'PostgreSQL'],
    github: 'https://github.com/Glorious21/Ajotribe1',
    live: null,
    role: 'Backend Developer',
  },
  {
    id: 'gigstream',
    title: 'Gigstream',
    tagline: 'Hackathon Winner — High-Throughput Gig Economy Engine',
    desc: 'High-concurrency backend services and API integrations built under hackathon sprint deadlines, winning top honors for data flow resilience and worker dispatch systems.',
    image: '/images/project-gigstream.jpg',
    tags: ['Node.js', 'Express', 'MongoDB', 'Async Queues'],
    github: 'https://github.com/Arewa100/Gigstream',
    live: null,
    role: 'Backend Systems Engineer',
  },
  {
    id: 'voting',
    title: 'Voting Platform',
    tagline: 'Tamper-Resistant Academic Voting Infrastructure',
    desc: 'Core backend logic for university elections — ballot integrity enforcement, double-voting prevention, high-concurrency auth, and real-time ballot tallying APIs.',
    image: '/images/project-voting.jpg',
    tags: ['Node.js', 'REST APIs', 'Security', 'Audit Logs'],
    github: 'https://github.com/socscuniben/voting-platform',
    live: null,
    role: 'Backend Developer',
  },
  {
    id: 'aggregator',
    title: 'Data Aggregation Service',
    tagline: 'Fault-Tolerant Multi-Stream Data Pipeline',
    desc: 'Unified aggregation engine combining live weather, news, and financial APIs with circuit breakers, async retries, and zero-crash fallbacks.',
    image: '/images/project-aggregator.jpg',
    tags: ['Node.js', 'Circuit Breakers', 'API Caching'],
    github: 'https://github.com/Glorious21/Real-Time-Data-Aggregation-Service',
    live: null,
    role: 'Systems Architect',
  },
];

function ProjectCard({ project, index, isFeatured = false }) {
  const cardRef = useRef(null);
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
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  if (isFeatured) {
    return (
      <div
        ref={cardRef}
        className="reveal-up"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transitionDelay: `${index * 80}ms`,
        }}
      >
        <div className="group relative rounded-2xl sm:rounded-3xl border border-ink/[0.14] bg-ink/[0.02] p-5 sm:p-7 md:p-8 transition-all duration-500 hover:border-ink/40 hover:bg-ink/[0.04]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Visual Preview Frame with Browser Header */}
            <div className="lg:col-span-7 order-1">
              <div className="overflow-hidden rounded-xl border border-ink/15 bg-background shadow-2xl">
                {/* Browser bar */}
                <div className="flex items-center justify-between border-b border-ink/10 bg-ink/[0.04] px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="font-mono text-[11px] text-ink/40 truncate max-w-[200px]">
                    fluencysui.vercel.app
                  </span>
                  <div className="w-10" />
                </div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-background">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 order-2 flex flex-col justify-center">
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="eyebrow text-ink/60">{project.role}</span>
                {project.live && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-kanit chrome-text mb-1">
                {project.title}
              </h3>
              <p className="font-medium text-ink/90 text-sm sm:text-base mb-3">
                {project.tagline}
              </p>
              <p className="body-sm text-ink/60 mb-6 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs font-mono border border-ink/15 bg-ink/[0.04] text-ink/75"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta text-xs py-2.5 px-5"
                  >
                    Visit Project →
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-ink/60 hover:text-ink transition-colors px-3 py-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      className="reveal-up"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div className="group flex flex-col h-full rounded-2xl border border-ink/[0.14] bg-ink/[0.02] p-5 sm:p-6 transition-all duration-500 hover:border-ink/40 hover:bg-ink/[0.04]">
        {/* Visual Preview */}
        <div className="overflow-hidden rounded-xl border border-ink/15 bg-background shadow-xl mb-5">
          <div className="flex items-center justify-between border-b border-ink/10 bg-ink/[0.04] px-3.5 py-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-ink/30" />
              <span className="w-2 h-2 rounded-full bg-ink/30" />
              <span className="w-2 h-2 rounded-full bg-ink/30" />
            </div>
            <span className="font-mono text-[10px] text-ink/40 truncate max-w-[150px]">
              {project.id}.internal
            </span>
            <div className="w-6" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-background">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content Box */}
        <div className="flex flex-col flex-grow">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="eyebrow text-ink/50">{project.role}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-kanit chrome-text mb-1">
            {project.title}
          </h3>
          <p className="font-medium text-ink/85 text-xs sm:text-sm mb-2.5">
            {project.tagline}
          </p>
          <p className="body-sm text-ink/60 mb-5 leading-relaxed flex-grow">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-mono border border-ink/15 bg-ink/[0.04] text-ink/70"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-3 border-t border-ink/10 mt-auto">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-xs py-2 px-4"
              >
                Live →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-ink/60 hover:text-ink transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 md:py-40 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <p className="eyebrow text-ink/50 mb-4">Selected Work</p>
            <h2 className="display-lg chrome-text">Projects</h2>
          </div>
          <p className="body-sm text-ink/50 max-w-xs">
            Full-stack web applications, distributed protocols, and resilient backend systems — shipped and proven.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Featured project (Fluency) — full width */}
          <div className="md:col-span-2">
            <ProjectCard project={projects[0]} index={0} isFeatured={true} />
          </div>

          {/* Remaining projects */}
          {projects.slice(1).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
