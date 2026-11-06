'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, HeartHandshake, Eye, Award } from 'lucide-react';
import { SHOP_CONFIG } from '@/lib/constants';

export default function AboutUsSection() {
  const pillars = [
    {
      title: 'Artisanal Craftsmanship',
      description: 'Handcrafted by generational goldsmiths preserving ancient nakshi, temple, and bridal artistry.',
      icon: Sparkles,
    },
    {
      title: '100% Purity Certification',
      description: 'Strict adherence to BIS Hallmarking standards with HUID laser testing on every single ornament.',
      icon: ShieldCheck,
    },
    {
      title: 'Transparent Transactions',
      description: 'Complete digital weighing precision and clear breakdowns of purity, weight, and making charges.',
      icon: Eye,
    },
    {
      title: 'Generational Bonds',
      description: 'Serving families across wedding trousseaus, auspicious occasions, and reliable gold finance.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about-us" className="py-20 lg:py-28 bg-[#F5EBFA] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#E7DBEF] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Visual */}
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <Image
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80"
                alt="Master Goldsmith at Work"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#49225B]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#DFB76C]">
                  Artisanal Heritage
                </span>
                <p className="font-cinzel text-lg font-bold mt-1">
                  Master Goldsmiths Dedicated to Perfection
                </p>
              </div>
            </div>

            {/* Overlapping Badge Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 p-4 rounded-2xl glass-purple text-white shadow-xl max-w-xs border border-[#DFB76C]/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DFB76C]/20 border border-[#DFB76C]/40 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#DFB76C]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#F3E196]">Sree Anbu Quality Mark</p>
                  <p className="text-[11px] text-[#E7DBEF]/80">Zero Compromise on Gold Fineness</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story & Principles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7DBEF] text-[#49225B] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C6923C]" />
              <span>Our Heritage &amp; Philosophy</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#21152A] tracking-tight leading-[1.15]">
              A Tradition of Trust.{' '}
              <span className="gold-text-gradient block sm:inline">
                A Legacy of Elegance.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#4A3B54] leading-relaxed">
              At Sree Anbu Jewellers &amp; Finance Shop, we believe jewellery represents more than beauty. It represents memories, relationships and lasting value. We are committed to providing trusted gold services and a welcoming customer experience.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="p-5 rounded-2xl bg-white/80 border border-[#E7DBEF] shadow-sm hover:border-[#DFB76C]/60 hover:shadow-md transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#49225B] text-[#DFB76C] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-cinzel text-base font-bold text-[#21152A] group-hover:text-[#49225B] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#4A3B54] mt-1.5 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Direct Connect CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#collection"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#49225B] to-[#6E3482] text-white font-medium text-xs sm:text-sm shadow-md hover:brightness-110 transition-all"
              >
                <span>View Our Collections</span>
                <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
              </a>

              <a
                href={SHOP_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#DFB76C]/60 text-[#49225B] font-semibold text-xs sm:text-sm hover:bg-[#E7DBEF]/60 transition-all"
              >
                <span>Speak to Showroom Team</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

