'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F5EBFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7DBEF] text-[#49225B] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C6923C]" />
            <span>Patron Experiences</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#21152A] tracking-tight">
            Loved Across Generations
          </h2>

          <p className="mt-4 text-[#4A3B54] text-sm sm:text-base leading-relaxed">
            The heart of our establishment is the bond we share with our valued patrons.
          </p>
          <p className="text-[11px] text-[#6E3482] mt-1 font-medium">
            (Representative customer reviews from our showroom visitors)
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E7DBEF] shadow-sm hover:shadow-xl hover:border-[#DFB76C]/60 transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C6923C] text-[#C6923C]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#E7DBEF] group-hover:text-[#A56ABD]/40 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#4A3B54] leading-relaxed italic">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-[#E7DBEF]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-cinzel text-base font-bold text-[#21152A]">
                      {t.name}
                    </h3>
                    <p className="text-xs text-[#6E3482] mt-0.5">
                      {t.location}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E7DBEF] text-[#49225B] text-[10px] font-bold">
                    <CheckCircle2 className="w-3 h-3 text-[#C6923C]" />
                    <span>{t.tag}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

