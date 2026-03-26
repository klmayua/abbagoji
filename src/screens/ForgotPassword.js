import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, typography, spacing, shapes } from '../theme';
import { silkFinish } from '../theme';
import { PrimaryButton, GhostButton } from '../components/Components';

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSent(true);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LinearGradient colors={silkFinish} style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation?.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color={colors.onPrimary} />
          </TouchableOpacity>

          <View style={styles.headerContent}>
            <Text style={styles.headerIcon}>🔐</Text>
            <Text style={styles.headerTitle}>
              {isSent ? 'Check Your Email' : 'Forgot Password'}
            </Text>
            <Text style={styles.headerSubtitle}>
              {isSent
                ? 'We\'ve sent a password reset link to your email'
                : 'Enter your email to receive a reset link'}
            </Text>
          </View>
        </LinearGradient>

        <View style={styles.formContainer}>
          {!isSent ? (
            <>
              <Text style={styles.sectionLabel}>EMAIL ADDRESS</Text>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={colors.outline}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  placeholderTextColor={colors.onSurfaceVariant}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <PrimaryButton
                title={isLoading ? 'SENDING...' : 'SEND RESET LINK'}
                onPress={handleSubmit}
                size="large"
                icon="send"
              />
            </>
          ) : (
            <View style={styles.successContainer}>
              <View style={styles.successIcon}>
                <Ionicons name="checkmark-circle" size={64} color={colors.primary} />
              </View>
              <Text style={styles.successEmail}>{email}</Text>
              <Text style={styles.successText}>
                Didn't receive the email? Check your spam folder or try again.
              </Text>

              <TouchableOpacity
                style={styles.resendButton}
                onPress={() => setIsSent(false)}
              >
                <Text style={styles.resendText}>Resend Email</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity
            style={styles.footer}
            onPress={() => navigation?.navigate('LoginSecurely')}
          >
            <Text style={styles.footerText}>Remember your password? </Text>
            <Text style={styles.footerLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    paddingTop: spacing[8],
    paddingBottom: spacing[8],
    paddingHorizontal: spacing[6],
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  headerContent: {
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 48,
    marginBottom: spacing[4],
  },
  headerTitle: {
    fontSize: typography.headline.medium.fontSize,
    fontWeight: '700',
    color: colors.onPrimary,
    textAlign: 'center',
    marginBottom: spacing[2],
  },
  headerSubtitle: {
    fontSize: typography.body.large.fontSize,
    color: colors.onPrimary,
    opacity: 0.8,
    textAlign: 'center',
    paddingHorizontal: spacing[4],
  },
  formContainer: {
    padding: spacing[6],
    paddingTop: spacing[8],
  },
  sectionLabel: {
    fontSize: typography.label.small.fontSize,
    fontWeight: '700',
    color: colors.outline,
    marginBottom: spacing[2],
    letterSpacing: 0.1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: shapes.large,
    marginBottom: spacing[5],
    paddingHorizontal: spacing[4],
    borderWidth: 1,
    borderColor: colors.outlineVariant,
  },
  inputIcon: {
    marginRight: spacing[3],
  },
  input: {
    flex: 1,
    paddingVertical: spacing[4],
    fontSize: typography.body.large.fontSize,
    color: colors.onSurface,
  },
  successContainer: {
    alignItems: 'center',
    paddingVertical: spacing[8],
  },
  successIcon: {
    marginBottom: spacing[4],
  },
  successEmail: {
    fontSize: typography.body.large.fontSize,
    fontWeight: '600',
    color: colors.onSurface,
    marginBottom: spacing[3],
  },
  successText: {
    fontSize: typography.body.medium.fontSize,
    color: colors.onSurfaceVariant,
    textAlign: 'center',
    marginBottom: spacing[6],
  },
  resendButton: {
    paddingVertical: spacing[3],
  },
  resendText: {
    fontSize: typography.body.medium.fontSize,
    color: colors.primary,
    fontWeight: '600',
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
