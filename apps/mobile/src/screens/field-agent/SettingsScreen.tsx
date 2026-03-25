import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  User,
  Bell,
  Shield,
  Database,
  HelpCircle,
  ChevronRight,
  Moon,
  Globe,
  Smartphone,
  LogOut,
  Mail,
  Lock,
  FileText,
} from 'lucide-react-native';
import { colors } from '../../constants/theme';

const settingsSections = [
  {
    title: 'Account',
    items: [
      { icon: User, label: 'Profile Information', value: 'Ahmed Mohammed' },
      { icon: Mail, label: 'Email', value: 'ahmed@campaign.com' },
      { icon: Lock, label: 'Change Password', value: null },
    ],
  },
  {
    title: 'Preferences',
    items: [
      { icon: Bell, label: 'Notifications', toggle: true },
      { icon: Moon, label: 'Dark Mode', toggle: true },
      { icon: Globe, label: 'Language', value: 'English' },
    ],
  },
  {
    title: 'Data & Storage',
    items: [
      { icon: Database, label: 'Offline Mode', toggle: true },
      { icon: Smartphone, label: 'Auto-sync', value: 'On WiFi only' },
      { icon: FileText, label: 'Clear Cache', value: '24 MB' },
    ],
  },
  {
    title: 'Support',
    items: [
      { icon: HelpCircle, label: 'Help Center', value: null },
      { icon: Shield, label: 'Privacy Policy', value: null },
      { icon: FileText, label: 'Terms of Service', value: null },
    ],
  },
];

export function SettingsScreen() {
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const [offlineMode, setOfflineMode] = React.useState(true);

  const getToggleValue = (label: string) => {
    switch (label) {
      case 'Notifications':
        return notifications;
      case 'Dark Mode':
        return darkMode;
      case 'Offline Mode':
        return offlineMode;
      default:
        return false;
    }
  };

  const setToggleValue = (label: string, value: boolean) => {
    switch (label) {
      case 'Notifications':
        setNotifications(value);
        break;
      case 'Dark Mode':
        setDarkMode(value);
        break;
      case 'Offline Mode':
        setOfflineMode(value);
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
        </View>

        {/* Profile Card */}
        <View style={styles.profileSection}>
          <View style={styles.profileCard}>
            <View style={styles.profileAvatar}>
              <Text style={styles.profileInitials}>AM</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Ahmed Mohammed</Text>
              <Text style={styles.profileRole}>Field Coordinator</Text>
              <Text style={styles.profileZone}>Zone B - Damaturu LGA</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Settings Sections */}
        {settingsSections.map((section, sectionIndex) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.sectionCard}>
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                const isLast = itemIndex === section.items.length - 1;
                return (
                  <TouchableOpacity
                    key={item.label}
                    style={[styles.settingItem, isLast && styles.settingItemLast]}
                  >
                    <View style={styles.settingLeft}>
                      <View
                        style={[
                          styles.settingIcon,
                          {
                            backgroundColor: `${colors.primary.DEFAULT}10`,
                          },
                        ]}
                      >
                        <Icon size={18} color={colors.primary.DEFAULT} />
                      </View>
                      <Text style={styles.settingLabel}>{item.label}</Text>
                    </View>
                    <View style={styles.settingRight}>
                      {item.toggle ? (
                        <Switch
                          value={getToggleValue(item.label)}
                          onValueChange={(value) =>
                            setToggleValue(item.label, value)
                          }
                          trackColor={{
                            false: colors.surface.container,
                            true: `${colors.primary.DEFAULT}50`,
                          }}
                          thumbColor={
                            getToggleValue(item.label)
                              ? colors.primary.DEFAULT
                              : colors.onSurface.variant
                          }
                        />
                      ) : (
                        <>
                          {item.value && (
                            <Text style={styles.settingValue}>{item.value}</Text>
                          )}
                          <ChevronRight
                            size={18}
                            color={colors.onSurface.variant}
                          />
                        </>
                      )}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        ))}

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appVersion}>URADI360 v1.0.0</Text>
          <Text style={styles.appBuild}>Build 2024.1.1</Text>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color={colors.error} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        {/* Footer Spacing */}
        <View style={styles.footer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface.base,
  },
  header: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
  },
  profileSection: {
    padding: 16,
    paddingTop: 0,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  profileAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primary.DEFAULT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitials: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginBottom: 2,
  },
  profileRole: {
    fontSize: 14,
    color: colors.primary.DEFAULT,
    fontWeight: '600',
  },
  profileZone: {
    fontSize: 12,
    color: colors.onSurface.variant,
    marginTop: 2,
  },
  editButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.surface.container,
  },
  editButtonText: {
    fontSize: 14,
    color: colors.primary.DEFAULT,
    fontWeight: '600',
  },
  section: {
    padding: 16,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.onSurface.variant,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
    marginLeft: 4,
  },
  sectionCard: {
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.outline.variant,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: `${colors.outline.variant}50`,
  },
  settingItemLast: {
    borderBottomWidth: 0,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingLabel: {
    fontSize: 15,
    color: colors.onSurface.DEFAULT,
    fontWeight: '500',
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  settingValue: {
    fontSize: 14,
    color: colors.onSurface.variant,
  },
  appInfo: {
    alignItems: 'center',
    marginTop: 24,
  },
  appVersion: {
    fontSize: 14,
    color: colors.onSurface.DEFAULT,
    fontWeight: '600',
  },
  appBuild: {
    fontSize: 12,
    color: colors.onSurface.variant,
    marginTop: 2,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginHorizontal: 16,
    marginTop: 24,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: `${colors.error}10`,
    borderWidth: 1,
    borderColor: `${colors.error}30`,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.error,
  },
  footer: {
    height: 40,
  },
});
