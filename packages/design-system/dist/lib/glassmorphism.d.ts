export declare const glassStyles: {
    /**
     * Header glassmorphism - fixed position headers/navbars
     * 80% opacity with 20px backdrop blur
     */
    readonly header: "bg-surface/80 backdrop-blur-[20px] border-b border-outline-variant/15";
    /**
     * Card glassmorphism - elevated cards
     * 90% opacity with 10px backdrop blur
     */
    readonly card: "bg-surface-container-lowest/90 backdrop-blur-[10px]";
    /**
     * Modal glassmorphism - dialogs and modals
     * 95% opacity with 20px backdrop blur
     */
    readonly modal: "bg-surface-container-high/95 backdrop-blur-[20px]";
    /**
     * Floating glassmorphism - floating elements like FABs, dropdowns
     * 60% opacity with 20px backdrop blur and ambient shadow
     */
    readonly floating: "bg-surface/60 backdrop-blur-[20px] shadow-[0_20px_40px_-10px_rgba(9,29,46,0.08)]";
    /**
     * Sidebar glassmorphism - side navigation panels
     */
    readonly sidebar: "bg-surface-container-low/95 backdrop-blur-[10px] border-r border-outline-variant/15";
};
export declare const glassClasses: {
    readonly header: "bg-surface/80 backdrop-blur-[20px] border-b border-outline-variant/15";
    readonly card: "bg-surface-container-lowest/90 backdrop-blur-[10px]";
    readonly modal: "bg-surface-container-high/95 backdrop-blur-[20px]";
    readonly floating: "bg-surface/60 backdrop-blur-[20px] shadow-[0_20px_40px_-10px_rgba(9,29,46,0.08)]";
    readonly sidebar: "bg-surface-container-low/95 backdrop-blur-[10px] border-r border-outline-variant/15";
};
export declare function createGlassStyle({ opacity, blur, borderOpacity, surfaceColor, }?: {
    opacity?: number;
    blur?: number;
    borderOpacity?: number;
    surfaceColor?: string;
}): string;
export declare const ambientShadow = "shadow-[0_20px_40px_-10px_rgba(9,29,46,0.08)]";
export declare const hoverLift = "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-10px_rgba(9,29,46,0.12)]";
export type GlassStyle = keyof typeof glassStyles;
//# sourceMappingURL=glassmorphism.d.ts.map