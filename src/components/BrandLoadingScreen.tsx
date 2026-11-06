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
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#49225B] overflow-hidden select-none"
        >
          {/* Subtle Ambient Golden Light Radiance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.65, 0.45], scale: [0.6, 1.3, 1.1] }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-r from-[#DFB76C]/30 via-[#ECC875]/25 to-transparent blur-3xl pointer-events-none"
          />

          {/* Luxury Concentric Rings Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
            animate={{ opacity: 0.25, scale: 1, rotate: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute w-[340px] h-[340px] rounded-full border border-[#DFB76C]/30 pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.15, scale: 1.08 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
            className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-[#ECC875]/25 pointer-events-none"
          />

          {/* Center Emblem Container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Golden Emblem with Scale-Up and Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-28 h-28 sm:w-36 sm:h-36 drop-shadow-[0_0_35px_rgba(223,183,108,0.55)]"
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
                animate={{ opacity: [0.3, 0.8, 0.4] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-[#DFB76C]/10 blur-xl -z-10"
              />
            </motion.div>

            {/* Typography Section */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              className="mt-6 text-center"
            >
              <h1 className="font-cinzel text-2xl sm:text-3xl tracking-[0.28em] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#F3E196] via-[#ECC875] to-[#DFB76C] drop-shadow-sm">
                SREE ANBU
              </h1>
              
              <div className="flex items-center justify-center gap-3 mt-2">
                <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#DFB76C]/60" />
                <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.35em] text-[#E7DBEF]/85 uppercase font-medium">
                  Jewellers & Finance Shop
                </p>
                <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#DFB76C]/60" />
              </div>
            </motion.div>

            {/* Subtle Progress Shimmer Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "160px", opacity: 0.8 }}
              transition={{ duration: 1.4, delay: 0.7, ease: "easeInOut" }}
              className="h-[2px] mt-8 bg-gradient-to-r from-transparent via-[#DFB76C] to-transparent rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

