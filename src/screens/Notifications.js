import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, shapes } from '../theme';
import { TopAppBar } from '../components/Navigation';

const NOTIFICATIONS = [
  {
    id: '1',
    type: 'outreach',
    title: 'New Priority Voter',
    message: 'Adamu Musa is 120m away and showing high interest',
    time: '2 min ago',
    unread: true,
    icon: 'star',
    color: colors.secondary,
  },
  {
    id: '2',
    type: 'message',
    title: 'New Message',
    message: 'Fatima Yusuf: "Can we reschedule for tomorrow?"',
    time: '15 min ago',
    unread: true,
    icon: 'chatbubble',
    color: colors.primary,
  },
  {
    id: '3',
    type: 'sync',
    title: 'Data Synced',
    message: 'All your outreach data has been synced successfully',
    time: '1 hour ago',
    unread: false,
    icon: 'cloud-done',
    color: colors.tertiary,
  },
  {
    id: '4',
    type: 'team',
    title: 'Team Update',
    message: 'Coordinator assigned 5 new voters to your ward',
    time: '3 hours ago',
    unread: false,
    icon: 'people',
    color: colors.onSurfaceVariant,
  },
  {
    id: '5',
    type: 'goal',
    title: 'Daily Goal Reached!',
    message: 'Congratulations! You\'ve reached 80% of your daily target',
    time: '5 hours ago',
    unread: false,
    icon: 'trophy',
    color: colors.secondary,
  },
];

export default function Notifications({ navigation }) {
  const renderNotification = ({ item }) => (
    <TouchableOpacity
      style={[styles.notification, item.unread && styles.notificationUnread]}
      onPress={() => {}}
    >
      <View style={[styles.iconContainer, { backgroundColor: item.color + '15' }]} onPress={() => {}}
    >
      <View style={[styles.iconContainer, { backgroundColor: item.color + '15' }]}>
        <Ionicons name={item.icon} size={20} color={item.color} />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.message} numberOfLines={2}>{item.message}</Text>
      </View>

      {item.unread && <View style={styles.unreadDot} />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TopAppBar
        title="Notifications"
        subtitle="Stay updated on your campaign"
        onNotificationPress={() => {}}
      />

      <FlatList
        data={NOTIFICATIONS}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity style={styles.markAllRead}>
        <Text style={styles.markAllReadText}>Mark All as Read</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  list: {
    padding: spacing[6],
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.surfaceContainerLowest,
    padding: spacing[4],
    borderRadius: shapes.large,
    marginBottom: spacing[3],
  },
  notificationUnread: {
    backgroundColor: colors.surfaceContainerLow,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: shapes.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    marginLeft: spacing[3],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[1],
  },
  title: {
    fontSize: typography.body.medium.fontSize,
    fontWeight: '700',
    color: colors.onSurface,
  },
  time: {
    fontSize: typography.label.small.fontSize,
    color: colors.outline,
  },
  message: {
    fontSize: typography.body.small.fontSize,
    color: colors.onSurfaceVariant,
    lineHeight: 20,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginLeft: spacing[2],
    marginTop: spacing[2],
  },
  markAllRead: {
    alignItems: 'center',
    paddingVertical: spacing[4],
    marginBottom: spacing[6],
  },
  markAllReadText: {
    fontSize: typography.body.medium.fontSize,
    color: colors.primary,
    fontWeight: '600',
  },
});
