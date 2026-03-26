# GOJI2027 Digital Majlis - Complete Campaign Platform

A comprehensive political campaign management platform with **59 screens** across Mobile and Web/Desktop platforms.

![GOJI2027](https://img.shields.io/badge/Screens-59-brightgreen)
![Mobile](https://img.shields.io/badge/Mobile-31%20screens-blue)
![Web](https://img.shields.io/badge/Web%2FDesktop-28%20screens-purple)
![Design](https://img.shields.io/badge/Design%20System-Digital%20Majlis-gold)

## Overview

**GOJI2027 Digital Majlis** is a political campaign management platform built with the "Digital Majlis" design philosophy - blending authoritative command with welcoming accessibility through high-end editorial design.

### Design Philosophy: The Digital Majlis
- **Intentional Asymmetry** - Breaking the grid for dynamic movement
- **Atmospheric Depth** - Layered paper philosophy with tonal shifts
- **Cultural Modernism** - High-tech data viz meets human storytelling
- **No-Line Rule** - Tonal background shifts instead of borders

## Screen Inventory

### Complete Platform Overview

| Platform | Citizens Portal | Admin Dashboard | Total |
|----------|----------------|-----------------|-------|
| **Mobile** | 5 | 26 | **31** |
| **Web/Desktop** | 12 | 16 | **28** |
| **TOTAL** | **17** | **42** | **59** |

### Mobile Screens (31)

#### Authentication (5)
| Screen | Purpose | Width |
|--------|---------|-------|
| SplashScreen | App entry with branding | 390px |
| LoginSecurely | Secure authentication | 390px |
| SignUpPersonalInfo | Registration step 1 | 390px |
| SignUpRoleLocation | Registration step 2 | 390px |
| ForgotPassword | Password recovery | 390px |

#### Main App (10)
| Screen | Purpose | Width |
|--------|---------|-------|
| HomeProgressTracker | Field agent dashboard | 390px |
| CandidateDashboard | Candidate view | 390px |
| CampaignLandingPage | Campaign landing | 390px |
| CampaignManifesto | Manifesto viewer | 390px |
| AboutVision | Mission/Vision | 390px |
| CoordinatorOverview | Coordinator tools | 390px |
| GlobalDiasporaHub | Diaspora mobile | 390px |
| SettingsHub | App settings | 390px |
| MyProfile | User profile | 390px |
| Notifications | Push notifications | 390px |

#### Voter Management (5)
| Screen | Purpose | Width |
|--------|---------|-------|
| FindPollingUnit | Polling locator | 390px |
| InteractiveFieldMap | Field map view | 390px |
| VotersSearchList | Voter database | 390px |
| VoterProfileDetail | Voter details | 390px |
| LogNewInteraction | Log outreach | 390px |

#### Communication (6)
| Screen | Purpose | Width |
|--------|---------|-------|
| ChatList | Message list | 390px |
| NewChatContacts | New conversation | 390px |
| MessagingInterface | Chat view | 390px |
| OutreachChat | Outreach messaging | 390px |
| VOIPCall | Voice/Video calls | 390px |
| CreateGroup | Group creation | 390px |

#### Team Management (3)
| Screen | Purpose | Width |
|--------|---------|-------|
| TeamManagement | Team coordination | 390px |
| PerformanceAnalytics | Personal metrics | 390px |
| EditProfile | Profile editing | 390px |

#### Events & Donations (2)
| Screen | Purpose | Width |
|--------|---------|-------|
| EventsCalendar | Event calendar | Responsive |
| DonationPortal | Donation processing | Responsive |

### Web/Desktop Screens (28)

#### Citizens Portal Web (12)
| # | Screen | Purpose | Status |
|---|--------|---------|--------|
| 1 | Web Landing Page | Public homepage | From Stitch |
| 2 | Web About & Vision | Mission/Vision web | From Stitch |
| 3 | Web Manifesto | Full manifesto | From Stitch |
| 4 | Web Find Polling Unit | Polling locator web | From Stitch |
| 5 | Diaspora Connect (Web) | Diaspora portal | From Stitch |
| 6 | Diaspora Engagement Module | Diaspora management | From Stitch |
| 7 | News & Media Gallery | Press center | From Stitch |
| 8 | **WebPublicChat** | Support chat | ✅ NEW |
| 9 | **WebSettings** | Settings panel | ✅ NEW |
| 10 | **WebNotifications** | Notification center | ✅ NEW |
| 11 | **EventsCalendar** | Events management | ✅ NEW |
| 12 | **DonationPortal** | Secure donations | ✅ NEW |

#### Admin Dashboard Web (16)
All sourced from Stitch:
- Executive Command Dashboard
- Strategy & Initiatives Center
- General Intelligence Module
- Voter Intelligence Table
- Campaign Audit & Reports
- Financials & Fundraising Module
- Zone B Command Map
- Outreach Hub
- Volunteer Dashboard Portal
- Volunteer Management Module
- User Management: Directory
- User Management: Profile & Permissions
- User Management: Roles & Hierarchy
- MFA Verification
- Account Recovery
- Text Document

## Features

### Core Modules
- **Voter Management** - Track, engage, and manage voter relationships
- **Communication Hub** - Chat, VOIP calls, and group messaging
- **Team Management** - Coordinate field agents and volunteers
- **Performance Analytics** - Real-time progress tracking and insights
- **Interactive Maps** - Field deployment and polling unit locations
- **Diaspora Connect** - Engage with global diaspora communities
- **Events Management** - Calendar, registration, and management
- **Donation Portal** - Secure payment processing with tiered benefits

### Key Capabilities
- Secure authentication with biometric support
- Offline-first data synchronization
- Real-time chat and calling
- Push notifications for priority voters
- Progress tracking with visual analytics
- Ward-based deployment management
- Category-filtered notification center
- Anonymous donation options
- Multi-payment method support (Card, Bank, USSD, Wallet)

## Tech Stack

### Mobile
- **Framework**: React Native + Expo
- **Navigation**: React Navigation (Stack + Bottom Tabs)
- **Styling**: Custom design system with Digital Majlis theme
- **Icons**: Ionicons + Material Symbols
- **Maps**: React Native Maps
- **Storage**: AsyncStorage

### Web/Desktop
- **Framework**: React Native Web
- **Styling**: Extended design tokens for desktop
- **Navigation**: Sidebar navigation pattern
- **Responsive**: Breakpoints at 768px, 1024px, 1440px

## Design System

### Color Palette
```javascript
// Authority Green (Primary)
primary: '#00450d'
primaryContainer: '#1b5e20'

// Gold Accent (Secondary)
secondary: '#755b00'
secondaryContainer: '#fed255'

// Deep Blue (Tertiary)
tertiary: '#003683'
tertiaryContainer: '#184da7'

// Surface Hierarchy
surface: '#f7f9ff'
surfaceContainerLow: '#edf4ff'
surfaceContainer: '#e3efff'
surfaceContainerHigh: '#d7e9ff'
```

### Typography
- **Font Family**: Inter
- **Scale**: Material Design 3 typography scale with web extensions
- **Display**: Tight letter-spacing for editorial feel (64px max)
- **Headline**: Large scale for desktop (40px)
- **Label**: Uppercase with +0.05em tracking for metadata

### Key Components
- **Silk Finish Button** - Gradient primary CTA (135° angle)
- **Glass Header** - Frosted glass effect with backdrop blur
- **Progress Card** - Command Meter with circular progress
- **List Items** - No dividers, using tonal background shifts
- **Sidebar Navigation** - Desktop navigation with active states
- **Data Tables** - Enhanced tables for web admin views

### Responsive Breakpoints
| Breakpoint | Width | Columns | Sidebar |
|------------|-------|---------|---------|
| Mobile | 0-767px | 1 | ❌ |
| Tablet | 768-1023px | 2 | ❌ |
| Desktop | 1024-1439px | 3 | ✅ |
| Wide | 1440px+ | 4 | ✅ |

## Project Structure

```
GOJI2027-mobile/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Navigation.js     # TopAppBar, BottomNavBar, FAB
│   │   └── Components.js     # Buttons, Cards, Inputs, etc.
│   ├── screens/              # Screen components
│   │   ├── mobile/           # 31 mobile screens
│   │   ├── desktop/          # Admin desktop screens
│   │   ├── events/
│   │   │   └── EventsCalendar.js
│   │   └── donations/
│   │       └── DonationPortal.js
│   ├── web/                  # Web/Desktop screens
│   │   ├── screens/
│   │   │   ├── WebPublicChat.js      ✅ NEW
│   │   │   ├── WebSettings.js        ✅ NEW
│   │   │   └── WebNotifications.js   ✅ NEW
│   │   ├── theme.web.js      # Web design tokens
│   │   └── index.js          # Web exports
│   ├── navigation/           # Navigation configuration
│   │   └── AppNavigator.js
│   ├── theme.js              # Mobile design tokens
│   └── assets/               # Images, icons, fonts
├── docs/                     # Documentation
│   ├── COMPLETE_SCREEN_INVENTORY.md  # Master catalog
│   ├── STITCH_WEB_MOBILE_VERIFICATION.md
│   └── SCREEN_INVENTORY.md
├── package.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- Expo CLI
- iOS Simulator or Android Emulator

### Installation

```bash
# Clone the repository
git clone https://github.com/klmayua/GOJI2027-mobile.git
cd GOJI2027-mobile

# Install dependencies
npm install

# Start the development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run web version
npm run web
```

### Environment Variables
Create a `.env` file:
```
API_URL=https://api.goji2027.org
MAP_API_KEY=your_google_maps_key
```

## Build & Deploy

### Build for Production

```bash
# Build for Android
expo build:android

# Build for iOS
expo build:ios

# Build web version
expo build:web
```

### Distribution
- **Internal Testing**: Expo Go
- **Beta**: TestFlight (iOS), Google Play Beta (Android)
- **Production**: App Store, Google Play Store
- **Web**: Deploy to Vercel, Netlify, or AWS

## Design Assets

All screen designs are maintained in **Google Stitch**:
- **Project URL**: https://stitch.withgoogle.com/projects/13678039347162572236
- **Design System**: Digital Majlis (Material Design 3 based)
- **Mobile Screens**: 31 screens at 390px width
- **Web Screens**: 28 screens at 1280px-2560px width

## Implementation Status

### ✅ Complete (59/59 screens)

| Category | Status | Count |
|----------|--------|-------|
| Mobile Screens | ✅ Complete | 31/31 |
| Web/Desktop Screens | ✅ Complete | 28/28 |
| Design System | ✅ Complete | Mobile + Web |
| Documentation | ✅ Complete | 3 documents |
| Git Repository | ✅ Complete | Committed |

### Newly Created Screens (5)
1. **WebPublicChat** - Citizens support chat with live agent sidebar
2. **WebSettings** - Comprehensive settings with accessibility options
3. **WebNotifications** - Advanced notification center with category filtering
4. **EventsCalendar** - Full event management with registration
5. **DonationPortal** - Secure 3-step donation with tiered benefits

## GitHub Repository

**Repository**: https://github.com/klmayua/GOJI2027-mobile

### Push Instructions (if needed)
```bash
# If you have local changes to push
cd GOJI2027-mobile
git remote add origin https://github.com/klmayua/GOJI2027-mobile.git
git branch -M main
git push -u origin main
```

## Contributing

1. Follow the existing code structure
2. Use the design system components
3. Maintain the "No-Line Rule" - use tonal shifts instead of borders
4. Test on both iOS and Android
5. Ensure responsive design for web screens

## License

MIT License - See LICENSE file

## Support

For support, email support@goji2027.org or join our Slack channel.

---

**GOJI2027 Digital Majlis** - The Statesman's Digital Command
Built with ❤️ for democratic engagement

**Last Updated**: March 26, 2026
**Total Screens**: 59 | **Mobile**: 31 | **Web/Desktop**: 28
