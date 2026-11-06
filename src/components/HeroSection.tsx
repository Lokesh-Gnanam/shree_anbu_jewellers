'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, TrendingUp, ShieldCheck, Award, Heart } from 'lucide-react';
import { SHOP_CONFIG } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 lg:py-36 overflow-hidden flex items-center bg-[#F5EBFA]">
      {/* Background Ambience & Decorative Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-br from-[#E7DBEF] via-[#F0E7F5] to-transparent rounded-full blur-3xl -z-10 pointer-events-none opacity-80" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#A56ABD]/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#DFB76C]/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Subtle Geometric Luxury Border Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-[#A56ABD]/10 rounded-full pointer-events-none -z-10 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left z-10"
          >
            {/* Top Micro-Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#DFB76C]/40 shadow-sm backdrop-blur-sm"
            >
              <Award className="w-3.5 h-3.5 text-[#C6923C]" />
              <span className="text-xs font-semibold tracking-wider text-[#49225B] uppercase">
                {SHOP_CONFIG.hallmarkTag}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6923C] animate-ping" />
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#21152A] leading-[1.12]">
              Elegance That{' '}
              <span className="relative inline-block">
                <span className="gold-text-gradient font-bold drop-shadow-sm">
                  Lasts Forever.
                </span>
                {/* Subtle gold artistic curve */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#DFB76C]/60"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0 Q50,12 100,0" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="font-sans text-base sm:text-lg text-[#4A3B54] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {SHOP_CONFIG.subTagline}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#collection"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#49225B] via-[#6E3482] to-[#49225B] text-white font-medium text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl hover:brightness-110 active:scale-[0.98] transition-all group"
              >
                <span>Explore Jewellery</span>
                <Sparkles className="w-4 h-4 text-[#DFB76C] group-hover:rotate-45 transition-transform" />
              </a>

              <a
                href="#live-rates"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white/90 border border-[#C6923C]/50 text-[#49225B] font-semibold text-sm sm:text-base tracking-wide hover:bg-[#E7DBEF]/60 hover:border-[#8F641E] shadow-sm hover:shadow transition-all group"
              >
                <TrendingUp className="w-4 h-4 text-[#C6923C]" />
                <span>Check Today&apos;s Gold Rate</span>
                <ArrowRight className="w-4 h-4 text-[#6E3482] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Metrics Pill Bar */}
            <div className="pt-6 border-t border-[#E7DBEF] grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#49225B]">916</span>
                <span className="text-[11px] sm:text-xs text-[#4A3B54]">HUID Hallmarked</span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-x border-[#E7DBEF] px-2">
                <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#49225B]">100%</span>
                <span className="text-[11px] sm:text-xs text-[#4A3B54]">Assayed Purity</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#49225B]">Generations</span>
                <span className="text-[11px] sm:text-xs text-[#4A3B54]">Of Family Trust</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Jewellery Visual Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Visual Frame */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <Image
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85"
                alt="Sree Anbu Masterpiece Gold Jewellery"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Vignette Overlay for Luxury Finish */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#49225B]/75 via-transparent to-black/10" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-purple text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] tracking-widest uppercase font-semibold text-[#DFB76C]">
                      Craftsmanship Spotlight
                    </p>
                    <p className="font-cinzel text-base font-semibold mt-0.5">
                      Royal Heritage Choker
                    </p>
                    <p className="text-[11px] text-[#E7DBEF]/80">
                      22K Traditional Nakshi Ornaments
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#DFB76C]/20 border border-[#DFB76C]/40 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-[#DFB76C]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Live Rate Notification Tag */}
            <motion.a
              href="#live-rates"
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -top-4 -left-4 sm:-left-8 p-3 rounded-2xl glass-card shadow-xl border border-[#DFB76C]/40 flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#49225B] to-[#6E3482] flex items-center justify-center text-[#DFB76C] shadow-sm">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6E3482]">
                    Live Rate Board
                  </span>
                </div>
                <p className="text-xs font-bold text-[#21152A]">
                  22K & 24K Bullion Tracker
                </p>
              </div>
            </motion.a>

            {/* Floating Hallmark Guarantee Tag */}
            <motion.div
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -bottom-4 -right-4 sm:-right-6 p-3 rounded-2xl glass-card shadow-xl border border-[#DFB76C]/40 flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-xl bg-[#DFB76C]/20 border border-[#DFB76C]/50 flex items-center justify-center text-[#8F641E]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-[#49225B]">BIS Certified</p>
                <p className="text-[10px] text-[#4A3B54]">Government Hallmarked</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

