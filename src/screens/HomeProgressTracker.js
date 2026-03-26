import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { colors, typography, spacing, shapes, shadows } from '../theme';
import { TopAppBar, BottomNavBar, FloatingActionButton } from '../components/Navigation';
import { ProgressCard, ListItem, PrimaryButton } from '../components/Components';
import { Ionicons } from '@expo/vector-icons';

export default function HomeProgressTracker({ navigation }) {
  const [activeTab, setActiveTab] = useState('home');

  const upcomingOutreach = [
    { id: 1, name: 'Fatima Yusuf', detail: 'House 42, Crescent A', urgency: 2 },
    { id: 2, name: 'Bello Ibrahim', detail: 'House 12, Main Street', urgency: 1 },
    { id: 3, name: 'Aisha Mohammed', detail: 'House 8, Park Road', urgency: 3 },
    { id: 4, name: 'Yusuf Abdullahi', detail: 'House 15, School Lane', urgency: 2 },
  ];

  return (
    <View style={styles.container}>
      <TopAppBar
        title="Digital Majlis"
        subtitle="All data synced"
        onNotificationPress={() => navigation?.navigate('Notifications')}
      />

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {/* Progress Card */}
        <ProgressCard
          current={40}
          total={50}
          label="Daily Objective"
          weekTotal={248}
          totalImpact={1842}
        />

        {/* Route Context Section */}
        <View style={styles.routeSection}>
          <View style={styles.mapCard}>
            <Image
              source={{ uri: 'https://via.placeholder.com/400x200/2a6b2c/ffffff?text=Map+View' }}
              style={styles.mapImage}
            />
            <View style={styles.mapOverlay}>
              <View style={styles.mapHeader}>
                <Ionicons name="navigate" size={16} color={colors.primary} />
                <Text style={styles.mapLabel}>Active Deployment</Text>
              </View>
              <Text style={styles.mapTitle}>Ward 3, Damaturu</Text>
              <Text style={styles.mapSubtitle}>12 pending hotspots identified</Text>
              <PrimaryButton
                title="VIEW MAP"
                size="small"
                onPress={() => navigation?.navigate('InteractiveFieldMap')}
              />
            </View>
          </View>

          <View style={styles.priorityCard}>
            <Ionicons name="flash" size={24} color={colors.onSecondaryFixed} />
            <Text style={styles.priorityTitle}>Priority Nearby</Text>
            <View style={styles.priorityItem}>
              <View style={styles.priorityAvatar}>
                <Text style={styles.priorityAvatarText}>AM</Text>
              </View>
              <View style={styles.priorityInfo}>
                <Text style={styles.priorityName}>Adamu Musa</Text>
                <Text style={styles.priorityDetail}>120m away · High Interest</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Upcoming Outreach */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Outreach</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>SEE ALL</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.listContainer}>
            {upcomingOutreach.map((item) => (
              <ListItem
                key={item.id}
                name={item.name}
                detail={item.detail}
                urgency={item.urgency}
                onPress={() => navigation?.navigate('OutreachChat', { contact: item })}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <FloatingActionButton
        onPress={() => navigation?.navigate('LogNewInteraction')}
      />

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
    padding: spacing[6],
    paddingBottom: 120, // Space for bottom nav
  },
  routeSection: {
    marginTop: spacing[6],
    gap: spacing[4],
  },
  mapCard: {
    height: 192,
    borderRadius: shapes.large,
    overflow: 'hidden',
    backgroundColor: colors.surfaceContainer,
  },
  mapImage: {
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  mapOverlay: {
    position: 'absolute',
    inset: 0,
    padding: spacing[5],
    justifyContent: 'space-between',
  },
  mapHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mapLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.05,
    marginLeft: spacing[2],
  },
  mapTitle: {
    fontSize: typography.title.large.fontSize,
    fontWeight: '800',
    color: colors.onSurface,
    marginTop: spacing[2],
  },
  mapSubtitle: {
    fontSize: typography.body.small.fontSize,
    color: colors.onSurfaceVariant,
    marginTop: spacing[1],
  },
  priorityCard: {
    backgroundColor: colors.secondaryFixed,
    borderRadius: shapes.large,
    padding: spacing[5],
    borderBottomWidth: 4,
    borderBottomColor: colors.onSecondaryFixed + '10',
  },
  priorityTitle: {
    fontSize: typography.title.medium.fontSize,
    fontWeight: '700',
    color: colors.onSecondaryFixed,
    marginTop: spacing[2],
    marginBottom: spacing[4],
  },
  priorityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface + '40',
    padding: spacing[3],
    borderRadius: shapes.medium,
  },
  priorityAvatar: {
    width: 32,
    height: 32,
    borderRadius: shapes.full,
    backgroundColor: colors.onSecondaryFixed + '10',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priorityAvatarText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.onSecondaryFixed,
  },
  priorityInfo: {
    marginLeft: spacing[3],
    flex: 1,
  },
  priorityName: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.onSecondaryFixed,
  },
  priorityDetail: {
    fontSize: 9,
    color: colors.onSecondaryFixed + '70',
    marginTop: 2,
  },
  section: {
    marginTop: spacing[6],
    paddingBottom: spacing[12],
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  sectionTitle: {
    fontSize: typography.body.small.fontSize,
    fontWeight: '700',
    color: colors.onSurface,
    textTransform: 'uppercase',
    letterSpacing: 0.05,
  },
  seeAll: {
    fontSize: typography.body.small.fontSize,
    fontWeight: '700',
    color: colors.primary,
  },
  listContainer: {
    gap: spacing[3],
  },
});
