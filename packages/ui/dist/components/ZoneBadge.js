import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MapPin } from 'lucide-react';
const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-3 py-1 text-sm gap-1.5',
    lg: 'px-4 py-2 text-base gap-2',
};
export function ZoneBadge({ lga, ward, pollingUnit, size = 'md', showIcon = true, className = '', }) {
    const displayText = pollingUnit
        ? `${lga} → ${ward} → ${pollingUnit}`
        : ward
            ? `${lga} → ${ward}`
            : lga;
    return (_jsxs("span", { className: `inline-flex items-center rounded-lg bg-surface-container text-on-surface-variant font-medium ${sizeClasses[size]} ${className}`, children: [showIcon && _jsx(MapPin, { className: "size-3.5 text-primary" }), _jsx("span", { className: "truncate max-w-[200px]", title: displayText, children: displayText })] }));
}
export function LGABadge({ lga, count, className = '' }) {
    return (_jsxs("span", { className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-medium ${className}`, children: [_jsx(MapPin, { className: "size-4 text-primary" }), _jsx("span", { children: lga }), count !== undefined && (_jsx("span", { className: "px-1.5 py-0.5 rounded bg-primary/10 text-primary text-xs font-semibold", children: count.toLocaleString() }))] }));
}
