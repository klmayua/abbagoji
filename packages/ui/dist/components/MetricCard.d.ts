import type { ReactNode } from 'react';
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
export declare function MetricCard({ title, value, trend, icon, className }: MetricCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=MetricCard.d.ts.map