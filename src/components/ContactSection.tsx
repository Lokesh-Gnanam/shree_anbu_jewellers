'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle2, Sparkles, Navigation } from 'lucide-react';
import { SHOP_CONFIG } from '@/lib/constants';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Jewellery Enquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const directWhatsAppUrl = `https://wa.me/${SHOP_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello Sree Anbu Jewellers & Finance Shop, I am contacting you through your website.${
      formData.name ? ` My name is ${formData.name}.` : ''
    } Subject: ${formData.subject}.${formData.message ? ` Message: ${formData.message}` : ''}`
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F5EBFA] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6E3482]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7DBEF] text-[#49225B] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C6923C]" />
            <span>Connect With Our Showroom</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#21152A] tracking-tight">
            Visit Sree Anbu Jewellers &amp; Finance Shop
          </h2>

          <p className="mt-4 text-[#4A3B54] text-sm sm:text-base leading-relaxed">
            We look forward to welcoming you to our showroom for personalized jewellery selections, live bullion quotes, and trusted gold loan services.
          </p>
        </div>

        {/* Contact Grid: Info + Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Cards & Quick Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Showroom Contact Card */}
            <div className="p-7 rounded-3xl bg-white border border-[#E7DBEF] shadow-sm space-y-6">
              <h3 className="font-cinzel text-2xl font-bold text-[#49225B]">
                {SHOP_CONFIG.name}
              </h3>

              <div className="space-y-5 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#49225B] text-[#DFB76C] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#21152A]">Showroom Address</p>
                    <p className="text-xs text-[#4A3B54] mt-1 leading-relaxed">
                      {SHOP_CONFIG.address.line1}<br />
                      {SHOP_CONFIG.address.city} — {SHOP_CONFIG.address.pincode}<br />
                      {SHOP_CONFIG.address.country}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#49225B] text-[#DFB76C] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#21152A]">Direct Showroom Line</p>
                    <a
                      href={`tel:${SHOP_CONFIG.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-xs text-[#6E3482] font-semibold hover:underline block mt-1"
                    >
                      {SHOP_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#21152A]">Official WhatsApp</p>
                    <a
                      href={SHOP_CONFIG.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#25D366] font-semibold hover:underline block mt-1"
                    >
                      {SHOP_CONFIG.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#49225B] text-[#DFB76C] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#21152A]">Showroom Timings</p>
                    <p className="text-xs text-[#4A3B54] mt-1 leading-relaxed">
                      {SHOP_CONFIG.businessHours.weekdays}<br />
                      {SHOP_CONFIG.businessHours.sunday}
                    </p>
                    <p className="text-[11px] text-[#A56ABD] font-medium mt-1">
                      {SHOP_CONFIG.businessHours.note}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons as required */}
              <div className="pt-4 border-t border-[#E7DBEF] grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <a
                  href="#map-section"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#E7DBEF] text-[#49225B] font-semibold text-xs hover:bg-[#A56ABD] hover:text-white transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${SHOP_CONFIG.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#49225B] text-white font-semibold text-xs hover:bg-[#6E3482] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={SHOP_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] text-white font-semibold text-xs hover:brightness-110 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Maps Location Preview Frame */}
            <div id="map-section" className="rounded-3xl overflow-hidden border border-[#E7DBEF] shadow-sm bg-white">
              <div className="p-4 bg-[#F5EBFA] border-b border-[#E7DBEF] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#49225B] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C6923C]" />
                  <span>Showroom Location Map</span>
                </span>
                <span className="text-[11px] text-[#4A3B54]">Tamil Nadu, India</span>
              </div>
              <div className="relative aspect-[16/9] w-full bg-slate-100">
                <iframe
                  title="Sree Anbu Jewellers Location"
                  src={SHOP_CONFIG.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[20%]"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl p-7 sm:p-10 bg-white border border-[#E7DBEF] shadow-lg"
          >
            <div className="pb-6 border-b border-[#E7DBEF] mb-6">
              <h3 className="font-cinzel text-2xl font-bold text-[#49225B]">
                Send an Online Message
              </h3>
              <p className="text-xs sm:text-sm text-[#4A3B54] mt-1">
                Fill out the form below or connect instantly with our team via WhatsApp.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-cinzel text-2xl font-bold text-[#49225B]">
                  Message Sent Successfully
                </h4>
                <p className="text-sm text-[#4A3B54] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Sree Anbu Jewellers &amp; Finance Shop. Our representative will contact you shortly.
                </p>
                <div className="pt-2">
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-xs shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Also Send to WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#49225B] mb-1.5 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Meena Sundaram"
                      className="w-full px-4 py-3 rounded-xl border border-[#E7DBEF] bg-[#F5EBFA]/30 text-[#21152A] text-sm focus:outline-none focus:border-[#49225B] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#49225B] mb-1.5 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-[#E7DBEF] bg-[#F5EBFA]/30 text-[#21152A] text-sm focus:outline-none focus:border-[#49225B] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#49225B] mb-1.5 uppercase tracking-wider">
                    Purpose of Enquiry
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E7DBEF] bg-[#F5EBFA]/30 text-[#21152A] text-sm focus:outline-none focus:border-[#49225B] focus:bg-white transition-all"
                  >
                    <option value="Jewellery Enquiry">Bridal &amp; Gold Jewellery Collection</option>
                    <option value="Today's Gold Rate Booking">Today&apos;s Live Gold Rate &amp; Coin Booking</option>
                    <option value="Gold Loan Assistance">Gold Loan Financial Services</option>
                    <option value="Custom Design Order">Bespoke / Custom Goldsmith Order</option>
                    <option value="Other Assistance">Other General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#49225B] mb-1.5 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you are looking for (e.g. 22K bridal necklace designs, gold coin investment, loan terms)..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E7DBEF] bg-[#F5EBFA]/30 text-[#21152A] text-sm focus:outline-none focus:border-[#49225B] focus:bg-white transition-all"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 py-3.5 px-7 rounded-xl bg-gradient-to-r from-[#49225B] to-[#6E3482] text-white font-bold text-sm tracking-wide shadow-md hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#DFB76C]" />
                    <span>Send Message</span>
                  </button>

                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3.5 px-6 rounded-xl border border-[#25D366]/50 bg-white text-[#21152A] font-semibold text-xs sm:text-sm hover:bg-[#25D366]/10 flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Direct WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

