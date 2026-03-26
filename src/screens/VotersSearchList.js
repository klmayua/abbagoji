import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, shapes } from '../theme';
import { TopAppBar, BottomNavBar } from '../components/Navigation';
import { ListItem } from '../components/Components';

const MOCK_VOTERS = [
  { id: '1', name: 'Abubakar Ibrahim', location: 'Ward 3, Damaturu', status: 'confirmed', urgency: 3 },
  { id: '2', name: 'Fatima Abdullahi', location: 'Ward 2, Damaturu', status: 'interested', urgency: 2 },
  { id: '3', name: 'Mohammed Bello', location: 'Ward 1, Damaturu', status: 'undecided', urgency: 1 },
  { id: '4', name: 'Aisha Mohammed', location: 'Ward 4, Damaturu', status: 'confirmed', urgency: 3 },
  { id: '5', name: 'Yusuf Adamu', location: 'Ward 3, Damaturu', status: 'interested', urgency: 2 },
  { id: '6', name: 'Halima Garba', location: 'Ward 2, Damaturu', status: 'confirmed', urgency: 3 },
  { id: '7', name: 'Ibrahim Musa', location: 'Ward 1, Damaturu', status: 'undecided', urgency: 1 },
  { id: '8', name: 'Mariam Yusuf', location: 'Ward 4, Damaturu', status: 'interested', urgency: 2 },
];

const FILTERS = ['All', 'Confirmed', 'Interested', 'Undecided'];

export default function VotersSearchList({ navigation }) {
  const [activeTab, setActiveTab] = useState('voters');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredVoters = MOCK_VOTERS.filter((voter) => {
    const matchesSearch = voter.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'All' || voter.status.toLowerCase() === activeFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const renderVoterItem = ({ item }) => (
    <TouchableOpacity
      style={styles.voterCard}
      onPress={() => navigation?.navigate('VoterProfileDetail', { voter: item })}
    >
      <View style={styles.voterInfo}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
        </View>
        <View style={styles.voterDetails}>
          <Text style={styles.voterName}>{item.name}</Text>
          <Text style={styles.voterLocation}>{item.location}</Text>
        </View>
      </View>

      <View style={[styles.statusBadge, styles[`status_${item.status}`]]}>
        <Text style={[styles.statusText, styles[`statusText_${item.status}`]]}>
          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TopAppBar
        title="Voters"
        subtitle="Manage voter relationships"
        onNotificationPress={() => {}}
      />

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color={colors.outline} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search voters..."
            placeholderTextColor={colors.onSurfaceVariant}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color={colors.outline} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.filterContainer}>
        {FILTERS.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[styles.filterButton, activeFilter === filter && styles.filterButtonActive]}
            onPress={() => setActiveFilter(filter)}
          >
            <Text style={[styles.filterText, activeFilter === filter && styles.filterTextActive]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredVoters}
        renderItem={renderVoterItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
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
  searchContainer: {
    paddingHorizontal: spacing[6],
    paddingTop: spacing[4],
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: shapes.large,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    borderWidth: 1,
    borderColor: colors.outlineVariant,
  },
  searchInput: {
    flex: 1,
    marginLeft: spacing[3],
    fontSize: typography.body.large.fontSize,
    color: colors.onSurface,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[4],
    gap: spacing[2],
  },
  filterButton: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: shapes.full,
    backgroundColor: colors.surfaceContainerLow,
  },
  filterButtonActive: {
    backgroundColor: colors.primary,
  },
  filterText: {
    fontSize: typography.label.medium.fontSize,
    fontWeight: '600',
    color: colors.outline,
  },
  filterTextActive: {
    color: colors.onPrimary,
  },
  list: {
    paddingHorizontal: spacing[6],
    paddingBottom: 100,
  },
  voterCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surfaceContainerLowest,
    padding: spacing[4],
    borderRadius: shapes.large,
    marginBottom: spacing[3],
  },
  voterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: shapes.full,
    backgroundColor: colors.primaryContainer,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.onPrimaryContainer,
  },
  voterDetails: {
    marginLeft: spacing[3],
    flex: 1,
  },
  voterName: {
    fontSize: typography.body.large.fontSize,
    fontWeight: '700',
    color: colors.onSurface,
  },
  voterLocation: {
    fontSize: typography.body.small.fontSize,
    color: colors.onSurfaceVariant,
    marginTop: 2,
  },
  statusBadge: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: shapes.medium,
  },
  status_confirmed: {
    backgroundColor: colors.primaryFixed,
  },
  status_interested: {
    backgroundColor: colors.secondaryFixed,
  },
  status_undecided: {
    backgroundColor: colors.surfaceContainer,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.05,
  },
  statusText_confirmed: {
    color: colors.onPrimaryFixed,
  },
  statusText_interested: {
    color: colors.onSecondaryFixed,
  },
  statusText_undecided: {
    color: colors.onSurfaceVariant,
  },
});
