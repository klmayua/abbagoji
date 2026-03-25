export declare const transitions: {
    readonly fast: "150ms";
    readonly normal: "200ms";
    readonly slow: "300ms";
    readonly slower: "500ms";
    readonly easeOut: "cubic-bezier(0, 0, 0.2, 1)";
    readonly easeIn: "cubic-bezier(0.4, 0, 1, 1)";
    readonly easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)";
    readonly default: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)";
    readonly color: "color 150ms cubic-bezier(0.4, 0, 0.2, 1)";
    readonly transform: "transform 200ms cubic-bezier(0.4, 0, 0.2, 1)";
    readonly opacity: "opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)";
};
export declare const fadeIn: {
    hidden: {
        opacity: number;
    };
    visible: {
        opacity: number;
    };
};
export declare const fadeInUp: {
    hidden: {
        opacity: number;
        y: number;
    };
    visible: {
        opacity: number;
        y: number;
    };
};
export declare const fadeInDown: {
    hidden: {
        opacity: number;
        y: number;
    };
    visible: {
        opacity: number;
        y: number;
    };
};
export declare const scaleIn: {
    hidden: {
        opacity: number;
        scale: number;
    };
    visible: {
        opacity: number;
        scale: number;
    };
};
export declare const slideInLeft: {
    hidden: {
        opacity: number;
        x: number;
    };
    visible: {
        opacity: number;
        x: number;
    };
};
export declare const slideInRight: {
    hidden: {
        opacity: number;
        x: number;
    };
    visible: {
        opacity: number;
        x: number;
    };
};
export declare const staggerContainer: {
    hidden: {
        opacity: number;
    };
    visible: {
        opacity: number;
        transition: {
            staggerChildren: number;
            delayChildren: number;
        };
    };
};
export declare const staggerItem: {
    hidden: {
        opacity: number;
        y: number;
    };
    visible: {
        opacity: number;
        y: number;
        transition: {
            duration: number;
            ease: number[];
        };
    };
};
export declare const pageTransition: {
    initial: {
        opacity: number;
        y: number;
    };
    animate: {
        opacity: number;
        y: number;
    };
    exit: {
        opacity: number;
        y: number;
    };
};
export declare const counterAnimation: {
    duration: number;
    steps: number;
};
//# sourceMappingURL=animations.d.ts.map