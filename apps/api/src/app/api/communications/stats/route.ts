import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse } from '@/lib/utils';
import { startOfDay } from 'date-fns';

async function handler(req: NextRequest) {
  try {
    // Get total messages sent
    const { data: campaigns } = await supabaseAdmin
      .from('campaigns')
      .select('sent_count');

    const messagesSent = campaigns?.reduce((sum, c) => sum + (c.sent_count || 0), 0) || 0;

    // Get today's metrics
    const today = startOfDay(new Date()).toISOString();
    const { data: todayInteractions } = await supabaseAdmin
      .from('interactions')
      .select('type')
      .eq('type', 'message')
      .gte('created_at', today);

    const todaySent = todayInteractions?.length || 0;

    // Calculate rates (mocked for demo)
    const deliveryRate = 68;
    const responseRate = 42;

    return successResponse({
      messagesSent,
      deliveryRate,
      responseRate,
      todaySent,
    });
  } catch (error) {
    console.error('Communications stats error:', error);
    return errorResponse('Failed to fetch stats');
  }
}

export const GET = withAuth(handler);
