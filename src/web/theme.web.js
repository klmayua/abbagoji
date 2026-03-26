// GOJI2027 Web/Desktop Design System Extensions
// Extends mobile theme with desktop-specific tokens

import { colors as mobileColors, typography as mobileTypography, spacing as mobileSpacing, shapes as mobileShapes, shadows as mobileShadows } from '../theme';

// Web-specific color extensions
export const webColors = {
  ...mobileColors,
  // Additional web-specific colors
  sidebar: '#f8fafc',
  sidebarBorder: '#e2e8f0',
  tableHeader: '#f1f5f9',
  tableRowHover: '#f8fafc',
  chartGrid: '#e2e8f0',
  gradientStart: mobileColors.primary,
  gradientEnd: mobileColors.primaryContainer,
};

// Web-specific typography (larger scales for desktop)
export const webTypography = {
  ...mobileTypography,
  display: {
    large: { fontSize: 64, lineHeight: 72, letterSpacing: -0.02, fontWeight: '600' },
    medium: { fontSize: 52, lineHeight: 60, letterSpacing: -0.01, fontWeight: '600' },
    small: { fontSize: 44, lineHeight: 52, letterSpacing: -0.01, fontWeight: '600' },
  },
  headline: {
    large: { fontSize: 40, lineHeight: 48, letterSpacing: 0, fontWeight: '600' },
    medium: { fontSize: 34, lineHeight: 42, letterSpacing: 0, fontWeight: '600' },
    small: { fontSize: 28, lineHeight: 36, letterSpacing: 0, fontWeight: '600' },
  },
  // Data-specific for dashboards
  data: {
    large: { fontSize: 48, lineHeight: 56, letterSpacing: -0.02, fontWeight: '700' },
    medium: { fontSize: 36, lineHeight: 44, letterSpacing: -0.01, fontWeight: '700' },
    small: { fontSize: 24, lineHeight: 32, letterSpacing: 0, fontWeight: '600' },
  },
};

// Web-specific spacing (larger for desktop)
export const webSpacing = {
  ...mobileSpacing,
  32: 128,
  40: 160,
  48: 192,
  56: 224,
  64: 256,
};

// Web-specific shadows (more pronounced for desktop)
export const webShadows = {
  ...mobileShadows,
  sidebar: {
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
  },
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  dropdown: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },
};

// Layout constants for web
export const layout = {
  sidebarWidth: 280,
  sidebarCollapsedWidth: 72,
  headerHeight: 72,
  contentMaxWidth: 1440,
  contentPadding: 32,
  cardBorderRadius: 12,
  tableRowHeight: 56,
};

// Animation constants
export const transitions = {
  fast: '150ms ease-in-out',
  normal: '250ms ease-in-out',
  slow: '350ms ease-in-out',
};

// Breakpoints for responsive design
export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
};

// Z-index scale
export const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  modal: 300,
  popover: 400,
  tooltip: 500,
  toast: 600,
};

// Export combined theme
export const webTheme = {
  colors: webColors,
  typography: webTypography,
  spacing: webSpacing,
  shadows: webShadows,
  layout,
  transitions,
  breakpoints,
  zIndex,
};

export default webTheme;
