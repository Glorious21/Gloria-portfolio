import confetti from 'canvas-confetti';

export function triggerCelebration(originX = 0.5, originY = 0.6) {

  const count = 120;
  const defaults = {
    origin: { x: originX, y: originY },
    colors: ['#00F0FF', '#38BDF8', '#3B82F6', '#10B981', '#F59E0B', '#FFFFFF'],
    disableForReducedMotion: true,
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}
