import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Users, MessageSquare, TrendingUp, MapPin, ArrowRight, Phone, Home } from 'lucide-react-native';
import { RootStackParamList, Interaction } from '../../types';
import { colors } from '../../constants/theme';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const stats = [
  { label: 'Total Voters', value: '200K', icon: Users, trend: '+5%' },
  { label: 'Contacted Today', value: '1,247', icon: Phone, trend: '+12%' },
  { label: 'Anchor Citizens', value: '2,847', icon: TrendingUp, trend: '+8%' },
  { label: 'Sentiment', value: '+45%', icon: TrendingUp, trend: '+3%' },
];

const recentInteractions: Interaction[] = [
  { id: 1, voter: 'Ibrahim Abdullahi', type: 'phone', outcome: 'positive', time: '2 min ago', lga: 'Damaturu', agent: 'Ahmed' },
  { id: 2, voter: 'Fatima Mohammed', type: 'visit', outcome: 'positive', time: '15 min ago', lga: 'Gujba', agent: 'Hassan' },
  { id: 3, voter: 'Musa Yusuf', type: 'message', outcome: 'neutral', time: '32 min ago', lga: 'Damaturu', agent: 'Ahmed' },
];

const outcomeColors = {
  positive: colors.sentiment.positive,
  neutral: colors.warning,
  negative: colors.error,
};

const typeIcons = {
  phone: Phone,
  message: MessageSquare,
  visit: Home,
};

export function DashboardScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Morning,</Text>
            <Text style={styles.name}>Campaign Manager</Text>
          </View>
          <View style={styles.profileBadge}>
            <Text style={styles.profileInitials}>CM</Text>
          </View>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Dashboard Overview</Text>
          <View style={styles.statsGrid}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <TouchableOpacity key={index} style={styles.statCard}>
                  <View style={styles.statHeader}>
                    <View style={styles.statIconContainer}>
                      <Icon size={20} color={colors.primary.DEFAULT} />
                    </View>
                    <View style={styles.trendBadge}>
                      <Text style={styles.trendText}>{stat.trend}</Text>
                    </View>
                  </View>
                  <Text style={styles.statValue}>{stat.value}</Text>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Activity Chart Placeholder */}
        <View style={styles.chartSection}>
          <Text style={styles.sectionTitle}>Activity (7 Days)</Text>
003cView style={styles.chartCard}>
            <View style={styles.chartPlaceholder}>
              <TrendingUp size={48} color={colors.onSurface.variant} />
              <Text style={styles.chartText}>Activity Chart</Text>
              <Text style={styles.chartSubtext}>1,247 contacts this week</Text>
            </View>
          </View>
        </View>

        {/* Recent Interactions */}
        <View style={styles.interactionsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Interactions</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Interactions')}>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.interactionsList}>
            {recentInteractions.map((interaction) => {
              const TypeIcon = typeIcons[interaction.type];
              return (
                <TouchableOpacity key={interaction.id} style={styles.interactionCard}>
                  <View style={styles.interactionLeft}>
                    <View style={styles.interactionAvatar}>
                      <Text style={styles.interactionInitials}>
                        {interaction.voter.split(' ').map(n => n[0]).join('')}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.interactionName}>{interaction.voter}</Text>
                      <View style={styles.interactionMeta}>
                        <TypeIcon size={12} color={colors.onSurface.variant} />
                        <Text style={styles.interactionMetaText}>{interaction.type}</Text>
                        <Text style={styles.dot}>•</Text>
                        <Text style={styles.interactionMetaText}>{interaction.lga}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.interactionRight}>
                    <View
                      style={[
                        styles.outcomeBadge,
                        { backgroundColor: `${outcomeColors[interaction.outcome]}15` },
                      ]}
                    >
                      <Text
                        style={[
                          styles.outcomeText,
                          { color: outcomeColors[interaction.outcome] },
                        ]}
                      >
                        {interaction.outcome}
                      </Text>
                    </View>
                    <Text style={styles.interactionTime}>{interaction.time}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsSection}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate('Voters')}
            >
              <Users size={24} color={colors.primary.DEFAULT} />
              <Text style={styles.actionText}>Add Voter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <MessageSquare size={24} color={colors.primary.DEFAULT} />
              <Text style={styles.actionText}>Log Call</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate('Map')}
            >
              <MapPin size={24} color={colors.primary.DEFAULT} />
              <Text style={styles.actionText}>View Map</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  greeting: {
    fontSize: 14,
    color: colors.onSurface.variant,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
  },
  profileBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary.DEFAULT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitials: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  statsSection: {
    padding: 20,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginBottom: 12,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    width: '48%',
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  statHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: `${colors.primary.DEFAULT}15`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trendBadge: {
    backgroundColor: `${colors.sentiment.positive}15`,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  trendText: {
    fontSize: 12,
    color: colors.sentiment.positive,
    fontWeight: '600',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 13,
    color: colors.onSurface.variant,
  },
  chartSection: {
    padding: 20,
    paddingTop: 0,
  },
  chartCard: {
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  chartPlaceholder: {
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface.container,
    borderRadius: 12,
  },
  chartText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.onSurface.variant,
    marginTop: 8,
  },
  chartSubtext: {
    fontSize: 13,
    color: colors.onSurface.variant,
  },
  interactionsSection: {
    padding: 20,
    paddingTop: 0,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  viewAll: {
    fontSize: 14,
    color: colors.primary.DEFAULT,
    fontWeight: '500',
  },
  interactionsList: {
    gap: 8,
  },
  interactionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  interactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  interactionAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: `${colors.primary.DEFAULT}15`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  interactionInitials: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary.DEFAULT,
  },
  interactionName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.onSurface.DEFAULT,
    marginBottom: 2,
  },
  interactionMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  interactionMetaText: {
    fontSize: 12,
    color: colors.onSurface.variant,
  },
  dot: {
    fontSize: 12,
    color: colors.onSurface.variant,
  },
  interactionRight: {
    alignItems: 'flex-end',
  },
  outcomeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 4,
  },
  outcomeText: {
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  interactionTime: {
    fontSize: 11,
    color: colors.onSurface.variant,
  },
  actionsSection: {
    padding: 20,
    paddingTop: 0,
    paddingBottom: 100,
  },
  actionsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  actionCard: {
    flex: 1,
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  actionText: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.onSurface.DEFAULT,
  },
});
