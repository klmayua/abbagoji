import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
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
export function MetricCard({ title, value, trend, icon, className = '' }) {
    const TrendIcon = trend ? trendIcons[trend.direction] : null;
    return (_jsx("div", { className: `bg-surface-container-lowest rounded-xl p-6 ${className}`, children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-label-md text-on-surface-variant uppercase tracking-wider mb-1", children: title }), _jsx("p", { className: "text-3xl font-bold text-on-surface", children: value }), trend && TrendIcon && (_jsxs("div", { className: "flex items-center gap-1 mt-2", children: [_jsxs("div", { className: `flex items-center gap-1 px-2 py-0.5 rounded-full ${trendBgColors[trend.direction]}`, children: [_jsx(TrendIcon, { className: `size-3 ${trendColors[trend.direction]}` }), _jsxs("span", { className: `text-xs font-medium ${trendColors[trend.direction]}`, children: [trend.value > 0 ? '+' : '', trend.value, "%"] })] }), trend.label && (_jsx("span", { className: "text-xs text-on-surface-variant", children: trend.label }))] }))] }), icon && (_jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary", children: icon }))] }) }));
}
