"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const SecretImage = () => {
  // Explicitly type the ref as HTMLAudioElement
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleAnimationStart = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        onAnimationStart={handleAnimationStart}
      >
        <Image alt="Image" src="/location.jpeg" height={500} width={500} />
      </motion.div>
      <audio ref={audioRef} src="/photoshoot.mp3" preload="auto" />
    </div>
  );
};

export default SecretImage;
