import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse } from '@/lib/utils';

async function getHandler(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const { data: voter, error } = await supabaseAdmin
      .from('voters')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !voter) {
      return errorResponse('Voter not found', 404);
    }

    // Get interaction history
    const { data: interactions } = await supabaseAdmin
      .from('interactions')
      .select(`
        id,
        type,
        outcome,
        notes,
        created_at,
        agent:agent_id (name)
      `)
      .eq('voter_id', id)
      .order('created_at', { ascending: false });

    return successResponse({
      ...voter,
      interactions: interactions || [],
    });
  } catch (error) {
    console.error('Get voter error:', error);
    return errorResponse('Failed to fetch voter');
  }
}

async function patchHandler(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await req.json();
    const userId = (req as any).user.userId;

    // Get old data for audit
    const { data: oldVoter } = await supabaseAdmin
      .from('voters')
      .select('*')
      .eq('id', id)
      .single();

    const { data: voter, error } = await supabaseAdmin
      .from('voters')
      .update({
        ...body,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return errorResponse('Failed to update voter', 400);
    }

    // Log audit
    await supabaseAdmin.from('audit_logs').insert({
      user_id: userId,
      action: 'UPDATE',
      entity_type: 'voter',
      entity_id: id,
      old_data: oldVoter,
      new_data: voter,
    });

    return successResponse(voter, 'Voter updated successfully');
  } catch (error) {
    console.error('Update voter error:', error);
    return errorResponse('Failed to update voter');
  }
}

async function deleteHandler(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const userId = (req as any).user.userId;

    const { error } = await supabaseAdmin
      .from('voters')
      .delete()
      .eq('id', id);

    if (error) {
      return errorResponse('Failed to delete voter', 400);
    }

    // Log audit
    await supabaseAdmin.from('audit_logs').insert({
      user_id: userId,
      action: 'DELETE',
      entity_type: 'voter',
      entity_id: id,
    });

    return successResponse(null, 'Voter deleted successfully');
  } catch (error) {
    console.error('Delete voter error:', error);
    return errorResponse('Failed to delete voter');
  }
}

export const GET = withAuth(getHandler);
export const PATCH = withAuth(patchHandler);
export const DELETE = withAuth(deleteHandler);
