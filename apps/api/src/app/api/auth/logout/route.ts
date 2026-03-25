import { NextRequest } from 'next/server';
import { withAuth, successResponse } from '@/lib/utils';

async function handler(req: NextRequest) {
  // In a stateless JWT system, logout is handled client-side by removing tokens
  // Here we could add token to a blacklist if needed
  return successResponse(null, 'Logged out successfully');
}

export const POST = withAuth(handler);
