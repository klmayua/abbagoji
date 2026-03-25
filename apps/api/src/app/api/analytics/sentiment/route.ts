import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { withAuth, successResponse, errorResponse } from '@/lib/utils';

async function handler(req: NextRequest) {
  try {
    // Get sentiment counts from voters
    const { data: sentiments, error } = await supabaseAdmin
      .from('voters')
      .select('sentiment')
      .not('sentiment', 'is', null);

    if (error) {
      console.error('Sentiment error:', error);
      return errorResponse('Failed to fetch sentiment');
    }

    const total = sentiments?.length || 0;
    const positive = sentiments?.filter(s => s.sentiment === 'positive').length || 0;
    const neutral = sentiments?.filter(s => s.sentiment === 'neutral').length || 0;
    const negative = sentiments?.filter(s => s.sentiment === 'negative').length || 0;

    // Calculate overall sentiment score (0-100)
    const overall = total > 0
      ? Math.round(((positive * 100) + (neutral * 50)) / total)
      : 50;

    // Get trend from daily metrics
    const { data: dailyMetrics } = await supabaseAdmin
      .from('daily_metrics')
      .select('positive_sentiment, neutral_sentiment, negative_sentiment, date')
      .order('date', { ascending: false })
      .limit(2);

    let trend: 'up' | 'down' | 'stable' = 'stable';
    let change = 0;

    if (dailyMetrics && dailyMetrics.length >= 2) {
      const today = dailyMetrics[0];
      const yesterday = dailyMetrics[1];

      const todayScore = today.positive_sentiment + today.neutral_sentiment * 0.5;
      const yesterdayScore = yesterday.positive_sentiment + yesterday.neutral_sentiment * 0.5;

      if (todayScore > yesterdayScore * 1.05) {
        trend = 'up';
        change = Math.round(((todayScore - yesterdayScore) / yesterdayScore) * 100);
      } else if (todayScore < yesterdayScore * 0.95) {
        trend = 'down';
        change = Math.round(((todayScore - yesterdayScore) / yesterdayScore) * 100);
      }
    }

    return successResponse({
      overall,
      positive: total > 0 ? Math.round((positive / total) * 100) : 0,
      neutral: total > 0 ? Math.round((neutral / total) * 100) : 0,
      negative: total > 0 ? Math.round((negative / total) * 100) : 0,
      trend,
      change,
    });
  } catch (error) {
    console.error('Sentiment error:', error);
    return errorResponse('Failed to fetch sentiment');
  }
}

export const GET = withAuth(handler);
