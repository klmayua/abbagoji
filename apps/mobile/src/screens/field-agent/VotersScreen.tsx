import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Filter, Plus, ChevronRight, MapPin } from 'lucide-react-native';
import { colors } from '../../constants/theme';

const voters = [
  { id: 1, name: 'Ibrahim Abdullahi', phone: '+234 800 000 0001', lga: 'Damaturu', ward: 'Damaturu Central', pu: '001', priority: 'high', contacted: true },
  { id: 2, name: 'Fatima Mohammed', phone: '+234 800 000 0002', lga: 'Gujba', ward: 'Buni Yadi', pu: '004', priority: 'medium', contacted: true },
  { id: 3, name: 'Musa Yusuf', phone: '+234 800 000 0003', lga: 'Damaturu', ward: 'Damaturu East', pu: '003', priority: 'low', contacted: false },
  { id: 4, name: 'Amina Hassan', phone: '+234 800 000 0004', lga: 'Gulani', ward: 'Gulani', pu: '006', priority: 'high', contacted: true },
  { id: 5, name: 'Abubakar Suleiman', phone: '+234 800 000 0005', lga: 'Gujba', ward: 'Gujba', pu: '005', priority: 'medium', contacted: false },
];

const priorityColors = {
  high: colors.sentiment.positive,
  medium: colors.warning,
  low: colors.onSurface.variant,
};

export function VotersScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Stats */}
        <View style={styles.statsSection}>
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>200K</Text>
              <Text style={styles.statLabel}>Total Voters</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>85.4K</Text>
              <Text style={styles.statLabel}>Contacted</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>12.3K</Text>
              <Text style={styles.statLabel}>High Priority</Text>
            </View>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <Search size={20} color={colors.onSurface.variant} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search voters..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor={colors.onSurface.variant}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={20} color={colors.onSurface.DEFAULT} />
          </TouchableOpacity>
        </View>

        {/* Voters List */}
        <View style={styles.votersSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>All Voters</Text>
            <TouchableOpacity style={styles.addButton}>
              <Plus size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.votersList}>
            {voters.map((voter) => (
              <TouchableOpacity key={voter.id} style={styles.voterCard}>
                <View style={styles.voterLeft}>
                  <View style={styles.voterAvatar}>
                    <Text style={styles.voterInitials}>
                      {voter.name.split(' ').map(n => n[0]).join('')}
                    </Text>
                  </View>
                  <View style={styles.voterInfo}>
                    <Text style={styles.voterName}>{voter.name}</Text>
                    <Text style={styles.voterPhone}>{voter.phone}</Text>
                    <View style={styles.voterLocation}>
                      <MapPin size={12} color={colors.onSurface.variant} />
                      <Text style={styles.locationText}>{voter.lga} • {voter.ward}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.voterRight}>
                  <View
                    style={[
                      styles.priorityBadge,
                      { backgroundColor: `${priorityColors[voter.priority]}15` },
                    ]}
                  >
                    <Text
                      style={[
                        styles.priorityText,
                        { color: priorityColors[voter.priority] },
                      ]}
                    >
                      {voter.priority}
                    </Text>
                  </View>
                  <Text style={styles.puCode}>PU-{voter.pu}</Text>
                </View>
              </TouchableOpacity>
            ))}
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
  searchSection: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 16,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface.container,
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 15,
    color: colors.onSurface.DEFAULT,
  },
  filterButton: {
    width: 48,
    height: 48,
    backgroundColor: colors.surface.container,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  votersSection: {
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
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary.DEFAULT,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  votersList: {
    gap: 8,
  },
  voterCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  voterLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  voterAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: `${colors.primary.DEFAULT}15`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  voterInitials: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary.DEFAULT,
  },
  voterInfo: {
    gap: 2,
  },
  voterName: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.onSurface.DEFAULT,
  },
  voterPhone: {
    fontSize: 13,
    color: colors.onSurface.variant,
  },
  voterLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontSize: 12,
    color: colors.onSurface.variant,
  },
  voterRight: {
    alignItems: 'flex-end',
    gap: 4,
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  priorityText: {
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  puCode: {
    fontSize: 11,
    color: colors.onSurface.variant,
  },
});
