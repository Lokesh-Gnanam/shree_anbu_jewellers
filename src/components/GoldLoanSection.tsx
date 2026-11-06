'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Clock, HeartHandshake, MessageCircle, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { SHOP_CONFIG } from '@/lib/constants';

export default function GoldLoanSection() {
  const [ornamentType, setOrnamentType] = useState('Traditional Gold Ornaments');
  const [approxGrams, setApproxGrams] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const benefits = [
    {
      title: 'Transparent On-Spot Appraisal',
      description: 'Your precious gold is weighed and purity-tested directly in front of you with certified precision.',
      icon: ShieldCheck,
    },
    {
      title: 'High-Security Vault Custody',
      description: 'Stored in reinforced, insured bank-grade safes with complete protection and seal verification.',
      icon: Lock,
    },
    {
      title: 'Dignified & Confidential',
      description: 'We treat every customer with utmost discretion, respect, and cordial family-like care.',
      icon: HeartHandshake,
    },
    {
      title: 'Swift Disbursement Assistance',
      description: 'Minimal documentation with clear, straightforward procedures right at our showroom.',
      icon: Clock,
    },
  ];

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Sree Anbu Finance, I would like to enquire about Gold Loan assistance.${
      customerName ? ` My name is ${customerName}.` : ''
    }${approxGrams ? ` Approximate gold weight: ${approxGrams} grams.` : ''} Category: ${ornamentType}. Please share current details.`
  );

  return (
    <section id="gold-loan" className="py-20 lg:py-28 bg-[#49225B] text-white relative overflow-hidden">
      {/* Decorative Golden Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#6E3482]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#DFB76C_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#DFB76C]/30 text-[#DFB76C] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trusted Gold Finance</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Your Gold. Your Trust.{' '}
            <span className="gold-text-gradient block sm:inline">
              Financial Support When You Need It.
            </span>
          </h2>

          <p className="mt-4 text-[#E7DBEF]/85 text-sm sm:text-base leading-relaxed">
            Unlock the genuine value of your gold ornaments with safe, confidential, and customer-first gold loan assistance at Sree Anbu Jewellers &amp; Finance Shop.
          </p>
        </div>

        {/* Content Grid: Benefits & Interactive Enquiry Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 4 Key Service Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#DFB76C]/40 backdrop-blur-sm transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-[#DFB76C]/20 border border-[#DFB76C]/40 flex items-center justify-center text-[#F3E196] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-cinzel text-lg font-bold text-white mb-2">
                      {b.title}
                    </h3>
                    <p className="text-xs text-[#E7DBEF]/80 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Direct Assistance Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-white/10 to-transparent border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-xs text-[#DFB76C] font-semibold uppercase tracking-wider">
                  Speak Directly With Our Loan Officer
                </p>
                <p className="text-sm font-semibold text-white mt-0.5">
                  Visit our showroom with your gold ornaments &amp; valid government ID
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={`tel:${SHOP_CONFIG.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#49225B] font-bold text-xs hover:bg-[#E7DBEF] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Desk</span>
                </a>
                <a
                  href={`https://wa.me/${SHOP_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs hover:brightness-110 transition-all shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Gold Loan Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white/10 to-white/5 border border-[#DFB76C]/40 backdrop-blur-md shadow-2xl"
          >
            <div className="flex items-center gap-2.5 pb-4 border-b border-white/10 mb-6">
              <span className="w-8 h-8 rounded-xl bg-[#DFB76C]/20 border border-[#DFB76C]/40 flex items-center justify-center text-[#DFB76C]">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <h3 className="font-cinzel text-xl font-bold text-white">
                  Gold Loan Enquiry
                </h3>
                <p className="text-xs text-[#E7DBEF]/80">
                  Instant confidential consultation
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-cinzel text-xl font-bold text-white">
                  Enquiry Received
                </h4>
                <p className="text-xs text-[#E7DBEF]/85 leading-relaxed">
                  Thank you, {customerName || 'valued customer'}. Our gold loan officer will contact you promptly. For fastest response, you can also connect directly on WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${SHOP_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-xs tracking-wide shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleEnquiry} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#E7DBEF] mb-1.5 uppercase tracking-wider">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#DFB76C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#E7DBEF] mb-1.5 uppercase tracking-wider">
                    Gold Ornament Category
                  </label>
                  <select
                    value={ornamentType}
                    onChange={(e) => setOrnamentType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#3A1849] border border-white/20 text-white text-sm focus:outline-none focus:border-[#DFB76C]"
                  >
                    <option value="Traditional Gold Ornaments">Traditional Gold Ornaments (Necklace, Haaram)</option>
                    <option value="Bangles and Kadas">Bangles, Valayal &amp; Kadas</option>
                    <option value="Gold Chains & Rings">Gold Chains, Rings &amp; Studs</option>
                    <option value="24K Assayed Coins">24K Assayed Gold Coins / Bullion</option>
                    <option value="Mixed Family Ornaments">Mixed Family Ornaments</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#E7DBEF] mb-1.5 uppercase tracking-wider">
                    Approximate Weight in Grams (Optional)
                  </label>
                  <input
                    type="number"
                    value={approxGrams}
                    onChange={(e) => setApproxGrams(e.target.value)}
                    placeholder="e.g. 16, 24, 40 grams"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#DFB76C]"
                  />
                </div>

                <div className="pt-2 space-y-2.5">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ECC875] via-[#DFB76C] to-[#C6923C] text-[#21152A] font-bold text-sm tracking-wide shadow-lg hover:brightness-105 active:scale-[0.99] transition-all"
                  >
                    Submit Loan Enquiry
                  </button>

                  <a
                    href={`https://wa.me/${SHOP_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/10 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Instant WhatsApp Enquiry</span>
                  </a>
                </div>
              </form>
            )}

            {/* Disclaimer */}
            <p className="mt-6 text-[10px] text-[#E7DBEF]/65 leading-relaxed border-t border-white/10 pt-4">
              *Disclaimer: Gold loan evaluation and terms depend on physical purity verification, net weight calculation (excluding stones), and prevailing regulatory lending guidelines. We do not provide advance commitments without physical examination.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

