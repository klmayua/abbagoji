// Digital Majlis Design System - Mobile Adaptation
// Same colors as web but adapted for React Native

export const colors = {
  // Surface hierarchy
  surface: {
    base: "#f7f9ff",
    containerLowest: "#ffffff",
    containerLow: "#edf4ff",
    container: "#e3efff",
    containerHigh: "#d9eaff",
    containerHighest: "#d1e4fb",
  },

  // Primary palette (Green)
  primary: {
    DEFAULT: "#00450d",
    container: "#1b5e20",
    fixed: "#c8e6c9",
    dark: "#003308",
    light: "#2e7d32",
  },

  // Secondary palette (Gold)
  secondary: {
    DEFAULT: "#755b00",
    container: "#ffe082",
    fixed: "#ffe08e",
    dark: "#4a3a00",
    light: "#9c7c00",
  },

  // Tertiary palette (Blue)
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

  // Sentiment colors
  sentiment: {
    positive: "#4CAF50",
    neutral: "#FFC107",
    negative: "#F44336",
  },
};

// Typography scale for mobile
export const typography = {
  display: {
    large: { size: 40, lineHeight: 48, letterSpacing: -0.8 },
    medium: { size: 32, lineHeight: 40, letterSpacing: -0.5 },
  },
  headline: {
    large: { size: 28, lineHeight: 36, letterSpacing: 0 },
    medium: { size: 24, lineHeight: 32, letterSpacing: 0 },
    small: { size: 20, lineHeight: 28, letterSpacing: 0 },
  },
  title: {
    large: { size: 18, lineHeight: 26, letterSpacing: 0 },
    medium: { size: 16, lineHeight: 24, letterSpacing: 0.1 },
    small: { size: 14, lineHeight: 20, letterSpacing: 0.1 },
  },
  body: {
    large: { size: 16, lineHeight: 24, letterSpacing: 0 },
    medium: { size: 14, lineHeight: 20, letterSpacing: 0 },
    small: { size: 12, lineHeight: 18, letterSpacing: 0 },
  },
  label: {
    large: { size: 14, lineHeight: 20, letterSpacing: 0.5 },
    medium: { size: 12, lineHeight: 16, letterSpacing: 0.5 },
    small: { size: 10, lineHeight: 14, letterSpacing: 0.5 },
  },
};

// Spacing scale
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Border radius
export const radius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 9999,
};

export default { colors, typography, spacing, radius };
