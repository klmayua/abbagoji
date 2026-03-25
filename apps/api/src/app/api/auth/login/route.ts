import { NextRequest, NextResponse } from 'next/server';
import { authenticateUser, generateTokens } from '@/lib/auth';
import { successResponse, errorResponse } from '@/lib/utils';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return errorResponse('Email and password are required', 400);
    }

    const user = await authenticateUser(email, password);

    if (!user) {
      return errorResponse('Invalid credentials', 401);
    }

    if (user.status === 'suspended') {
      return errorResponse('Account is suspended', 403);
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
    console.error('Login error:', error);
    return errorResponse('Login failed');
  }
}
