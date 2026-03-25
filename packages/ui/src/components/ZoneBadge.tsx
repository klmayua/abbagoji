import { MapPin } from 'lucide-react';

interface ZoneBadgeProps {
  lga: string;
  ward?: string;
  pollingUnit?: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs gap-1',
  md: 'px-3 py-1 text-sm gap-1.5',
  lg: 'px-4 py-2 text-base gap-2',
};

export function ZoneBadge({
  lga,
  ward,
  pollingUnit,
  size = 'md',
  showIcon = true,
  className = '',
}: ZoneBadgeProps) {
  const displayText = pollingUnit
    ? `${lga} → ${ward} → ${pollingUnit}`
    : ward
    ? `${lga} → ${ward}`
    : lga;

  return (
    <span
      className={`inline-flex items-center rounded-lg bg-surface-container text-on-surface-variant font-medium ${sizeClasses[size]} ${className}`}
    >
      {showIcon && <MapPin className="size-3.5 text-primary" />}
      <span className="truncate max-w-[200px]" title={displayText}>
        {displayText}
      </span>
    </span>
  );
}

export function LGABadge({ lga, count, className = '' }: { lga: string; count?: number; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-medium ${className}`}
    >
      <MapPin className="size-4 text-primary" />
      <span>{lga}</span>
      {count !== undefined && (
        <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary text-xs font-semibold">
          {count.toLocaleString()}
        </span>
      )}
    </span>
  );
}
