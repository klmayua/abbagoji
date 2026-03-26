import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, typography, spacing } from '../theme';
import { silkFinish } from '../theme';

export default function SplashScreen({ navigation }) {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.9);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // Auto-navigate after 2.5 seconds
    const timer = setTimeout(() => {
      navigation?.replace('LoginSecurely');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={silkFinish}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logoIcon}>🏛️</Text>
        </View>

        <Text style={styles.title}>GOJI2027</Text>
        <Text style={styles.subtitle}>Digital Majlis</Text>

        <View style={styles.taglineContainer}>
          <Text style={styles.tagline}>The Statesman's Digital Command</Text>
        </View>
      </Animated.View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Campaign Command Center</Text>
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing[6],
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  logoIcon: {
    fontSize: 60,
  },
  title: {
    fontSize: typography.display.small.fontSize,
    fontWeight: '800',
    color: colors.onPrimary,
    letterSpacing: 0.1,
    marginBottom: spacing[2],
  },
  subtitle: {
    fontSize: typography.headline.small.fontSize,
    fontWeight: '400',
    color: colors.onPrimary,
    opacity: 0.9,
    letterSpacing: 0.2,
    marginBottom: spacing[4],
  },
  taglineContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: 20,
    marginTop: spacing[4],
  },
  tagline: {
    fontSize: typography.body.small.fontSize,
    color: colors.onPrimary,
    opacity: 0.8,
    fontWeight: '500',
  },
  footer: {
    position: 'absolute',
    bottom: spacing[8],
    alignItems: 'center',
  },
  footerText: {
    fontSize: typography.label.medium.fontSize,
    color: colors.onPrimary,
    opacity: 0.7,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.1,
  },
  versionText: {
    fontSize: typography.label.small.fontSize,
    color: colors.onPrimary,
    opacity: 0.5,
    marginTop: spacing[1],
  },
});
