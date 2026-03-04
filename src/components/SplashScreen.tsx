import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5s
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 300); // Small delay before unmounting
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative flex items-center justify-center w-24 h-24 mb-8"
        >
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <motion.div
            className="absolute inset-0 rounded-full border-t border-emerald-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <span className="text-3xl font-light tracking-widest font-sans">
            PP
          </span>
        </motion.div>

        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-emerald-400"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        <div className="mt-4 text-xs tracking-widest text-white/40 uppercase font-mono">
          Initializing System
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
