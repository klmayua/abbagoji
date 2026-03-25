import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Plus,
  Phone,
  MessageCircle,
  Mail,
  ChevronRight,
  Users,
  Crown,
  Shield,
  User,
} from 'lucide-react-native';
import { colors } from '../../constants/theme';

const teamMembers = [
  {
    id: 1,
    name: 'Ahmed Mohammed',
    role: 'Field Coordinator',
    lga: 'Damaturu',
    phone: '+234 800 111 0001',
    status: 'active',
    initials: 'AM',
    color: colors.primary.DEFAULT,
  },
  {
    id: 2,
    name: 'Hassan Ibrahim',
    role: 'Field Agent',
    lga: 'Gujba',
    phone: '+234 800 111 0002',
    status: 'active',
    initials: 'HI',
    color: colors.secondary.DEFAULT,
  },
  {
    id: 3,
    name: 'Maryam Yusuf',
    role: 'Field Agent',
    lga: 'Gulani',
    phone: '+234 800 111 0003',
    status: 'offline',
    initials: 'MY',
    color: colors.tertiary.DEFAULT,
  },
  {
    id: 4,
    name: 'Fatima Abdullahi',
    role: 'Data Entry',
    lga: 'Damaturu',
    phone: '+234 800 111 0004',
    status: 'active',
    initials: 'FA',
    color: colors.primary.DEFAULT,
  },
  {
    id: 5,
    name: 'Abubakar Suleiman',
    role: 'Field Agent',
    lga: 'Busari',
    phone: '+234 800 111 0005',
    status: 'active',
    initials: 'AS',
    color: colors.secondary.DEFAULT,
  },
];

const roleIcons = {
  'Field Coordinator': Crown,
  'Field Agent': User,
  'Data Entry': Shield,
};

const roleColors = {
  'Field Coordinator': colors.sentiment.positive,
  'Field Agent': colors.primary.DEFAULT,
  'Data Entry': colors.warning,
};

export function TeamScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Team</Text>
            <Text style={styles.subtitle}>Zone B Campaign Team</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Plus size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Team Stats */}
        <View style={styles.statsSection}>
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>24</Text>
              <Text style={styles.statLabel}>Total Members</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>18</Text>
              <Text style={styles.statLabel}>Active Now</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>6</Text>
              <Text style={styles.statLabel}>LGAs Covered</Text>
            </View>
          </View>
        </View>

        {/* Filter Tabs */}
        <View style={styles.filterSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={[styles.filterTab, styles.filterTabActive]}>
              <Text style={[styles.filterTabText, styles.filterTabTextActive]}>
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterTab}>
              <Text style={styles.filterTabText}>Active</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterTab}>
              <Text style={styles.filterTabText}>Coordinators</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterTab}>
              <Text style={styles.filterTabText}>Agents</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Team List */}
        <View style={styles.teamSection}>
          <Text style={styles.sectionTitle}>Team Members</Text>
          <View style={styles.teamList}>
            {teamMembers.map((member) => {
              const RoleIcon = roleIcons[member.role] || User;
              return (
                <TouchableOpacity key={member.id} style={styles.memberCard}>
                  <View style={styles.memberLeft}>
                    <View
                      style={[
                        styles.memberAvatar,
                        { backgroundColor: `${member.color}15` },
                      ]}
                    >
                      <Text
                        style={[styles.memberInitials, { color: member.color }]}
                      >
                        {member.initials}
                      </Text>
                    </View>
                    <View style={styles.memberInfo}>
                      <Text style={styles.memberName}>{member.name}</Text>
                      <View style={styles.memberMeta}>
                        <View
                          style={[
                            styles.roleBadge,
                            { backgroundColor: `${roleColors[member.role]}15` },
                          ]}
                        >
                          <RoleIcon
                            size={10}
                            color={roleColors[member.role]}
                          />
                          <Text
                            style={[
                              styles.roleText,
                              { color: roleColors[member.role] },
                            ]}
                          >
                            {member.role}
                          </Text>
                        </View>
                        <Text style={styles.lgaText}>{member.lga}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.memberRight}>
                    <View
                      style={[
                        styles.statusBadge,
                        {
                          backgroundColor:
                            member.status === 'active'
                              ? `${colors.sentiment.positive}15`
                              : `${colors.onSurface.variant}15`,
                        },
                      ]}
                    >
                      <View
                        style={[
                          styles.statusDot,
                          {
                            backgroundColor:
                              member.status === 'active'
                                ? colors.sentiment.positive
                                : colors.onSurface.variant,
                          },
                        ]}
                      />
                      <Text
                        style={[
                          styles.statusText,
                          {
                            color:
                              member.status === 'active'
                                ? colors.sentiment.positive
                                : colors.onSurface.variant,
                          },
                        ]}
                      >
                        {member.status === 'active' ? 'Online' : 'Offline'}
                      </Text>
                    </View>
                    <View style={styles.actionButtons}>
                      <TouchableOpacity style={styles.actionButton}>
                        <Phone size={16} color={colors.primary.DEFAULT} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.actionButton}>
                        <MessageCircle size={16} color={colors.tertiary.DEFAULT} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Quick Actions */}
        <View style={[styles.actionsSection, styles.lastSection]}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={styles.actionCard}>
              <View
                style={[
                  styles.actionIcon,
                  { backgroundColor: `${colors.primary.DEFAULT}15` },
                ]}
              >
                <Users size={24} color={colors.primary.DEFAULT} />
              </View>
              <Text style={styles.actionText}>Add Member</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <View
                style={[
                  styles.actionIcon,
                  { backgroundColor: `${colors.secondary.DEFAULT}15` },
                ]}
              >
                <Mail size={24} color={colors.secondary.DEFAULT} />
              </View>
              <Text style={styles.actionText}>Send Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <View
                style={[
                  styles.actionIcon,
                  { backgroundColor: `${colors.tertiary.DEFAULT}15` },
                ]}
              >
                <Shield size={24} color={colors.tertiary.DEFAULT} />
              </View>
              <Text style={styles.actionText}>Permissions</Text>
            </TouchableOpacity>
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
  subtitle: {
    fontSize: 14,
    color: colors.onSurface.variant,
  },
  addButton: {
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
    fontSize: 20,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 11,
    color: colors.onSurface.variant,
  },
  filterSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: colors.surface.container,
  },
  filterTabActive: {
    backgroundColor: colors.primary.DEFAULT,
  },
  filterTabText: {
    fontSize: 13,
    color: colors.onSurface.DEFAULT,
    fontWeight: '500',
  },
  filterTabTextActive: {
    color: '#fff',
  },
  teamSection: {
    padding: 16,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginBottom: 12,
  },
  teamList: {
    gap: 8,
  },
  memberCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  memberLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  memberAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  memberInitials: {
    fontSize: 16,
    fontWeight: '700',
  },
  memberInfo: {
    gap: 4,
  },
  memberName: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.onSurface.DEFAULT,
  },
  memberMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  roleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  roleText: {
    fontSize: 11,
    fontWeight: '600',
  },
  lgaText: {
    fontSize: 12,
    color: colors.onSurface.variant,
  },
  memberRight: {
    alignItems: 'flex-end',
    gap: 8,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 6,
  },
  actionButton: {
    width: 32,
    height: 32,
    backgroundColor: colors.surface.container,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionsSection: {
    padding: 16,
    paddingTop: 0,
  },
  lastSection: {
    paddingBottom: 100,
  },
  actionsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  actionCard: {
    flex: 1,
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.onSurface.DEFAULT,
  },
});
