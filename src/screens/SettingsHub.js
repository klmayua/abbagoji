import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, shapes } from '../theme';
import { TopAppBar, BottomNavBar } from '../components/Navigation';

const SETTINGS_SECTIONS = [
  {
    title: 'Account',
    items: [
      { id: 'profile', icon: 'person', label: 'Edit Profile', action: 'navigate' },
      { id: 'security', icon: 'shield-checkmark', label: 'Security', action: 'navigate' },
      { id: 'notifications', icon: 'notifications', label: 'Notifications', action: 'navigate' },
    ],
  },
  {
    title: 'Preferences',
    items: [
      { id: 'darkMode', icon: 'moon', label: 'Dark Mode', action: 'toggle', value: false },
      { id: 'sync', icon: 'cloud-sync', label: 'Auto Sync', action: 'toggle', value: true },
      { id: 'language', icon: 'language', label: 'Language', action: 'navigate', value: 'English' },
    ],
  },
  {
    title: 'Support',
    items: [
      { id: 'help', icon: 'help-circle', label: 'Help Center', action: 'navigate' },
      { id: 'feedback', icon: 'chatbubble', label: 'Send Feedback', action: 'navigate' },
      { id: 'about', icon: 'information-circle', label: 'About', action: 'navigate' },
    ],
  },
];

export default function SettingsHub({ navigation }) {
  const [activeTab, setActiveTab] = useState('settings');
  const [toggles, setToggles] = useState({
    darkMode: false,
    sync: true,
  });

  const toggleSwitch = (id) => {
    setToggles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderSettingItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.settingItem}
      onPress={() => {
        if (item.action === 'navigate') {
          navigation?.navigate(item.id);
        }
      }}
    >
      <View style={styles.settingIconContainer}>
        <Ionicons name={item.icon} size={20} color={colors.primary} />
      </View>
      <Text style={styles.settingLabel}>{item.label}</Text>

      {item.action === 'toggle' ? (
        <Switch
          value={toggles[item.id]}
          onValueChange={() => toggleSwitch(item.id)}
          trackColor={{ false: colors.surfaceContainer, true: colors.primary + '50' }}
          thumbColor={toggles[item.id] ? colors.primary : colors.outline}
        />
      ) : item.value ? (
        <View style={styles.valueContainer}>
          <Text style={styles.valueText}>{item.value}</Text>
          <Ionicons name="chevron-forward" size={20} color={colors.outline} />
        </View>
      ) : (
        <Ionicons name="chevron-forward" size={20} color={colors.outline} />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TopAppBar
        title="Settings"
        subtitle="Customize your experience"
        onNotificationPress={() => {}}
      />

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {SETTINGS_SECTIONS.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.sectionContent}>
              {section.items.map(renderSettingItem)}
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={20} color={colors.error} />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.versionText}>GOJI2027 v1.0.0</Text>
          <Text style={styles.copyright}>© 2027 Digital Majlis. All rights reserved.</Text>
        </View>
      </ScrollView>

      <BottomNavBar activeTab={activeTab} onTabChange={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingBottom: 100,
  },
  section: {
    marginTop: spacing[6],
    paddingHorizontal: spacing[6],
  },
  sectionTitle: {
    fontSize: typography.label.small.fontSize,
    fontWeight: '700',
    color: colors.outline,
    textTransform: 'uppercase',
    letterSpacing: 0.1,
    marginBottom: spacing[3],
  },
  sectionContent: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: shapes.large,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: colors.surfaceContainer,
  },
  settingIconContainer: {
    width: 40,
    height: 40,
    borderRadius: shapes.medium,
    backgroundColor: colors.surfaceContainerLow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingLabel: {
    flex: 1,
    fontSize: typography.body.large.fontSize,
    color: colors.onSurface,
    marginLeft: spacing[3],
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueText: {
    fontSize: typography.body.small.fontSize,
    color: colors.outline,
    marginRight: spacing[2],
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing[8],
    marginHorizontal: spacing[6],
    padding: spacing[4],
    backgroundColor: colors.error + '10',
    borderRadius: shapes.large,
  },
  logoutText: {
    fontSize: typography.body.large.fontSize,
    fontWeight: '600',
    color: colors.error,
    marginLeft: spacing[2],
  },
  footer: {
    alignItems: 'center',
    marginTop: spacing[8],
    paddingBottom: spacing[6],
  },
  versionText: {
    fontSize: typography.label.medium.fontSize,
    color: colors.outline,
  },
  copyright: {
    fontSize: typography.label.small.fontSize,
    color: colors.outline,
    marginTop: spacing[1],
  },
});
