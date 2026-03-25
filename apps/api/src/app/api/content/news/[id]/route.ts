import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { successResponse, errorResponse } from '@/lib/utils';

async function handler(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const { data: article, error } = await supabaseAdmin
      .from('news')
      .select('*')
      .eq('id', id)
      .eq('is_published', true)
      .single();

    if (error || !article) {
      return errorResponse('Article not found', 404);
    }

    return successResponse(article);
  } catch (error) {
    console.error('News detail error:', error);
    return errorResponse('Failed to fetch article');
  }
}

export const GET = handler;
