// App.js - Main Citizens Portal Entry Point
// Web-compatible entry point for the GOJI2027 Digital Majlis

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, shapes } from './theme';

// Import Citizens Portal Screens
import CampaignLandingPage from './screens/CampaignLandingPage';
import AboutVision from './screens/AboutVision';
import CampaignManifesto from './screens/CampaignManifesto';
import FindPollingUnit from './screens/FindPollingUnit';
import GlobalDiasporaHub from './screens/GlobalDiasporaHub';
import EventsCalendar from './screens/events/EventsCalendar';
import DonationPortal from './screens/donations/DonationPortal';
import WebPublicChat from './web/screens/WebPublicChat';
import WebSettings from './web/screens/WebSettings';
import WebNotifications from './web/screens/WebNotifications';

const PORTAL_SECTIONS = [
  {
    id: 'home',
    title: 'Home',
    icon: 'home',
    description: 'Campaign landing and overview',
  },
  {
    id: 'about',
    title: 'About',
    icon: 'information-circle',
    description: 'Mission, vision, and manifesto',
  },
  {
    id: 'voting',
    title: 'Voting',
    icon: 'locate',
    description: 'Find your polling unit',
  },
  {
    id: 'diaspora',
    title: 'Diaspora',
    icon: 'globe',
    description: 'Global diaspora connect',
  },
  {
    id: 'events',
    title: 'Events',
    icon: 'calendar',
    description: 'Campaign events and calendar',
  },
  {
    id: 'donate',
    title: 'Donate',
    icon: 'heart',
    description: 'Support the campaign',
  },
  {
    id: 'chat',
    title: 'Support',
    icon: 'chatbubbles',
    description: 'Get help and support',
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: 'notifications',
    description: 'Stay updated',
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: 'settings',
    description: 'Preferences and account',
  },
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [showWebChat, setShowWebChat] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const renderMainContent = () => {
    switch (currentScreen) {
      case 'home':
        return <CampaignLandingPage />;
      case 'about':
        return <AboutVision />;
      case 'voting':
        return <FindPollingUnit />;
      case 'diaspora':
        return <GlobalDiasporaHub />;
      case 'events':
        return <EventsCalendar />;
      case 'donate':
        return <DonationPortal />;
      default:
        return <CampaignLandingPage />;
    }
  };

  const handleNavigation = (sectionId) => {
    if (sectionId === 'chat') {
      setShowWebChat(true);
    } else if (sectionId === 'notifications') {
      setShowNotifications(true);
    } else if (sectionId === 'settings') {
      setShowSettings(true);
    } else {
      setCurrentScreen(sectionId);
    }
  };

  const renderSidebar = () => (
    <View style={styles.sidebar}>
      <View style={styles.sidebarHeader}>
        <View style={styles.logoContainer}>
          <Ionicons name="flag" size={32} color={colors.primary} />
        </View>
        <Text style={styles.sidebarTitle}>GOJI2027</Text>
        <Text style={styles.sidebarSubtitle}>Digital Majlis</Text>
      </View>

      <ScrollView style={styles.sidebarContent}>
        {PORTAL_SECTIONS.map((section) => (
          <TouchableOpacity
            key={section.id}
            style={[
              styles.navItem,
              currentScreen === section.id && styles.navItemActive,
            ]}
            onPress={() => handleNavigation(section.id)}
          >
            <Ionicons
              name={section.icon}
              size={22}
              color={currentScreen === section.id ? colors.primary : colors.onSurfaceVariant}
            />
            <View style={styles.navTextContainer}>
              <Text
                style={[
                  styles.navTitle,
                  currentScreen === section.id && styles.navTitleActive,
                ]}
              >
                {section.title}
              </Text>
              <Text style={styles.navDescription}>{section.description}</Text>
            </View>
            {currentScreen === section.id && (
              <View style={styles.activeIndicator} />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.sidebarFooter}>
        <Text style={styles.versionText}>v1.0.0</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderSidebar()}
      <View style={styles.mainContent}>
        {renderMainContent()}
      </View>

      {/* Modal Screens */}
      {showWebChat && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Support Chat</Text>
              <TouchableOpacity onPress={() => setShowWebChat(false)}>
                <Ionicons name="close" size={24} color={colors.onSurface} />
              </TouchableOpacity>
            </View>
            <WebPublicChat />
          </View>
        </View>
      )}

      {showNotifications && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Notifications</Text>
              <TouchableOpacity onPress={() => setShowNotifications(false)}>
                <Ionicons name="close" size={24} color={colors.onSurface} />
              </TouchableOpacity>
            </View>
            <WebNotifications />
          </View>
        </View>
      )}

      {showSettings && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Settings</Text>
              <TouchableOpacity onPress={() => setShowSettings(false)}>
                <Ionicons name="close" size={24} color={colors.onSurface} />
              </TouchableOpacity>
            </View>
            <WebSettings />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.surface,
  },
  sidebar: {
    width: 280,
    backgroundColor: colors.surfaceContainerLow,
    borderRightWidth: 1,
    borderRightColor: colors.outlineVariant,
    padding: spacing[6],
  },
  sidebarHeader: {
    alignItems: 'center',
    marginBottom: spacing[8],
    paddingBottom: spacing[6],
    borderBottomWidth: 1,
    borderBottomColor: colors.outlineVariant,
  },
  logoContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primary + '15',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  sidebarTitle: {
    fontSize: typography.headline.small.fontSize,
    fontWeight: '700',
    color: colors.onSurface,
  },
  sidebarSubtitle: {
    fontSize: typography.body.small.fontSize,
    color: colors.onSurfaceVariant,
    marginTop: spacing[1],
  },
  sidebarContent: {
    flex: 1,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    borderRadius: shapes.large,
    marginBottom: spacing[2],
  },
  navItemActive: {
    backgroundColor: colors.primary + '10',
  },
  navTextContainer: {
    flex: 1,
    marginLeft: spacing[3],
  },
  navTitle: {
    fontSize: typography.body.medium.fontSize,
    fontWeight: '600',
    color: colors.onSurface,
  },
  navTitleActive: {
    color: colors.primary,
  },
  navDescription: {
    fontSize: typography.label.small.fontSize,
    color: colors.onSurfaceVariant,
    marginTop: 2,
  },
  activeIndicator: {
    width: 4,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  sidebarFooter: {
    paddingTop: spacing[4],
    borderTopWidth: 1,
    borderTopColor: colors.outlineVariant,
  },
  versionText: {
    fontSize: typography.label.small.fontSize,
    color: colors.outline,
    textAlign: 'center',
  },
  mainContent: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContainer: {
    width: '90%',
    maxWidth: 900,
    height: '80%',
    backgroundColor: colors.surface,
    borderRadius: shapes.extraLarge,
    overflow: 'hidden',
    ...shapes.shadow,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing[6],
    borderBottomWidth: 1,
    borderBottomColor: colors.outlineVariant,
  },
  modalTitle: {
    fontSize: typography.headline.small.fontSize,
    fontWeight: '700',
    color: colors.onSurface,
  },
});
