import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative flex h-[100dvh] min-h-[600px] sm:min-h-[640px] flex-col overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Headline */}
      <div className="overflow-hidden">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translate3d(0,0,0)' : 'translate3d(0,40px,0)',
            transition: 'opacity 700ms cubic-bezier(0.16,1,0.32,1), transform 700ms cubic-bezier(0.16,1,0.32,1)',
          }}
        >
          <h1 className="display-hero chrome-text mt-20 w-full text-center sm:mt-24 md:mt-28">
            Hi, I'm Gloria
          </h1>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-6 pb-6 sm:gap-6 sm:pb-8 md:px-10 md:pb-10">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translate3d(0,0,0)' : 'translate3d(0,20px,0)',
            transition: 'opacity 700ms cubic-bezier(0.16,1,0.32,1) 120ms, transform 700ms cubic-bezier(0.16,1,0.32,1) 120ms',
          }}
        >
          <p className="body-sm sm:body-md max-w-[160px] sm:max-w-[240px] md:max-w-[340px]">
            Full-Stack Web2 &amp; Web3 developer building end-to-end applications from database architecture to accessible UIs — from Lagos / Ogun State, Nigeria.
          </p>
        </div>
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translate3d(0,0,0)' : 'translate3d(0,20px,0)',
            transition: 'opacity 700ms cubic-bezier(0.16,1,0.32,1) 200ms, transform 700ms cubic-bezier(0.16,1,0.32,1) 200ms',
          }}
        >
          <a href="#contact" className="btn-cta text-xs sm:text-sm shrink-0">Contact Me</a>
        </div>
      </div>

      {/* 3D Character */}
      <div className="pointer-events-none absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[200px] sm:top-auto sm:bottom-0 sm:translate-y-0 sm:w-[280px] md:w-[360px] lg:w-[430px] z-10">
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
              alt="3D character portrait of Gloria Modupe Ogbodo"
              width="860"
              height="1152"
              draggable={false}
              loading="eager"
              className="hero-avatar-mask select-none w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
