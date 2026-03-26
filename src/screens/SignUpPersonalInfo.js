import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, shapes } from '../theme';
import { PrimaryButton } from '../components/Components';

export default function SignUpPersonalInfo({ navigation }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    navigation?.navigate('SignUpRoleLocation');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.headerIcon}>🏛️</Text>
        <Text style={styles.headerTitle}>Create Account</Text>
        <Text style={styles.headerSubtitle}>Step 1 of 2: Personal Information</Text>
      </View>

      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: '50%' }]} />
      </View>

      <View style={styles.form}>
        <Text style={styles.sectionLabel}>FIRST NAME</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter first name"
            placeholderTextColor={colors.onSurfaceVariant}
            value={form.firstName}
            onChangeText={(v) => updateField('firstName', v)}
          />
        </View>

        <Text style={styles.sectionLabel}>LAST NAME</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter last name"
            placeholderTextColor={colors.onSurfaceVariant}
            value={form.lastName}
            onChangeText={(v) => updateField('lastName', v)}
          />
        </View>

        <Text style={styles.sectionLabel}>EMAIL</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter email address"
            placeholderTextColor={colors.onSurfaceVariant}
            keyboardType="email-address"
            value={form.email}
            onChangeText={(v) => updateField('email', v)}
          />
        </View>

        <Text style={styles.sectionLabel}>PHONE NUMBER</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            placeholderTextColor={colors.onSurfaceVariant}
            keyboardType="phone-pad"
            value={form.phone}
            onChangeText={(v) => updateField('phone', v)}
          />
        </View>

        <Text style={styles.sectionLabel}>PASSWORD</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Create a password"
            placeholderTextColor={colors.onSurfaceVariant}
            secureTextEntry
            value={form.password}
            onChangeText={(v) => updateField('password', v)}
          />
        </View>

        <PrimaryButton
          title="CONTINUE"
          onPress={handleContinue}
          size="large"
          icon="arrow-forward"
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation?.navigate('LoginSecurely')}>
          <Text style={styles.footerLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
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
  form: {
    gap: spacing[4],
  },
  sectionLabel: {
    fontSize: typography.label.small.fontSize,
    fontWeight: '700',
    color: colors.outline,
    letterSpacing: 0.1,
  },
  inputContainer: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: shapes.large,
    borderWidth: 1,
    borderColor: colors.outlineVariant,
    marginBottom: spacing[2],
  },
  input: {
    padding: spacing[4],
    fontSize: typography.body.large.fontSize,
    color: colors.onSurface,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing[8],
  },
  footerText: {
    fontSize: typography.body.medium.fontSize,
    color: colors.onSurfaceVariant,
  },
  footerLink: {
    fontSize: typography.body.medium.fontSize,
    color: colors.primary,
    fontWeight: '700',
  },
});
