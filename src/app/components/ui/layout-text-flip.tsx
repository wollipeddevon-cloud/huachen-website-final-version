"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "./utils";

export const LayoutTextFlip = ({
  text = "",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 5000,
  className,
}: {
  text?: string;
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      {text && (
        <motion.span
          layoutId="subtext"
          className="font-bold tracking-tight drop-shadow-lg mb-2"
        >
          {text}
        </motion.span>
      )}

      <div className="grid grid-cols-1 place-items-center w-full min-h-[12rem]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
            animate={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
            transition={{
              duration: 0.8,
              ease: "easeInOut"
            }}
            className="col-start-1 row-start-1 w-full px-4 flex items-center justify-center text-center font-[Alexandria] md:text-3xl font-light tracking-wider leading-relaxed drop-shadow-lg text-slate-100 text-[24px]"
          >
            {words[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
