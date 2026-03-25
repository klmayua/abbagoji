// Digital Majlis Design Tokens - Colors
// Surface hierarchy following Material Design 3 principles

export const colors = {
  // Surface hierarchy (light mode)
  surface: {
    base: "#f7f9ff",
    containerLowest: "#ffffff",
    containerLow: "#edf4ff",
    container: "#e3efff",
    containerHigh: "#d9eaff",
    containerHighest: "#d1e4fb",
  },

  // Primary palette (Green - representing growth/progress)
  primary: {
    DEFAULT: "#00450d",
    container: "#1b5e20",
    fixed: "#c8e6c9",
    dark: "#003308",
    light: "#2e7d32",
  },

  // Secondary palette (Gold - representing wealth/heritage)
  secondary: {
    DEFAULT: "#755b00",
    container: "#ffe082",
    fixed: "#ffe08e",
    dark: "#4a3a00",
    light: "#9c7c00",
  },

  // Tertiary palette (Blue - representing trust/stability)
  tertiary: {
    DEFAULT: "#003683",
    container: "#1565c0",
    fixed: "#bbdefb",
    dark: "#002454",
    light: "#1976d2",
  },

  // Semantic colors
  error: {
    DEFAULT: "#ba1a1a",
    container: "#ffdad6",
  },

  success: {
    DEFAULT: "#4CAF50",
    container: "#e8f5e9",
  },

  warning: {
    DEFAULT: "#FFC107",
    container: "#fff8e1",
  },

  // Text colors
  onSurface: {
    DEFAULT: "#091d2e",
    variant: "#3d5261",
    disabled: "#6b7c8a",
  },

  // Border/outline
  outline: {
    DEFAULT: "#c0c9bb",
    variant: "#e0e5db",
  },

  // Sentiment colors for analytics
  sentiment: {
    positive: "#4CAF50",
    neutral: "#FFC107",
    negative: "#F44336",
  },
} as const;

// Tailwind-compatible color map for CSS variables
export const tailwindColors = {
  surface: {
    DEFAULT: colors.surface.base,
    container: colors.surface.container,
    "container-low": colors.surface.containerLow,
    "container-lowest": colors.surface.containerLowest,
    "container-high": colors.surface.containerHigh,
    "container-highest": colors.surface.containerHighest,
  },
  primary: {
    DEFAULT: colors.primary.DEFAULT,
    container: colors.primary.container,
    fixed: colors.primary.fixed,
  },
  secondary: {
    DEFAULT: colors.secondary.DEFAULT,
    container: colors.secondary.container,
    fixed: colors.secondary.fixed,
  },
  tertiary: {
    DEFAULT: colors.tertiary.DEFAULT,
    container: colors.tertiary.container,
    fixed: colors.tertiary.fixed,
  },
  error: {
    DEFAULT: colors.error.DEFAULT,
    container: colors.error.container,
  },
  "on-surface": {
    DEFAULT: colors.onSurface.DEFAULT,
    variant: colors.onSurface.variant,
  },
  outline: {
    DEFAULT: colors.outline.DEFAULT,
    variant: colors.outline.variant,
  },
  sentiment: {
    positive: colors.sentiment.positive,
    neutral: colors.sentiment.neutral,
    negative: colors.sentiment.negative,
  },
} as const;

export type Colors = typeof colors;
export type ColorKey = keyof typeof colors;
