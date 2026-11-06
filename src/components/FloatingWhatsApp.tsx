'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { SHOP_CONFIG } from '@/lib/constants';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Mini Greeting Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-3 p-3.5 rounded-2xl bg-white shadow-2xl border border-[#DFB76C]/40 text-[#21152A] max-w-xs relative text-xs"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 p-1 text-[#4A3B54] hover:text-[#21152A]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-1.5 font-bold text-[#49225B] mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#C6923C]" />
              <span>Sree Anbu Helpdesk</span>
            </div>
            <p className="text-[#4A3B54] leading-relaxed">
              Have questions about today&apos;s gold rate, bridal sets, or gold loan? Chat directly with our jewellers.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <a
        href={SHOP_CONFIG.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Chat on WhatsApp"
        className="relative group p-3.5 sm:p-4 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center"
      >
        {/* Pulsing Aura */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        
        {/* Online Indicator Badge */}
        <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-emerald-300 border-2 border-white" />
      </a>
    </div>
  );
}

