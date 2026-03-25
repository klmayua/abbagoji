import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { successResponse, errorResponse } from '@/lib/utils';

async function handler(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const { data: event, error } = await supabaseAdmin
      .from('events')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !event) {
      return errorResponse('Event not found', 404);
    }

    return successResponse(event);
  } catch (error) {
    console.error('Event detail error:', error);
    return errorResponse('Failed to fetch event');
  }
}

async function registerHandler(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await req.json();
    const { name, phone, email, lga, ward } = body;

    // Check if already registered
    const { data: existing } = await supabaseAdmin
      .from('event_registrations')
      .select('*')
      .eq('event_id', id)
      .eq('phone', phone)
      .single();

    if (existing) {
      return errorResponse('Already registered for this event', 400);
    }

    // Create registration
    const { data: registration, error } = await supabaseAdmin
      .from('event_registrations')
      .insert({
        event_id: id,
        name,
        phone,
        email,
        lga,
        ward,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Registration error:', error);
      return errorResponse('Failed to register', 400);
    }

    // Update event registered count
    await supabaseAdmin.rpc('increment_event_count', { event_id: id });

    return successResponse(registration, 'Registered successfully');
  } catch (error) {
    console.error('Registration error:', error);
    return errorResponse('Failed to register');
  }
}

export const GET = handler;
export const POST = registerHandler;
