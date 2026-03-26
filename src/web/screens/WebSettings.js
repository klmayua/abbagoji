// WebSettings.js - Citizens Portal Web Settings Panel
// Desktop version of settings with expanded options

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { webTheme } from '../theme.web';

const SETTINGS_SECTIONS = [
  {
    id: 'profile',
    title: 'Profile Information',
    icon: 'person',
    description: 'Manage your personal information and public profile',
  },
  {
    id: 'notifications',
    title: 'Notification Preferences',
    icon: 'notifications',
    description: 'Control how and when you receive updates',
  },
  {
    id: 'privacy',
    title: 'Privacy & Security',
    icon: 'shield-checkmark',
    description: 'Manage your data and security settings',
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    icon: 'accessibility',
    description: 'Customize your viewing and interaction preferences',
  },
  {
    id: 'language',
    title: 'Language & Region',
    icon: 'language',
    description: 'Set your preferred language and regional settings',
  },
  {
    id: 'communication',
    title: 'Communication',
    icon: 'chatbubbles',
    description: 'Manage email preferences and contact methods',
  },
];

const NOTIFICATION_SETTINGS = [
  { id: 'campaign_updates', label: 'Campaign Updates', description: 'News and announcements from the campaign', default: true },
  { id: 'event_reminders', label: 'Event Reminders', description: 'Upcoming events and rallies near you', default: true },
  { id: 'volunteer_opportunities', label: 'Volunteer Opportunities', description: 'New ways to get involved', default: false },
  { id: 'polling_info', label: 'Polling Information', description: 'Updates about polling units and voting', default: true },
  { id: 'newsletter', label: 'Weekly Newsletter', description: 'Digest of campaign news and activities', default: true },
];

export default function WebSettings({ navigation }) {
  const [activeSection, setActiveSection] = useState('profile');
  const [notifications, setNotifications] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);

  const toggleNotification = (id) => {
    setNotifications((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderProfileSection = () => (
    <View style={styles.sectionContent}>
      <View style={styles.profileHeader}>
        <View style={styles.profileAvatar}>
          <Text style={styles.profileAvatarText}>JD</Text>
          <TouchableOpacity style={styles.changePhotoButton}>
            <Ionicons name="camera" size={16} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@example.com</Text>
          <Text style={styles.profileType}>Registered Voter</Text>
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Display Name</Text>
        <TextInput style={styles.formInput} defaultValue="John Doe" />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Bio</Text>
        <TextInput
          style={[styles.formInput, styles.textArea]}
          multiline
          numberOfLines={3}
          defaultValue="Passionate about community development and positive change."
        />
      </View>

      <View style={styles.formRow}>
        <View style={[styles.formGroup, { flex: 1, marginRight: 16 }]}>
          <Text style={styles.formLabel}>Phone</Text>
          <TextInput style={styles.formInput} defaultValue="+234 800 000 0000" />
        </View>
        <View style={[styles.formGroup, { flex: 1 }]}>
          <Text style={styles.formLabel}>Location</Text>
          <TextInput style={styles.formInput} defaultValue="Damaturu, Yobe" />
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Occupation</Text>
        <TextInput style={styles.formInput} defaultValue="Civil Servant" />
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );

  const renderNotificationsSection = () => (
    <View style={styles.sectionContent}>
      <Text style={styles.sectionDescription}>
        Customize how you receive notifications. You can change these settings at any time.
      </Text>

      {NOTIFICATION_SETTINGS.map((setting) => (
        <View key={setting.id} style={styles.notificationItem}>
          <View style={styles.notificationInfo}>
            <Text style={styles.notificationLabel}>{setting.label}</Text>
            <Text style={styles.notificationDescription}>{setting.description}</Text>
          </View>
          <Switch
            value={notifications[setting.id] ?? setting.default}
            onValueChange={() => toggleNotification(setting.id)}
            trackColor={{ false: webTheme.colors.surfaceContainer, true: webTheme.colors.primary + '50' }}
            thumbColor={notifications[setting.id] ?? setting.default ? webTheme.colors.primary : webTheme.colors.outline}
          />
        </View>
      ))}

      <View style={styles.dangerZone}>
        <Text style={styles.dangerZoneTitle}>Danger Zone</Text>
        <TouchableOpacity style={styles.dangerButton}>
          <Text style={styles.dangerButtonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderPrivacySection = () => (
    <View style={styles.sectionContent}>
      <View style={styles.privacyCard}>
        <Ionicons name="shield-checkmark" size={32} color={webTheme.colors.primary} />
        <Text style={styles.privacyTitle}>Your Data is Secure</Text>
        <Text style={styles.privacyText}>
          We use industry-standard encryption to protect your personal information.
          Your data is never shared with third parties without your consent.
        </Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Change Password</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Current password"
          secureTextEntry
        />
        <TextInput
          style={[styles.formInput, { marginTop: 12 }]}
          placeholder="New password"
          secureTextEntry
        />
        <TextInput
          style={[styles.formInput, { marginTop: 12 }]}
          placeholder="Confirm new password"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Update Password</Text>
      </TouchableOpacity>
    </View>
  );

  const renderAccessibilitySection = () => (
    <View style={styles.sectionContent}>
      <View style={styles.accessibilityItem}>
        <View style={styles.accessibilityInfo}>
          <Text style={styles.accessibilityLabel}>Dark Mode</Text>
          <Text style={styles.accessibilityDescription}>Switch between light and dark themes</Text>
        </View>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          trackColor={{ false: webTheme.colors.surfaceContainer, true: webTheme.colors.primary + '50' }}
          thumbColor={darkMode ? webTheme.colors.primary : webTheme.colors.outline}
        />
      </View>

      <View style={styles.accessibilityItem}>
        <View style={styles.accessibilityInfo}>
          <Text style={styles.accessibilityLabel}>High Contrast</Text>
          <Text style={styles.accessibilityDescription}>Increase contrast for better visibility</Text>
        </View>
        <Switch
          value={highContrast}
          onValueChange={setHighContrast}
          trackColor={{ false: webTheme.colors.surfaceContainer, true: webTheme.colors.primary + '50' }}
          thumbColor={highContrast ? webTheme.colors.primary : webTheme.colors.outline}
        />
      </View>

      <View style={styles.accessibilityItem}>
        <View style={styles.accessibilityInfo}>
          <Text style={styles.accessibilityLabel}>Large Text</Text>
          <Text style={styles.accessibilityDescription}>Increase text size throughout the app</Text>
        </View>
        <Switch
          value={largeText}
          onValueChange={setLargeText}
          trackColor={{ false: webTheme.colors.surfaceContainer, true: webTheme.colors.primary + '50' }}
          thumbColor={largeText ? webTheme.colors.primary : webTheme.colors.outline}
        />
      </View>
    </View>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return renderProfileSection();
      case 'notifications':
        return renderNotificationsSection();
      case 'privacy':
        return renderPrivacySection();
      case 'accessibility':
        return renderAccessibilitySection();
      default:
        return (
          <View style={styles.sectionContent}>
            <Text style={styles.sectionDescription}>
              This section is under development.
            </Text>
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <Text style={styles.sidebarTitle}>Settings</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {SETTINGS_SECTIONS.map((section) => (
            <TouchableOpacity
              key={section.id}
              style={[
                styles.menuItem,
                activeSection === section.id && styles.menuItemActive,
              ]}
              onPress={() => setActiveSection(section.id)}
            >
              <Ionicons
                name={section.icon}
                size={20}
                color={activeSection === section.id ? webTheme.colors.primary : webTheme.colors.onSurfaceVariant}
              />
              <Text
                style={[
                  styles.menuItemText,
                  activeSection === section.id && styles.menuItemTextActive,
                ]}
              >
                {section.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.mainContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            {SETTINGS_SECTIONS.find((s) => s.id === activeSection)?.title}
          </Text>
          <Text style={styles.headerDescription}>
            {SETTINGS_SECTIONS.find((s) => s.id === activeSection)?.description}
          </Text>
        </View>

        {renderContent()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: webTheme.colors.surface,
  },
  sidebar: {
    width: 320,
    backgroundColor: webTheme.colors.sidebar,
    borderRightWidth: 1,
    borderRightColor: webTheme.colors.sidebarBorder,
    padding: webTheme.layout.contentPadding,
  },
  sidebarTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: webTheme.colors.onSurface,
    marginBottom: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: webTheme.layout.cardBorderRadius,
    marginBottom: 8,
  },
  menuItemActive: {
    backgroundColor: webTheme.colors.primary + '10',
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: '500',
    color: webTheme.colors.onSurface,
    marginLeft: 12,
  },
  menuItemTextActive: {
    color: webTheme.colors.primary,
    fontWeight: '600',
  },
  mainContent: {
    flex: 1,
  },
  header: {
    padding: webTheme.layout.contentPadding,
    borderBottomWidth: 1,
    borderBottomColor: webTheme.colors.sidebarBorder,
    backgroundColor: webTheme.colors.surface,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: webTheme.colors.onSurface,
    marginBottom: 8,
  },
  headerDescription: {
    fontSize: 15,
    color: webTheme.colors.onSurfaceVariant,
  },
  sectionContent: {
    padding: webTheme.layout.contentPadding,
  },
  sectionDescription: {
    fontSize: 15,
    color: webTheme.colors.onSurfaceVariant,
    marginBottom: 24,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: webTheme.colors.primaryContainer,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  profileAvatarText: {
    fontSize: 28,
    fontWeight: '700',
    color: webTheme.colors.onPrimaryContainer,
  },
  changePhotoButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: webTheme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: webTheme.colors.surface,
  },
  profileInfo: {
    marginLeft: 20,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    color: webTheme.colors.onSurface,
  },
  profileEmail: {
    fontSize: 14,
    color: webTheme.colors.onSurfaceVariant,
    marginTop: 4,
  },
  profileType: {
    fontSize: 13,
    color: webTheme.colors.primary,
    marginTop: 4,
    fontWeight: '500',
  },
  formGroup: {
    marginBottom: 24,
  },
  formRow: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  formLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: webTheme.colors.onSurface,
    marginBottom: 8,
  },
  formInput: {
    backgroundColor: webTheme.colors.surfaceContainerLow,
    borderRadius: webTheme.layout.cardBorderRadius,
    padding: 14,
    fontSize: 15,
    color: webTheme.colors.onSurface,
    borderWidth: 1,
    borderColor: webTheme.colors.outlineVariant,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: webTheme.colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: webTheme.layout.cardBorderRadius,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  saveButtonText: {
    color: webTheme.colors.onPrimary,
    fontSize: 15,
    fontWeight: '600',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: webTheme.colors.sidebarBorder,
  },
  notificationInfo: {
    flex: 1,
    marginRight: 16,
  },
  notificationLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: webTheme.colors.onSurface,
    marginBottom: 4,
  },
  notificationDescription: {
    fontSize: 13,
    color: webTheme.colors.onSurfaceVariant,
  },
  dangerZone: {
    marginTop: 48,
    padding: 24,
    backgroundColor: '#fef2f2',
    borderRadius: webTheme.layout.cardBorderRadius,
    borderWidth: 1,
    borderColor: '#fecaca',
  },
  dangerZoneTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#dc2626',
    marginBottom: 16,
  },
  dangerButton: {
    borderWidth: 1,
    borderColor: '#dc2626',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: webTheme.layout.cardBorderRadius,
    alignSelf: 'flex-start',
  },
  dangerButtonText: {
    color: '#dc2626',
    fontSize: 14,
    fontWeight: '600',
  },
  privacyCard: {
    backgroundColor: webTheme.colors.primary + '08',
    padding: 24,
    borderRadius: webTheme.layout.cardBorderRadius,
    marginBottom: 32,
    alignItems: 'center',
  },
  privacyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: webTheme.colors.onSurface,
    marginTop: 12,
    marginBottom: 8,
  },
  privacyText: {
    fontSize: 14,
    color: webTheme.colors.onSurfaceVariant,
    textAlign: 'center',
    lineHeight: 20,
  },
  accessibilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: webTheme.colors.sidebarBorder,
  },
  accessibilityInfo: {
    flex: 1,
    marginRight: 16,
  },
  accessibilityLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: webTheme.colors.onSurface,
    marginBottom: 4,
  },
  accessibilityDescription: {
    fontSize: 13,
    color: webTheme.colors.onSurfaceVariant,
  },
});
