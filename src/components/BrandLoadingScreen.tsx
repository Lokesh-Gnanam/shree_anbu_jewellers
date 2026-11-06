'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface BrandLoadingScreenProps {
  onComplete?: () => void;
}

export default function BrandLoadingScreen({ onComplete }: BrandLoadingScreenProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock body scroll during brand loader presentation
    document.body.style.overflow = 'hidden';

    // Show smooth branded loading sequence on page load/refresh
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'unset';
      if (onComplete) onComplete();
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="brand-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F5EBFA] overflow-hidden select-none"
        >
          {/* Subtle Ambient Golden & Lavender Light Radiance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.7, 0.5], scale: [0.6, 1.3, 1.1] }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-r from-[#DFB76C]/25 via-[#E7DBEF]/60 to-transparent blur-3xl pointer-events-none"
          />

          {/* Luxury Concentric Rings Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
            animate={{ opacity: 0.35, scale: 1, rotate: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute w-[340px] h-[340px] rounded-full border border-[#C6923C]/20 pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.25, scale: 1.08 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
            className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-[#A56ABD]/25 pointer-events-none"
          />

          {/* Center Emblem Container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Golden Emblem with Scale-Up and Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-28 h-28 sm:w-36 sm:h-36 drop-shadow-[0_4px_25px_rgba(198,146,60,0.35)]"
            >
              <Image
                src="/images/logo/emblem.png"
                alt="Sree Anbu Emblem"
                fill
                priority
                className="object-contain"
              />
              {/* Subtle Pulsing Golden Glow Layer */}
              <motion.div
                animate={{ opacity: [0.2, 0.6, 0.3] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-[#DFB76C]/15 blur-xl -z-10"
              />
            </motion.div>

            {/* The Only Text Image at Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
              className="relative w-64 sm:w-80 h-20 sm:h-24 mt-4 drop-shadow-[0_2px_15px_rgba(198,146,60,0.25)]"
            >
              <Image
                src="/images/logo/brand-text.png"
                alt="Sree Anbu Jewellers & Finance Shop"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* Subtle Progress Shimmer Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "160px", opacity: 0.85 }}
              transition={{ duration: 1.4, delay: 0.7, ease: "easeInOut" }}
              className="h-[2px] mt-8 bg-gradient-to-r from-transparent via-[#C6923C] to-transparent rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

