// WebScreensIndex.js - Export all web/desktop screens
// Central export file for all web-specific screens

// Citizens Portal Web Screens
export { default as WebPublicChat } from './screens/WebPublicChat';
export { default as WebSettings } from './screens/WebSettings';
export { default as WebNotifications } from './screens/WebNotifications';

// Event Management
export { default as EventsCalendar } from './screens/events/EventsCalendar';

// Donation Portal
export { default as DonationPortal } from './screens/donations/DonationPortal';

// Web Theme
export { default as webTheme, webColors, webTypography, webSpacing, webShadows, layout, transitions, breakpoints, zIndex } from './theme.web';

// Screen Registry
export const WEB_SCREENS = {
  // Communication
  WebPublicChat: {
    name: 'WebPublicChat',
    title: 'Public Support Chat',
    description: 'Citizens support center with live chat',
    category: 'Communication',
    portal: 'Citizens',
  },

  // Settings
  WebSettings: {
    name: 'WebSettings',
    title: 'Settings',
    description: 'Comprehensive web settings panel',
    category: 'Settings',
    portal: 'Citizens',
  },

  // Notifications
  WebNotifications: {
    name: 'WebNotifications',
    title: 'Notifications Center',
    description: 'Advanced notification management',
    category: 'Notifications',
    portal: 'Citizens',
  },

  // Events
  EventsCalendar: {
    name: 'EventsCalendar',
    title: 'Events Calendar',
    description: 'Event management and registration',
    category: 'Events',
    portal: 'Both',
  },

  // Donations
  DonationPortal: {
    name: 'DonationPortal',
    title: 'Donation Portal',
    description: 'Secure donation processing',
    category: 'Finance',
    portal: 'Citizens',
  },
};

// Portal categorization
export const CITIZENS_PORTAL_SCREENS = [
  'WebPublicChat',
  'WebSettings',
  'WebNotifications',
  'EventsCalendar',
  'DonationPortal',
];

export const ADMIN_PORTAL_SCREENS = [
  'EventsCalendar',
  // Desktop versions will be added here
];

// Screen metadata
export const SCREEN_CATEGORIES = {
  Communication: ['WebPublicChat'],
  Settings: ['WebSettings'],
  Notifications: ['WebNotifications'],
  Events: ['EventsCalendar'],
  Finance: ['DonationPortal'],
};

// Navigation structure
export const WEB_NAVIGATION_STRUCTURE = {
  citizens: {
    main: ['EventsCalendar', 'DonationPortal'],
    support: ['WebPublicChat'],
    account: ['WebSettings', 'WebNotifications'],
  },
  admin: {
    management: ['EventsCalendar'],
  },
};

// Responsive breakpoints for web screens
export const RESPONSIVE_CONFIG = {
  mobile: {
    maxWidth: 768,
    columns: 1,
    sidebar: false,
  },
  tablet: {
    maxWidth: 1024,
    columns: 2,
    sidebar: false,
  },
  desktop: {
    maxWidth: 1440,
    columns: 3,
    sidebar: true,
  },
  wide: {
    maxWidth: Infinity,
    columns: 4,
    sidebar: true,
  },
};

// Export screen count
export const WEB_SCREEN_STATS = {
  total: Object.keys(WEB_SCREENS).length,
  citizens: CITIZENS_PORTAL_SCREENS.length,
  admin: ADMIN_PORTAL_SCREENS.length,
  byCategory: Object.keys(SCREEN_CATEGORIES).length,
};

export default {
  WEB_SCREENS,
  CITIZENS_PORTAL_SCREENS,
  ADMIN_PORTAL_SCREENS,
  SCREEN_CATEGORIES,
  WEB_NAVIGATION_STRUCTURE,
  RESPONSIVE_CONFIG,
  WEB_SCREEN_STATS,
};
