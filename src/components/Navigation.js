import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { colors, typography, spacing, shapes, shadows } from '../theme';
import { Ionicons } from '@expo/vector-icons';

export const TopAppBar = ({ title, subtitle, onNotificationPress, avatar }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.surface} />
      <View style={styles.content}>
        <View style={styles.leftSection}>
          <View style={styles.avatar}>
            {avatar ? (
              <Image source={{ uri: avatar }} style={styles.avatarImage} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Text style={styles.avatarText}>A</Text>
              </View>
            )}
          </View>
          <View style={styles.titleSection}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.subtitleRow}>
              <Ionicons name="cloud-done" size={12} color={colors.primary} />
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationBtn} onPress={onNotificationPress}>
          <Ionicons name="notifications-outline" size={24} color={colors.onSurface} />
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export const BottomNavBar = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', icon: 'grid', label: 'Home' },
    { id: 'voters', icon: 'people', label: 'Voters' },
    { id: 'log', icon: 'checkmark-circle', label: 'Log' },
    { id: 'map', icon: 'map', label: 'Map' },
    { id: 'settings', icon: 'settings', label: 'Settings' },
  ];

  return (
    <View style={styles.navContainer}>
      <View style={styles.navContent}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[styles.tab, activeTab === tab.id && styles.activeTab]}
            onPress={() => onTabChange(tab.id)}
          >
            <Ionicons
              name={tab.icon}
              size={24}
              color={activeTab === tab.id ? colors.primary : colors.outline}
            />
            <Text style={[styles.tabLabel, activeTab === tab.id && styles.activeTabLabel]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export const FloatingActionButton = ({ onPress, icon = 'add' }) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Ionicons name={icon} size={28} color={colors.onPrimary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.outlineVariant,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[3],
    paddingTop: spacing[6] + 20, // Status bar padding
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: shapes.full,
    backgroundColor: colors.primaryContainer,
    overflow: 'hidden',
    marginRight: spacing[3],
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  avatarPlaceholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: colors.onPrimaryContainer,
    fontSize: 16,
    fontWeight: '600',
  },
  titleSection: {
    justifyContent: 'center',
  },
  title: {
    fontSize: typography.title.large.fontSize,
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: -0.02,
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  subtitle: {
    fontSize: typography.label.small.fontSize,
    color: colors.primary,
    opacity: 0.8,
    marginLeft: spacing[1],
    textTransform: 'uppercase',
    letterSpacing: 0.05,
  },
  notificationBtn: {
    width: 40,
    height: 40,
    borderRadius: shapes.full,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: colors.surfaceContainer,
  },
  navContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.surface,
    ...shadows.medium,
    paddingBottom: spacing[4],
    paddingTop: spacing[2],
  },
  navContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: spacing[4],
  },
  tab: {
    alignItems: 'center',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: shapes.large,
  },
  activeTab: {
    backgroundColor: colors.primaryFixed,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: colors.outline,
    marginTop: spacing[1],
    textTransform: 'uppercase',
    letterSpacing: 0.05,
  },
  activeTabLabel: {
    color: colors.primary,
  },
  fab: {
    position: 'absolute',
    bottom: 100,
    right: spacing[6],
    width: 56,
    height: 56,
    borderRadius: shapes.full,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.large,
  },
});
