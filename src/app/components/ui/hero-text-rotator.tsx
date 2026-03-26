"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ColourfulText from "./colourful-text";

const phrases = [
  { prefix: "The Science of", suffix: "Masterful Engineering" },
  { prefix: "The Defense of", suffix: "Thermal Safety" },
  { prefix: "The Barrier of", suffix: "Absolute Dryness" },
  { prefix: "The Physics of", suffix: "Perfect Shading" },
];

export const HeroTextRotator = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[8rem] md:h-[12rem] flex items-center justify-center overflow-hidden mb-6">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight text-center absolute w-full top-0"
        >
          {phrases[index].prefix} <br />
          <span className="italic">
            <ColourfulText text={phrases[index].suffix} />
          </span>
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};
