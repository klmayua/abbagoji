import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { successResponse, errorResponse, getPaginationParams } from '@/lib/utils';

// Public endpoint - no auth required
async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const { page, perPage, offset } = getPaginationParams(searchParams);

    let query = supabaseAdmin
      .from('news')
      .select('*', { count: 'exact' })
      .eq('is_published', true);

    // Category filter
    const category = searchParams.get('category');
    if (category) {
      query = query.eq('category', category);
    }

    const { data: articles, error, count } = await query
      .order('published_at', { ascending: false })
      .range(offset, offset + perPage - 1);

    if (error) {
      console.error('News error:', error);
      return errorResponse('Failed to fetch news');
    }

    return successResponse({
      articles,
      total: count || 0,
      page,
      perPage,
    });
  } catch (error) {
    console.error('News error:', error);
    return errorResponse('Failed to fetch news');
  }
}

export const GET = handler;
