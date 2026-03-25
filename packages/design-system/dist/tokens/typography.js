// Digital Majlis Design Tokens - Typography
// Based on Inter font family with Material Design 3 type scale
export const typography = {
    // Font family
    fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
    },
    // Type scale
    sizes: {
        // Display styles (large headlines)
        'display-lg': {
            size: '3.5rem', // 56px
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            weight: 400,
        },
        'display-md': {
            size: '2.8rem', // 45px
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
            weight: 400,
        },
        'display-sm': {
            size: '2.25rem', // 36px
            lineHeight: 1.2,
            letterSpacing: '0',
            weight: 400,
        },
        // Headline styles
        'headline-lg': {
            size: '2rem', // 32px
            lineHeight: 1.25,
            letterSpacing: '0',
            weight: 500,
        },
        'headline-md': {
            size: '1.75rem', // 28px
            lineHeight: 1.3,
            letterSpacing: '0',
            weight: 500,
        },
        'headline-sm': {
            size: '1.5rem', // 24px
            lineHeight: 1.35,
            letterSpacing: '0',
            weight: 500,
        },
        // Title styles
        'title-lg': {
            size: '1.375rem', // 22px
            lineHeight: 1.4,
            letterSpacing: '0',
            weight: 500,
        },
        'title-md': {
            size: '1.125rem', // 18px
            lineHeight: 1.5,
            letterSpacing: '0.01em',
            weight: 500,
        },
        'title-sm': {
            size: '1rem', // 16px
            lineHeight: 1.5,
            letterSpacing: '0.01em',
            weight: 500,
        },
        // Body styles
        'body-lg': {
            size: '1rem', // 16px
            lineHeight: 1.6,
            letterSpacing: '0',
            weight: 400,
        },
        'body-md': {
            size: '0.875rem', // 14px
            lineHeight: 1.6,
            letterSpacing: '0',
            weight: 400,
        },
        'body-sm': {
            size: '0.75rem', // 12px
            lineHeight: 1.5,
            letterSpacing: '0.01em',
            weight: 400,
        },
        // Label styles (all caps, used for UI labels)
        'label-lg': {
            size: '0.875rem', // 14px
            lineHeight: 1.4,
            letterSpacing: '0.05em',
            weight: 500,
            textTransform: 'uppercase',
        },
        'label-md': {
            size: '0.75rem', // 12px
            lineHeight: 1.4,
            letterSpacing: '0.05em',
            weight: 500,
            textTransform: 'uppercase',
        },
        'label-sm': {
            size: '0.625rem', // 10px
            lineHeight: 1.4,
            letterSpacing: '0.05em',
            weight: 500,
            textTransform: 'uppercase',
        },
    },
    // Font weights
    weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
};
