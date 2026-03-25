import type { ReactNode } from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

export interface MetricCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: number;
    direction: 'up' | 'down' | 'neutral';
    label?: string;
  };
  icon?: ReactNode;
  className?: string;
}

const trendIcons = {
  up: ArrowUpRight,
  down: ArrowDownRight,
  neutral: Minus,
};

const trendColors = {
  up: 'text-sentiment-positive',
  down: 'text-error',
  neutral: 'text-on-surface-variant',
};

const trendBgColors = {
  up: 'bg-sentiment-positive/10',
  down: 'bg-error/10',
  neutral: 'bg-surface-container',
};

export function MetricCard({ title, value, trend, icon, className = '' }: MetricCardProps) {
  const TrendIcon = trend ? trendIcons[trend.direction] : null;

  return (
    <div className={`bg-surface-container-lowest rounded-xl p-6 ${className}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">
            {title}
          </p>
          <p className="text-3xl font-bold text-on-surface">{value}</p>

          {trend && TrendIcon && (
            <div className="flex items-center gap-1 mt-2">
              <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full ${trendBgColors[trend.direction]}`}>
                <TrendIcon className={`size-3 ${trendColors[trend.direction]}`} />
                <span className={`text-xs font-medium ${trendColors[trend.direction]}`}>
                  {trend.value > 0 ? '+' : ''}{trend.value}%
                </span>
              </div>
              {trend.label && (
                <span className="text-xs text-on-surface-variant">{trend.label}</span>
              )}
            </div>
          )}
        </div>

        {icon && (
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
