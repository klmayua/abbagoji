# GOJI2027 Digital Majlis - Mobile App

A React Native/Expo mobile application for the GOJI2027 campaign command center.

## Overview

**GOJI2027** is a political campaign management platform built with the "Digital Majlis" design philosophy - blending authoritative command with welcoming accessibility through high-end editorial design.

### Design Philosophy: The Digital Majlis
- **Intentional Asymmetry** - Breaking the grid for dynamic movement
- **Atmospheric Depth** - Layered paper philosophy with tonal shifts
- **Cultural Modernism** - High-tech data viz meets human storytelling

## Features

### Core Modules
- **Voter Management** - Track, engage, and manage voter relationships
- **Communication Hub** - Chat, VOIP calls, and group messaging
- **Team Management** - Coordinate field agents and volunteers
- **Performance Analytics** - Real-time progress tracking and insights
- **Interactive Maps** - Field deployment and polling unit locations
- **Diaspora Connect** - Engage with global diaspora communities

### Key Capabilities
- Secure authentication with biometric support
- Offline-first data synchronization
- Real-time chat and calling
- Push notifications for priority voters
- Progress tracking with visual analytics
- Ward-based deployment management

## Tech Stack

- **Framework**: React Native + Expo
- **Navigation**: React Navigation (Stack + Bottom Tabs)
- **Styling**: Custom design system with Digital Majlis theme
- **Icons**: Ionicons + Material Symbols
- **Maps**: React Native Maps
- **Storage**: AsyncStorage

## Project Structure

```
GOJI2027-mobile/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Navigation.js     # TopAppBar, BottomNavBar, FAB
│   │   └── Components.js     # Buttons, Cards, Inputs, etc.
│   ├── screens/              # Screen components
│   │   ├── SplashScreen.js
│   │   ├── LoginSecurely.js
│   │   ├── HomeProgressTracker.js
│   │   ├── VotersSearchList.js
│   │   ├── SettingsHub.js
│   │   └── ... (44 total screens)
│   ├── navigation/           # Navigation configuration
│   │   └── AppNavigator.js
│   ├── theme.js              # Design tokens, colors, typography
│   └── assets/               # Images, icons, fonts
├── docs/                     # Documentation
│   └── SCREEN_INVENTORY.md
├── package.json
└── README.md
```

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
```

### Typography
- **Font Family**: Inter
- **Scale**: Material Design 3 typography scale
- **Display**: Tight letter-spacing for editorial feel
- **Label**: Uppercase with +0.05em tracking for metadata

### Key Components
- **Silk Finish Button** - Gradient primary CTA (135° angle)
- **Glass Header** - Frosted glass effect with backdrop blur
- **Progress Card** - Command Meter with circular progress
- **List Items** - No dividers, using tonal background shifts

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
```

### Environment Variables
Create a `.env` file:
```
API_URL=https://api.goji2027.org
MAP_API_KEY=your_google_maps_key
```

## Screen Inventory

### Implemented Screens (44 total)

| Category | Count | Screens |
|----------|-------|---------|
| Authentication | 5 | Splash, Login, SignUp (×2), ForgotPassword |
| Main App | 13 | Home, Dashboard, Landing, Manifesto, About, Coordinator, Diaspora, Settings, Profile, Notifications, EditProfile |
| Voter Management | 6 | Search, Detail, Map, Log Interaction, Find Polling Unit |
| Communication | 8 | Chat, Messages, VOIP, Contacts, Groups, List |
| Team Management | 4 | Team, Performance, Analytics |

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

## Design Assets

All screen designs are maintained in **Google Stitch**:
- **Project URL**: https://stitch.withgoogle.com/projects/13678039347162572236
- **Design System**: Digital Majlis (Material Design 3 based)
- **Mobile Screens**: 27 screens at 390px/780px width

## Contributing

1. Follow the existing code structure
2. Use the design system components
3. Maintain the "No-Line Rule" - use tonal shifts instead of borders
4. Test on both iOS and Android

## License

MIT License - See LICENSE file

## Support

For support, email support@goji2027.org or join our Slack channel.

---

**GOJI2027** - The Statesman's Digital Command
Built with ❤️ for democratic engagement
