import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LiveRatesSection from '@/components/LiveRatesSection';
import JewelleryCollection from '@/components/JewelleryCollection';
import AboutUsSection from '@/components/AboutUsSection';
import GoldLoanSection from '@/components/GoldLoanSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5EBFA] text-[#21152A] overflow-x-hidden selection:bg-[#6E3482] selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Live Gold & Silver Rate System */}
      <LiveRatesSection />

      {/* Jewellery Collection Showcase */}
      <JewelleryCollection />

      {/* About Us & Artisanal Legacy */}
      <AboutUsSection />

      {/* Gold Loan Financial Services */}
      <GoldLoanSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Customer Testimonials & Experiences */}
      <TestimonialsSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Showroom Contact, Details & Location Map */}
      <ContactSection />

      {/* Royal Dark Purple Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Access */}
      <FloatingWhatsApp />
    </main>
  );
}

