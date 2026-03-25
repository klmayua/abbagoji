import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse } from '@/lib/utils';

async function handler(req: NextRequest) {
  try {
    const { count: total } = await supabaseAdmin
      .from('team_members')
      .select('*', { count: 'exact', head: true });

    const { count: active } = await supabaseAdmin
      .from('team_members')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'active');

    const { data: lgas } = await supabaseAdmin
      .from('team_members')
      .select('lga')
      .not('lga', 'is', null);

    const uniqueLgas = new Set(lgas?.map(t => t.lga) || []);

    return successResponse({
      total: total || 0,
      active: active || 0,
      lgas: uniqueLgas.size,
    });
  } catch (error) {
    console.error('Team stats error:', error);
    return errorResponse('Failed to fetch team stats');
  }
}

export const GET = withAuth(handler);
