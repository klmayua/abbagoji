// GOJI2027 Design System - Digital Majlis Theme
// Based on Stitch design system

export const colors = {
  // Primary - Authority Green
  primary: '#00450d',
  primaryContainer: '#1b5e20',
  onPrimary: '#ffffff',
  onPrimaryContainer: '#90d689',
  primaryFixed: '#acf4a4',
  onPrimaryFixed: '#002203',
  onPrimaryFixedVariant: '#0c5216',
  primaryFixedDim: '#91d78a',
  inversePrimary: '#91d78a',

  // Secondary - Gold Accent
  secondary: '#755b00',
  secondaryContainer: '#fed255',
  onSecondary: '#ffffff',
  onSecondaryContainer: '#735a00',
  secondaryFixed: '#ffe08e',
  onSecondaryFixed: '#241a00',
  onSecondaryFixedVariant: '#584400',
  secondaryFixedDim: '#ecc246',

  // Tertiary - Deep Blue
  tertiary: '#003683',
  tertiaryContainer: '#184da7',
  onTertiary: '#ffffff',
  onTertiaryContainer: '#adc4ff',
  tertiaryFixed: '#d9e2ff',
  onTertiaryFixed: '#001945',
  onTertiaryFixedVariant: '#00429c',
  tertiaryFixedDim: '#b0c6ff',

  // Surface - Paper Layering
  surface: '#f7f9ff',
  onSurface: '#091d2e',
  surfaceVariant: '#d1e4fb',
  onSurfaceVariant: '#41493e',
  surfaceBright: '#f7f9ff',
  surfaceDim: '#c9dcf3',
  surfaceContainer: '#e3efff',
  surfaceContainerLow: '#edf4ff',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerHigh: '#d9eaff',
  surfaceContainerHighest: '#d1e4fb',
  surfaceTint: '#2a6b2c',
  inverseSurface: '#203243',
  inverseOnSurface: '#e8f2ff',

  // Background
  background: '#f7f9ff',
  onBackground: '#091d2e',

  // Outline
  outline: '#717a6d',
  outlineVariant: '#c0c9bb',

  // Error
  error: '#ba1a1a',
  onError: '#ffffff',
  errorContainer: '#ffdad6',
  onErrorContainer: '#93000a',
};

export const typography = {
  display: {
    large: { fontSize: 57, lineHeight: 64, letterSpacing: -0.02, fontWeight: '400' },
    medium: { fontSize: 45, lineHeight: 52, letterSpacing: 0, fontWeight: '400' },
    small: { fontSize: 36, lineHeight: 44, letterSpacing: 0, fontWeight: '400' },
  },
  headline: {
    large: { fontSize: 32, lineHeight: 40, letterSpacing: 0, fontWeight: '400' },
    medium: { fontSize: 28, lineHeight: 36, letterSpacing: 0, fontWeight: '400' },
    small: { fontSize: 24, lineHeight: 32, letterSpacing: 0, fontWeight: '400' },
  },
  title: {
    large: { fontSize: 22, lineHeight: 28, letterSpacing: 0, fontWeight: '400' },
    medium: { fontSize: 16, lineHeight: 24, letterSpacing: 0.01, fontWeight: '500' },
    small: { fontSize: 14, lineHeight: 20, letterSpacing: 0.01, fontWeight: '500' },
  },
  body: {
    large: { fontSize: 16, lineHeight: 24, letterSpacing: 0.01, fontWeight: '400' },
    medium: { fontSize: 14, lineHeight: 20, letterSpacing: 0.02, fontWeight: '400' },
    small: { fontSize: 12, lineHeight: 16, letterSpacing: 0.04, fontWeight: '400' },
  },
  label: {
    large: { fontSize: 14, lineHeight: 20, letterSpacing: 0.01, fontWeight: '500' },
    medium: { fontSize: 12, lineHeight: 16, letterSpacing: 0.05, fontWeight: '500' },
    small: { fontSize: 11, lineHeight: 16, letterSpacing: 0.05, fontWeight: '500' },
  },
};

export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
};

export const shapes = {
  small: 4,
  medium: 8,
  large: 12,
  extraLarge: 24,
  full: 999,
};

export const shadows = {
  small: {
    shadowColor: '#091d2e',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: '#091d2e',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  large: {
    shadowColor: '#091d2e',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.08,
    shadowRadius: 40,
    elevation: 8,
  },
};

export const silkFinish = ['#00450d', '#1b5e20'];
