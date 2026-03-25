import { NextRequest } from 'next/server';
import { getUserById } from '@/lib/auth';
import { withAuth, successResponse, errorResponse } from '@/lib/utils';

async function handler(req: NextRequest) {
  try {
    const userId = (req as any).user.userId;
    const user = await getUserById(userId);

    if (!user) {
      return errorResponse('User not found', 404);
    }

    return successResponse({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      zone: 'Zone B',
      lga: user.lga,
    });
  } catch (error) {
    console.error('Get user error:', error);
    return errorResponse('Failed to get user');
  }
}

export const GET = withAuth(handler);
