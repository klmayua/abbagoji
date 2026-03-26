import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, shapes } from '../theme';
import { TopAppBar, BottomNavBar } from '../components/Navigation';
import { PrimaryButton } from '../components/Components';

export default function EditProfile({ navigation }) {
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@goji2027.org',
    phone: '+234 800 000 0000',
    bio: 'Field Agent passionate about community engagement',
    ward: 'Ward 3',
    role: 'Field Agent',
  });

  const updateField = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Save profile logic
    navigation?.goBack();
  };

  return (
    <View style={styles.container}>
      <TopAppBar
        title="Edit Profile"
        subtitle="Update your information"
        onNotificationPress={() => {}}
      />

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
          <TouchableOpacity style={styles.changePhoto}>
            <Text style={styles.changePhotoText}>Change Photo</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionLabel}>PERSONAL INFORMATION</Text>
        <View style={styles.inputRow}>
          <View style={styles.inputHalf}>
            <Text style={styles.inputLabel}>First Name</Text>
            <TextInput
              style={styles.input}
              value={profile.firstName}
              onChangeText={(v) => updateField('firstName', v)}
            />
          </View>
          <View style={styles.inputHalf}>
            <Text style={styles.inputLabel}>Last Name</Text>
            <TextInput
              style={styles.input}
              value={profile.lastName}
              onChangeText={(v) => updateField('lastName', v)}
            />
          </View>
        </View>

        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          value={profile.email}
          onChangeText={(v) => updateField('email', v)}
          keyboardType="email-address"
        />

        <Text style={styles.inputLabel}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={profile.phone}
          onChangeText={(v) => updateField('phone', v)}
          keyboardType="phone-pad"
        />

        <Text style={styles.inputLabel}>Bio</Text>
        <TextInput
          style={[styles.input, styles.bioInput]}
          value={profile.bio}
          onChangeText={(v) => updateField('bio', v)}
          multiline
          numberOfLines={3}
        />

        <Text style={styles.sectionLabel}>CAMPAIGN INFORMATION</Text>
        <Text style={styles.inputLabel}>Role</Text>
        <View style={styles.readOnlyField}>
          <Text style={styles.readOnlyText}>{profile.role}</Text>
        </View>

        <Text style={styles.inputLabel}>Assigned Ward</Text>
        <View style={styles.readOnlyField}>
          <Text style={styles.readOnlyText}>{profile.ward}</Text>
        </View>

        <PrimaryButton
          title="SAVE CHANGES"
          onPress={handleSave}
          size="large"
          icon="save"
        />
      </ScrollView>

      <BottomNavBar activeTab="settings" onTabChange={() => {}} />
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
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: spacing[6],
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primaryContainer,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 36,
    fontWeight: '700',
    color: colors.onPrimaryContainer,
  },
  changePhoto: {
    marginTop: spacing[3],
  },
  changePhotoText: {
    fontSize: typography.body.medium.fontSize,
    color: colors.primary,
    fontWeight: '600',
  },
  sectionLabel: {
    fontSize: typography.label.small.fontSize,
    fontWeight: '700',
    color: colors.outline,
    marginBottom: spacing[4],
    marginTop: spacing[4],
    letterSpacing: 0.1,
  },
  inputRow: {
    flexDirection: 'row',
    gap: spacing[4],
  },
  inputHalf: {
    flex: 1,
  },
  inputLabel: {
    fontSize: typography.label.medium.fontSize,
    fontWeight: '500',
    color: colors.onSurface,
    marginBottom: spacing[2],
  },
  input: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: shapes.large,
    padding: spacing[4],
    fontSize: typography.body.large.fontSize,
    color: colors.onSurface,
    borderWidth: 1,
    borderColor: colors.outlineVariant,
    marginBottom: spacing[4],
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  readOnlyField: {
    backgroundColor: colors.surfaceContainerLow,
    borderRadius: shapes.large,
    padding: spacing[4],
    marginBottom: spacing[4],
  },
  readOnlyText: {
    fontSize: typography.body.large.fontSize,
    color: colors.onSurfaceVariant,
  },
});
