// EventsCalendar.js - Event Management Calendar
// Both Mobile and Desktop compatible

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, shapes } from '../../theme';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const EVENTS = [
  {
    id: '1',
    title: 'Town Hall Meeting',
    date: '2026-03-28',
    time: '14:00',
    location: 'Damaturu Central Market',
    type: 'town_hall',
    category: 'Public',
    attendees: 150,
    maxAttendees: 500,
    description: 'Join us for an open discussion about community issues and our vision for the future.',
  },
  {
    id: '2',
    title: 'Volunteer Training',
    date: '2026-03-30',
    time: '09:00',
    location: 'Campaign HQ',
    type: 'training',
    category: 'Volunteer',
    attendees: 25,
    maxAttendees: 50,
    description: 'Training session for new volunteers on canvassing and voter registration.',
  },
  {
    id: '3',
    title: 'Youth Rally',
    date: '2026-04-02',
    time: '16:00',
    location: 'Stadium',
    type: 'rally',
    category: 'Public',
    attendees: 800,
    maxAttendees: 2000,
    description: 'A rally focused on youth empowerment and employment opportunities.',
  },
  {
    id: '4',
    title: 'Door-to-Door Canvassing',
    date: '2026-04-05',
    time: '10:00',
    location: 'Ward 3',
    type: 'canvassing',
    category: 'Volunteer',
    attendees: 40,
    maxAttendees: 100,
    description: 'Grassroots outreach to engage voters in their homes.',
  },
];

export default function EventsCalendar({ isWeb = false }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewMode, setViewMode] = useState('month'); // month, week, list

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const renderCalendarDays = () => {
    const days = [];
    const today = new Date();

    // Empty cells for days before the first day of month
    for (let i = 0; i < firstDay; i++) {
      days.push(<View key={`empty-${i}`} style={styles.dayCell} />);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayEvents = EVENTS.filter((e) => e.date === dateString);
      const isToday = today.getDate() === day && today.getMonth() === month;
      const isSelected = selectedDate.getDate() === day;

      days.push(
        <TouchableOpacity
          key={day}
          style={[
            styles.dayCell,
            isSelected && styles.dayCellSelected,
            dayEvents.length > 0 && styles.dayCellHasEvents,
          ]}
          onPress={() => setSelectedDate(new Date(year, month, day))}
        >
          <Text style={[
            styles.dayText,
            isToday && styles.dayTextToday,
            isSelected && styles.dayTextSelected,
          ]}>
            {day}
          </Text>
          {dayEvents.length > 0 && (
            <View style={styles.eventIndicator}>
              <Text style={styles.eventCount}>{dayEvents.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      );
    }

    return days;
  };

  const renderEventCard = ({ item }) => (
    <TouchableOpacity
      style={styles.eventCard}
      onPress={() => setSelectedEvent(item)}
    >
      <View style={styles.eventHeader}>
        <View style={[styles.eventTypeBadge, { backgroundColor: getEventColor(item.type) + '15' }]}>
          <Text style={[styles.eventTypeText, { color: getEventColor(item.type) }]}>{item.category}</Text>
        </View>
        <Text style={styles.eventTime}>{item.time}</Text>
      </View>

      <Text style={styles.eventTitle}>{item.title}</Text>

      <View style={styles.eventLocation}>
        <Ionicons name="location" size={14} color={colors.outline} />
        <Text style={styles.eventLocationText}>{item.location}</Text>
      </View>

      <View style={styles.eventFooter}>
        <View style={styles.attendeeInfo}>
          <Ionicons name="people" size={14} color={colors.outline} />
          <Text style={styles.attendeeText}>
            {item.attendees}/{item.maxAttendees}
          </Text>
        </View>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const getEventColor = (type) => {
    const colors_map = {
      town_hall: '#3b82f6',
      training: '#22c55e',
      rally: '#ef4444',
      canvassing: '#f59e0b',
    };
    return colors_map[type] || colors.primary;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>{MONTHS[month]} {year}</Text>
          <View style={styles.navigationButtons}>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => setSelectedDate(new Date(year, month - 1, 1))}
            >
              <Ionicons name="chevron-back" size={20} color={colors.onSurface} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => setSelectedDate(new Date(year, month + 1, 1))}
            >
              <Ionicons name="chevron-forward" size={20} color={colors.onSurface} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.viewToggle}>
          {['month', 'week', 'list'].map((mode) => (
            <TouchableOpacity
              key={mode}
              style={[
                styles.viewToggleButton,
                viewMode === mode && styles.viewToggleButtonActive,
              ]}
              onPress={() => setViewMode(mode)}
            >
              <Text
                style={[
                  styles.viewToggleText,
                  viewMode === mode && styles.viewToggleTextActive,
                ]}
              >
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {viewMode === 'month' && (
        <>
          {/* Days Header */}
          <View style={styles.daysHeader}>
            {DAYS.map((day) => (
              <View key={day} style={styles.dayHeaderCell}>
                <Text style={styles.dayHeaderText}>{day}</Text>
              </View>
            ))}
          </View>

          {/* Calendar Grid */}
          <View style={styles.calendarGrid}>
            {renderCalendarDays()}
          </View>
        </>
      )}

      {/* Events Section */}
      <View style={styles.eventsSection}>
        <View style={styles.eventsHeader}>
          <Text style={styles.eventsTitle}>
            Events on {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
          </Text>
          <TouchableOpacity style={styles.addEventButton}>
            <Ionicons name="add" size={20} color={colors.primary} />
            <Text style={styles.addEventText}>Add Event</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={EVENTS.filter((e) => {
            const eventDate = new Date(e.date);
            return (
              eventDate.getDate() === selectedDate.getDate() &&
              eventDate.getMonth() === selectedDate.getMonth()
            );
          })}
          renderItem={renderEventCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.eventsList}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Ionicons name="calendar-outline" size={48} color={colors.outline} />
              <Text style={styles.emptyStateText}>No events scheduled</Text>
              <Text style={styles.emptyStateSubtext}>
                Select another date or create a new event
              </Text>
            </View>
          }
        />
      </View>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <View style={[styles.modalTypeBadge, { backgroundColor: getEventColor(selectedEvent.type) + '15' }]}>
                <Text style={[styles.modalTypeText, { color: getEventColor(selectedEvent.type) }]}>
                  {selectedEvent.category}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setSelectedEvent(null)}
              >
                <Ionicons name="close" size={24} color={colors.onSurface} />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalTitle}>{selectedEvent.title}</Text>

            <View style={styles.modalDetails}>
              <View style={styles.detailRow}>
                <Ionicons name="calendar" size={18} color={colors.outline} />
                <Text style={styles.detailText}>
                  {new Date(selectedEvent.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </Text>
              </View>

              <View style={styles.detailRow}>
                <Ionicons name="time" size={18} color={colors.outline} />
                <Text style={styles.detailText}>{selectedEvent.time}</Text>
              </View>

              <View style={styles.detailRow}>
                <Ionicons name="location" size={18} color={colors.outline} />
                <Text style={styles.detailText}>{selectedEvent.location}</Text>
              </View>
            </View>

            <Text style={styles.description}>{selectedEvent.description}</Text>

            <View style={styles.attendeesSection}>
              <Text style={styles.attendeesTitle}>Attendees</Text>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    {
                      width: `${(selectedEvent.attendees / selectedEvent.maxAttendees) * 100}%`,
                    },
                  ]}
                />
              </View>
              <Text style={styles.attendeesCount}>
                {selectedEvent.attendees} of {selectedEvent.maxAttendees} registered
              </Text>
            </View>

            <TouchableOpacity style={styles.registerActionButton}>
              <Text style={styles.registerActionText}>Register for Event</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing[6],
    borderBottomWidth: 1,
    borderBottomColor: colors.outlineVariant,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: typography.headline.small.fontSize,
    fontWeight: '700',
    color: colors.onSurface,
    marginRight: spacing[4],
  },
  navigationButtons: {
    flexDirection: 'row',
  },
  navButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: shapes.medium,
    backgroundColor: colors.surfaceContainerLow,
    marginLeft: spacing[2],
  },
  viewToggle: {
    flexDirection: 'row',
    backgroundColor: colors.surfaceContainerLow,
    borderRadius: shapes.large,
    padding: 4,
  },
  viewToggleButton: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: shapes.medium,
  },
  viewToggleButtonActive: {
    backgroundColor: colors.surface,
  },
  viewToggleText: {
    fontSize: 14,
    color: colors.onSurfaceVariant,
    fontWeight: '500',
  },
  viewToggleTextActive: {
    color: colors.onSurface,
    fontWeight: '600',
  },
  daysHeader: {
    flexDirection: 'row',
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: colors.outlineVariant,
  },
  dayHeaderCell: {
    flex: 1,
    alignItems: 'center',
  },
  dayHeaderText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.onSurfaceVariant,
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: spacing[6],
  },
  dayCell: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: shapes.medium,
    marginBottom: spacing[2],
  },
  dayCellSelected: {
    backgroundColor: colors.primary + '15',
  },
  dayCellHasEvents: {
    borderWidth: 1,
    borderColor: colors.primary + '30',
  },
  dayText: {
    fontSize: 14,
    color: colors.onSurface,
  },
  dayTextToday: {
    fontWeight: '700',
    color: colors.primary,
  },
  dayTextSelected: {
    fontWeight: '600',
  },
  eventIndicator: {
    position: 'absolute',
    bottom: 4,
    backgroundColor: colors.primary,
    borderRadius: 8,
    minWidth: 16,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  eventCount: {
    color: colors.onPrimary,
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
  eventsSection: {
    flex: 1,
    padding: spacing[6],
  },
  eventsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  eventsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.onSurface,
  },
  addEventButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary + '10',
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: shapes.large,
  },
  addEventText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
    marginLeft: spacing[2],
  },
  eventsList: {
    paddingBottom: spacing[6],
  },
  eventCard: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: shapes.large,
    padding: spacing[5],
    marginBottom: spacing[4],
    borderWidth: 1,
    borderColor: colors.outlineVariant,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  eventTypeBadge: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: shapes.medium,
  },
  eventTypeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  eventTime: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.outline,
  },
  eventTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.onSurface,
    marginBottom: spacing[2],
  },
  eventLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  eventLocationText: {
    fontSize: 14,
    color: colors.onSurfaceVariant,
    marginLeft: spacing[2],
  },
  eventFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  attendeeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  attendeeText: {
    fontSize: 13,
    color: colors.onSurfaceVariant,
    marginLeft: spacing[2],
  },
  registerButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: shapes.medium,
  },
  registerButtonText: {
    color: colors.onPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: spacing[12],
  },
  emptyStateText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.onSurface,
    marginTop: spacing[4],
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: colors.onSurfaceVariant,
    marginTop: spacing[2],
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing[6],
  },
  modalContent: {
    backgroundColor: colors.surface,
    borderRadius: shapes.extraLarge,
    padding: spacing[6],
    width: '100%',
    maxWidth: 500,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  modalTypeBadge: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: shapes.medium,
  },
  modalTypeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  closeButton: {
    padding: spacing[2],
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.onSurface,
    marginBottom: spacing[4],
  },
  modalDetails: {
    marginBottom: spacing[4],
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  detailText: {
    fontSize: 15,
    color: colors.onSurface,
    marginLeft: spacing[3],
  },
  description: {
    fontSize: 15,
    color: colors.onSurfaceVariant,
    lineHeight: 22,
    marginBottom: spacing[6],
  },
  attendeesSection: {
    marginBottom: spacing[6],
  },
  attendeesTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.onSurface,
    marginBottom: spacing[2],
  },
  progressBar: {
    height: 6,
    backgroundColor: colors.surfaceContainer,
    borderRadius: 3,
    marginBottom: spacing[2],
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
  attendeesCount: {
    fontSize: 13,
    color: colors.onSurfaceVariant,
  },
  registerActionButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing[4],
    borderRadius: shapes.large,
    alignItems: 'center',
  },
  registerActionText: {
    color: colors.onPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
});
