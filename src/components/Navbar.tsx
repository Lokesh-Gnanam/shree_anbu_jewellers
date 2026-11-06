'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MessageCircle, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { SHOP_CONFIG } from '@/lib/constants';
import SearchModal from './SearchModal';

interface NavbarProps {
  onSearchOpen?: () => void;
}

export default function Navbar({ onSearchOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Jewellery', href: '#collection' },
    { label: 'Gold Rate', href: '#live-rates' },
    { label: 'Gold Loan', href: '#gold-loan' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'glass-nav-scrolled py-2.5 sm:py-3 shadow-md'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo on Left */}
            <Link
              href="#home"
              className="group flex items-center transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="relative h-11 sm:h-13 w-44 sm:w-56 drop-shadow-[0_2px_8px_rgba(198,146,60,0.35)]">
                <Image
                  src="/images/logo/navbar-logo.png"
                  alt="Sree Anbu Jewellers & Finance Shop"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-[13.5px] tracking-wide font-medium text-[#21152A] hover:text-[#49225B] transition-colors py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#DFB76C] to-[#8F641E] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Icon Button */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search collection"
                className="p-2 sm:p-2.5 rounded-full text-[#49225B] hover:bg-[#E7DBEF]/80 transition-colors relative"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* WhatsApp Contact Button */}
              <a
                href={SHOP_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#DFB76C]/60 text-xs font-semibold text-[#49225B] hover:bg-[#E7DBEF]/60 hover:border-[#C6923C] transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span className="hidden md:inline">WhatsApp</span>
              </a>

              {/* Primary CTA: Explore Collection */}
              <a
                href="#collection"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#49225B] to-[#6E3482] text-white text-xs sm:text-sm font-medium tracking-wide shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all group"
              >
                <span>Explore Collection</span>
                <Sparkles className="w-3.5 h-3.5 text-[#DFB76C] group-hover:rotate-12 transition-transform" />
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2 rounded-xl text-[#49225B] hover:bg-[#E7DBEF]/80 transition-colors lg:hidden"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#21152A]/50 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-[#F5EBFA] z-50 p-6 flex flex-col justify-between shadow-2xl border-l border-[#E7DBEF] lg:hidden"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E7DBEF]">
                  <div className="relative h-10 w-40">
                    <Image
                      src="/images/logo/navbar-logo.png"
                      alt="Sree Anbu Jewellers & Finance Shop"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-[#E7DBEF] text-[#49225B]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Links */}
                <nav className="mt-6 space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium text-[#21152A] hover:bg-[#E7DBEF] hover:text-[#49225B] transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#A56ABD]" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-6 border-t border-[#E7DBEF] space-y-3">
                <a
                  href="#collection"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#49225B] to-[#6E3482] text-white font-medium text-sm shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-[#DFB76C]" />
                  <span>Explore Collection</span>
                </a>

                <a
                  href={SHOP_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#25D366]/40 bg-white text-[#21152A] font-medium text-sm hover:bg-[#25D366]/10 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Enquiries</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}

