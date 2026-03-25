// Glassmorphism Utilities
// Following the Digital Majlis "No-Line Rule" - use glass effects instead of borders

import { colors } from '../tokens/colors.js';

export const glassStyles = {
  /**
   * Header glassmorphism - fixed position headers/navbars
   * 80% opacity with 20px backdrop blur
   */
  header: 'bg-surface/80 backdrop-blur-[20px] border-b border-outline-variant/15',

  /**
   * Card glassmorphism - elevated cards
   * 90% opacity with 10px backdrop blur
   */
  card: 'bg-surface-container-lowest/90 backdrop-blur-[10px]',

  /**
   * Modal glassmorphism - dialogs and modals
   * 95% opacity with 20px backdrop blur
   */
  modal: 'bg-surface-container-high/95 backdrop-blur-[20px]',

  /**
   * Floating glassmorphism - floating elements like FABs, dropdowns
   * 60% opacity with 20px backdrop blur and ambient shadow
   */
  floating: 'bg-surface/60 backdrop-blur-[20px] shadow-[0_20px_40px_-10px_rgba(9,29,46,0.08)]',

  /**
   * Sidebar glassmorphism - side navigation panels
   */
  sidebar: 'bg-surface-container-low/95 backdrop-blur-[10px] border-r border-outline-variant/15',
} as const;

// CSS class strings for direct use
export const glassClasses = {
  header: glassStyles.header,
  card: glassStyles.card,
  modal: glassStyles.modal,
  floating: glassStyles.floating,
  sidebar: glassStyles.sidebar,
} as const;

// Utility function to create custom glass styles
export function createGlassStyle({
  opacity = 80,
  blur = 20,
  borderOpacity = 15,
  surfaceColor = 'surface-container-lowest',
}: {
  opacity?: number;
  blur?: number;
  borderOpacity?: number;
  surfaceColor?: string;
} = {}) {
  return `bg-${surfaceColor}/${opacity} backdrop-blur-[${blur}px] border-outline-variant/${borderOpacity}`;
}

// Ambient shadow utility
export const ambientShadow = 'shadow-[0_20px_40px_-10px_rgba(9,29,46,0.08)]';

// Hover lift effect for interactive elements
export const hoverLift = 'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-10px_rgba(9,29,46,0.12)]';

export type GlassStyle = keyof typeof glassStyles;
