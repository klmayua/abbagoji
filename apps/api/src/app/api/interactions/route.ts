import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse, getPaginationParams } from '@/lib/utils';

async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const { page, perPage, offset } = getPaginationParams(searchParams);

    let query = supabaseAdmin
      .from('interactions')
      .select(`
        *,
        voter:voter_id (name),
        agent:agent_id (name)
      `, { count: 'exact' });

    // Apply filters
    const voterId = searchParams.get('voterId');
    if (voterId) {
      query = query.eq('voter_id', voterId);
    }

    const agentId = searchParams.get('agentId');
    if (agentId) {
      query = query.eq('agent_id', agentId);
    }

    const lga = searchParams.get('lga');
    if (lga) {
      query = query.eq('lga', lga);
    }

    const dateFrom = searchParams.get('dateFrom');
    if (dateFrom) {
      query = query.gte('created_at', dateFrom);
    }

    const dateTo = searchParams.get('dateTo');
    if (dateTo) {
      query = query.lte('created_at', dateTo);
    }

    const { data: interactions, error, count } = await query
      .order('created_at', { ascending: false })
      .range(offset, offset + perPage - 1);

    if (error) {
      console.error('Interactions query error:', error);
      return errorResponse('Failed to fetch interactions');
    }

    return successResponse({
      interactions,
      total: count || 0,
      page,
      perPage,
    });
  } catch (error) {
    console.error('Interactions error:', error);
    return errorResponse('Failed to fetch interactions');
  }
}

async function createHandler(req: NextRequest) {
  try {
    const body = await req.json();
    const userId = (req as any).user.userId;

    const { voter_id, type, outcome, notes, lga, ward } = body;

    // Get voter info
    const { data: voter } = await supabaseAdmin
      .from('voters')
      .select('name, lga, ward')
      .eq('id', voter_id)
      .single();

    // Get agent info
    const { data: agent } = await supabaseAdmin
      .from('team_members')
      .select('name')
      .eq('id', userId)
      .single();

    const { data: interaction, error } = await supabaseAdmin
      .from('interactions')
      .insert({
        voter_id,
        type,
        outcome,
        notes,
        agent_id: userId,
        lga: lga || voter?.lga,
        ward: ward || voter?.ward,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Create interaction error:', error);
      return errorResponse('Failed to create interaction', 400);
    }

    // Update voter contacted status
    await supabaseAdmin
      .from('voters')
      .update({
        contacted: true,
        contact_date: new Date().toISOString(),
        sentiment: outcome,
      })
      .eq('id', voter_id);

    // Update agent's voters_contacted count
    await supabaseAdmin.rpc('increment_agent_contacted', { agent_id: userId });

    // Update daily metrics
    const today = new Date().toISOString().split('T')[0];
    await supabaseAdmin.rpc('increment_daily_metric', {
      metric_date: today,
      metric_type: type,
      sentiment: outcome,
    });

    return successResponse({
      ...interaction,
      voter: { name: voter?.name },
      agent: { name: agent?.name },
    }, 'Interaction logged successfully');
  } catch (error) {
    console.error('Create interaction error:', error);
    return errorResponse('Failed to create interaction');
  }
}

export const GET = withAuth(handler);
export const POST = withAuth(createHandler);
