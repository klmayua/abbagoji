import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse, getPaginationParams } from '@/lib/utils';

async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const { page, perPage, offset } = getPaginationParams(searchParams);

    // Build query
    let query = supabaseAdmin
      .from('voters')
      .select('*', { count: 'exact' });

    // Apply filters
    const lga = searchParams.get('lga');
    if (lga) {
      query = query.eq('lga', lga);
    }

    const ward = searchParams.get('ward');
    if (ward) {
      query = query.eq('ward', ward);
    }

    const priority = searchParams.get('priority');
    if (priority) {
      query = query.eq('priority', priority);
    }

    const sentiment = searchParams.get('sentiment');
    if (sentiment) {
      query = query.eq('sentiment', sentiment);
    }

    const contacted = searchParams.get('contacted');
    if (contacted !== null) {
      query = query.eq('contacted', contacted === 'true');
    }

    const search = searchParams.get('search');
    if (search) {
      query = query.or(`name.ilike.%${search}%,phone.ilike.%${search}%`);
    }

    // Execute query with pagination
    const { data: voters, error, count } = await query
      .order('created_at', { ascending: false })
      .range(offset, offset + perPage - 1);

    if (error) {
      console.error('Voters query error:', error);
      return errorResponse('Failed to fetch voters');
    }

    return successResponse({
      voters,
      total: count || 0,
      page,
      perPage,
    });
  } catch (error) {
    console.error('Voters error:', error);
    return errorResponse('Failed to fetch voters');
  }
}

async function createHandler(req: NextRequest) {
  try {
    const body = await req.json();
    const userId = (req as any).user.userId;

    const { data: voter, error } = await supabaseAdmin
      .from('voters')
      .insert({
        ...body,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Create voter error:', error);
      return errorResponse('Failed to create voter', 400);
    }

    // Log audit
    await supabaseAdmin.from('audit_logs').insert({
      user_id: userId,
      action: 'CREATE',
      entity_type: 'voter',
      entity_id: voter.id,
      new_data: voter,
    });

    return successResponse(voter, 'Voter created successfully');
  } catch (error) {
    console.error('Create voter error:', error);
    return errorResponse('Failed to create voter');
  }
}

export const GET = withAuth(handler);
export const POST = withAuth(createHandler);
