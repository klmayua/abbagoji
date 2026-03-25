import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus, Phone, MessageCircle, Home, ChevronDown } from 'lucide-react-native';
import { colors } from '../../constants/theme';

const interactions = [
  { id: 1, voter: 'Ibrahim Abdullahi', type: 'phone', outcome: 'positive', time: '2 min ago', lga: 'Damaturu', agent: 'Ahmed' },
  { id: 2, voter: 'Fatima Mohammed', type: 'visit', outcome: 'positive', time: '15 min ago', lga: 'Gujba', agent: 'Hassan' },
  { id: 3, voter: 'Musa Yusuf', type: 'message', outcome: 'neutral', time: '32 min ago', lga: 'Damaturu', agent: 'Ahmed' },
  { id: 4, voter: 'Amina Hassan', type: 'phone', outcome: 'positive', time: '1 hr ago', lga: 'Gulani', agent: 'Maryam' },
  { id: 5, voter: 'Abubakar Suleiman', type: 'visit', outcome: 'negative', time: '2 hr ago', lga: 'Gujba', agent: 'Hassan' },
];

const typeIcons = {
  phone: Phone,
  message: MessageCircle,
  visit: Home,
};

const outcomeColors = {
  positive: colors.sentiment.positive,
  neutral: colors.warning,
  negative: colors.error,
};

export function InteractionsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Stats */}
        <View style={styles.statsSection}>
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>24.5K</Text>
              <Text style={styles.statLabel}>Total</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>1,247</Text>
              <Text style={styles.statLabel}>Today</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>75%</Text>
              <Text style={styles.statLabel}>Conversion</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsSection}>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.primary.DEFAULT }]}>
            <Phone size={20} color="#fff" />
            <Text style={styles.actionText}>Log Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.tertiary.DEFAULT }]}>
            <MessageCircle size={20} color="#fff" />
            <Text style={styles.actionText}>Send Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.secondary.DEFAULT }]}>
            <Home size={20} color="#fff" />
            <Text style={styles.actionText}>Log Visit</Text>
          </TouchableOpacity>
        </View>

        {/* Interactions List */}
        <View style={styles.interactionsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Interactions</Text>
            <TouchableOpacity style={styles.filterChip}>
              <Text style={styles.filterText}>Today</Text>
              <ChevronDown size={16} color={colors.onSurface.variant} />
            </TouchableOpacity>
          </View>

          <View style={styles.interactionsList}>
            {interactions.map((interaction) => {
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface.base,
  },
  statsSection: {
    padding: 16,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 11,
    color: colors.onSurface.variant,
  },
  actionsSection: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 16,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 12,
    borderRadius: 10,
  },
  actionText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  interactionsSection: {
    padding: 16,
    paddingTop: 0,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.surface.container,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  filterText: {
    fontSize: 13,
    color: colors.onSurface.DEFAULT,
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
    width: 44,
    height: 44,
    borderRadius: 22,
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
    fontSize: 15,
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
});
