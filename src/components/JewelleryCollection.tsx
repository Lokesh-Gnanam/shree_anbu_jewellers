'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageCircle, ArrowRight, Eye, ShieldCheck, X } from 'lucide-react';
import { JEWELLERY_CATEGORIES, SHOP_CONFIG } from '@/lib/constants';

interface JewelleryCollectionProps {
  selectedCategoryProp?: string | null;
}

export default function JewelleryCollection({ selectedCategoryProp }: JewelleryCollectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [previewItem, setPreviewItem] = useState<typeof JEWELLERY_CATEGORIES[0] | null>(null);

  const filteredCategories = activeFilter === 'all'
    ? JEWELLERY_CATEGORIES
    : JEWELLERY_CATEGORIES.filter((c) => c.id === activeFilter);

  return (
    <section id="collection" className="py-20 lg:py-28 bg-[#F5EBFA] relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#6E3482]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7DBEF] text-[#49225B] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C6923C]" />
            <span>Curated Artisanal Collections</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#21152A] tracking-tight">
            The Sree Anbu Collection
          </h2>

          <p className="mt-4 text-[#4A3B54] text-sm sm:text-base leading-relaxed">
            Every creation is hand-finished by master goldsmiths, certified with 100% BIS 916 hallmarking, and designed to celebrate life&apos;s most cherished milestones.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#49225B] text-white shadow-md'
                  : 'bg-white text-[#4A3B54] border border-[#E7DBEF] hover:bg-[#E7DBEF]'
              }`}
            >
              All Categories ({JEWELLERY_CATEGORIES.length})
            </button>
            {JEWELLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeFilter === cat.id
                    ? 'bg-[#49225B] text-white shadow-md'
                    : 'bg-white text-[#4A3B54] border border-[#E7DBEF] hover:bg-[#E7DBEF]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#E7DBEF] shadow-sm hover:shadow-xl hover:border-[#DFB76C]/60 transition-all duration-500 flex flex-col"
            >
              {/* Category Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E7DBEF]/40">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Subtle Gradient Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#21152A]/80 via-transparent to-black/20" />

                {/* Badge Top Left */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/90 text-[#49225B] backdrop-blur-md shadow-sm">
                    {cat.badge}
                  </span>
                </div>

                {/* Quick Action Overlay Buttons */}
                <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setPreviewItem(cat)}
                    aria-label="Quick View"
                    className="p-2 rounded-full bg-white/90 text-[#49225B] hover:bg-[#49225B] hover:text-white transition-colors shadow-md backdrop-blur-md"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Bottom Overlay Title */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <h3 className="font-cinzel text-xl font-bold tracking-wide drop-shadow-sm">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#E7DBEF]/90 line-clamp-1 mt-0.5">
                    {cat.subtitle}
                  </p>
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="p-5 flex flex-col justify-between flex-grow bg-white">
                <p className="text-xs text-[#4A3B54] line-clamp-2 leading-relaxed mb-4">
                  {cat.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-[#E7DBEF] mt-auto">
                  <button
                    onClick={() => setPreviewItem(cat)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#49225B] hover:text-[#6E3482] transition-colors group/link"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C6923C] group-hover/link:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={`https://wa.me/${SHOP_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      `Hello Sree Anbu Jewellers, I would like to enquire about your ${cat.title} collection.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-[#25D366] hover:bg-[#25D366]/10 transition-colors"
                    title="Enquire on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Order Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#49225B] via-[#6E3482] to-[#49225B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#DFB76C]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-2 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#DFB76C] text-xs font-bold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Bespoke Goldsmithing</span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold">
              Looking for a Custom Weight or Design?
            </h3>
            <p className="text-sm text-[#E7DBEF]/85 max-w-xl">
              From traditional antique temple motifs to sleek modern daily-wear gold, our in-house master artisans custom craft ornaments precisely to your requirements.
            </p>
          </div>

          <a
            href={SHOP_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#ECC875] via-[#DFB76C] to-[#C6923C] text-[#21152A] font-bold text-sm tracking-wide shadow-md hover:brightness-105 active:scale-95 transition-all shrink-0 relative z-10"
          >
            <MessageCircle className="w-4 h-4 text-[#21152A]" />
            <span>Consult Master Jeweller</span>
          </a>
        </motion.div>

      </div>

      {/* Category Quick Preview Modal */}
      <AnimatePresence>
        {previewItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewItem(null)}
              className="fixed inset-0 bg-[#21152A]/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E7DBEF] z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Image Column */}
              <div className="relative md:w-1/2 aspect-square md:aspect-auto">
                <Image
                  src={previewItem.image}
                  alt={previewItem.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#49225B] text-white">
                    {previewItem.badge}
                  </span>
                </div>
              </div>

              {/* Details Column */}
              <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-between overflow-y-auto">
                <div>
                  <button
                    onClick={() => setPreviewItem(null)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#E7DBEF] text-[#49225B] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <h3 className="font-cinzel text-2xl font-bold text-[#49225B] pr-6">
                    {previewItem.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#C6923C] uppercase tracking-wider mt-1">
                    {previewItem.subtitle}
                  </p>

                  <p className="text-sm text-[#4A3B54] mt-4 leading-relaxed">
                    {previewItem.description}
                  </p>

                  {/* Trust Highlights */}
                  <div className="mt-6 space-y-2 text-xs text-[#21152A] bg-[#F5EBFA] p-4 rounded-2xl border border-[#E7DBEF]">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#C6923C]" />
                      <span>100% BIS 916 Hallmarked Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#C6923C]" />
                      <span>Custom order weights and purity available</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E7DBEF] space-y-2.5">
                  <a
                    href={`https://wa.me/${SHOP_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      `Hello Sree Anbu Jewellers, I would like to enquire about your ${previewItem.title} collection and visit your showroom.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#49225B] to-[#6E3482] text-white font-medium text-sm shadow-md hover:brightness-110 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-[#DFB76C]" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setPreviewItem(null)}
                    className="w-full py-2.5 rounded-xl border border-[#E7DBEF] text-xs font-semibold text-[#4A3B54] hover:bg-[#E7DBEF] transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

