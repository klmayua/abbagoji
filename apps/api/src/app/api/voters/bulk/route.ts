import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse } from '@/lib/utils';

async function handler(req: NextRequest) {
  try {
    const body = await req.json();
    const { voters } = body;
    const userId = (req as any).user.userId;

    if (!Array.isArray(voters) || voters.length === 0) {
      return errorResponse('Voters array is required', 400);
    }

    // Validate voters
    const validVoters = voters.filter(v => v.name && v.lga && v.ward && v.polling_unit);

    if (validVoters.length === 0) {
      return errorResponse('No valid voters to import', 400);
    }

    // Insert voters
    const { data: inserted, error } = await supabaseAdmin
      .from('voters')
      .insert(
        validVoters.map(v => ({
          ...v,
          created_at: new Date().toISOString(),
        }))
      )
      .select();

    if (error) {
      console.error('Bulk import error:', error);
      return errorResponse('Failed to import voters', 400);
    }

    // Log audit
    await supabaseAdmin.from('audit_logs').insert({
      user_id: userId,
      action: 'BULK_IMPORT',
      entity_type: 'voter',
      new_data: { count: inserted?.length || 0 },
    });

    return successResponse({
      imported: inserted?.length || 0,
      failed: voters.length - (inserted?.length || 0),
    }, 'Voters imported successfully');
  } catch (error) {
    console.error('Bulk import error:', error);
    return errorResponse('Failed to import voters');
  }
}

export const POST = withAuth(handler);
