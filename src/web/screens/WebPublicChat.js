// WebPublicChat.js - Citizens Portal Web Chat Interface
// Desktop version for public inquiries and support

import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { webTheme } from '../theme.web';

const SUPPORT_AGENTS = [
  { id: '1', name: 'Campaign Support', avatar: '👋', status: 'online', type: 'bot' },
  { id: '2', name: 'Volunteer Coordinator', avatar: '🤝', status: 'online', type: 'human' },
  { id: '3', name: 'Policy Questions', avatar: '📋', status: 'away', type: 'human' },
];

const INITIAL_MESSAGES = [
  {
    id: '1',
    senderId: '1',
    text: 'Welcome to the GOJI2027 Citizens Portal! How can we help you today?',
    timestamp: Date.now() - 3600000,
    type: 'text',
  },
];

const QUICK_REPLIES = [
  'I want to volunteer',
  'Where is my polling unit?',
  'Tell me about the manifesto',
  'How can I donate?',
  'Upcoming events',
];

export default function WebPublicChat({ navigation }) {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [selectedAgent, setSelectedAgent] = useState(SUPPORT_AGENTS[0]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollViewRef = useRef(null);

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      senderId: 'user',
      text: inputText,
      timestamp: Date.now(),
      type: 'text',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        senderId: selectedAgent.id,
        text: getBotResponse(inputText),
        timestamp: Date.now(),
        type: 'text',
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (text) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('volunteer')) {
      return 'Great! You can sign up as a volunteer through our Volunteer Portal. Would you like me to redirect you there?';
    } else if (lowerText.includes('polling')) {
      return 'You can find your polling unit using our Polling Unit Locator. I can help you access it now.';
    } else if (lowerText.includes('donate')) {
      return 'Thank you for your interest in supporting the campaign! Our donation portal is secure and transparent.';
    } else if (lowerText.includes('event')) {
      return 'We have several upcoming events. Check our Events Calendar for dates and registration.';
    }
    return 'Thank you for your message. A team member will get back to you shortly. Is there anything else I can help with?';
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <View style={styles.container}>
      {/* Sidebar - Agent Selection */}
      <View style={styles.sidebar}>
        <View style={styles.sidebarHeader}>
          <Text style={styles.sidebarTitle}>Support Center</Text>
          <TouchableOpacity style={styles.newChatButton}>
            <Ionicons name="add" size={20} color={webTheme.colors.primary} />
            <Text style={styles.newChatText}>New Chat</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Support Agents</Text>
        {SUPPORT_AGENTS.map((agent) => (
          <TouchableOpacity
            key={agent.id}
            style={[
              styles.agentCard,
              selectedAgent.id === agent.id && styles.agentCardActive,
            ]}
            onPress={() => setSelectedAgent(agent)}
          >
            <View style={styles.agentAvatar}>
              <Text style={styles.avatarText}>{agent.avatar}</Text>
              <View
                style={[
                  styles.statusIndicator,
                  {
                    backgroundColor:
                      agent.status === 'online'
                        ? '#22c55e'
                        : agent.status === 'away'
                        ? '#f59e0b'
                        : '#94a3b8',
                  },
                ]}
              />
            </View>
            <View style={styles.agentInfo}>
              <Text style={styles.agentName}>{agent.name}</Text>
              <Text style={styles.agentStatus}>{agent.status}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.quickLinksSection}>
          <Text style={styles.sectionTitle}>Quick Links</Text>
          <TouchableOpacity style={styles.quickLink}>
            <Ionicons name="calendar" size={16} color={webTheme.colors.outline} />
            <Text style={styles.quickLinkText}>Events Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLink}>
            <Ionicons name="document-text" size={16} color={webTheme.colors.outline} />
            <Text style={styles.quickLinkText}>Read Manifesto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLink}>
            <Ionicons name="location" size={16} color={webTheme.colors.outline} />
            <Text style={styles.quickLinkText}>Find Polling Unit</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Chat Area */}
      <View style={styles.chatContainer}>
        {/* Chat Header */}
        <View style={styles.chatHeader}>
          <View style={styles.chatHeaderLeft}>
            <Text style={styles.chatTitle}>{selectedAgent.name}</Text>
            <View style={styles.statusRow}>
              <View
                style={[
                  styles.statusDot,
                  {
                    backgroundColor:
                      selectedAgent.status === 'online' ? '#22c55e' : '#94a3b8',
                  },
                ]}
              />
              <Text style={styles.statusText}>
                {selectedAgent.status === 'online' ? 'Online' : 'Offline'}
              </Text>
            </View>
          </View>
          <View style={styles.chatHeaderRight}>
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="call" size={20} color={webTheme.colors.onSurfaceVariant} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="videocam" size={20} color={webTheme.colors.onSurfaceVariant} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="ellipsis-vertical" size={20} color={webTheme.colors.onSurfaceVariant} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Messages */}
        <ScrollView
          ref={scrollViewRef}
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          {messages.map((message) => {
            const isUser = message.senderId === 'user';
            const agent = SUPPORT_AGENTS.find((a) => a.id === message.senderId);

            return (
              <View
                key={message.id}
                style={[
                  styles.messageRow,
                  isUser ? styles.messageRowUser : styles.messageRowAgent,
                ]}
              >
                {!isUser && (
                  <View style={styles.messageAvatar}>
                    <Text style={styles.messageAvatarText}>{agent?.avatar || '🤖'}</Text>
                  </View>
                )}
                <View
                  style={[
                    styles.messageBubble,
                    isUser ? styles.messageBubbleUser : styles.messageBubbleAgent,
                  ]}
                >
                  <Text
                    style={[
                      styles.messageText,
                      isUser ? styles.messageTextUser : styles.messageTextAgent,
                    ]}
                  >
                    {message.text}
                  </Text>
                  <Text style={styles.messageTime}>{formatTime(message.timestamp)}</Text>
                </View>
              </View>
            );
          })}

          {isTyping && (
            <View style={styles.typingIndicator}>
              <View style={styles.typingAvatar}>
                <Text style={styles.messageAvatarText}>{selectedAgent.avatar}</Text>
              </View>
              <View style={styles.typingBubble}>
                <View style={styles.typingDots}>
                  <View style={[styles.typingDot, styles.typingDot1]} />
                  <View style={[styles.typingDot, styles.typingDot2]} />
                  <View style={[styles.typingDot, styles.typingDot3]} />
                </View>
              </View>
            </View>
          )}
        </ScrollView>

        {/* Quick Replies */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.quickRepliesContainer}>
          {QUICK_REPLIES.map((reply, index) => (
            <TouchableOpacity
              key={index}
              style={styles.quickReplyChip}
              onPress={() => {
                setInputText(reply);
              }}
            >
              <Text style={styles.quickReplyText}>{reply}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Input Area */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.attachButton}>
            <Ionicons name="attach" size={24} color={webTheme.colors.onSurfaceVariant} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            placeholderTextColor={webTheme.colors.onSurfaceVariant}
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
          <TouchableOpacity
            style={[styles.sendButton, inputText.trim() && styles.sendButtonActive]}
            onPress={sendMessage}
            disabled={!inputText.trim()}
          >
            <Ionicons
              name="send"
              size={20}
              color={inputText.trim() ? webTheme.colors.onPrimary : webTheme.colors.onSurfaceVariant}
            />
          </TouchableOpacity>
        </View>
      </View>
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
    width: webTheme.layout.sidebarWidth,
    backgroundColor: webTheme.colors.sidebar,
    borderRightWidth: 1,
    borderRightColor: webTheme.colors.sidebarBorder,
    padding: webTheme.layout.contentPadding,
  },
  sidebarHeader: {
    marginBottom: 24,
  },
  sidebarTitle: {
    fontSize: webTheme.typography.headline.small.fontSize,
    fontWeight: '700',
    color: webTheme.colors.onSurface,
    marginBottom: 16,
  },
  newChatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: webTheme.colors.primary + '10',
    paddingVertical: 12,
    borderRadius: webTheme.layout.cardBorderRadius,
    borderWidth: 1,
    borderColor: webTheme.colors.primary,
  },
  newChatText: {
    fontSize: 14,
    fontWeight: '600',
    color: webTheme.colors.primary,
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: webTheme.colors.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 12,
    marginTop: 24,
  },
  agentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: webTheme.layout.cardBorderRadius,
    marginBottom: 8,
    backgroundColor: webTheme.colors.surface,
    ...webTheme.shadows.card,
  },
  agentCardActive: {
    backgroundColor: webTheme.colors.primary + '10',
    borderWidth: 1,
    borderColor: webTheme.colors.primary,
  },
  agentAvatar: {
    position: 'relative',
  },
  avatarText: {
    fontSize: 24,
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: webTheme.colors.surface,
  },
  agentInfo: {
    marginLeft: 12,
    flex: 1,
  },
  agentName: {
    fontSize: 14,
    fontWeight: '600',
    color: webTheme.colors.onSurface,
  },
  agentStatus: {
    fontSize: 12,
    color: webTheme.colors.onSurfaceVariant,
    textTransform: 'capitalize',
  },
  quickLinksSection: {
    marginTop: 32,
  },
  quickLink: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  quickLinkText: {
    fontSize: 14,
    color: webTheme.colors.onSurface,
    marginLeft: 10,
  },
  chatContainer: {
    flex: 1,
    backgroundColor: webTheme.colors.surface,
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: webTheme.layout.contentPadding,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: webTheme.colors.sidebarBorder,
    backgroundColor: webTheme.colors.surface,
  },
  chatHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: webTheme.colors.onSurface,
    marginRight: 12,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    fontSize: 13,
    color: webTheme.colors.onSurfaceVariant,
  },
  chatHeaderRight: {
    flexDirection: 'row',
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    borderRadius: 8,
    backgroundColor: webTheme.colors.surfaceContainerLow,
  },
  messagesContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  messagesContent: {
    padding: webTheme.layout.contentPadding,
  },
  messageRow: {
    flexDirection: 'row',
    marginBottom: 16,
    maxWidth: '70%',
  },
  messageRowUser: {
    alignSelf: 'flex-end',
    marginLeft: 'auto',
  },
  messageRowAgent: {
    alignSelf: 'flex-start',
  },
  messageAvatar: {
    marginRight: 12,
  },
  messageAvatarText: {
    fontSize: 32,
  },
  messageBubble: {
    padding: 16,
    borderRadius: 16,
    maxWidth: '100%',
  },
  messageBubbleUser: {
    backgroundColor: webTheme.colors.primary,
    borderBottomRightRadius: 4,
  },
  messageBubbleAgent: {
    backgroundColor: webTheme.colors.surface,
    borderBottomLeftRadius: 4,
    ...webTheme.shadows.card,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 4,
  },
  messageTextUser: {
    color: webTheme.colors.onPrimary,
  },
  messageTextAgent: {
    color: webTheme.colors.onSurface,
  },
  messageTime: {
    fontSize: 11,
    color: webTheme.colors.onSurfaceVariant,
    alignSelf: 'flex-end',
  },
  typingIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  typingAvatar: {
    marginRight: 12,
  },
  typingBubble: {
    backgroundColor: webTheme.colors.surface,
    padding: 16,
    borderRadius: 16,
    borderBottomLeftRadius: 4,
    ...webTheme.shadows.card,
  },
  typingDots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 20,
  },
  typingDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: webTheme.colors.onSurfaceVariant,
    marginHorizontal: 2,
    opacity: 0.4,
  },
  typingDot1: {
    animation: 'bounce 1.4s infinite ease-in-out both',
  },
  typingDot2: {
    animation: 'bounce 1.4s infinite ease-in-out both 0.2s',
  },
  typingDot3: {
    animation: 'bounce 1.4s infinite ease-in-out both 0.4s',
  },
  quickRepliesContainer: {
    paddingHorizontal: webTheme.layout.contentPadding,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: webTheme.colors.sidebarBorder,
    backgroundColor: webTheme.colors.surface,
  },
  quickReplyChip: {
    backgroundColor: webTheme.colors.surfaceContainerLow,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: webTheme.colors.outlineVariant,
  },
  quickReplyText: {
    fontSize: 13,
    color: webTheme.colors.onSurface,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: webTheme.layout.contentPadding,
    paddingVertical: 16,
    backgroundColor: webTheme.colors.surface,
    borderTopWidth: 1,
    borderTopColor: webTheme.colors.sidebarBorder,
  },
  attachButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    backgroundColor: webTheme.colors.surfaceContainerLow,
    marginRight: 12,
  },
  input: {
    flex: 1,
    backgroundColor: webTheme.colors.surfaceContainerLow,
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 14,
    color: webTheme.colors.onSurface,
    maxHeight: 120,
    textAlignVertical: 'center',
  },
  sendButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    backgroundColor: webTheme.colors.surfaceContainerLow,
    marginLeft: 12,
  },
  sendButtonActive: {
    backgroundColor: webTheme.colors.primary,
  },
});
