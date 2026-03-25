import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse } from '@/lib/utils';

async function handler(req: NextRequest) {
  try {
    const { data: lgas, error } = await supabaseAdmin
      .from('locations')
      .select('*')
      .eq('type', 'lga')
      .order('name');

    if (error) {
      console.error('LGAs error:', error);
      return errorResponse('Failed to fetch LGAs');
    }

    // Get voter counts for each LGA
    const { data: voterCounts } = await supabaseAdmin
      .from('voters')
      .select('lga, count')
      .group('lga');

    const formattedLgas = lgas?.map(lga => ({
      ...lga,
      voter_count: voterCounts?.find(v => v.lga === lga.name)?.count || 0,
    }));

    return successResponse(formattedLgas || []);
  } catch (error) {
    console.error('LGAs error:', error);
    return errorResponse('Failed to fetch LGAs');
  }
}

export const GET = withAuth(handler);
