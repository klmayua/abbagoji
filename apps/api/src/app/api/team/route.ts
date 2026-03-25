import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse, getPaginationParams } from '@/lib/utils';

async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const { page, perPage, offset } = getPaginationParams(searchParams);

    let query = supabaseAdmin
      .from('team_members')
      .select('*', { count: 'exact' });

    // Apply filters
    const role = searchParams.get('role');
    if (role) {
      query = query.eq('role', role);
    }

    const lga = searchParams.get('lga');
    if (lga) {
      query = query.eq('lga', lga);
    }

    const status = searchParams.get('status');
    if (status) {
      query = query.eq('status', status);
    }

    const { data: members, error, count } = await query
      .order('created_at', { ascending: false })
      .range(offset, offset + perPage - 1);

    if (error) {
      console.error('Team query error:', error);
      return errorResponse('Failed to fetch team');
    }

    return successResponse({
      members,
      total: count || 0,
      page,
      perPage,
    });
  } catch (error) {
    console.error('Team error:', error);
    return errorResponse('Failed to fetch team');
  }
}

async function createHandler(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, role, lga, ward, password } = body;

    // Hash password
    const bcrypt = await import('bcryptjs');
    const passwordHash = await bcrypt.hash(password || 'defaultpassword123', 10);

    const { data: member, error } = await supabaseAdmin
      .from('team_members')
      .insert({
        name,
        email,
        phone,
        role,
        lga,
        ward,
        password_hash: passwordHash,
        status: 'active',
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Create team member error:', error);
      return errorResponse('Failed to create team member', 400);
    }

    return successResponse({
      id: member.id,
      name: member.name,
      email: member.email,
      role: member.role,
      lga: member.lga,
      status: member.status,
    }, 'Team member created successfully');
  } catch (error) {
    console.error('Create team member error:', error);
    return errorResponse('Failed to create team member');
  }
}

export const GET = withAuth(handler);
export const POST = withAuth(createHandler);
