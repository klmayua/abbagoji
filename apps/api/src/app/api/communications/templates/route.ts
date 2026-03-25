import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse } from '@/lib/utils';

async function handler(req: NextRequest) {
  try {
    const { data: templates, error } = await supabaseAdmin
      .from('message_templates')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Templates error:', error);
      return errorResponse('Failed to fetch templates');
    }

    return successResponse(templates);
  } catch (error) {
    console.error('Templates error:', error);
    return errorResponse('Failed to fetch templates');
  }
}

async function createHandler(req: NextRequest) {
  try {
    const body = await req.json();
    const userId = (req as any).user.userId;

    const { data: template, error } = await supabaseAdmin
      .from('message_templates')
      .insert({
        ...body,
        created_by: userId,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Create template error:', error);
      return errorResponse('Failed to create template', 400);
    }

    return successResponse(template, 'Template created successfully');
  } catch (error) {
    console.error('Create template error:', error);
    return errorResponse('Failed to create template');
  }
}

export const GET = withAuth(handler);
export const POST = withAuth(createHandler);
