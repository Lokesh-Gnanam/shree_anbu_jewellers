import { NextResponse } from 'next/server';
import { fetchLiveRates } from '@/lib/rateService';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const forceRefresh = searchParams.get('refresh') === 'true';

    const rates = await fetchLiveRates(forceRefresh);

    return NextResponse.json(
      {
        success: true,
        data: rates,
        disclaimer: "Indicative domestic market benchmark based on prevailing bullion exchange rates. Does not constitute an official shop commitment or purchase invoice. Final retail rate varies based on exact jewellery purity, hallmarking, applicable making charges (VA), and 3% statutory GST.",
      },
      {
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    );
  } catch (error: any) {
    console.error('Error fetching live metal rates:', error);
    return NextResponse.json(
      {
        success: false,
        error: "Unable to retrieve real-time rates at this moment. Showing latest recorded rates.",
      },
      { status: 500 }
    );
  }
}

