import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { successResponse, errorResponse } from '@/lib/utils';
import { format, isAfter } from 'date-fns';

async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const upcoming = searchParams.get('upcoming') !== 'false';

    let query = supabaseAdmin
      .from('events')
      .select('*');

    if (upcoming) {
      const today = format(new Date(), 'yyyy-MM-dd');
      query = query.gte('event_date', today);
    }

    const { data: events, error } = await query
      .order('event_date', { ascending: true });

    if (error) {
      console.error('Events error:', error);
      return errorResponse('Failed to fetch events');
    }

    return successResponse(events || []);
  } catch (error) {
    console.error('Events error:', error);
    return errorResponse('Failed to fetch events');
  }
}

async function createHandler(req: NextRequest) {
  try {
    const body = await req.json();

    const { data: event, error } = await supabaseAdmin
      .from('events')
      .insert({
        ...body,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Create event error:', error);
      return errorResponse('Failed to create event', 400);
    }

    return successResponse(event, 'Event created successfully');
  } catch (error) {
    console.error('Create event error:', error);
    return errorResponse('Failed to create event');
  }
}

export const GET = handler;
export const POST = createHandler;
