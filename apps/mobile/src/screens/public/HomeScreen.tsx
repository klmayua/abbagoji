import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ArrowRight, Users, Heart, Target, Briefcase } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '../../types';
import { colors } from '../../constants/theme';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const pillars = [
  {
    icon: Briefcase,
    title: 'Jobs',
    description: 'Creating employment through industrialization and agriculture.',
    color: colors.primary.DEFAULT,
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Quality healthcare accessible to all communities.',
    color: colors.tertiary.DEFAULT,
  },
  {
    icon: Users,
    title: 'Education',
    description: 'Investing in schools and youth development.',
    color: colors.secondary.DEFAULT,
  },
  {
    icon: Target,
    title: 'Infrastructure',
    description: 'Building roads, markets, and utilities.',
    color: colors.primary.container,
  },
];

export function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1523990091289-1d524b5c7194?w=800' }}
          style={styles.heroBackground}
        >
          <LinearGradient
            colors={['transparent', 'rgba(0, 69, 13, 0.95)']}
            style={styles.heroGradient}
          >
            <View style={styles.heroContent}>
              <View style={styles.logoContainer}>
                <View style={styles.logoBadge}>
                  <Text style={styles.logoText}>AG</Text>
                </View>
                <View>
                  <Text style={styles.logoSubtext}>Alhaji Abba Goji</Text>
                  <Text style={styles.logoTagline}>Senate 2027</Text>
                </View>
              </View>

              <Text style={styles.heroTitle}>Building Yobe East Together</Text>
              <Text style={styles.heroSubtitle}>
                A campaign focused on Jobs, Education, Healthcare, and Infrastructure for Zone B.
              </Text>

              <View style={styles.heroButtons}>
                <TouchableOpacity
                  style={styles.primaryButton}
                  onPress={() => navigation.navigate('GetInvolved')}
                >
                  <Text style={styles.primaryButtonText}>Get Involved</Text>
                  <ArrowRight size={20} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.secondaryButton}
                  onPress={() => navigation.navigate('News')}
                >
                  <Text style={styles.secondaryButtonText}>Learn More</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>

        {/* Four Pillars Section */}
        <View style={styles.pillarsSection}>
          <Text style={styles.sectionTitle}>Our Priorities</Text>
          <Text style={styles.sectionSubtitle}>
            Four pillars for transforming Zone B
          </Text>

          <View style={styles.pillarsGrid}>
            {pillars.map((pillar, index) => (
              <TouchableOpacity
                key={index}
                style={styles.pillarCard}
                onPress={() => navigation.navigate('GetInvolved')}
              >
                <View style={[styles.pillarIcon, { backgroundColor: `${pillar.color}15` }]}>
                  <pillar.icon size={28} color={pillar.color} />
                </View>
                <Text style={styles.pillarTitle}>{pillar.title}</Text>
                <Text style={styles.pillarDescription}>{pillar.description}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Impact Stats Section */}
        <View style={[styles.statsSection, { backgroundColor: colors.surface.containerLow }]}>
          <Text style={styles.sectionTitle}>Our Impact So Far</Text>
          <Text style={styles.sectionSubtitle}>Results speak louder than promises</Text>

          <View style={styles.statsGrid}>
            {[
              { value: '10K+', label: 'Jobs Created' },
              { value: '50+', label: 'Schools Supported' },
              { value: '6', label: 'LGAs Covered' },
              { value: '200K+', label: 'Lives Impacted' },
            ].map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Find Polling Unit CTA */}
        <TouchableOpacity
          style={styles.puSection}
          onPress={() => navigation.navigate('FindPollingUnit')}
        >
          <LinearGradient
            colors={[colors.primary.DEFAULT, colors.primary.container]}
            style={styles.puGradient}
          >
            <Text style={styles.puTitle}>Find Your Polling Unit</Text>
            <Text style={styles.puSubtitle}>Locate your voting station in Zone B</Text>
            <View style={styles.puButton}>
              <Text style={styles.puButtonText}>Find Polling Unit</Text>
              <ArrowRight size={18} color={colors.primary.DEFAULT} />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Paid for by Alhaji Abba Goji Campaign Committee</Text>
          <Text style={styles.footerCopyright}>© 2026 Alhaji Abba Goji for Senate</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface.base,
  },
  heroBackground: {
    height: width * 1.1,
    width: '100%',
  },
  heroGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 24,
  },
  heroContent: {
    paddingBottom: 40,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  logoBadge: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: colors.primary.container,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  logoSubtext: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  logoTagline: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.8,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 12,
    lineHeight: 40,
  },
  heroSubtitle: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.9,
    marginBottom: 32,
    lineHeight: 24,
  },
  heroButtons: {
    gap: 12,
  },
  primaryButton: {
    backgroundColor: colors.secondary.fixed,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  primaryButtonText: {
    color: colors.onSurface.DEFAULT,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  pillarsSection: {
    padding: 24,
    backgroundColor: colors.surface.base,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginBottom: 8,
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: colors.onSurface.variant,
    marginBottom: 24,
    textAlign: 'center',
  },
  pillarsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  pillarCard: {
    width: (width - 60) / 2,
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  pillarIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  pillarTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.onSurface.DEFAULT,
    marginBottom: 4,
  },
  pillarDescription: {
    fontSize: 12,
    color: colors.onSurface.variant,
    lineHeight: 18,
  },
  statsSection: {
    padding: 24,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    width: (width - 60) / 2,
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  statValue: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.primary.DEFAULT,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.onSurface.variant,
  },
  puSection: {
    margin: 24,
    borderRadius: 16,
    overflow: 'hidden',
  },
  puGradient: {
    padding: 24,
  },
  puTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  puSubtitle: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.9,
    marginBottom: 16,
  },
  puButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  puButtonText: {
    color: colors.primary.DEFAULT,
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    padding: 24,
    backgroundColor: colors.surface.containerLow,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: colors.onSurface.variant,
    textAlign: 'center',
    marginBottom: 4,
  },
  footerCopyright: {
    fontSize: 12,
    color: colors.onSurface.variant,
    textAlign: 'center',
  },
});
