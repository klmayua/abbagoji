import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse } from '@/lib/utils';
import { startOfDay } from 'date-fns';

async function handler(req: NextRequest) {
  try {
    // Get total voters
    const { count: totalVoters } = await supabaseAdmin
      .from('voters')
      .select('*', { count: 'exact', head: true });

    // Get contacted today
    const today = startOfDay(new Date()).toISOString();
    const { count: contactedToday } = await supabaseAdmin
      .from('interactions')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', today);

    // Get anchor citizens (high priority + positive sentiment)
    const { count: anchorCitizens } = await supabaseAdmin
      .from('voters')
      .select('*', { count: 'exact', head: true })
      .eq('priority', 'high')
      .eq('sentiment', 'positive');

    // Get overall sentiment
    const { data: sentiments } = await supabaseAdmin
      .from('voters')
      .select('sentiment')
      .not('sentiment', 'is', null);

    const total = sentiments?.length || 1;
    const positive = sentiments?.filter(s => s.sentiment === 'positive').length || 0;
    const sentiment = Math.round((positive / total) * 100);

    return successResponse({
      totalVoters: totalVoters || 0,
      contactedToday: contactedToday || 0,
      anchorCitizens: anchorCitizens || 0,
      sentiment,
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    return errorResponse('Failed to fetch dashboard data');
  }
}

export const GET = withAuth(handler);
