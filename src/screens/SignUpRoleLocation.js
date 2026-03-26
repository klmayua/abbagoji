import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, shapes } from '../theme';
import { PrimaryButton } from '../components/Components';

const ROLES = [
  { id: 'field_agent', label: 'Field Agent', icon: 'people' },
  { id: 'coordinator', label: 'Coordinator', icon: 'grid' },
  { id: 'volunteer', label: 'Volunteer', icon: 'heart' },
  { id: 'observer', label: 'Observer', icon: 'eye' },
];

const LOCATIONS = [
  { id: 'ward1', label: 'Ward 1 - Damaturu' },
  { id: 'ward2', label: 'Ward 2 - Damaturu' },
  { id: 'ward3', label: 'Ward 3 - Damaturu' },
  { id: 'ward4', label: 'Ward 4 - Damaturu' },
];

export default function SignUpRoleLocation({ navigation }) {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleComplete = () => {
    navigation?.replace('HomeProgressTracker');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.headerIcon}>🏛️</Text>
        <Text style={styles.headerTitle}>Create Account</Text>
        <Text style={styles.headerSubtitle}>Step 2 of 2: Role & Location</Text>
      </View>

      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: '100%' }]} />
      </View>

      <Text style={styles.sectionLabel}>SELECT YOUR ROLE</Text>
      <View style={styles.rolesContainer}>
        {ROLES.map((role) => (
          <TouchableOpacity
            key={role.id}
            style={[styles.roleCard, selectedRole === role.id && styles.roleCardSelected]}
            onPress={() => setSelectedRole(role.id)}
          >
            <Ionicons
              name={role.icon}
              size={24}
              color={selectedRole === role.id ? colors.onPrimary : colors.primary}
            />
            <Text
              style={[styles.roleLabel, selectedRole === role.id && styles.roleLabelSelected]}
            >
              {role.label}
            </Text>
            {selectedRole === role.id && (
              <View style={styles.checkIcon}>
                <Ionicons name="checkmark-circle" size={20} color={colors.onPrimary} />
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionLabel}>SELECT YOUR LOCATION</Text>
      <View style={styles.locationsContainer}>
        {LOCATIONS.map((location) => (
          <TouchableOpacity
            key={location.id}
            style={[
              styles.locationCard,
              selectedLocation === location.id && styles.locationCardSelected,
            ]}
            onPress={() => setSelectedLocation(location.id)}
          >
            <Ionicons
              name="location"
              size={20}
              color={selectedLocation === location.id ? colors.onPrimary : colors.primary}
            />
            <Text
              style={[
                styles.locationLabel,
                selectedLocation === location.id && styles.locationLabelSelected,
              ]}
            >
              {location.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <PrimaryButton
        title="COMPLETE REGISTRATION"
        onPress={handleComplete}
        size="large"
        icon="checkmark"
      />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation?.goBack()}
      >
        <Text style={styles.backButtonText}>Back to Personal Info</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  content: {
    padding: spacing[6],
    paddingTop: spacing[8],
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing[6],
  },
  headerIcon: {
    fontSize: 48,
    marginBottom: spacing[4],
  },
  headerTitle: {
    fontSize: typography.headline.small.fontSize,
    fontWeight: '700',
    color: colors.onSurface,
    marginBottom: spacing[2],
  },
  headerSubtitle: {
    fontSize: typography.body.medium.fontSize,
    color: colors.onSurfaceVariant,
  },
  progressBar: {
    height: 4,
    backgroundColor: colors.surfaceContainer,
    borderRadius: 2,
    marginBottom: spacing[6],
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  sectionLabel: {
    fontSize: typography.label.small.fontSize,
    fontWeight: '700',
    color: colors.outline,
    letterSpacing: 0.1,
    marginBottom: spacing[3],
  },
  rolesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
    marginBottom: spacing[6],
  },
  roleCard: {
    width: '47%',
    aspectRatio: 1.2,
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: shapes.large,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.surfaceContainer,
    padding: spacing[4],
  },
  roleCardSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  roleLabel: {
    fontSize: typography.body.medium.fontSize,
    fontWeight: '600',
    color: colors.onSurface,
    marginTop: spacing[2],
  },
  roleLabelSelected: {
    color: colors.onPrimary,
  },
  checkIcon: {
    position: 'absolute',
    top: spacing[2],
    right: spacing[2],
  },
  locationsContainer: {
    gap: spacing[3],
    marginBottom: spacing[8],
  },
  locationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceContainerLowest,
    padding: spacing[4],
    borderRadius: shapes.large,
    borderWidth: 2,
    borderColor: colors.surfaceContainer,
  },
  locationCardSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  locationLabel: {
    fontSize: typography.body.large.fontSize,
    fontWeight: '600',
    color: colors.onSurface,
    marginLeft: spacing[3],
  },
  locationLabelSelected: {
    color: colors.onPrimary,
  },
  backButton: {
    alignSelf: 'center',
    marginTop: spacing[6],
  },
  backButtonText: {
    fontSize: typography.body.medium.fontSize,
    color: colors.primary,
    fontWeight: '600',
  },
});
