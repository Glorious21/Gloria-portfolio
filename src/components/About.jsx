import React, { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef(null);
  const wordsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const words = sectionRef.current?.querySelectorAll('.reveal-word');
            words?.forEach((word, i) => {
              setTimeout(() => {
                word.style.opacity = '1';
                word.style.transform = 'translateY(0)';
              }, i * 60);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const paragraph = `I'm a full-stack and systems engineer who thrives across the entire product lifecycle — from crafting reactive, high-performance web applications to architecting distributed backend services and decentralized protocols. I build end-to-end platforms, sub-50ms APIs, fault-tolerant data pipelines, and smart contracts that solve real problems. My core toolkit spans React, TypeScript, Node.js, Move on Sui, and the Lightning Network. I believe engineering should deliver delight on the frontend and deterministic reliability on the backend.`;

  const words = paragraph.split(' ');

  const stats = [
    { value: '5+', label: 'Production Systems' },
    { value: '1st', label: 'Hackathon Winner' },
    { value: '100%', label: 'Ballot Integrity' },
    { value: '1,500', label: 'Req/s Throughput' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 sm:py-32 md:py-40 px-6 md:px-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p className="eyebrow text-ink/50 mb-10 sm:mb-14">About Me</p>

        {/* Scroll-reveal paragraph */}
        <div className="display-md leading-[1.3] mb-16 sm:mb-24">
          {words.map((word, i) => (
            <span
              key={i}
              className="reveal-word inline-block mr-[0.3em]"
              style={{
                opacity: 0,
                transform: 'translateY(12px)',
                transition: `opacity 400ms ease, transform 400ms ease`,
              }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 pt-10 border-t border-ink/[0.12]">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl sm:text-5xl font-bold font-kanit chrome-text mb-2">
                {stat.value}
              </p>
              <p className="eyebrow text-ink/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
