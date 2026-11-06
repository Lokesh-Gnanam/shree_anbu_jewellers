'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Award, HeartHandshake, Coins, Sparkles, CheckCircle2 } from 'lucide-react';
import { SHOP_CONFIG } from '@/lib/constants';

export default function WhyChooseUsSection() {
  const pillars = [
    {
      title: 'Trusted Gold Services',
      description: 'Generations of goodwill built on uncompromised integrity, accurate digital gold testing, and ethical business conduct.',
      icon: ShieldCheck,
      badge: 'Unwavering Trust',
    },
    {
      title: 'Transparent Pricing',
      description: 'Clear, honest rate calculations with zero hidden fees. Exact weights, daily market rates, and fair making charges disclosed openly.',
      icon: Scale,
      badge: 'Zero Hidden Charges',
    },
    {
      title: 'Quality Jewellery',
      description: '100% BIS 916 certified hallmarked gold crafted with superior tensile strength, pristine finish, and authentic HUID laser engraving.',
      icon: Award,
      badge: '100% BIS 916',
    },
    {
      title: 'Customer-Focused Service',
      description: 'Warm, familial customer hospitality, personalized design consultations, and attentive after-purchase care and polishing.',
      icon: HeartHandshake,
      badge: 'Personalized Care',
    },
    {
      title: 'Reliable Gold Loan Assistance',
      description: 'Fast, secure, and confidential financial support with insured vault storage and transparent purity appraisal.',
      icon: Coins,
      badge: 'Confidential Finance',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#F5EBFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7DBEF] text-[#49225B] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C6923C]" />
            <span>The Sree Anbu Difference</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#21152A] tracking-tight">
            Why Discerning Families Choose Us
          </h2>

          <p className="mt-4 text-[#4A3B54] text-sm sm:text-base leading-relaxed">
            Jewellery is an investment of emotion, culture, and wealth. Here is why our patrons place their absolute trust in Sree Anbu Jewellers &amp; Finance Shop.
          </p>
        </div>

        {/* 5 Pillars Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`p-7 rounded-3xl bg-white/90 border border-[#E7DBEF] hover:border-[#DFB76C]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#49225B] to-[#6E3482] text-[#DFB76C] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E7DBEF] text-[#49225B]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-xl font-bold text-[#21152A] group-hover:text-[#49225B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A3B54] mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#E7DBEF] flex items-center gap-1.5 text-xs text-[#6E3482] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C6923C]" />
                  <span>Verified Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

