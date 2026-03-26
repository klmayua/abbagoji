import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, typography, spacing, shapes, shadows, silkFinish } from '../theme';
import { Ionicons } from '@expo/vector-icons';

// Primary Button with Silk Finish
export const PrimaryButton = ({ title, onPress, icon, size = 'medium' }) => {
  const sizeStyles = {
    small: { padding: spacing[2], fontSize: 12 },
    medium: { padding: spacing[3], fontSize: 14 },
    large: { padding: spacing[4], fontSize: 16 },
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <LinearGradient
        colors={silkFinish}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.primaryButton, sizeStyles[size]]}
      >
        {icon && <Ionicons name={icon} size={16} color={colors.onPrimary} style={styles.buttonIcon} />}
        <Text style={[styles.primaryButtonText, { fontSize: sizeStyles[size].fontSize }]} numberOfLines={1}>
          {title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

// Secondary Button
export const SecondaryButton = ({ title, onPress, icon }) => {
  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
      {icon && <Ionicons name={icon} size={16} color={colors.onSecondaryFixed} style={styles.buttonIcon} />}
      <Text style={styles.secondaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

// Ghost Button
export const GhostButton = ({ title, onPress, icon }) => {
  return (
    <TouchableOpacity style={styles.ghostButton} onPress={onPress}>
      <Text style={styles.ghostButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

// Progress Card (Command Meter)
export const ProgressCard = ({ current, total, label, weekTotal, totalImpact }) => {
  const percentage = Math.round((current / total) * 100);

  return (
    <View style={styles.progressCard}>
      <View style={styles.progressBackground} />
      <View style={styles.progressContent}>
        <View style={styles.progressHeader}>
          <View>
            <Text style={styles.progressLabel}>{label}</Text>
            <View style={styles.progressValueRow}>
              <Text style={styles.progressValue}>{current}</Text>
              <Text style={styles.progressTotal}> / {total} contacted</Text>
            </View>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{percentage}% REACHED</Text>
          </View>
        </View>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarBackground}>
            <LinearGradient
              colors={silkFinish}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.progressBarFill, { width: `${percentage}%` }]}
            />
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>This Week</Text>
            <Text style={styles.statValue}>{weekTotal}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Total Impact</Text>
            <Text style={styles.statValue}>{totalImpact}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// Info Card
export const InfoCard = ({ title, subtitle, icon, variant = 'default', onPress }) => {
  const variants = {
    default: { backgroundColor: colors.surfaceContainer },
    secondary: { backgroundColor: colors.secondaryFixed },
    primary: { backgroundColor: colors.primaryFixed },
  };

  return (
    <TouchableOpacity style={[styles.infoCard, variants[variant]]} onPress={onPress}>
      <View style={styles.infoCardHeader}>
        <Ionicons name={icon} size={16} color={colors.primary} />
        <Text style={styles.infoCardLabel}>{title}</Text>
      </View>
      <Text style={styles.infoCardTitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

// List Item (for outreach items)
export const ListItem = ({ name, detail, urgency = 1, onPress }) => {
  const urgencyDots = [1, 2, 3];

  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <View style={styles.listItemLeft}>
        <View style={styles.listItemIcon}>
          <Ionicons name="person" size={20} color={colors.primary} />
        </View>
        <View>
          <Text style={styles.listItemName}>{name}</Text>
          <Text style={styles.listItemDetail}>{detail}</Text>
        </View>
      </View>

      <View style={styles.listItemRight}>
        <Text style={styles.urgencyLabel}>URGENCY</Text>
        <View style={styles.urgencyDots}>
          {urgencyDots.map((dot) => (
            <View
              key={dot}
              style={[
                styles.urgencyDot,
                dot <= urgency && styles.urgencyDotActive,
              ]}
            />
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Input Field
export const InputField = ({ label, placeholder, value, onChangeText, secure = false }) => {
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.inputLabel}>{label}</Text>}
      <View style={styles.inputWrapper}>
        <Text
          style={styles.input}
          secureTextEntry={secure}
          placeholder={placeholder}
          placeholderTextColor={colors.onSurfaceVariant}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: shapes.medium,
    ...shadows.medium,
  },
  primaryButtonText: {
    color: colors.onPrimary,
    fontWeight: '700',
    letterSpacing: 0.05,
  },
  buttonIcon: {
    marginRight: spacing[2],
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondaryFixed,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    borderRadius: shapes.medium,
  },
  secondaryButtonText: {
    color: colors.onSecondaryFixed,
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 0.05,
  },
  ghostButton: {
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
  },
  ghostButtonText: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 0.05,
  },
  progressCard: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: shapes.extraLarge,
    overflow: 'hidden',
    ...shadows.large,
  },
  progressBackground: {
    position: 'absolute',
    top: -40,
    right: -40,
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: colors.primary + '08',
  },
  progressContent: {
    padding: spacing[6],
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing[4],
  },
  progressLabel: {
    fontSize: typography.label.small.fontSize,
    color: colors.outline,
    textTransform: 'uppercase',
    letterSpacing: 0.1,
    marginBottom: spacing[1],
  },
  progressValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  progressValue: {
    fontSize: typography.display.small.fontSize,
    fontWeight: '700',
    color: colors.onSurface,
    letterSpacing: -0.02,
  },
  progressTotal: {
    fontSize: typography.title.medium.fontSize,
    color: colors.outline,
    fontWeight: '400',
  },
  badge: {
    backgroundColor: colors.primaryFixed,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: shapes.small,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.onPrimaryFixed,
    letterSpacing: 0.05,
  },
  progressBarContainer: {
    marginBottom: spacing[4],
  },
  progressBarBackground: {
    height: 12,
    backgroundColor: colors.surfaceContainer,
    borderRadius: shapes.full,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing[4],
  },
  statBox: {
    flex: 1,
    backgroundColor: colors.surfaceContainerLow,
    borderRadius: shapes.large,
    padding: spacing[3],
  },
  statLabel: {
    fontSize: typography.label.small.fontSize,
    color: colors.outline,
    textTransform: 'uppercase',
    letterSpacing: 0.05,
    marginBottom: spacing[1],
  },
  statValue: {
    fontSize: typography.title.large.fontSize,
    fontWeight: '700',
    color: colors.onSurface,
  },
  infoCard: {
    padding: spacing[5],
    borderRadius: shapes.large,
  },
  infoCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[2],
  },
  infoCardLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.05,
    marginLeft: spacing[2],
  },
  infoCardTitle: {
    fontSize: typography.title.large.fontSize,
    fontWeight: '800',
    color: colors.onSurface,
    lineHeight: 28,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surfaceContainerLowest,
    padding: spacing[4],
    borderRadius: shapes.large,
    marginBottom: spacing[3],
  },
  listItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemIcon: {
    width: 48,
    height: 48,
    borderRadius: shapes.large,
    backgroundColor: colors.surfaceContainer,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing[3],
  },
  listItemName: {
    fontSize: typography.body.medium.fontSize,
    fontWeight: '700',
    color: colors.onSurface,
  },
  listItemDetail: {
    fontSize: typography.body.small.fontSize,
    color: colors.onSurfaceVariant,
    marginTop: 2,
  },
  listItemRight: {
    alignItems: 'flex-end',
  },
  urgencyLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.outline,
    marginBottom: spacing[1],
    letterSpacing: 0.05,
  },
  urgencyDots: {
    flexDirection: 'row',
    gap: 2,
  },
  urgencyDot: {
    width: 6,
    height: 12,
    borderRadius: 3,
    backgroundColor: colors.surfaceContainer,
  },
  urgencyDotActive: {
    backgroundColor: colors.primary,
  },
  inputContainer: {
    marginBottom: spacing[4],
  },
  inputLabel: {
    fontSize: typography.label.medium.fontSize,
    fontWeight: '500',
    color: colors.onSurface,
    marginBottom: spacing[2],
  },
  inputWrapper: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: shapes.medium,
    padding: spacing[4],
  },
  input: {
    fontSize: typography.body.large.fontSize,
    color: colors.onSurface,
  },
});
