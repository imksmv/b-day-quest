import { useEffect } from "react";
import confetti from "canvas-confetti";

export const useConfetti = () => {
  const fireConfetti = (particleRatio: number, opts: confetti.Options) => {
    confetti({
      ...opts,
      particleCount: Math.floor(200 * particleRatio),
      origin: { x: 0, y: 0.8 },
    });

    confetti({
      ...opts,
      particleCount: Math.floor(200 * particleRatio),
      origin: { x: 1, y: 0.8 },
    });
  };

  useEffect(() => {
    fireConfetti(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fireConfetti(0.2, {
      spread: 60,
    });
    fireConfetti(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fireConfetti(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fireConfetti(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, []);
};
