import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse } from '@/lib/utils';

async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get('limit') || '10');

    const { data: interactions, error } = await supabaseAdmin
      .from('interactions')
      .select(`
        *,
        voter:voter_id (name),
        agent:agent_id (name)
      `)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Recent interactions error:', error);
      return errorResponse('Failed to fetch recent interactions');
    }

    return successResponse(interactions);
  } catch (error) {
    console.error('Recent interactions error:', error);
    return errorResponse('Failed to fetch recent interactions');
  }
}

export const GET = withAuth(handler);
