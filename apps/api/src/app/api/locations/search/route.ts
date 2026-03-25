import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse } from '@/lib/utils';

async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q');

    if (!query) {
      return successResponse([]);
    }

    const { data: locations, error } = await supabaseAdmin
      .from('locations')
      .select('*')
      .or(`name.ilike.%${query}%,code.ilike.%${query}%`)
      .order('name')
      .limit(20);

    if (error) {
      console.error('Search error:', error);
      return errorResponse('Failed to search locations');
    }

    return successResponse(locations || []);
  } catch (error) {
    console.error('Search error:', error);
    return errorResponse('Failed to search locations');
  }
}

export const GET = withAuth(handler);
