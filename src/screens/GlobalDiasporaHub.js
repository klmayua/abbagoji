import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, typography, spacing } from '../theme';
import { TopAppBar, BottomNavBar } from '../components/Navigation';

export default function SCREEN_NAME({ navigation }) {
  return (
    <View style={styles.container}>
      <TopAppBar
        title="SCREEN_TITLE"
        subtitle="SCREEN_SUBTITLE"
        onNotificationPress={() => {}}
      />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderIcon}>🏛️</Text>
          <Text style={styles.placeholderTitle}>SCREEN_TITLE</Text>
          <Text style={styles.placeholderText}>
            This screen is part of the GOJI2027 Digital Majlis mobile app.
            Content coming soon.
          </Text>
        </View>
      </ScrollView>
      <BottomNavBar activeTab="home" onTabChange={() => {}} />
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
    padding: spacing[6],
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 500,
  },
  placeholder: {
    alignItems: 'center',
  },
  placeholderIcon: {
    fontSize: 64,
    marginBottom: spacing[4],
  },
  placeholderTitle: {
    fontSize: typography.headline.small.fontSize,
    fontWeight: '700',
    color: colors.onSurface,
    marginBottom: spacing[3],
  },
  placeholderText: {
    fontSize: typography.body.medium.fontSize,
    color: colors.onSurfaceVariant,
    textAlign: 'center',
    maxWidth: 300,
  },
});
