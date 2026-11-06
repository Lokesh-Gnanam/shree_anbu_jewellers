export interface MetalRateData {
  gold24kPerGram: number;
  gold22kPerGram: number;
  gold18kPerGram: number;
  gold22kPerSovereign: number; // 8 grams (1 Pavan)
  gold24kPerSovereign: number; // 8 grams
  silverPerGram: number;
  silverPerKg: number;
  
  // Previous comparison
  previousGold24k: number;
  previousGold22k: number;
  previousSilverPerGram: number;
  
  goldTrend: 'up' | 'down' | 'stable';
  silverTrend: 'up' | 'down' | 'stable';
  goldChange: number;
  silverChange: number;

  lastUpdated: string; // ISO String
  displayDate: string; // Formatted date time in IST
  currency: 'INR';
  currencySymbol: '₹';
  source: string;
  isCached: boolean;
  domesticPremiumPercent: number;
  baseSpotGold24k: number; // pure international spot conversion
  baseSpotSilverPerGram: number;
}

interface CacheState {
  data: MetalRateData | null;
  fetchedAt: number;
}

const TROY_OUNCE_GRAMS = 31.1034768;
const CACHE_TTL_MS = 3 * 60 * 1000; // 3 minutes

// In-memory cache for serverless instance lifetime
let cacheState: CacheState = {
  data: null,
  fetchedAt: 0,
};

let previousRateSnapshot: { gold22k: number; gold24k: number; silverPerGram: number } | null = null;

function formatIST(date: Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(date);
}

export async function fetchLiveRates(forceRefresh = false): Promise<MetalRateData> {
  const now = Date.now();

  if (!forceRefresh && cacheState.data && (now - cacheState.fetchedAt < CACHE_TTL_MS)) {
    return {
      ...cacheState.data,
      isCached: true,
    };
  }

  const domesticPremiumPercent = Number(process.env.LOCAL_MARKET_PREMIUM_PERCENT || "6.0"); // Standard India customs duty & landing spread

  let rawGoldOunceINR = 0;
  let rawSilverOunceINR = 0;
  let sourceName = "Multi-Source Bullion Exchange";

  // Attempt 1: Custom GoldAPI key if provided by user/admin
  if (process.env.GOLD_API_KEY) {
    try {
      const res = await fetch('https://www.goldapi.io/api/XAU/INR', {
        headers: {
          'x-access-token': process.env.GOLD_API_KEY,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 180 },
      });
      if (res.ok) {
        const d = await res.json();
        if (d.price_gram_24k) {
          rawGoldOunceINR = d.price_gram_24k * TROY_OUNCE_GRAMS;
          sourceName = "GoldAPI Real-time Spot";
        }
      }
    } catch {
      // Continue to next provider
    }
  }

  // Attempt 2: Live Yahoo Finance Precious Metals (COMEX futures / spot) + Frankfurter USD/INR
  if (!rawGoldOunceINR) {
    try {
      const [goldRes, silverRes, fxRes] = await Promise.all([
        fetch('https://query1.finance.yahoo.com/v8/finance/chart/GC=F', {
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
          next: { revalidate: 180 },
        }),
        fetch('https://query1.finance.yahoo.com/v8/finance/chart/SI=F', {
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
          next: { revalidate: 180 },
        }),
        fetch('https://api.frankfurter.app/latest?from=USD&to=INR', {
          next: { revalidate: 3600 },
        }),
      ]);

      if (goldRes.ok && fxRes.ok) {
        const goldData = await goldRes.json();
        const fxData = await fxRes.json();
        const goldPriceUSD = goldData.chart?.result?.[0]?.meta?.regularMarketPrice;
        const inrPerUsd = fxData.rates?.INR || 84.5;

        if (goldPriceUSD && inrPerUsd) {
          rawGoldOunceINR = goldPriceUSD * inrPerUsd;
          sourceName = "COMEX Bullion Spot & Global FX";
        }

        if (silverRes.ok) {
          const silverData = await silverRes.json();
          const silverPriceUSD = silverData.chart?.result?.[0]?.meta?.regularMarketPrice;
          if (silverPriceUSD) {
            rawSilverOunceINR = silverPriceUSD * inrPerUsd;
          }
        }
      }
    } catch {
      // Fallback to currency-api
    }
  }

  // Attempt 3: Fawaz Ahmed Open Currency Feed (XAU/INR, XAG/INR)
  if (!rawGoldOunceINR) {
    try {
      const [xauRes, xagRes] = await Promise.all([
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/xau.json', {
          next: { revalidate: 300 },
        }),
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/xag.json', {
          next: { revalidate: 300 },
        }),
      ]);

      if (xauRes.ok) {
        const xauJson = await xauRes.json();
        if (xauJson.xau?.inr) {
          rawGoldOunceINR = xauJson.xau.inr;
          sourceName = "Open Currency Bullion Rates";
        }
      }
      if (xagRes.ok) {
        const xagJson = await xagRes.json();
        if (xagJson.xag?.inr) {
          rawSilverOunceINR = xagJson.xag.inr;
        }
      }
    } catch {
      // Continue to check if cached data exists
    }
  }

  // If completely unable to fetch fresh data and we have previous cached data
  if (!rawGoldOunceINR && cacheState.data) {
    return {
      ...cacheState.data,
      isCached: true,
      source: `${cacheState.data.source} (Offline Fallback)`,
    };
  }

  // Safety baseline if first run and network totally blocked
  if (!rawGoldOunceINR) {
    // Current Indian market representative baseline
    rawGoldOunceINR = 245000;
    rawSilverOunceINR = 3050;
    sourceName = "Indicative Market Benchmark";
  }

  if (!rawSilverOunceINR) {
    rawSilverOunceINR = rawGoldOunceINR / 78; // Approx gold-silver ratio
  }

  // Pure spot per gram without taxes/duty
  const baseSpotGold24k = rawGoldOunceINR / TROY_OUNCE_GRAMS;
  const baseSpotSilverPerGram = rawSilverOunceINR / TROY_OUNCE_GRAMS;

  // Indian Domestic Indicative Rates (incorporating base duty & landing cost)
  const multiplier = 1 + (domesticPremiumPercent / 100);
  const gold24kPerGram = Math.round(baseSpotGold24k * multiplier);
  const gold22kPerGram = Math.round(gold24kPerGram * (22 / 24)); // 91.67%
  const gold18kPerGram = Math.round(gold24kPerGram * (18 / 24)); // 75.0%

  const gold22kPerSovereign = gold22kPerGram * 8;
  const gold24kPerSovereign = gold24kPerGram * 8;

  const silverPerGram = Math.round(baseSpotSilverPerGram * multiplier * 10) / 10;
  const silverPerKg = Math.round(silverPerGram * 1000);

  // Calculate trends comparing with previous known rates
  let goldTrend: 'up' | 'down' | 'stable' = 'stable';
  let silverTrend: 'up' | 'down' | 'stable' = 'stable';
  let goldChange = 0;
  let silverChange = 0;

  if (previousRateSnapshot) {
    goldChange = gold22kPerGram - previousRateSnapshot.gold22k;
    silverChange = silverPerGram - previousRateSnapshot.silverPerGram;

    if (goldChange > 0) goldTrend = 'up';
    else if (goldChange < 0) goldTrend = 'down';

    if (silverChange > 0) silverTrend = 'up';
    else if (silverChange < 0) silverTrend = 'down';
  } else {
    // Initialize previous snapshot
    previousRateSnapshot = {
      gold22k: gold22kPerGram,
      gold24k: gold24kPerGram,
      silverPerGram,
    };
  }

  const currentDate = new Date();

  const result: MetalRateData = {
    gold24kPerGram,
    gold22kPerGram,
    gold18kPerGram,
    gold22kPerSovereign,
    gold24kPerSovereign,
    silverPerGram,
    silverPerKg,
    
    previousGold24k: previousRateSnapshot.gold24k,
    previousGold22k: previousRateSnapshot.gold22k,
    previousSilverPerGram: previousRateSnapshot.silverPerGram,

    goldTrend,
    silverTrend,
    goldChange,
    silverChange,

    lastUpdated: currentDate.toISOString(),
    displayDate: formatIST(currentDate),
    currency: 'INR',
    currencySymbol: '₹',
    source: sourceName,
    isCached: false,
    domesticPremiumPercent,
    baseSpotGold24k: Math.round(baseSpotGold24k),
    baseSpotSilverPerGram: Math.round(baseSpotSilverPerGram * 10) / 10,
  };

  // Update previous snapshot for next cycle
  previousRateSnapshot = {
    gold22k: gold22kPerGram,
    gold24k: gold24kPerGram,
    silverPerGram,
  };

  cacheState = {
    data: result,
    fetchedAt: now,
  };

  return result;
}

