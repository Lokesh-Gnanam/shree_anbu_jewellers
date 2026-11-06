import type { Metadata, Viewport } from 'next';
import './globals.css';
import BrandLoadingScreen from '@/components/BrandLoadingScreen';

export const metadata: Metadata = {
  metadataBase: new URL('https://sreeanbujewellers.com'),
  title: 'Sree Anbu Jewellers & Finance Shop | Timeless Elegance & Trusted Gold Services',
  description: 'Experience premier 916 BIS Hallmarked gold jewellery, real-time live gold & silver rates, and trusted gold loan financial services at Sree Anbu Jewellers & Finance Shop.',
  keywords: [
    'Sree Anbu Jewellers',
    'Gold jewellery Tamil Nadu',
    'Live gold rate',
    '22K 916 Hallmark gold',
    'Gold loan finance',
    'Bridal jewellery',
    'Gold coin investment',
    'Traditional jewellery',
  ],
  authors: [{ name: 'Sree Anbu Jewellers & Finance Shop' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: 'Sree Anbu Jewellers & Finance Shop — Elegance That Lasts Forever',
    description: 'Discover timeless jewellery, trusted gold loan services, and live market rates with verified BIS 916 hallmark craftsmanship.',
    url: 'https://sreeanbujewellers.com',
    siteName: 'Sree Anbu Jewellers & Finance Shop',
    images: [
      {
        url: '/images/logo/full-logo.png',
        width: 1200,
        height: 630,
        alt: 'Sree Anbu Jewellers & Finance Shop',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#49225B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="bg-[#F5EBFA] text-[#21152A] antialiased selection:bg-[#6E3482] selection:text-white">
        <BrandLoadingScreen />
        {children}
      </body>
    </html>
  );
}
