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
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, shapes, shadows } from '../theme';
import { silkFinish } from '../theme';
import { PrimaryButton, GhostButton } from '../components/Components';

export default function LoginSecurely({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    navigation?.replace('HomeProgressTracker');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <LinearGradient
          colors={silkFinish}
          style={styles.header}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.logoContainer}>
            <Text style={styles.logoIcon}>🏛️</Text>
          </View>
          <Text style={styles.headerTitle}>Welcome Back</Text>
          <Text style={styles.headerSubtitle}>Sign in to continue your mission</Text>
        </LinearGradient>

        {/* Form Section */}
        <View style={styles.formContainer}>
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

          <Text style={styles.sectionLabel}>PASSWORD</Text>
          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color={colors.outline}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor={colors.onSurfaceVariant}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color={colors.outline}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <PrimaryButton
            title={isLoading ? 'SIGNING IN...' : 'SIGN IN'}
            onPress={handleLogin}
            size="large"
            icon="log-in-outline"
          />

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialIcon}>🔐</Text>
              <Text style={styles.socialText}>Biometric</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation?.navigate('SignUpPersonalInfo')}>
              <Text style={styles.footerLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
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
    paddingTop: spacing[12],
    paddingBottom: spacing[8],
    paddingHorizontal: spacing[6],
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing[4],
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  logoIcon: {
    fontSize: 40,
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
  eyeIcon: {
    padding: spacing[2],
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: spacing[5],
  },
  forgotPasswordText: {
    fontSize: typography.body.small.fontSize,
    color: colors.primary,
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing[6],
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.outlineVariant,
  },
  dividerText: {
    fontSize: typography.label.small.fontSize,
    color: colors.outline,
    marginHorizontal: spacing[3],
    fontWeight: '600',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing[4],
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceContainer,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[5],
    borderRadius: shapes.large,
    borderWidth: 1,
    borderColor: colors.outlineVariant,
  },
  socialIcon: {
    fontSize: 20,
    marginRight: spacing[2],
  },
  socialText: {
    fontSize: typography.body.medium.fontSize,
    fontWeight: '600',
    color: colors.onSurface,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing[8],
    paddingBottom: spacing[4],
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
