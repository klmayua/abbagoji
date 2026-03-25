import { NextRequest } from 'next/server';
import { withAuth, successResponse } from '@/lib/utils';

// Mock topics data - in production, this would come from NLP analysis of interaction notes
const topTopics = [
  { topic: 'Education', mentions: 1247, trend: 'up' as const },
  { topic: 'Healthcare', mentions: 982, trend: 'up' as const },
  { topic: 'Infrastructure', mentions: 756, trend: 'down' as const },
  { topic: 'Security', mentions: 634, trend: 'up' as const },
  { topic: 'Employment', mentions: 523, trend: 'up' as const },
  { topic: 'Agriculture', mentions: 412, trend: 'stable' as const },
  { topic: 'Youth Empowerment', mentions: 389, trend: 'up' as const },
  { topic: 'Women Development', mentions: 345, trend: 'stable' as const },
];

async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get('limit') || '10');

    return successResponse(topTopics.slice(0, limit));
  } catch (error) {
    console.error('Topics error:', error);
    return successResponse(topTopics.slice(0, 10));
  }
}

export const GET = withAuth(handler);
