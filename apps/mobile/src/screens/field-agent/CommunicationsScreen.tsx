import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  MessageCircle,
  Send,
  Users,
  Phone,
  ChevronRight,
  Plus,
  Search,
  Clock,
  CheckCircle,
} from 'lucide-react-native';
import { colors } from '../../constants/theme';

const messageTemplates = [
  {
    id: 1,
    title: 'Campaign Update',
    message:
      'As-salamu alaykum! Join us this Saturday for a community town hall meeting at Damaturu Central. Your voice matters!',
    type: 'announcement',
    sent: 1247,
  },
  {
    id: 2,
    title: 'Voter Registration',
    message:
      'Reminder: PVC collection is ongoing at your local INEC office. Remember to bring a valid ID.',
    type: 'reminder',
    sent: 893,
  },
  {
    id: 3,
    title: 'Volunteer Call',
    message:
      'Thank you for your interest in volunteering! We will contact you soon with more details.',
    type: 'response',
    sent: 234,
  },
];

const recentCampaigns = [
  {
    id: 1,
    name: 'Zone B Outreach',
    type: 'whatsapp',
    status: 'sending',
    sent: 1247,
    total: 2000,
    time: '2 hours ago',
  },
  {
    id: 2,
    name: 'Voter Education',
    type: 'sms',
    status: 'completed',
    sent: 5000,
    total: 5000,
    time: '1 day ago',
  },
  {
    id: 3,
    name: 'Event Reminder',
    type: 'whatsapp',
    status: 'scheduled',
    sent: 0,
    total: 1500,
    time: 'Tomorrow 9:00 AM',
  },
];

export function CommunicationsScreen() {
  const [message, setMessage] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Communications</Text>
          <TouchableOpacity style={styles.composeButton}>
            <Plus size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsSection}>
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <MessageCircle size={20} color={colors.primary.DEFAULT} />
              <Text style={styles.statValue}>8.2K</Text>
              <Text style={styles.statLabel}>Messages Sent</Text>
            </View>
            <View style={styles.statCard}>
              <Users size={20} color={colors.secondary.DEFAULT} />
              <Text style={styles.statValue}>68%</Text>
              <Text style={styles.statLabel}>Delivery Rate</Text>
            </View>
            <View style={styles.statCard}>
              <CheckCircle size={20} color={colors.sentiment.positive} />
              <Text style={styles.statValue}>42%</Text>
              <Text style={styles.statLabel}>Response Rate</Text>
            </View>
          </View>
        </View>

        {/* Message Composer */}
        <View style={styles.composerSection}>
          <Text style={styles.sectionTitle}>Quick Message</Text>
          <View style={styles.composerCard}>
            <TextInput
              style={styles.messageInput}
              placeholder="Type your message..."
              value={message}
              onChangeText={setMessage}
              multiline
              numberOfLines={4}
              placeholderTextColor={colors.onSurface.variant}
            />
            <View style={styles.composerActions}>
              <View style={styles.channelButtons}>
                <TouchableOpacity style={[styles.channelButton, styles.channelActive]}>
                  <MessageCircle size={16} color="#fff" />
                  <Text style={styles.channelTextActive}>WhatsApp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.channelButton}>
                  <Phone size={16} color={colors.onSurface.variant} />
                  <Text style={styles.channelText}>SMS</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.sendButton}>
                <Send size={18} color="#fff" />
                <Text style={styles.sendButtonText}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Templates */}
        <View style={styles.templatesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Message Templates</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {messageTemplates.map((template) => (
              <TouchableOpacity key={template.id} style={styles.templateCard}>
                <View style={styles.templateHeader}>
                  <View
                    style={[
                      styles.templateIcon,
                      {
                        backgroundColor:
                          template.type === 'announcement'
                            ? `${colors.primary.DEFAULT}15`
                            : template.type === 'reminder'
                            ? `${colors.warning}15`
                            : `${colors.tertiary.DEFAULT}15`,
                      },
                    ]}
                  >
                    <MessageCircle
                      size={16}
                      color={
                        template.type === 'announcement'
                          ? colors.primary.DEFAULT
                          : template.type === 'reminder'
                          ? colors.warning
                          : colors.tertiary.DEFAULT
                      }
                    />
                  </View>
                  <Text style={styles.templateSent}>{template.sent} sent</Text>
                </View>
                <Text style={styles.templateTitle}>{template.title}</Text>
                <Text style={styles.templateMessage} numberOfLines={2}>
                  {template.message}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Recent Campaigns */}
        <View style={[styles.campaignsSection, styles.lastSection]}>
          <Text style={styles.sectionTitle}>Recent Campaigns</Text>
          <View style={styles.campaignsList}>
            {recentCampaigns.map((campaign) => (
              <TouchableOpacity key={campaign.id} style={styles.campaignCard}>
                <View style={styles.campaignLeft}>
                  <View
                    style={[
                      styles.campaignIcon,
                      {
                        backgroundColor:
                          campaign.type === 'whatsapp'
                            ? `${colors.sentiment.positive}15`
                            : `${colors.primary.DEFAULT}15`,
                      },
                    ]}
                  >
                    <MessageCircle
                      size={20}
                      color={
                        campaign.type === 'whatsapp'
                          ? colors.sentiment.positive
                          : colors.primary.DEFAULT
                      }
                    />
                  </View>
                  <View>
                    <Text style={styles.campaignName}>{campaign.name}</Text>
                    <View style={styles.campaignMeta}>
                      <Clock size={12} color={colors.onSurface.variant} />
                      <Text style={styles.campaignTime}>{campaign.time}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.campaignRight}>
                  <View style={styles.progressContainer}>
                    <View style={styles.progressBar}>
                      <View
                        style={[
                          styles.progressFill,
                          {
                            width: `${(campaign.sent / campaign.total) * 100}%`,
                            backgroundColor:
                              campaign.status === 'completed'
                                ? colors.sentiment.positive
                                : campaign.status === 'sending'
                                ? colors.primary.DEFAULT
                                : colors.warning,
                          },
                        ]}
                      />
                    </View>
                    <Text style={styles.progressText}>
                      {campaign.sent}/{campaign.total}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.statusBadge,
                      {
                        backgroundColor:
                          campaign.status === 'completed'
                            ? `${colors.sentiment.positive}15`
                            : campaign.status === 'sending'
                            ? `${colors.primary.DEFAULT}15`
                            : `${colors.warning}15`,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.statusText,
                        {
                          color:
                            campaign.status === 'completed'
                              ? colors.sentiment.positive
                              : campaign.status === 'sending'
                              ? colors.primary.DEFAULT
                              : colors.warning,
                        },
                      ]}
                    >
                      {campaign.status}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
  },
  composeButton: {
    width: 48,
    height: 48,
    backgroundColor: colors.primary.DEFAULT,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsSection: {
    padding: 16,
    paddingTop: 0,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginTop: 8,
  },
  statLabel: {
    fontSize: 11,
    color: colors.onSurface.variant,
    marginTop: 2,
  },
  composerSection: {
    padding: 16,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginBottom: 12,
  },
  composerCard: {
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  messageInput: {
    minHeight: 80,
    fontSize: 15,
    color: colors.onSurface.DEFAULT,
    textAlignVertical: 'top',
    marginBottom: 12,
  },
  composerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  channelButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  channelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.surface.container,
  },
  channelActive: {
    backgroundColor: colors.sentiment.positive,
  },
  channelText: {
    fontSize: 13,
    color: colors.onSurface.DEFAULT,
    fontWeight: '500',
  },
  channelTextActive: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '500',
  },
  sendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.primary.DEFAULT,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  sendButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  templatesSection: {
    paddingLeft: 16,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    marginBottom: 12,
  },
  viewAll: {
    fontSize: 14,
    color: colors.primary.DEFAULT,
    fontWeight: '500',
  },
  templateCard: {
    width: 280,
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  templateHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  templateIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  templateSent: {
    fontSize: 12,
    color: colors.onSurface.variant,
  },
  templateTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.onSurface.DEFAULT,
    marginBottom: 8,
  },
  templateMessage: {
    fontSize: 13,
    color: colors.onSurface.variant,
    lineHeight: 18,
  },
  campaignsSection: {
    padding: 16,
    paddingTop: 0,
  },
  lastSection: {
    paddingBottom: 100,
  },
  campaignsList: {
    gap: 8,
  },
  campaignCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  campaignLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  campaignIcon: {
    width: 44,
    height: 44,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  campaignName: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.onSurface.DEFAULT,
  },
  campaignMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  campaignTime: {
    fontSize: 12,
    color: colors.onSurface.variant,
  },
  campaignRight: {
    alignItems: 'flex-end',
    gap: 8,
  },
  progressContainer: {
    alignItems: 'flex-end',
    width: 100,
  },
  progressBar: {
    width: '100%',
    height: 4,
    backgroundColor: colors.surface.container,
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 11,
    color: colors.onSurface.variant,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
