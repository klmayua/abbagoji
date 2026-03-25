type SentimentType = 'positive' | 'neutral' | 'negative';
interface SentimentBadgeProps {
    sentiment: SentimentType;
    size?: 'sm' | 'md' | 'lg';
    showIcon?: boolean;
    className?: string;
}
export declare function SentimentBadge({ sentiment, size, showIcon, className, }: SentimentBadgeProps): import("react/jsx-runtime").JSX.Element;
export declare function SentimentDot({ sentiment, className }: {
    sentiment: SentimentType;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SentimentBadge.d.ts.map