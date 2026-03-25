import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse } from '@/lib/utils';

async function handler(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, recipients, channel } = body;

    if (!message || !recipients || !Array.isArray(recipients) || recipients.length === 0) {
      return errorResponse('Message and recipients are required', 400);
    }

    // Get voters with their phone numbers
    const { data: voters } = await supabaseAdmin
      .from('voters')
      .select('id, phone, name')
      .in('id', recipients);

    // Simulate sending messages
    // In production, this would integrate with Twilio, Africa's Talking, or WhatsApp Business API
    const sent = voters?.length || 0;
    const failed = recipients.length - sent;

    // Log the campaign
    await supabaseAdmin
      .from('campaigns')
      .insert({
        name: `Direct Message ${new Date().toISOString()}`,
        type: channel,
        status: 'completed',
        message,
        sent_count: sent,
        total_count: recipients.length,
        completed_at: new Date().toISOString(),
      });

    return successResponse({
      sent,
      failed,
      total: recipients.length,
    }, 'Messages sent successfully');
  } catch (error) {
    console.error('Send message error:', error);
    return errorResponse('Failed to send messages');
  }
}

export const POST = withAuth(handler);
