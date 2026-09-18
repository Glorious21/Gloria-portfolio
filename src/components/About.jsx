import React, { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef(null);

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
              }, i * 55);
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

  const paragraph = `I'm a Full-Stack Web2 & Web3 developer who builds applications end-to-end — from database design to polished, accessible user interfaces. I've engineered live full-stack MERN dashboards with MongoDB and Node.js, responsive retail storefronts, scalable REST APIs, and decentralized protocols with Move on the Sui blockchain. I solve real-world problems through robust software architecture and actively contribute to developer communities, hackathons, and open-source initiatives.`;

  const words = paragraph.split(' ');

  const stats = [
    { value: '6+', label: 'Production Platforms' },
    { value: '1st', label: 'Hackathon Winner' },
    { value: '2:1', label: 'B.Eng Computer Eng' },
    { value: '100%', label: 'Ballot Integrity' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 sm:py-32 md:py-40 px-6 md:px-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p className="eyebrow mb-10 sm:mb-14">About Me</p>

        {/* Scroll-reveal paragraph */}
        <div className="display-md leading-[1.3] mb-16 sm:mb-24">
          {words.map((word, i) => (
            <span
              key={i}
              className="reveal-word"
            >
              {word}
            </span>
          ))}
        </div>

        {/* Stats grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 pt-10"
          style={{ borderTop: '1.5px solid var(--border)' }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl sm:text-5xl font-bold font-kanit chrome-text mb-2">
                {stat.value}
              </p>
              <p className="eyebrow">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
