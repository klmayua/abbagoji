import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse } from '@/lib/utils';

async function handler(req: NextRequest) {
  try {
    const { data: campaigns, error } = await supabaseAdmin
      .from('campaigns')
      .select(`
        *,
        creator:created_by (name)
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Campaigns error:', error);
      return errorResponse('Failed to fetch campaigns');
    }

    return successResponse(campaigns);
  } catch (error) {
    console.error('Campaigns error:', error);
    return errorResponse('Failed to fetch campaigns');
  }
}

async function createHandler(req: NextRequest) {
  try {
    const body = await req.json();
    const userId = (req as any).user.userId;

    const { data: campaign, error } = await supabaseAdmin
      .from('campaigns')
      .insert({
        ...body,
        created_by: userId,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Create campaign error:', error);
      return errorResponse('Failed to create campaign', 400);
    }

    return successResponse(campaign, 'Campaign created successfully');
  } catch (error) {
    console.error('Create campaign error:', error);
    return errorResponse('Failed to create campaign');
  }
}

export const GET = withAuth(handler);
export const POST = withAuth(createHandler);
