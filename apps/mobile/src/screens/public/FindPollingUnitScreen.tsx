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
import { ChevronDown, Search, MapPin, CheckCircle, Navigation } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../constants/theme';

const zoneBLGAs = [
  { name: 'Damaturu', wards: ['Damaturu Central', 'Damaturu East', 'Damaturu West'] },
  { name: 'Gujba', wards: ['Gujba', 'Buni Yadi', 'Buni Gari'] },
  { name: 'Gulani', wards: ['Gulani', 'Bara', 'Bursari'] },
];

const mockPollingUnits = [
  { code: '001', name: 'Damaturu Central Primary School', address: 'Main Road, Damaturu Town', lga: 'Damaturu', ward: 'Damaturu Central' },
  { code: '002', name: 'Damaturu Market Square', address: 'Opposite Central Market', lga: 'Damaturu', ward: 'Damaturu Central' },
  { code: '003', name: 'Shehu\'s Palace', address: 'Palace Road, Damaturu', lga: 'Damaturu', ward: 'Damaturu East' },
];

export function FindPollingUnitScreen() {
  const [selectedLGA, setSelectedLGA] = React.useState('');
  const [selectedWard, setSelectedWard] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedPU, setSelectedPU] = React.useState<typeof mockPollingUnits[0] | null>(null);
  const [showResults, setShowResults] = React.useState(false);

  const selectedLGAData = zoneBLGAs.find((l) => l.name === selectedLGA);

  const filteredUnits = mockPollingUnits.filter((pu) => {
    const matchesLGA = selectedLGA ? pu.lga === selectedLGA : true;
    const matchesWard = selectedWard ? pu.ward === selectedWard : true;
    const matchesSearch = searchQuery
      ? pu.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pu.code.includes(searchQuery)
      : true;
    return matchesLGA && matchesWard && matchesSearch;
  });

  const handleSearch = () => {
    setShowResults(true);
    setSelectedPU(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient
          colors={[colors.primary.DEFAULT, colors.primary.container]}
          style={styles.header}
        >
          <Text style={styles.headerTitle}>Find Your Polling Unit</Text>
          <Text style={styles.headerSubtitle}>
            Locate your polling unit in Yobe East Zone B
          </Text>
        </LinearGradient>

        {/* Search Form */}
        <View style={styles.formCard}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Local Government Area</Text>
            <View style={styles.selectContainer}>
              <select
                value={selectedLGA}
                onChange={(e) => {
                  setSelectedLGA(e.target.value);
                  setSelectedWard('');
                }}
                style={styles.select}
              >
                <option value="">Select LGA</option>
                {zoneBLGAs.map((lga) => (
                  <option key={lga.name} value={lga.name}>{lga.name}</option>
                ))}
              </select>
              <ChevronDown size={20} color={colors.onSurface.variant} style={styles.selectIcon} />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Ward</Text>
            <View style={styles.selectContainer}>
              <select
                value={selectedWard}
                onChange={(e) => setSelectedWard(e.target.value)}
                disabled={!selectedLGA}
                style={[styles.select, !selectedLGA && styles.selectDisabled]}
              >
                <option value="">Select Ward</option>
                {selectedLGAData?.wards.map((ward) => (
                  <option key={ward} value={ward}>{ward}</option>
                ))}
              </select>
              <ChevronDown size={20} color={colors.onSurface.variant} style={styles.selectIcon} />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Search</Text>
            <View style={styles.searchContainer}>
              <Search size={20} color={colors.onSurface.variant} style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search by name or code..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholderTextColor={colors.onSurface.variant}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Search size={20} color="#fff" />
            <Text style={styles.searchButtonText}>Find Polling Unit</Text>
          </TouchableOpacity>
        </View>

        {/* Results */}
        {showResults && (
          <View style={styles.resultsSection}>
            <Text style={styles.resultsTitle}>{filteredUnits.length} Polling Unit{filteredUnits.length !== 1 && 's'} Found</Text>

            {filteredUnits.map((pu) => (
              <TouchableOpacity
                key={pu.code}
                style={[
                  styles.puCard,
                  selectedPU?.code === pu.code && styles.puCardSelected,
                ]}
                onPress={() => setSelectedPU(pu)}
              >
                <View style={styles.puHeader}>
                  <View style={styles.puIcon}>
                    <MapPin size={20} color={colors.primary.DEFAULT} />
                  </View>
                  <View style={styles.puInfo}>
                    <Text style={styles.puName}>{pu.name}</Text>
                    <Text style={styles.puAddress}>{pu.address}</Text>
                  </View>
                  {selectedPU?.code === pu.code && <CheckCircle size={20} color={colors.primary.DEFAULT} />}
                </View>

                <View style={styles.puTags}>
                  <View style={styles.puTag}>
                    <Text style={styles.puTagText}>{pu.lga}</Text>
                  </View>
                  <View style={styles.puTag}>
                    <Text style={styles.puTagText}>{pu.ward}</Text>
                  </View>
                  <View style={styles.puCodeTag}>
                    <Text style={styles.puCodeText}>PU-{pu.code}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Selected PU Details */}
        {selectedPU && (
          <View style={styles.detailCard}>
            <View style={styles.detailHeader}>
              <View style={styles.detailIcon}>
                <MapPin size={32} color={colors.primary.DEFAULT} />
              </View>
              <View>
                <Text style={styles.detailName}>{selectedPU.name}</Text>
                <Text style={styles.detailAddress}>{selectedPU.address}</Text>
              </View>
            </View>

            <View style={styles.detailRows}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Polling Unit Code</Text>
                <Text style={styles.detailValue}>PU-{selectedPU.code}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>LGA</Text>
                <Text style={styles.detailValue}>{selectedPU.lga}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Ward</Text>
                <Text style={styles.detailValue}>{selectedPU.ward}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.directionsButton}>
              <Navigation size={18} color="#fff" />
              <Text style={styles.directionsButtonText}>Get Directions</Text>
            </TouchableOpacity>
          </View>
        )}
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
    padding: 24,
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  formCard: {
    margin: 20,
    marginTop: -20,
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.outline.variant,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.onSurface.DEFAULT,
    marginBottom: 8,
  },
  selectContainer: {
    position: 'relative',
  },
  select: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: colors.outline.variant,
    borderRadius: 10,
    backgroundColor: colors.surface.container,
    fontSize: 14,
    color: colors.onSurface.DEFAULT,
    appearance: 'none',
  },
  selectDisabled: {
    opacity: 0.5,
  },
  selectIcon: {
    position: 'absolute',
    right: 16,
    top: 14,
  },
  searchContainer: {
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
    top: 14,
  },
  searchInput: {
    paddingLeft: 48,
    paddingRight: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: colors.outline.variant,
    borderRadius: 10,
    backgroundColor: colors.surface.container,
    fontSize: 14,
    color: colors.onSurface.DEFAULT,
  },
  searchButton: {
    backgroundColor: colors.primary.DEFAULT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 8,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  resultsSection: {
    padding: 20,
    paddingTop: 0,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginBottom: 16,
  },
  puCard: {
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  puCardSelected: {
    borderColor: colors.primary.DEFAULT,
    backgroundColor: `${colors.primary.DEFAULT}08`,
  },
  puHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  puIcon: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: `${colors.primary.DEFAULT}15`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  puInfo: {
    flex: 1,
  },
  puName: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.onSurface.DEFAULT,
    marginBottom: 2,
  },
  puAddress: {
    fontSize: 13,
    color: colors.onSurface.variant,
  },
  puTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
  },
  puTag: {
    backgroundColor: colors.surface.container,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  puTagText: {
    fontSize: 12,
    color: colors.onSurface.variant,
  },
  puCodeTag: {
    backgroundColor: `${colors.primary.DEFAULT}15`,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  puCodeText: {
    fontSize: 12,
    color: colors.primary.DEFAULT,
    fontWeight: '600',
  },
  detailCard: {
    margin: 20,
    marginTop: 0,
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.primary.DEFAULT,
  },
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  detailIcon: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: `${colors.primary.DEFAULT}15`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginBottom: 2,
  },
  detailAddress: {
    fontSize: 14,
    color: colors.onSurface.variant,
  },
  detailRows: {
    gap: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.outline.variant,
  },
  detailLabel: {
    fontSize: 14,
    color: colors.onSurface.variant,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.onSurface.DEFAULT,
  },
  directionsButton: {
    backgroundColor: colors.primary.DEFAULT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  directionsButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
