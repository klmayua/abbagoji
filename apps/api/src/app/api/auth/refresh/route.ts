import { NextRequest, NextResponse } from 'next/server';
import { verifyRefreshToken, generateTokens, getUserById } from '@/lib/auth';
import { successResponse, errorResponse } from '@/lib/utils';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { refreshToken } = body;

    if (!refreshToken) {
      return errorResponse('Refresh token is required', 400);
    }

    const { userId } = verifyRefreshToken(refreshToken);
    const user = await getUserById(userId);

    if (!user) {
      return errorResponse('User not found', 404);
    }

    const tokens = generateTokens(user.id, user.email, user.role);

    return successResponse({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        zone: 'Zone B',
        lga: user.lga,
      },
      ...tokens,
    });
  } catch (error) {
    console.error('Refresh token error:', error);
    return errorResponse('Invalid refresh token', 401);
  }
}
