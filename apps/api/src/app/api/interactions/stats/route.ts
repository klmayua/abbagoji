import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse } from '@/lib/utils';
import { startOfDay, endOfDay, subDays } from 'date-fns';

async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const period = searchParams.get('period') || 'today';

    let dateFrom: Date;
    const now = new Date();

    switch (period) {
      case 'today':
        dateFrom = startOfDay(now);
        break;
      case 'week':
        dateFrom = subDays(now, 7);
        break;
      case 'month':
        dateFrom = subDays(now, 30);
        break;
      default:
        dateFrom = startOfDay(now);
    }

    const { data: interactions, error } = await supabaseAdmin
      .from('interactions')
      .select('type, outcome')
      .gte('created_at', dateFrom.toISOString())
      .lte('created_at', now.toISOString());

    if (error) {
      console.error('Interaction stats error:', error);
      return errorResponse('Failed to fetch stats');
    }

    const stats = {
      calls: 0,
      visits: 0,
      messages: 0,
      positive: 0,
      neutral: 0,
      negative: 0,
      total: interactions?.length || 0,
    };

    interactions?.forEach(interaction => {
      if (interaction.type === 'phone') stats.calls++;
      if (interaction.type === 'visit') stats.visits++;
      if (interaction.type === 'message') stats.messages++;

      if (interaction.outcome === 'positive') stats.positive++;
      if (interaction.outcome === 'neutral') stats.neutral++;
      if (interaction.outcome === 'negative') stats.negative++;
    });

    const conversionRate = stats.total > 0
      ? Math.round((stats.positive / stats.total) * 100)
      : 0;

    return successResponse({
      ...stats,
      conversionRate,
    });
  } catch (error) {
    console.error('Interaction stats error:', error);
    return errorResponse('Failed to fetch stats');
  }
}

export const GET = withAuth(handler);
