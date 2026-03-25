import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Filter, Layers, Navigation, ChevronDown } from 'lucide-react-native';
import { colors } from '../../constants/theme';

const zoneBStats = [
  { lga: 'Damaturu', coverage: 85, voters: 45000, status: 'high' },
  { lga: 'Gujba', coverage: 72, voters: 32000, status: 'medium' },
  { lga: 'Gulani', coverage: 68, voters: 28000, status: 'medium' },
  { lga: 'Busari', coverage: 55, voters: 35000, status: 'low' },
];

const statusColors = {
  high: colors.sentiment.positive,
  medium: colors.warning,
  low: colors.error,
};

export function MapScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Map View Placeholder */}
      <View style={styles.mapContainer}>
        <View style={styles.mapPlaceholder}>
          <MapPin size={64} color={colors.onSurface.variant} />
          <Text style={styles.mapText}>Zone B Map View</Text>
          <Text style={styles.mapSubtext}>Mapbox GL would render here</Text>
        </View>

        {/* Map Controls */}
        <View style={styles.mapControls}>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Navigation size={20} color={colors.onSurface.DEFAULT} />
          </TouchableOpacity>
        </View>

        {/* Filter Bar */}
        <View style={styles.filterBar}>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterText}>All LGAs</Text>
            <ChevronDown size={16} color={colors.onSurface.variant} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Layers size={16} color={colors.onSurface.variant} />
            <Text style={styles.filterText}>Layers</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* LGA Stats */}
      <View style={styles.statsPanel}>
        <Text style={styles.statsTitle}>LGA Coverage</Text>
        <View style={styles.statsList}>
          {zoneBStats.map((stat) => (
            <View key={stat.lga} style={styles.statRow}>
              <View style={styles.statLeft}>
                <View
                  style={[
                    styles.statusDot,
                    { backgroundColor: statusColors[stat.status] },
                  ]}
                />
                <View>
                  <Text style={styles.lgaName}>{stat.lga}</Text>
                  <View style={styles.progressBar}>
                    <View
                      style={[
                        styles.progressFill,
                        {
                          width: `${stat.coverage}%`,
                          backgroundColor: statusColors[stat.status],
                        },
                      ]}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.statRight}>
                <Text style={styles.coverageText}>{stat.coverage}%</Text>
                <Text style={styles.voterText}>{stat.voters.toLocaleString()} voters</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface.base,
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: colors.surface.containerHigh,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.onSurface.variant,
    marginTop: 12,
  },
  mapSubtext: {
    fontSize: 14,
    color: colors.onSurface.variant,
    marginTop: 4,
  },
  mapControls: {
    position: 'absolute',
    top: 16,
    right: 16,
    gap: 8,
  },
  controlButton: {
    width: 40,
    height: 40,
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  controlText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.onSurface.DEFAULT,
  },
  filterBar: {
    position: 'absolute',
    top: 16,
    left: 16,
    flexDirection: 'row',
    gap: 8,
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.surface.containerLowest,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  filterText: {
    fontSize: 13,
    color: colors.onSurface.DEFAULT,
  },
  statsPanel: {
    backgroundColor: colors.surface.containerLowest,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    borderTopWidth: 1,
    borderColor: colors.outline.variant,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginBottom: 16,
  },
  statsList: {
    gap: 16,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  lgaName: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.onSurface.DEFAULT,
    marginBottom: 6,
  },
  progressBar: {
    width: 120,
    height: 4,
    backgroundColor: colors.surface.container,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  statRight: {
    alignItems: 'flex-end',
  },
  coverageText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.onSurface.DEFAULT,
  },
  voterText: {
    fontSize: 12,
    color: colors.onSurface.variant,
  },
});
