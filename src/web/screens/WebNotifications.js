// WebNotifications.js - Citizens Portal Web Notifications Panel
// Desktop version with enhanced notification management

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
import { webTheme } from '../theme.web';

const MOCK_NOTIFICATIONS = [
  {
    id: '1',
    type: 'campaign',
    title: 'New Campaign Update',
    message: 'The campaign has launched a new initiative focused on education reform. Read the full manifesto to learn more about our vision for improving schools.',
    timestamp: Date.now() - 300000,
    read: false,
    priority: 'high',
    category: 'Updates',
    icon: 'megaphone',
    color: '#ef4444',
  },
  {
    id: '2',
    type: 'event',
    title: 'Town Hall Meeting Tomorrow',
    message: 'Join us for a town hall meeting at Damaturu Central Market at 2:00 PM. Come share your ideas and questions with the campaign team.',
    timestamp: Date.now() - 1800000,
    read: false,
    priority: 'medium',
    category: 'Events',
    icon: 'calendar',
    color: '#f59e0b',
  },
  {
    id: '3',
    type: 'volunteer',
    title: 'Volunteer Opportunity: Door-to-Door',
    message: 'We need volunteers for door-to-door canvassing in Ward 3 this weekend. Training will be provided. Sign up now!',
    timestamp: Date.now() - 3600000,
    read: true,
    priority: 'low',
    category: 'Volunteer',
    icon: 'people',
    color: '#22c55e',
  },
  {
    id: '4',
    type: 'polling',
    title: 'Your Polling Unit Location',
    message: 'Your designated polling unit is Primary School Damaturu. Remember to bring your PVC and arrive early on election day.',
    timestamp: Date.now() - 7200000,
    read: true,
    priority: 'high',
    category: 'Voting',
    icon: 'location',
    color: '#3b82f6',
  },
  {
    id: '5',
    type: 'newsletter',
    title: 'Weekly Newsletter: Week of March 24',
    message: 'This week: Campaign milestones reached, upcoming events calendar, and volunteer spotlights. Click to read more.',
    timestamp: Date.now() - 86400000,
    read: true,
    priority: 'low',
    category: 'Newsletter',
    icon: 'newspaper',
    color: '#8b5cf6',
  },
  {
    id: '6',
    type: 'social',
    title: 'Share Your Support',
    message: 'Help spread the word! Share our latest campaign video on social media and encourage your friends to join the movement.',
    timestamp: Date.now() - 172800000,
    read: true,
    priority: 'medium',
    category: 'Social',
    icon: 'share-social',
    color: '#06b6d4',
  },
];

const CATEGORIES = ['All', 'Updates', 'Events', 'Volunteer', 'Voting', 'Newsletter', 'Social'];

export default function WebNotifications() {
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedNotification, setSelectedNotification] = useState(null);

  const filteredNotifications = selectedCategory === 'All'
    ? notifications
    : notifications.filter((n) => n.category === selectedCategory);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id) => {
    setNotifications((prev) =
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    if (selectedNotification?.id === id) {
      setSelectedNotification(null);
    }
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days === 1) return 'Yesterday';
    return `${days}d ago`;
  };

  const renderNotificationItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.notificationItem,
        !item.read && styles.notificationItemUnread,
        selectedNotification?.id === item.id && styles.notificationItemSelected,
      ]}
      onPress={() => {
        setSelectedNotification(item);
        markAsRead(item.id);
      }}
    >
      <View style={[styles.iconContainer, { backgroundColor: item.color + '15' }]} onPress={() => {
        setSelectedNotification(item);
        markAsRead(item.id);
      }}
    >
      <View style={[styles.iconContainer, { backgroundColor: item.color + '15' }]}>
        <Ionicons name={item.icon} size={20} color={item.color} />
      </View>

      <View style={styles.notificationContent}>
        <View style={styles.notificationHeader}>
          <Text style={styles.notificationTitle} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.notificationTime}>{formatTime(item.timestamp)}</Text>
        </View>

        <Text style={styles.notificationMessage} numberOfLines={2}>
          {item.message}
003c/Text>

        <View style={styles.notificationFooter}>
          <View style={[styles.categoryBadge, { backgroundColor: item.color + '15' }]} onPress={() => {
            setSelectedNotification(item);
            markAsRead(item.id);
          }}
    >
      <View style={[styles.categoryBadge, { backgroundColor: item.color + '15' }]} onPress={() => {
            setSelectedNotification(item);
            markAsRead(item.id);
          }}
    >
      <View style={[styles.categoryBadge, { backgroundColor: item.color + '15' }]}>
            <Text style={[styles.categoryText, { color: item.color }]} onPress={() => {
            setSelectedNotification(item);
            markAsRead(item.id);
          }}
    >
      <View style={[styles.categoryBadge, { backgroundColor: item.color + '15' }]}>
            <Text style={[styles.categoryText, { color: item.color }]} onPress={() => {
            setSelectedNotification(item);
            markAsRead(item.id);
          }}
    >
      <View style={[styles.categoryBadge, { backgroundColor: item.color + '15' }]}>
            <Text style={[styles.categoryText, { color: item.color }]}>{item.category}</Text>
          </View>

          {item.priority === 'high' && (
            <View style={styles.priorityBadge}>
              <Text style={styles.priorityText}>High Priority</Text>
            </View>
          )}
        </View>
      </View>

      {!item.read && <View style={styles.unreadIndicator} />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Sidebar with Categories */}
      <View style={styles.sidebar}>
        <View style={styles.sidebarHeader}>
          <Text style={styles.sidebarTitle}>Notifications</Text>
          {unreadCount > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>{unreadCount}</Text>
            </View>
          )}
        </View>

        <TouchableOpacity style={styles.markAllButton} onPress={markAllAsRead}>
          <Ionicons name="checkmark-done" size={18} color={webTheme.colors.primary} />
          <Text style={styles.markAllText}>Mark all as read</Text>
        </TouchableOpacity>

        <Text style={styles.filterLabel}>Filter by Category</Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          {CATEGORIES.map((category) => {
            const count = category === 'All'
              ? notifications.length
              : notifications.filter((n) => n.category === category).length;

            return (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryItem,
                  selectedCategory === category && styles.categoryItemActive,
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text
                  style={[
                    styles.categoryItemText,
                    selectedCategory === category && styles.categoryItemTextActive,
                  ]}
                >
                  {category}
                </Text>
                <Text
                  style={[
                    styles.categoryCount,
                    selectedCategory === category && styles.categoryCountActive,
                  ]}
                >
                  {count}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Notification List */}
      <View style={styles.listContainer}>
        <FlatList
          data={filteredNotifications}
          renderItem={renderNotificationItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Detail Panel */}
      {selectedNotification && (
        <View style={styles.detailPanel}>
          <View style={styles.detailHeader}>
            <View style={[styles.detailIcon, { backgroundColor: selectedNotification.color + '15' }]} onPress={() => {
            setSelectedNotification(item);
            markAsRead(item.id);
          }}
    >
      <View style={[styles.detailIcon, { backgroundColor: selectedNotification.color + '15' }]} onPress={() => {
            setSelectedNotification(item);
            markAsRead(item.id);
          }}
    >
      <View style={[styles.detailIcon, { backgroundColor: selectedNotification.color + '15' }]} onPress={() => {
            setSelectedNotification(item);
            markAsRead(item.id);
          }}
    >
      <View style={[styles.detailIcon, { backgroundColor: selectedNotification.color + '15' }]} onPress={() => {
            setSelectedNotification(item);
            markAsRead(item.id);
          }}
    >
      <View style={[styles.detailIcon, { backgroundColor: selectedNotification.color + '15' }]}>
              <Ionicons name={selectedNotification.icon} size={28} color={selectedNotification.color} />
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSelectedNotification(null)}
            >
              <Ionicons name="close" size={24} color={webTheme.colors.onSurfaceVariant} />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.detailTitle}>{selectedNotification.title}</Text>
            <Text style={styles.detailTime}>
              {new Date(selectedNotification.timestamp).toLocaleString()}
            </Text>

            <View style={styles.detailContent}>
              <Text style={styles.detailMessage}>{selectedNotification.message}</Text>
            </View>

            <View style={styles.detailActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="share-outline" size={18} color={webTheme.colors.primary} />
                <Text style={styles.actionButtonText}>Share</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.actionButton, styles.actionButtonDanger]}
                onPress={() => deleteNotification(selectedNotification.id)}
              >
                <Ionicons name="trash-outline" size={18} color="#ef4444" />
                <Text style={styles.actionButtonTextDanger}>Delete</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: webTheme.colors.surface,
  },
  sidebar: {
    width: 280,
    backgroundColor: webTheme.colors.sidebar,
    borderRightWidth: 1,
    borderRightColor: webTheme.colors.sidebarBorder,
    padding: webTheme.layout.contentPadding,
  },
  sidebarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  sidebarTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: webTheme.colors.onSurface,
  },
  unreadBadge: {
    backgroundColor: webTheme.colors.primary,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 12,
  },
  unreadBadgeText: {
    color: webTheme.colors.onPrimary,
    fontSize: 12,
    fontWeight: '700',
  },
  markAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 24,
  },
  markAllText: {
    fontSize: 14,
    color: webTheme.colors.primary,
    fontWeight: '600',
    marginLeft: 8,
  },
  filterLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: webTheme.colors.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: webTheme.layout.cardBorderRadius,
    marginBottom: 4,
  },
  categoryItemActive: {
    backgroundColor: webTheme.colors.primary + '10',
  },
  categoryItemText: {
    fontSize: 15,
    color: webTheme.colors.onSurface,
  },
  categoryItemTextActive: {
    fontWeight: '600',
    color: webTheme.colors.primary,
  },
  categoryCount: {
    fontSize: 13,
    color: webTheme.colors.onSurfaceVariant,
    backgroundColor: webTheme.colors.surfaceContainerLow,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  categoryCountActive: {
    backgroundColor: webTheme.colors.primary + '20',
    color: webTheme.colors.primary,
  },
  listContainer: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: webTheme.colors.sidebarBorder,
  },
  listContent: {
    padding: webTheme.layout.contentPadding,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: webTheme.layout.cardBorderRadius,
    marginBottom: 12,
    backgroundColor: webTheme.colors.surface,
    ...webTheme.shadows.card,
    position: 'relative',
  },
  notificationItemUnread: {
    backgroundColor: webTheme.colors.primary + '05',
    borderLeftWidth: 3,
    borderLeftColor: webTheme.colors.primary,
  },
  notificationItemSelected: {
    backgroundColor: webTheme.colors.primary + '10',
    borderWidth: 1,
    borderColor: webTheme.colors.primary,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationContent: {
    flex: 1,
    marginLeft: 12,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  notificationTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: webTheme.colors.onSurface,
    flex: 1,
    marginRight: 8,
  },
  notificationTime: {
    fontSize: 12,
    color: webTheme.colors.onSurfaceVariant,
  },
  notificationMessage: {
    fontSize: 13,
    color: webTheme.colors.onSurfaceVariant,
    lineHeight: 18,
    marginBottom: 8,
  },
  notificationFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    marginRight: 8,
  },
  categoryText: {
    fontSize: 11,
    fontWeight: '600',
  },
  priorityBadge: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  priorityText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
  },
  unreadIndicator: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: webTheme.colors.primary,
  },
  detailPanel: {
    width: 400,
    backgroundColor: webTheme.colors.surface,
    padding: webTheme.layout.contentPadding,
  },
  detailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  detailIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    padding: 8,
  },
  detailTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: webTheme.colors.onSurface,
    marginBottom: 8,
  },
  detailTime: {
    fontSize: 13,
    color: webTheme.colors.onSurfaceVariant,
    marginBottom: 24,
  },
  detailContent: {
    backgroundColor: webTheme.colors.surfaceContainerLow,
    padding: 20,
    borderRadius: webTheme.layout.cardBorderRadius,
    marginBottom: 24,
  },
  detailMessage: {
    fontSize: 15,
    color: webTheme.colors.onSurface,
    lineHeight: 24,
  },
  detailActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: webTheme.layout.cardBorderRadius,
    borderWidth: 1,
    borderColor: webTheme.colors.outlineVariant,
  },
  actionButtonText: {
    fontSize: 14,
    color: webTheme.colors.primary,
    fontWeight: '600',
    marginLeft: 8,
  },
  actionButtonDanger: {
    borderColor: '#fecaca',
  },
  actionButtonTextDanger: {
    fontSize: 14,
    color: '#ef4444',
    fontWeight: '600',
    marginLeft: 8,
  },
});
