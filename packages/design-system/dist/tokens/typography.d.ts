export declare const typography: {
    readonly fontFamily: {
        readonly sans: readonly ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"];
        readonly display: readonly ["Inter", "system-ui", "sans-serif"];
    };
    readonly sizes: {
        readonly 'display-lg': {
            readonly size: "3.5rem";
            readonly lineHeight: 1.1;
            readonly letterSpacing: "-0.02em";
            readonly weight: 400;
        };
        readonly 'display-md': {
            readonly size: "2.8rem";
            readonly lineHeight: 1.15;
            readonly letterSpacing: "-0.01em";
            readonly weight: 400;
        };
        readonly 'display-sm': {
            readonly size: "2.25rem";
            readonly lineHeight: 1.2;
            readonly letterSpacing: "0";
            readonly weight: 400;
        };
        readonly 'headline-lg': {
            readonly size: "2rem";
            readonly lineHeight: 1.25;
            readonly letterSpacing: "0";
            readonly weight: 500;
        };
        readonly 'headline-md': {
            readonly size: "1.75rem";
            readonly lineHeight: 1.3;
            readonly letterSpacing: "0";
            readonly weight: 500;
        };
        readonly 'headline-sm': {
            readonly size: "1.5rem";
            readonly lineHeight: 1.35;
            readonly letterSpacing: "0";
            readonly weight: 500;
        };
        readonly 'title-lg': {
            readonly size: "1.375rem";
            readonly lineHeight: 1.4;
            readonly letterSpacing: "0";
            readonly weight: 500;
        };
        readonly 'title-md': {
            readonly size: "1.125rem";
            readonly lineHeight: 1.5;
            readonly letterSpacing: "0.01em";
            readonly weight: 500;
        };
        readonly 'title-sm': {
            readonly size: "1rem";
            readonly lineHeight: 1.5;
            readonly letterSpacing: "0.01em";
            readonly weight: 500;
        };
        readonly 'body-lg': {
            readonly size: "1rem";
            readonly lineHeight: 1.6;
            readonly letterSpacing: "0";
            readonly weight: 400;
        };
        readonly 'body-md': {
            readonly size: "0.875rem";
            readonly lineHeight: 1.6;
            readonly letterSpacing: "0";
            readonly weight: 400;
        };
        readonly 'body-sm': {
            readonly size: "0.75rem";
            readonly lineHeight: 1.5;
            readonly letterSpacing: "0.01em";
            readonly weight: 400;
        };
        readonly 'label-lg': {
            readonly size: "0.875rem";
            readonly lineHeight: 1.4;
            readonly letterSpacing: "0.05em";
            readonly weight: 500;
            readonly textTransform: "uppercase";
        };
        readonly 'label-md': {
            readonly size: "0.75rem";
            readonly lineHeight: 1.4;
            readonly letterSpacing: "0.05em";
            readonly weight: 500;
            readonly textTransform: "uppercase";
        };
        readonly 'label-sm': {
            readonly size: "0.625rem";
            readonly lineHeight: 1.4;
            readonly letterSpacing: "0.05em";
            readonly weight: 500;
            readonly textTransform: "uppercase";
        };
    };
    readonly weights: {
        readonly regular: 400;
        readonly medium: 500;
        readonly semibold: 600;
        readonly bold: 700;
    };
};
export type Typography = typeof typography;
export type TypographySize = keyof typeof typography.sizes;
//# sourceMappingURL=typography.d.ts.map