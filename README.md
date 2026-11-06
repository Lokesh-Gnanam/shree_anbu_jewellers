# Sree Anbu Jewellers & Finance Shop — Premium Brand Website

A modern, luxury jewellery brand website and live bullion rate system built for **Sree Anbu Jewellers & Finance Shop**.

---

## 💎 Features & Architecture

### 1. Brand Identity & Design System
- **Signature Palette**:
  - Primary: `#49225B` (Royal Plum / Imperial Purple)
  - Secondary: `#6E3482` (Rich Amethyst)
  - Accent: `#A56ABD` (Soft Lilac Purple)
  - Light Surface: `#E7DBEF` (Silken Lavender Surface)
  - Background: `#F5EBFA` (Luxury Soft Lavender Canvas)
  - Metallic Gold: Sampled gradients from the official emblem (`#C6923C`, `#DFB76C`, `#ECC875`, `#8F641E`)
  - Dark Text: `#21152A`
- **Typography**: Editorial luxury typography with Google Fonts `Cinzel` for headings and `Plus Jakarta Sans` for body text.

### 2. Official Emblem, Favicon & Loading Experience
- Employs the official metallic golden swan / lotus monogram emblem (`sreeanbu_fav_icon.png` / `sreeanbu_nav_logo.png`) as favicon, navbar emblem, loading animation, and footer seal.
- **Branded Full-Screen Loading Screen**:
  - Full-screen `#49225B` background
  - Ambient golden light radiance & concentric orbital rings
  - Metallic golden emblem scale-up with soft pulsating backlight
  - Golden typography: "SREE ANBU" and "JEWELLERS & FINANCE SHOP"
  - Transitions into the website smoothly.

### 3. Responsive Navigation Bar
- Transparent initially, transitions on scroll to solid/light lavender glassmorphism.
- Quick navigation: Home, About Us, Jewellery, Gold Rate, Gold Loan, Contact.
- Interactive search overlay (`Cmd+K` / Search icon) to instantly search categories and services.
- Direct WhatsApp contact button and primary "Explore Collection" CTA.
- Mobile drawer with Framer Motion animations.

### 4. Live Gold & Silver Rate System (`/api/rates`)
- **Real-Time Bullion Prices**:
  - **24K Pure Gold** — Per Gram & 8 Grams (1 Sovereign)
  - **22K Hallmarked Gold (916)** — Per Gram & 8 Grams (1 Sovereign)
  - **18K Gold** — Per Gram
  - **Silver** — Per Gram & Per Kilogram (1000g)
- **Multi-Source Resilient Backend**:
  - Queries live COMEX precious metal quotes (`GC=F`, `SI=F`) and live currency exchange rates (`Frankfurter` / `Open Currency`).
  - Supports optional private `GOLD_API_KEY` (`goldapi.io`).
  - Server-side caching (3-minute TTL) with trend calculation (`up`, `down`, `stable`).
  - Automatic 5-minute periodic auto-refresh and manual refresh button.
  - Transparent "Indicative Market Rate" disclaimer.
  - Interactive Gold Rate Value Calculator (custom grams/sovereign input, purity selector, 3% GST toggle).

### 5. Jewellery Collection Showcase
- 8 Categories with high-resolution photography:
  1. Gold Necklaces
  2. Gold Chains
  3. Bangles
  4. Rings
  5. Earrings
  6. Bridal Jewellery
  7. Coins & Bullion
  8. Traditional Jewellery
- Interactive quick preview modal with direct WhatsApp enquiry buttons pre-filled with the category name.

### 6. Gold Loan Financial Services
- Customer-friendly, dignified financial assistance section.
- Highlights: On-spot certified testing, insured bank-grade vault storage, minimal documentation, confidential processing.
- Interactive loan enquiry form + instant WhatsApp enquiry button.

### 7. Core Trust Pillars & Customer Experience
- 5 Trust Pillars using Lucide React icons (`ShieldCheck`, `Scale`, `Award`, `HeartHandshake`, `Coins`).
- Verified patron testimonials.
- Comprehensive FAQ accordion addressing 916 hallmarking, gold loan procedures, and custom orders.
- Configurable showroom details, phone, WhatsApp, timings, and Google Maps embed.

---

## 🚀 Running the Project

```bash
# Start development server
npm run dev

# Build production bundle
npm run build

# Start production server
npm run start
```

Server is accessible at: `http://localhost:3000`
Live rates API endpoint: `http://localhost:3000/api/rates`

