import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen min-h-[640px] flex-col bg-background"
    >
      {/* ── Hero Headline (centered top) ── */}
      <div className="overflow-hidden">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translate3d(0,0,0)' : 'translate3d(0,40px,0)',
            transition: 'opacity 700ms cubic-bezier(0.16,1,0.32,1) 0ms, transform 700ms cubic-bezier(0.16,1,0.32,1) 0ms',
          }}
        >
          <h1 className="display-hero chrome-text mt-24 w-full text-center sm:mt-24 md:mt-28">
            Hi, I'm Gloria
          </h1>
        </div>
      </div>

      {/* ── Bottom bar: bio left, CTA right ── */}
      <div className="mt-auto flex items-end justify-between gap-6 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translate3d(0,0,0)' : 'translate3d(0,20px,0)',
            transition: 'opacity 700ms cubic-bezier(0.16,1,0.32,1) 120ms, transform 700ms cubic-bezier(0.16,1,0.32,1) 120ms',
          }}
        >
          <p className="body-md max-w-[160px] text-ink sm:max-w-[240px] md:max-w-[320px]">
            A versatile full-stack & systems engineer crafting modern web experiences, distributed backends, and decentralized protocols — from Lagos, Nigeria.
          </p>
        </div>
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translate3d(0,0,0)' : 'translate3d(0,20px,0)',
            transition: 'opacity 700ms cubic-bezier(0.16,1,0.32,1) 200ms, transform 700ms cubic-bezier(0.16,1,0.32,1) 200ms',
          }}
        >
          <a href="#contact" className="btn-cta">
            Contact Me
          </a>
        </div>
      </div>

      {/* ── 3D Character (centered, anchored to bottom) ── */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[270px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[280px] sm:translate-y-0 md:w-[360px] lg:w-[430px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.32, 1] }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          >
            <img
              src="/gloria-hero.png"
              alt="3D character portrait of Gloria Ogbodo"
              width="860"
              height="1152"
              draggable={false}
              loading="eager"
              className="select-none w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
