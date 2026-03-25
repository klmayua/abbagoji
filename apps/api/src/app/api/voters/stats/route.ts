import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse } from '@/lib/utils';

async function handler(req: NextRequest) {
  try {
    // Get total voters
    const { count: total, error: totalError } = await supabaseAdmin
      .from('voters')
      .select('*', { count: 'exact', head: true });

    // Get contacted voters
    const { count: contacted, error: contactedError } = await supabaseAdmin
      .from('voters')
      .select('*', { count: 'exact', head: true })
      .eq('contacted', true);

    // Get high priority voters
    const { count: highPriority, error: priorityError } = await supabaseAdmin
      .from('voters')
      .select('*', { count: 'exact', head: true })
      .eq('priority', 'high');

    if (totalError || contactedError || priorityError) {
      console.error('Stats query error:', totalError || contactedError || priorityError);
      return errorResponse('Failed to fetch stats');
    }

    return successResponse({
      total: total || 0,
      contacted: contacted || 0,
      highPriority: highPriority || 0,
      conversionRate: total ? Math.round(((contacted || 0) / total) * 100) : 0,
    });
  } catch (error) {
    console.error('Stats error:', error);
    return errorResponse('Failed to fetch stats');
  }
}

export const GET = withAuth(handler);
