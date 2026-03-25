import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse } from '@/lib/utils';

async function getHandler(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const { data: member, error } = await supabaseAdmin
      .from('team_members')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !member) {
      return errorResponse('Team member not found', 404);
    }

    // Get recent interactions by this member
    const { data: recentInteractions } = await supabaseAdmin
      .from('interactions')
      .select('id, type, outcome, created_at, voter:voter_id(name)')
      .eq('agent_id', id)
      .order('created_at', { ascending: false })
      .limit(10);

    return successResponse({
      ...member,
      recentInteractions: recentInteractions || [],
    });
  } catch (error) {
    console.error('Get team member error:', error);
    return errorResponse('Failed to fetch team member');
  }
}

async function patchHandler(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await req.json();

    const { data: member, error } = await supabaseAdmin
      .from('team_members')
      .update({
        ...body,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return errorResponse('Failed to update team member', 400);
    }

    return successResponse(member, 'Team member updated successfully');
  } catch (error) {
    console.error('Update team member error:', error);
    return errorResponse('Failed to update team member');
  }
}

async function deleteHandler(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const { error } = await supabaseAdmin
      .from('team_members')
      .delete()
      .eq('id', id);

    if (error) {
      return errorResponse('Failed to delete team member', 400);
    }

    return successResponse(null, 'Team member deleted successfully');
  } catch (error) {
    console.error('Delete team member error:', error);
    return errorResponse('Failed to delete team member');
  }
}

export const GET = withAuth(getHandler);
export const PATCH = withAuth(patchHandler);
export const DELETE = withAuth(deleteHandler);
