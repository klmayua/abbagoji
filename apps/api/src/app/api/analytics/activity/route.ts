import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse } from '@/lib/utils';
import { format, subDays } from 'date-fns';

async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const days = parseInt(searchParams.get('days') || '7');

    const { data: metrics, error } = await supabaseAdmin
      .from('daily_metrics')
      .select('*')
      .order('date', { ascending: false })
      .limit(days);

    if (error) {
      console.error('Activity error:', error);
      return errorResponse('Failed to fetch activity');
    }

    // Format data for chart
    const activityData = metrics?.map(m => ({
      day: format(new Date(m.date), 'EEE'),
      date: m.date,
      calls: m.calls || 0,
      visits: m.visits || 0,
      messages: m.messages || 0,
    })).reverse() || [];

    // Fill missing days with zeros
    const result = [];
    for (let i = days - 1; i >= 0; i--) {
      const date = subDays(new Date(), i);
      const formatted = format(date, 'EEE');
      const existing = activityData.find(a => a.day === formatted);

      if (existing) {
        result.push(existing);
      } else {
        result.push({
          day: formatted,
          date: format(date, 'yyyy-MM-dd'),
          calls: 0,
          visits: 0,
          messages: 0,
        });
      }
    }

    return successResponse(result);
  } catch (error) {
    console.error('Activity error:', error);
    return errorResponse('Failed to fetch activity');
  }
}

export const GET = withAuth(handler);
