interface ZoneBadgeProps {
    lga: string;
    ward?: string;
    pollingUnit?: string;
    size?: 'sm' | 'md' | 'lg';
    showIcon?: boolean;
    className?: string;
}
export declare function ZoneBadge({ lga, ward, pollingUnit, size, showIcon, className, }: ZoneBadgeProps): import("react/jsx-runtime").JSX.Element;
export declare function LGABadge({ lga, count, className }: {
    lga: string;
    count?: number;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ZoneBadge.d.ts.map