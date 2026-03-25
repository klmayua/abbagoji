import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThumbsUp, ThumbsDown, Minus } from 'lucide-react';
const sentimentConfig = {
    positive: {
        icon: ThumbsUp,
        label: 'Positive',
        bgColor: 'bg-sentiment-positive/10',
        textColor: 'text-sentiment-positive',
        borderColor: 'border-sentiment-positive/20',
    },
    neutral: {
        icon: Minus,
        label: 'Neutral',
        bgColor: 'bg-warning/10',
        textColor: 'text-warning',
        borderColor: 'border-warning/20',
    },
    negative: {
        icon: ThumbsDown,
        label: 'Negative',
        bgColor: 'bg-error/10',
        textColor: 'text-error',
        borderColor: 'border-error/20',
    },
};
const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
};
const iconSizes = {
    sm: 'size-3',
    md: 'size-4',
    lg: 'size-5',
};
export function SentimentBadge({ sentiment, size = 'md', showIcon = true, className = '', }) {
    const config = sentimentConfig[sentiment];
    const Icon = config.icon;
    return (_jsxs("span", { className: `inline-flex items-center gap-1.5 rounded-full font-medium ${sizeClasses[size]} ${config.bgColor} ${config.textColor} ${className}`, children: [showIcon && _jsx(Icon, { className: iconSizes[size] }), _jsx("span", { className: "capitalize", children: config.label })] }));
}
export function SentimentDot({ sentiment, className = '' }) {
    const dotColors = {
        positive: 'bg-sentiment-positive',
        neutral: 'bg-warning',
        negative: 'bg-error',
    };
    return (_jsx("span", { className: `inline-block w-2.5 h-2.5 rounded-full ${dotColors[sentiment]} ${className}`, "aria-label": `${sentiment} sentiment` }));
}
