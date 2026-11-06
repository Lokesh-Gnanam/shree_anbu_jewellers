'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  RotateCw,
  TrendingUp,
  TrendingDown,
  Minus,
  Sparkles,
  Info,
  Clock,
  ShieldCheck,
  Calculator,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { MetalRateData } from '@/lib/rateService';

export default function LiveRatesSection() {
  const [rates, setRates] = useState<MetalRateData | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastRefreshedAt, setLastRefreshedAt] = useState<string>('');

  // Interactive Calculator State
  const [calcWeight, setCalcWeight] = useState<number>(8); // Default 1 Sovereign / 8 grams
  const [calcPurity, setCalcPurity] = useState<'22k' | '24k' | '18k' | 'silver'>('22k');
  const [includeGST, setIncludeGST] = useState<boolean>(true);

  const fetchRates = useCallback(async (isManualRefresh = false) => {
    if (isManualRefresh) setRefreshing(true);
    setError(null);

    try {
      const url = isManualRefresh ? '/api/rates?refresh=true' : '/api/rates';
      const res = await fetch(url);
      const json = await res.json();

      if (json.success && json.data) {
        setRates(json.data);
        setLastRefreshedAt(json.data.displayDate);
      } else {
        throw new Error(json.error || 'Failed to fetch rates');
      }
    } catch (err: any) {
      console.error('Rates fetch error:', err);
      setError('Live rate connection delayed. Showing last verified benchmark rates.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // Initial load and periodic 5-minute auto-refresh
  useEffect(() => {
    fetchRates();
    const interval = setInterval(() => {
      fetchRates();
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, [fetchRates]);

  // Rate Cards configuration
  const goldCards = [
    {
      title: '24K Pure Gold',
      purity: '99.9% Fine Bullion',
      perGram: rates?.gold24kPerGram,
      perSovereign: rates?.gold24kPerSovereign,
      subtitle: 'Primary Standard / Assayed Bars',
      badge: '999 Pure',
      trend: rates?.goldTrend,
      change: rates?.goldChange,
    },
    {
      title: '22K Jewellery Gold',
      purity: '91.6% BIS Hallmarked (916)',
      perGram: rates?.gold22kPerGram,
      perSovereign: rates?.gold22kPerSovereign,
      subtitle: 'Official Traditional Ornaments Standard',
      badge: '916 Standard',
      popular: true,
      trend: rates?.goldTrend,
      change: rates?.goldChange ? Math.round(rates.goldChange * (22 / 24)) : 0,
    },
    {
      title: '18K Premium Gold',
      purity: '75.0% Fine Alloy',
      perGram: rates?.gold18kPerGram,
      perSovereign: rates?.gold18kPerGram ? rates.gold18kPerGram * 8 : undefined,
      subtitle: 'Contemporary Lightweight & Gemstone',
      badge: '750 Gold',
      trend: rates?.goldTrend,
      change: rates?.goldChange ? Math.round(rates.goldChange * (18 / 24)) : 0,
    },
  ];

  const silverCards = [
    {
      title: 'Silver — Per Gram',
      purity: '99.9% Pure Silver',
      rate: rates?.silverPerGram,
      unit: 'Per Gram (1g)',
      trend: rates?.silverTrend,
      change: rates?.silverChange,
    },
    {
      title: 'Silver — Per Kilogram',
      purity: 'Commercial Bullion Bar',
      rate: rates?.silverPerKg,
      unit: 'Per Kilogram (1000g)',
      trend: rates?.silverTrend,
      change: rates?.silverChange ? rates.silverChange * 1000 : 0,
    },
  ];

  // Calculate estimated total for calculator
  const calculateEstimate = () => {
    if (!rates) return 0;
    let baseRatePerGram = 0;
    if (calcPurity === '24k') baseRatePerGram = rates.gold24kPerGram;
    else if (calcPurity === '22k') baseRatePerGram = rates.gold22kPerGram;
    else if (calcPurity === '18k') baseRatePerGram = rates.gold18kPerGram;
    else if (calcPurity === 'silver') baseRatePerGram = rates.silverPerGram;

    const baseVal = (calcWeight || 0) * baseRatePerGram;
    if (includeGST) {
      return Math.round(baseVal * 1.03); // 3% statutory GST
    }
    return Math.round(baseVal);
  };

  return (
    <section id="live-rates" className="py-20 lg:py-28 bg-[#F5EBFA] relative overflow-hidden">
      {/* Decorative Background Lighting */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#6E3482]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7DBEF] text-[#49225B] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C6923C]" />
            <span>Real-Time Bullion Exchange</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#21152A] tracking-tight">
            Today&apos;s Live Gold &amp; Silver Rates
          </h2>

          <p className="mt-4 text-[#4A3B54] text-sm sm:text-base leading-relaxed">
            Transparent, benchmarked precious metal rates converted to Indian Rupees (₹ INR). Updated directly from trusted market exchanges.
          </p>

          {/* Timestamp & Refresh Controls */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#4A3B54]">
            <div className="flex items-center gap-1.5 bg-white/80 px-3.5 py-1.5 rounded-full border border-[#E7DBEF] shadow-sm">
              <Clock className="w-3.5 h-3.5 text-[#6E3482]" />
              <span>Last Updated:</span>
              <strong className="text-[#21152A]">
                {rates?.displayDate || lastRefreshedAt || 'Connecting to exchange...'}
              </strong>
            </div>

            {rates?.isCached && (
              <span className="bg-[#E7DBEF] text-[#49225B] px-2.5 py-1 rounded-full font-medium">
                Verified Benchmark
              </span>
            )}

            <button
              onClick={() => fetchRates(true)}
              disabled={refreshing || loading}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#49225B] text-white hover:bg-[#6E3482] transition-colors shadow-sm disabled:opacity-60"
            >
              <RotateCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
              <span>{refreshing ? 'Refreshing...' : 'Refresh Rates'}</span>
            </button>
          </div>

          {error && (
            <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-amber-700 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{error}</span>
            </div>
          )}
        </div>

        {/* Gold Rates Cards Grid */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-6 rounded-lg bg-[#C6923C]/20 flex items-center justify-center text-[#8F641E]">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#49225B]">
              Gold Rates (₹ INR)
            </h3>
            <span className="text-xs text-[#6E3482] hidden sm:inline ml-auto font-medium">
              1 Sovereign = 8 Grams (1 Pavan)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {goldCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl ${
                  card.popular
                    ? 'bg-gradient-to-br from-[#49225B] via-[#572569] to-[#3A1849] text-white shadow-purple-elevated border-2 border-[#DFB76C]/60 scale-[1.02]'
                    : 'bg-white/90 text-[#21152A] border border-[#E7DBEF] hover:border-[#DFB76C]/50 shadow-sm'
                }`}
              >
                {/* Popular Pill */}
                {card.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#DFB76C] to-[#C6923C] text-[#21152A] text-xs font-bold tracking-wider uppercase shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#21152A]" />
                    <span>Most Popular For Jewellery</span>
                  </div>
                )}

                {/* Card Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      card.popular ? 'bg-white/20 text-[#F3E196]' : 'bg-[#E7DBEF] text-[#49225B]'
                    }`}>
                      {card.badge}
                    </span>
                    <h4 className={`font-cinzel text-xl sm:text-2xl font-bold mt-2 ${card.popular ? 'text-white' : 'text-[#21152A]'}`}>
                      {card.title}
                    </h4>
                    <p className={`text-xs mt-0.5 ${card.popular ? 'text-[#E7DBEF]/80' : 'text-[#4A3B54]'}`}>
                      {card.purity}
                    </p>
                  </div>

                  {/* Trend Indicator */}
                  <div className={`p-2 rounded-xl flex items-center gap-1 text-xs font-semibold ${
                    card.trend === 'up'
                      ? 'text-emerald-500 bg-emerald-500/10'
                      : card.trend === 'down'
                      ? 'text-rose-500 bg-rose-500/10'
                      : 'text-amber-500 bg-amber-500/10'
                  }`}>
                    {card.trend === 'up' && <TrendingUp className="w-3.5 h-3.5" />}
                    {card.trend === 'down' && <TrendingDown className="w-3.5 h-3.5" />}
                    {card.trend === 'stable' && <Minus className="w-3.5 h-3.5" />}
                    <span>{card.change && card.change !== 0 ? `₹${Math.abs(card.change)}` : 'Live'}</span>
                  </div>
                </div>

                {/* Primary Price: Per Gram */}
                <div className="my-6 pt-4 border-t border-current/10">
                  <span className={`text-xs uppercase tracking-wider block font-medium ${card.popular ? 'text-[#E7DBEF]/70' : 'text-[#4A3B54]'}`}>
                    Rate Per Gram (1g)
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className={`text-3xl sm:text-4xl font-bold tracking-tight ${card.popular ? 'text-white' : 'text-[#49225B]'}`}>
                      {loading ? (
                        <span className="animate-pulse">Fetching...</span>
                      ) : card.perGram ? (
                        `₹${card.perGram.toLocaleString('en-IN')}`
                      ) : (
                        '—'
                      )}
                    </span>
                    <span className={`text-xs font-medium ${card.popular ? 'text-[#E7DBEF]/70' : 'text-[#4A3B54]'}`}>
                      / gram
                    </span>
                  </div>
                </div>

                {/* Secondary Price: 8 Grams (1 Sovereign) */}
                <div className={`p-3.5 rounded-2xl flex items-center justify-between text-xs ${
                  card.popular ? 'bg-white/10' : 'bg-[#F5EBFA]'
                }`}>
                  <span className={card.popular ? 'text-[#E7DBEF]' : 'text-[#4A3B54]'}>
                    1 Sovereign (8g Pavan)
                  </span>
                  <span className={`font-bold text-sm ${card.popular ? 'text-[#F3E196]' : 'text-[#21152A]'}`}>
                    {loading ? (
                      '...'
                    ) : card.perSovereign ? (
                      `₹${card.perSovereign.toLocaleString('en-IN')}`
                    ) : (
                      '—'
                    )}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Silver Rates Cards Grid */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-6 rounded-lg bg-slate-200 flex items-center justify-center text-slate-700">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#49225B]">
              Silver Rates (₹ INR)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {silverCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl p-6 bg-white/90 border border-[#E7DBEF] hover:border-[#DFB76C]/50 shadow-sm transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-cinzel text-xl font-bold text-[#21152A]">
                      {card.title}
                    </h4>
                    <p className="text-xs text-[#4A3B54] mt-0.5">{card.purity}</p>
                  </div>
                  <div className={`p-2 rounded-xl flex items-center gap-1 text-xs font-semibold ${
                    card.trend === 'up'
                      ? 'text-emerald-500 bg-emerald-500/10'
                      : card.trend === 'down'
                      ? 'text-rose-500 bg-rose-500/10'
                      : 'text-amber-500 bg-amber-500/10'
                  }`}>
                    {card.trend === 'up' && <TrendingUp className="w-3.5 h-3.5" />}
                    {card.trend === 'down' && <TrendingDown className="w-3.5 h-3.5" />}
                    {card.trend === 'stable' && <Minus className="w-3.5 h-3.5" />}
                    <span>{card.change && card.change !== 0 ? `₹${Math.abs(card.change)}` : 'Live'}</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E7DBEF] flex items-baseline justify-between">
                  <span className="text-xs text-[#4A3B54] uppercase tracking-wider font-medium">
                    {card.unit}
                  </span>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-bold text-[#49225B]">
                      {loading ? (
                        <span className="animate-pulse">Loading...</span>
                      ) : card.rate ? (
                        `₹${card.rate.toLocaleString('en-IN')}`
                      ) : (
                        '—'
                      )}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Gold Valuation Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#E7DBEF]/80 via-white to-[#F0E7F5] border border-[#DFB76C]/40 shadow-md mb-12"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#E7DBEF]">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#49225B] text-[#DFB76C] flex items-center justify-center shrink-0 shadow-sm">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-cinzel text-lg sm:text-xl font-bold text-[#49225B]">
                  Instant Gold Rate Value Calculator
                </h4>
                <p className="text-xs sm:text-sm text-[#4A3B54]">
                  Estimate bullion value based on today&apos;s indicative market prices.
                </p>
              </div>
            </div>

            {/* GST Checkbox */}
            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-[#49225B] bg-white px-3 py-1.5 rounded-full border border-[#E7DBEF] shadow-sm select-none">
              <input
                type="checkbox"
                checked={includeGST}
                onChange={(e) => setIncludeGST(e.target.checked)}
                className="w-4 h-4 rounded text-[#49225B] focus:ring-[#6E3482]"
              />
              <span>Include Statutory 3% GST</span>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            {/* Input Weight */}
            <div>
              <label className="block text-xs font-semibold text-[#49225B] mb-2 uppercase tracking-wider">
                Weight in Grams
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="0.1"
                  step="0.5"
                  value={calcWeight}
                  onChange={(e) => setCalcWeight(Math.max(0, parseFloat(e.target.value) || 0))}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E7DBEF] bg-white text-[#21152A] font-bold text-base focus:outline-none focus:border-[#49225B]"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#6E3482]">
                  {calcWeight === 8 ? '8g (1 Sovereign)' : 'Grams'}
                </span>
              </div>
              <div className="flex gap-2 mt-2">
                {[1, 4, 8, 16, 24].map((g) => (
                  <button
                    key={g}
                    onClick={() => setCalcWeight(g)}
                    className={`text-[11px] px-2 py-0.5 rounded-md font-medium border transition-colors ${
                      calcWeight === g
                        ? 'bg-[#49225B] text-white border-[#49225B]'
                        : 'bg-white text-[#4A3B54] border-[#E7DBEF] hover:bg-[#E7DBEF]'
                    }`}
                  >
                    {g}g
                  </button>
                ))}
              </div>
            </div>

            {/* Select Purity */}
            <div>
              <label className="block text-xs font-semibold text-[#49225B] mb-2 uppercase tracking-wider">
                Select Metal / Purity
              </label>
              <select
                value={calcPurity}
                onChange={(e) => setCalcPurity(e.target.value as any)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#E7DBEF] bg-white text-[#21152A] font-bold text-base focus:outline-none focus:border-[#49225B]"
              >
                <option value="22k">22K Gold (916 Hallmarked Jewellery)</option>
                <option value="24k">24K Pure Gold (999 Assayed Bullion)</option>
                <option value="18k">18K Gold (750 Alloy)</option>
                <option value="silver">Pure Silver</option>
              </select>
              <p className="text-[11px] text-[#4A3B54] mt-2">
                {calcPurity === '22k'
                  ? 'Standard South Indian wedding jewellery hallmark'
                  : calcPurity === '24k'
                  ? 'Pure gold bars and investment coins'
                  : calcPurity === '18k'
                  ? 'Lightweight fashion jewellery'
                  : 'Pure silver bullion'}
              </p>
            </div>

            {/* Estimated Value Output */}
            <div className="bg-[#49225B] rounded-2xl p-4 text-white flex flex-col justify-center">
              <span className="text-[11px] text-[#DFB76C] font-semibold uppercase tracking-wider">
                Estimated Indicative Value
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  ₹{calculateEstimate().toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-[#E7DBEF]/80 font-normal">
                  {includeGST ? '(incl. 3% GST)' : '(excl. GST)'}
                </span>
              </div>
              <p className="text-[10px] text-[#E7DBEF]/70 mt-1">
                *Making charges (VA) and stone weights applied at actuals in shop.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Business Accuracy & Clear Disclaimers */}
        <div className="p-5 rounded-2xl bg-white/70 border border-[#E7DBEF] text-xs text-[#4A3B54] leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-semibold text-[#49225B]">
            <Info className="w-4 h-4 text-[#C6923C] shrink-0" />
            <span className="uppercase tracking-wider">Indicative Market Rate &amp; Shop Policy Notice</span>
          </div>
          <p>
            1. <strong>Indicative Benchmark:</strong> Rates displayed are derived from global and national bullion exchange data converted to ₹ INR. International spot prices are not identical to final local jewellery retail rates.
          </p>
          <p>
            2. <strong>Shop-Confirmed Rates:</strong> Final purchase invoices in our showroom reflect official local bullion market rates, exact certified piece weights, hallmark verification, applicable craftsman making charges (VA), and 3% statutory GST as mandated by Government of India regulations.
          </p>
          <p>
            3. For real-time showroom confirmations or bulk gold coin bookings, please call our desk or connect with our master jewelers on WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
}

