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
import { ArrowRight, Calendar, Clock } from 'lucide-react-native';
import { RootStackParamList, NewsItem } from '../../types';
import { colors } from '../../constants/theme';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Alhaji Goji Visits Damaturu Market',
    excerpt: 'Engaging with traders and discussing economic development priorities for Zone B.',
    category: 'Campaign Updates',
    date: 'Mar 24, 2026',
    readTime: '3 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Education Plan Unveiled for Zone B Schools',
    excerpt: 'Comprehensive strategy to improve educational infrastructure and scholarship opportunities.',
    category: 'Policy',
    date: 'Mar 20, 2026',
    readTime: '5 min read',
  },
  {
    id: 3,
    title: 'Healthcare Initiative Launches in Gujba',
    excerpt: 'New primary health center project aims to serve 10,000 residents in the LGA.',
    category: 'Healthcare',
    date: 'Mar 18, 2026',
    readTime: '4 min read',
  },
  {
    id: 4,
    title: 'Infrastructure Development Forum',
    excerpt: 'Stakeholders gather to discuss road rehabilitation and rural electrification projects.',
    category: 'Infrastructure',
    date: 'Mar 15, 2026',
    readTime: '6 min read',
  },
];

const categories = ['All', 'Campaign Updates', 'Policy', 'Healthcare', 'Infrastructure', 'Youth'];

export function NewsScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredNews = selectedCategory === 'All'
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory);

  const featuredNews = newsItems.find(n => n.featured);
  const regularNews = filteredNews.filter(n => !n.featured);

  const renderNewsItem = ({ item }: { item: NewsItem }) => (
    <TouchableOpacity
      style={styles.newsCard}
      onPress={() => navigation.navigate('NewsDetail', { id: item.id })}
    >
      <View style={styles.newsImagePlaceholder}>
        <Text style={styles.placeholderText}>{item.title.charAt(0)}</Text>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
      </View>
      <View style={styles.newsContent}>
        <View style={styles.newsMeta}>
          <View style={styles.metaItem}>
            <Calendar size={14} color={colors.onSurface.variant} />
            <Text style={styles.metaText}>{item.date}</Text>
          </View>
          <View style={styles.metaItem}>
            <Clock size={14} color={colors.onSurface.variant} />
            <Text style={styles.metaText}>{item.readTime}</Text>
          </View>
        </View>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsExcerpt} numberOfLines={2}>{item.excerpt}</Text>
        <View style={styles.readMore}>
          <Text style={styles.readMoreText}>Read More</Text>
          <ArrowRight size={16} color={colors.primary.DEFAULT} />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Latest News</Text>
          <Text style={styles.headerSubtitle}>Stay informed about our campaign</Text>
        </View>

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

        {/* Featured News */}
        {featuredNews && selectedCategory === 'All' && (
          <TouchableOpacity
            style={styles.featuredCard}
            onPress={() => navigation.navigate('NewsDetail', { id: featuredNews.id })}
          >
            <View style={styles.featuredImage}>
              <Text style={styles.featuredPlaceholder}>{featuredNews.title.charAt(0)}</Text>
              <View style={styles.featuredBadge}>
                <Text style={styles.featuredBadgeText}>Featured</Text>
              </View>
            </View>
            <View style={styles.featuredContent}>
              <View style={styles.featuredMeta}>
                <Text style={styles.featuredCategory}>{featuredNews.category}</Text>
                <Text style={styles.featuredDate}>{featuredNews.date}</Text>
              </View>
              <Text style={styles.featuredTitle}>{featuredNews.title}</Text>
              <Text style={styles.featuredExcerpt}>{featuredNews.excerpt}</Text>
            </View>
          </TouchableOpacity>
        )}

        {/* News List */}
        <View style={styles.newsList}>
          <Text style={styles.sectionTitle}>Recent Updates</Text>
          <FlatList
            data={regularNews}
            renderItem={renderNewsItem}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            contentContainerStyle={styles.newsListContent}
          />
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
    padding: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: colors.onSurface.variant,
  },
  categoryContainer: {
    paddingHorizontal: 20,
    paddingBottom: 16,
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
  featuredCard: {
    margin: 20,
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  featuredImage: {
    height: 180,
    backgroundColor: colors.surface.containerHigh,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  featuredPlaceholder: {
    fontSize: 48,
    fontWeight: '700',
    color: colors.onSurface.variant,
  },
  featuredBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: colors.primary.DEFAULT,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
  },
  featuredBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  featuredContent: {
    padding: 16,
  },
  featuredMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  featuredCategory: {
    fontSize: 12,
    color: colors.primary.DEFAULT,
    fontWeight: '600',
  },
  featuredDate: {
    fontSize: 12,
    color: colors.onSurface.variant,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginBottom: 8,
    lineHeight: 28,
  },
  featuredExcerpt: {
    fontSize: 14,
    color: colors.onSurface.variant,
    lineHeight: 20,
  },
  newsList: {
    padding: 20,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginBottom: 16,
  },
  newsListContent: {
    gap: 16,
  },
  newsCard: {
    backgroundColor: colors.surface.containerLowest,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  newsImagePlaceholder: {
    height: 150,
    backgroundColor: colors.surface.containerHigh,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  placeholderText: {
    fontSize: 36,
    fontWeight: '700',
    color: colors.onSurface.variant,
  },
  categoryBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: colors.surface.containerHighest,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  categoryText: {
    fontSize: 11,
    color: colors.onSurface.DEFAULT,
    fontWeight: '500',
  },
  newsContent: {
    padding: 16,
  },
  newsMeta: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: colors.onSurface.variant,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.onSurface.DEFAULT,
    marginBottom: 4,
    lineHeight: 22,
  },
  newsExcerpt: {
    fontSize: 13,
    color: colors.onSurface.variant,
    lineHeight: 18,
    marginBottom: 12,
  },
  readMore: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  readMoreText: {
    fontSize: 14,
    color: colors.primary.DEFAULT,
    fontWeight: '600',
  },
});
