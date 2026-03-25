import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Calendar, MapPin, Clock, Users, Filter, ArrowRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList, Event } from '../../types';
import { colors } from '../../constants/theme';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const events: Event[] = [
  {
    id: 1,
    title: 'Zone B Town Hall Meeting',
    description: 'Join Alhaji Goji for an interactive town hall meeting.',
    date: 'Apr 5, 2026',
    time: '2:00 PM - 5:00 PM',
    location: 'Damaturu Town Hall',
    lga: 'Damaturu',
    category: 'Town Hall',
    attendees: 500,
  },
  {
    id: 2,
    title: 'Youth Empowerment Summit',
    description: 'A gathering of young leaders to discuss opportunities.',
    date: 'Apr 12, 2026',
    time: '10:00 AM - 4:00 PM',
    location: 'Gujba Community Center',
    lga: 'Gujba',
    category: 'Youth',
    attendees: 300,
  },
  {
    id: 3,
    title: 'Women in Business Workshop',
    description: 'Training and networking for women entrepreneurs.',
    date: 'Apr 18, 2026',
    time: '9:00 AM - 2:00 PM',
    location: 'Gulani LGA Secretariat',
    lga: 'Gulani',
    category: 'Empowerment',
    attendees: 250,
  },
];

const categories = ['All', 'Town Hall', 'Youth', 'Empowerment', 'Rally', 'Healthcare'];

export function EventsScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredEvents = selectedCategory === 'All'
    ? events
    : events.filter(item => item.category === selectedCategory);

  const renderEvent = ({ item }: { item: Event }) => (
    <TouchableOpacity style={styles.eventCard}>
      <View style={styles.eventImage}>
        <Text style={styles.eventPlaceholder}>{item.title.charAt(0)}</Text>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
      </View>
      <View style={styles.eventContent}>
        <View style={styles.metaRow}>
          <Calendar size={16} color={colors.primary.DEFAULT} />
          <Text style={styles.metaText}>{item.date}</Text>
        </View>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventDescription} numberOfLines={2}>{item.description}</Text>

        <View style={styles.eventDetails}>
          <View style={styles.detailItem}>
            <Clock size={14} color={colors.onSurface.variant} />
            <Text style={styles.detailText}>{item.time}</Text>
          </View>
          <View style={styles.detailItem}>
            <MapPin size={14} color={colors.onSurface.variant} />
            <Text style={styles.detailText}>{item.location}</Text>
          </View>
          <View style={styles.detailItem}>
            <Users size={14} color={colors.onSurface.variant} />
            <Text style={styles.detailText}>{item.attendees} attending</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.rsvpButton}>
          <Text style={styles.rsvpButtonText}>RSVP Now</Text>
          <ArrowRight size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient
          colors={[colors.primary.DEFAULT, colors.primary.container]}
          style={styles.header}
        >
          <Text style={styles.headerTitle}>Upcoming Events</Text>
          <Text style={styles.headerSubtitle}>
            Join us at events across Yobe East Zone B
          </Text>
        </LinearGradient>

        {/* Category Filter */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryContainer}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryChip,
                selectedCategory === category && styles.categoryChipActive,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryChipText,
                  selectedCategory === category && styles.categoryChipTextActive,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Events List */}
        <View style={styles.eventsList}>
          <FlatList
            data={filteredEvents}
            renderItem={renderEvent}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            contentContainerStyle={styles.eventsListContent}
          />
        </View>

        {/* Host Event CTA */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Want to Host an Event?</Text>
          <Text style={styles.ctaSubtitle}>
            Organize a campaign event in your community
          </Text>
          <TouchableOpacity style={styles.ctaButton} onPress={() => navigation.navigate('GetInvolved')}>
            <Text style={styles.ctaButtonText}>Host an Event</Text>
          </TouchableOpacity>
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
  header: {
    padding: 24,
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  categoryContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.surface.container,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  categoryChipActive: {
    backgroundColor: colors.primary.DEFAULT,
    borderColor: colors.primary.DEFAULT,
  },
  categoryChipText: {
    fontSize: 14,
    color: colors.onSurface.DEFAULT,
    fontWeight: '500',
  },
  categoryChipTextActive: {
    color: '#fff',
  },
  eventsList: {
    padding: 16,
  },
  eventsListContent: {
    gap: 16,
  },
  eventCard: {
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  eventImage: {
    height: 140,
    backgroundColor: colors.surface.containerHigh,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  eventPlaceholder: {
    fontSize: 40,
    fontWeight: '700',
    color: colors.onSurface.variant,
  },
  categoryBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: colors.primary.DEFAULT,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  categoryText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
  eventContent: {
    padding: 16,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  metaText: {
    fontSize: 13,
    color: colors.primary.DEFAULT,
    fontWeight: '500',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginBottom: 4,
  },
  eventDescription: {
    fontSize: 14,
    color: colors.onSurface.variant,
    lineHeight: 20,
    marginBottom: 12,
  },
  eventDetails: {
    gap: 6,
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  detailText: {
    fontSize: 13,
    color: colors.onSurface.variant,
  },
  rsvpButton: {
    backgroundColor: colors.primary.DEFAULT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    borderRadius: 10,
  },
  rsvpButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  ctaSection: {
    margin: 16,
    marginTop: 0,
    padding: 24,
    backgroundColor: colors.surface.containerLow,
    borderRadius: 16,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginBottom: 4,
    textAlign: 'center',
  },
  ctaSubtitle: {
    fontSize: 14,
    color: colors.onSurface.variant,
    marginBottom: 16,
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: colors.primary.DEFAULT,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
