'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Sparkles, ArrowRight, Coins, ShieldCheck, Phone } from 'lucide-react';
import { JEWELLERY_CATEGORIES, SHOP_CONFIG } from '@/lib/constants';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory?: (id: string) => void;
}

export default function SearchModal({ isOpen, onClose, onSelectCategory }: SearchModalProps) {
  const [query, setQuery] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredCategories = JEWELLERY_CATEGORIES.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    c.description.toLowerCase().includes(query.toLowerCase())
  );

  const quickLinks = [
    { label: "Today's Live Gold Rate", href: "#live-rates", icon: Coins },
    { label: "Gold Loan Assistance", href: "#gold-loan", icon: ShieldCheck },
    { label: "BIS 916 Hallmark Assurance", href: "#why-choose-us", icon: Sparkles },
    { label: "Contact & Store Location", href: "#contact", icon: Phone },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#21152A]/60 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E7DBEF] overflow-hidden z-10"
        >
          {/* Header Input */}
          <div className="relative flex items-center px-4 py-3.5 border-b border-[#E7DBEF]/80 bg-[#F5EBFA]/40">
            <Search className="w-5 h-5 text-[#6E3482] ml-2" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search jewellery (e.g. Necklaces, Bangles, Bridal, Coins, Gold Loan)..."
              className="w-full px-3 py-2 text-sm sm:text-base text-[#21152A] placeholder-[#4A3B54]/50 bg-transparent focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 rounded-full text-[#6E3482] hover:bg-[#E7DBEF] transition-colors mr-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#6E3482] hover:bg-[#E7DBEF] transition-colors ml-1"
            >
              <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-[#E7DBEF] text-[#49225B]">ESC</span>
            </button>
          </div>

          {/* Results Area */}
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
            {/* Quick Links */}
            {!query && (
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#6E3482]/80 px-2 mb-2">
                  Quick Navigation
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {quickLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={onClose}
                        className="flex items-center gap-3 p-3 rounded-xl bg-[#F5EBFA]/70 hover:bg-[#E7DBEF] text-[#21152A] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#49225B] text-[#DFB76C] flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium group-hover:text-[#49225B]">
                          {link.label}
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#A56ABD] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Categories */}
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#6E3482]/80 px-2 mb-2">
                {query ? 'Matching Collections' : 'Popular Categories'}
              </p>
              {filteredCategories.length > 0 ? (
                <div className="space-y-1.5">
                  {filteredCategories.map((cat) => (
                    <a
                      key={cat.id}
                      href={`#collection`}
                      onClick={() => {
                        if (onSelectCategory) onSelectCategory(cat.id);
                        onClose();
                      }}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F5EBFA] transition-colors group border border-transparent hover:border-[#E7DBEF]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden relative shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={cat.image}
                            alt={cat.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#21152A] group-hover:text-[#49225B]">
                            {cat.title}
                          </p>
                          <p className="text-xs text-[#4A3B54]/70">
                            {cat.subtitle}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-[#E7DBEF] text-[#49225B] font-medium">
                        {cat.badge}
                      </span>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-sm text-[#4A3B54]/80">No jewellery matching &ldquo;{query}&rdquo;</p>
                  <p className="text-xs text-[#4A3B54]/60 mt-1">
                    Try searching for &apos;Necklace&apos;, &apos;Gold Loan&apos;, or WhatsApp our showroom.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Footer Call to Action */}
          <div className="p-3 bg-[#F5EBFA] border-t border-[#E7DBEF] flex items-center justify-between text-xs text-[#4A3B54]">
            <span>Need immediate assistance?</span>
            <a
              href={SHOP_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#49225B] font-semibold hover:underline flex items-center gap-1"
            >
              WhatsApp Our Jeweller
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

