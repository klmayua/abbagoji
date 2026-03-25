import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  TrendingUp,
  Users,
  MessageCircle,
  Phone,
  Home,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react-native';
import { colors } from '../../constants/theme';

const { width } = Dimensions.get('window');

const sentimentData = {
  overall: 68,
  positive: 45,
  neutral: 35,
  negative: 20,
};

const lgaStats = [
  { lga: 'Damaturu', contacted: 12547, target: 15000, sentiment: 72 },
  { lga: 'Gujba', contacted: 8932, target: 12000, sentiment: 65 },
  { lga: 'Gulani', contacted: 7654, target: 10000, sentiment: 58 },
  { lga: 'Busari', contacted: 5421, target: 8000, sentiment: 52 },
];

const activityData = [
  { day: 'Mon', calls: 45, visits: 23, messages: 67 },
  { day: 'Tue', calls: 52, visits: 31, messages: 58 },
  { day: 'Wed', calls: 38, visits: 28, messages: 72 },
  { day: 'Thu', calls: 65, visits: 35, messages: 81 },
  { day: 'Fri', calls: 48, visits: 42, messages: 63 },
  { day: 'Sat', calls: 72, visits: 38, messages: 45 },
  { day: 'Sun', calls: 58, visits: 25, messages: 52 },
];

const topTopics = [
  { topic: 'Education', mentions: 1247, trend: 'up' },
  { topic: 'Healthcare', mentions: 982, trend: 'up' },
  { topic: 'Infrastructure', mentions: 756, trend: 'down' },
  { topic: 'Security', mentions: 634, trend: 'up' },
];

export function AnalyticsScreen() {
  const maxValue = Math.max(...activityData.map(d => d.calls + d.visits + d.messages));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Analytics</Text>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.filterText}>Last 7 Days</Text>
            <ChevronDown size={16} color={colors.onSurface.variant} />
          </TouchableOpacity>
        </View>

        {/* Sentiment Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sentiment Analysis</Text>
          <View style={styles.sentimentCard}>
            <View style={styles.sentimentHeader}>
              <View style={styles.sentimentScore}>
                <Text style={styles.sentimentValue}>{sentimentData.overall}%</Text>
                <Text style={styles.sentimentLabel}>Overall Sentiment</Text>
              </View>
              <View style={styles.sentimentTrend}>
                <ArrowUpRight size={20} color={colors.sentiment.positive} />
                <Text style={[styles.trendText, { color: colors.sentiment.positive }]}>
                  +5.2%
                </Text>
              </View>
            </View>
            <View style={styles.sentimentBars}>
              <View style={styles.sentimentBar}>
                <View
                  style={[
                    styles.sentimentFill,
                    {
                      width: `${sentimentData.positive}%`,
                      backgroundColor: colors.sentiment.positive,
                    },
                  ]}
                />
              </View>
              <View style={styles.sentimentBar}>
                <View
                  style={[
                    styles.sentimentFill,
                    {
                      width: `${sentimentData.neutral}%`,
                      backgroundColor: colors.warning,
                    },
                  ]}
                />
              </View>
              <View style={styles.sentimentBar}>
                <View
                  style={[
                    styles.sentimentFill,
                    {
                      width: `${sentimentData.negative}%`,
                      backgroundColor: colors.error,
                    },
                  ]}
                />
              </View>
            </View>
            <View style={styles.sentimentLegend}>
              <View style={styles.legendItem}>
                <View
                  style={[
                    styles.legendDot,
                    { backgroundColor: colors.sentiment.positive },
                  ]}
                />
                <Text style={styles.legendText}>Positive {sentimentData.positive}%</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: colors.warning }]} />
                <Text style={styles.legendText}>Neutral {sentimentData.neutral}%</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: colors.error }]} />
                <Text style={styles.legendText}>Negative {sentimentData.negative}%</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Activity Chart */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Activity Overview</Text>
          <View style={styles.chartCard}>
            <View style={styles.chartLegend}>
              <View style={styles.chartLegendItem}>
                <View
                  style={[styles.chartLegendDot, { backgroundColor: colors.primary.DEFAULT }]}
                />
                <Text style={styles.chartLegendText}>Calls</Text>
              </View>
              <View style={styles.chartLegendItem}>
                <View
                  style={[styles.chartLegendDot, { backgroundColor: colors.secondary.DEFAULT }]}
                />
                <Text style={styles.chartLegendText}>Visits</Text>
              </View>
              <View style={styles.chartLegendItem}>
                <View
                  style={[styles.chartLegendDot, { backgroundColor: colors.tertiary.DEFAULT }]}
                />
                <Text style={styles.chartLegendText}>Messages</Text>
              </View>
            </View>
            <View style={styles.chartContainer}>
              {activityData.map((data, index) => (
                <View key={data.day} style={styles.barGroup}>
                  <View style={styles.stackedBar}>
                    <View
                      style={[
                        styles.barSegment,
                        {
                          height: `${(data.calls / maxValue) * 100}%`,
                          backgroundColor: colors.primary.DEFAULT,
                        },
                      ]}
                    />
                    <View
                      style={[
                        styles.barSegment,
                        {
                          height: `${(data.visits / maxValue) * 100}%`,
                          backgroundColor: colors.secondary.DEFAULT,
                        },
                      ]}
                    />
                    <View
                      style={[
                        styles.barSegment,
                        {
                          height: `${(data.messages / maxValue) * 100}%`,
                          backgroundColor: colors.tertiary.DEFAULT,
                        },
                      ]}
                    />
                  </View>
                  <Text style={styles.barLabel}>{data.day}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* LGA Performance */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>LGA Performance</Text>
          <View style={styles.lgaList}>
            {lgaStats.map((stat) => (
              <View key={stat.lga} style={styles.lgaCard}>
                <View style={styles.lgaHeader}>
                  <Text style={styles.lgaName}>{stat.lga}</Text>
                  <View style={styles.lgaSentiment}>
                    <TrendingUp size={14} color={colors.sentiment.positive} />
                    <Text style={styles.lgaSentimentText}>{stat.sentiment}%</Text>
                  </View>
                </View>
                <View style={styles.lgaStats}>
                  <View style={styles.lgaStat}>
                    <Text style={styles.lgaStatValue}>
                      {stat.contacted.toLocaleString()}
                    </Text>
                    <Text style={styles.lgaStatLabel}>Contacted</Text>
                  </View>
                  <View style={styles.lgaStat}>
                    <Text style={styles.lgaStatValue}>{stat.target.toLocaleString()}</Text>
                    <Text style={styles.lgaStatLabel}>Target</Text>
                  </View>
                  <View style={styles.lgaStat}>
                    <Text style={styles.lgaStatValue}>
                      {Math.round((stat.contacted / stat.target) * 100)}%
                    </Text>
                    <Text style={styles.lgaStatLabel}>Progress</Text>
                  </View>
                </View>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      {
                        width: `${(stat.contacted / stat.target) * 100}%`,
                        backgroundColor:
                          (stat.contacted / stat.target) * 100 >= 70
                            ? colors.sentiment.positive
                            : (stat.contacted / stat.target) * 100 >= 50
                            ? colors.warning
                            : colors.error,
                      },
                    ]}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Top Topics */}
        <View style={[styles.section, styles.lastSection]}>
          <Text style={styles.sectionTitle}>Top Discussion Topics</Text>
          <View style={styles.topicsList}>
            {topTopics.map((topic, index) => (
              <View key={topic.topic} style={styles.topicCard}>
                <View style={styles.topicRank}>
                  <Text style={styles.topicRankText}>#{index + 1}</Text>
                </View>
                <View style={styles.topicInfo}>
                  <Text style={styles.topicName}>{topic.topic}</Text>
                  <Text style={styles.topicMentions}>
                    {topic.mentions.toLocaleString()} mentions
                  </Text>
                </View>
                <View style={styles.topicTrend}>
                  {topic.trend === 'up' ? (
                    <ArrowUpRight size={20} color={colors.sentiment.positive} />
                  ) : (
                    <ArrowDownRight size={20} color={colors.error} />
                  )}
                </View>
              </View>
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
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.surface.container,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  filterText: {
    fontSize: 13,
    color: colors.onSurface.DEFAULT,
  },
  section: {
    padding: 16,
    paddingTop: 0,
  },
  lastSection: {
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginBottom: 12,
  },
  sentimentCard: {
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  sentimentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sentimentScore: {
    alignItems: 'flex-start',
  },
  sentimentValue: {
    fontSize: 36,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
  },
  sentimentLabel: {
    fontSize: 13,
    color: colors.onSurface.variant,
  },
  sentimentTrend: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: `${colors.sentiment.positive}15`,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  trendText: {
    fontSize: 14,
    fontWeight: '600',
  },
  sentimentBars: {
    gap: 8,
    marginBottom: 16,
  },
  sentimentBar: {
    height: 8,
    backgroundColor: colors.surface.container,
    borderRadius: 4,
    overflow: 'hidden',
  },
  sentimentFill: {
    height: '100%',
    borderRadius: 4,
  },
  sentimentLegend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 12,
    color: colors.onSurface.variant,
  },
  chartCard: {
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  chartLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 16,
  },
  chartLegendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  chartLegendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  chartLegendText: {
    fontSize: 12,
    color: colors.onSurface.variant,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 150,
    paddingHorizontal: 8,
  },
  barGroup: {
    alignItems: 'center',
    flex: 1,
  },
  stackedBar: {
    width: 24,
    height: 120,
    backgroundColor: colors.surface.container,
    borderRadius: 4,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  barSegment: {
    width: '100%',
  },
  barLabel: {
    fontSize: 11,
    color: colors.onSurface.variant,
    marginTop: 8,
  },
  lgaList: {
    gap: 12,
  },
  lgaCard: {
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  lgaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  lgaName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.onSurface.DEFAULT,
  },
  lgaSentiment: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: `${colors.sentiment.positive}15`,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  lgaSentimentText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.sentiment.positive,
  },
  lgaStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  lgaStat: {
    alignItems: 'center',
  },
  lgaStatValue: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
  },
  lgaStatLabel: {
    fontSize: 11,
    color: colors.onSurface.variant,
    marginTop: 2,
  },
  progressBar: {
    height: 6,
    backgroundColor: colors.surface.container,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  topicsList: {
    gap: 8,
  },
  topicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  topicRank: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: colors.primary.DEFAULT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicRankText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
  },
  topicInfo: {
    flex: 1,
  },
  topicName: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.onSurface.DEFAULT,
  },
  topicMentions: {
    fontSize: 12,
    color: colors.onSurface.variant,
  },
  topicTrend: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: colors.surface.container,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
