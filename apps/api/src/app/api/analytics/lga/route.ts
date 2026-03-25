import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse } from '@/lib/utils';

async function handler(req: NextRequest) {
  try {
    // Get LGA stats from the view
    const { data: lgaStats, error } = await supabaseAdmin
      .from('voter_stats_by_lga')
      .select('*');

    if (error) {
      console.error('LGA stats error:', error);
      return errorResponse('Failed to fetch LGA stats');
    }

    // Get target voters per LGA
    const { data: locations } = await supabaseAdmin
      .from('locations')
      .select('name, target_voters')
      .eq('type', 'lga');

    const locationTargets = new Map();
    locations?.forEach(loc => {
      locationTargets.set(loc.name, loc.target_voters);
    });

    const formattedStats = lgaStats?.map(lga => {
      const target = locationTargets.get(lga.lga) || 10000;
      const contacted = lga.contacted_count || 0;
      const total = lga.total_voters || 1;

      return {
        lga: lga.lga,
        contacted,
        target,
        sentiment: Math.round((lga.positive_count / total) * 100) || 0,
        conversion: Math.round((contacted / total) * 100),
      };
    }) || [];

    return successResponse(formattedStats);
  } catch (error) {
    console.error('LGA stats error:', error);
    return errorResponse('Failed to fetch LGA stats');
  }
}

export const GET = withAuth(handler);
