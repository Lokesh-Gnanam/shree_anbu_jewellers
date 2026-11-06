'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, MapPin, Phone, MessageCircle, Mail, ArrowUp, Award } from 'lucide-react';
import { SHOP_CONFIG, JEWELLERY_CATEGORIES } from '@/lib/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Jewellery Collection', href: '#collection' },
    { label: "Today's Gold Rate", href: '#live-rates' },
    { label: 'Gold Loan Assistance', href: '#gold-loan' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Contact Showroom', href: '#contact' },
  ];

  return (
    <footer className="bg-[#49225B] text-white relative overflow-hidden border-t border-[#DFB76C]/30 pt-16 pb-12">
      {/* Decorative ambient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-gradient-to-b from-[#DFB76C]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative h-12 sm:h-14 w-48 sm:w-60 drop-shadow-[0_0_15px_rgba(223,183,108,0.45)]">
              <Image
                src="/images/logo/navbar-logo.png"
                alt="Sree Anbu Jewellers & Finance Shop"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-xs text-[#E7DBEF]/80 leading-relaxed max-w-sm pt-2">
              A heritage of uncompromising purity and trusted gold financial services. Every creation embodies timeless South Indian artistry and 100% BIS 916 hallmarked excellence.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <div className="px-3 py-1 rounded-full bg-white/10 border border-[#DFB76C]/40 text-[#DFB76C] text-[11px] font-semibold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>{SHOP_CONFIG.hallmarkTag}</span>
              </div>
            </div>
          </div>

          {/* Quick Links (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-cinzel text-sm font-bold tracking-wider text-[#DFB76C] uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#E7DBEF]/80 hover:text-[#DFB76C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Jewellery Categories (Cols 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold tracking-wider text-[#DFB76C] uppercase">
              Collections
            </h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs">
              {JEWELLERY_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#collection"
                    className="text-[#E7DBEF]/80 hover:text-[#DFB76C] transition-colors"
                  >
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold tracking-wider text-[#DFB76C] uppercase">
              Showroom
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E7DBEF]/85">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DFB76C] shrink-0 mt-0.5" />
                <span>
                  {SHOP_CONFIG.address.line1}, {SHOP_CONFIG.address.city}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DFB76C] shrink-0" />
                <a
                  href={`tel:${SHOP_CONFIG.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {SHOP_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={SHOP_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  {SHOP_CONFIG.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DFB76C] shrink-0" />
                <span>{SHOP_CONFIG.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Disclaimers & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E7DBEF]/70">
          <p>
            &copy; {new Date().getFullYear()} {SHOP_CONFIG.name}. All Rights Reserved.
          </p>

          <p className="text-center sm:text-right">
            100% Certified 916 BIS Hallmarked Jewellery &bull; Trusted Gold Loan Support
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-full bg-white/10 hover:bg-[#DFB76C] hover:text-[#49225B] text-white transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

