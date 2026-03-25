import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ArrowLeft, Calendar, Clock, Globe, Link as LinkIcon, Share2 } from 'lucide-react-native';
import { RootStackParamList, NewsItem } from '../../types';
import { colors } from '../../constants/theme';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type RouteProps = RouteProp<RootStackParamList, 'NewsDetail'>;

const newsArticles: NewsItem[] = [
  {
    id: 1,
    title: 'Alhaji Goji Visits Damaturu Market',
    content: 'Alhaji Abba Goji visited Damaturu Central Market to engage with traders and discuss economic development priorities for Zone B. The visit lasted several hours.',
    category: 'Campaign Updates',
    date: 'Mar 24, 2026',
    readTime: '3 min read',
  },
  {
    id: 2,
    title: 'Education Plan Unveiled',
    content: 'Comprehensive strategy to improve educational infrastructure.',
    category: 'Policy',
    date: 'Mar 20, 2026',
    readTime: '5 min read',
  },
  {
    id: 3,
    title: 'Healthcare Initiative Launches',
    content: 'New primary health center project aims to serve 10,000 residents.',
    category: 'Healthcare',
    date: 'Mar 18, 2026',
    readTime: '4 min read',
  },
];

const relatedArticles = [
  { id: 2, title: 'Education Plan Unveiled', category: 'Policy', date: 'Mar 20, 2026' },
  { id: 3, title: 'Healthcare Initiative Launches', category: 'Healthcare', date: 'Mar 18, 2026' },
];

export function NewsDetailScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const { id } = route.params;

  const article = newsArticles.find((a) => a.id === id) || newsArticles[0];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeft size={24} color={colors.onSurface.DEFAULT} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Share2 size={24} color={colors.onSurface.DEFAULT} />
          </TouchableOpacity>
        </View>

        {/* Article Header */}
        <View style={styles.articleHeader}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{article.category}</Text>
          </View>
          <Text style={styles.title}>{article.title}</Text>
          <View style={styles.metaRow}>
            <View style={styles.authorBadge}>
              <Text style={styles.authorInitials}>AG</Text>
            </View>
            <View>
              <Text style={styles.authorName}>Campaign Communications</Text>
              <Text style={styles.authorRole}>Campaign Team</Text>
            </View>
          </View>
          <View style={styles.metaInfo}>
            <View style={styles.metaItem}>
              <Calendar size={16} color={colors.onSurface.variant} />
              <Text style={styles.metaText}>{article.date}</Text>
            </View>
            <View style={styles.metaItem}>
              <Clock size={16} color={colors.onSurface.variant} />
              <Text style={styles.metaText}>{article.readTime}</Text>
            </View>
          </View>
        </View>

        {/* Featured Image */}
        <View style={styles.featuredImage}>
          <Text style={styles.imagePlaceholder}>{article.title.charAt(0)}</Text>
        </View>

        {/* Article Content */}
        <View style={styles.content}>
          <Text style={styles.articleText}>{article.content}</Text>
          <Text style={styles.articleText}>
            The traders expressed appreciation for the visit, noting that it was rare for political candidates to engage directly with them in their places of business.
          </Text>
          <Text style={styles.articleText}>
            The campaign team announced plans for a comprehensive economic development blueprint for Zone B.
          </Text>
        </View>

        {/* Share Section */}
        <View style={styles.shareSection}>
          <Text style={styles.shareTitle}>Share this article</Text>
          <View style={styles.shareButtons}>
            <TouchableOpacity style={styles.shareButtonSmall}>
              <Globe size={20} color={colors.onSurface.DEFAULT} />
              <Text style={styles.shareButtonText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButtonSmall}>
              <LinkIcon size={20} color={colors.onSurface.DEFAULT} />
              <Text style={styles.shareButtonText}>Copy Link</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Related Articles */}
        <View style={styles.relatedSection}>
          <Text style={styles.sectionTitle}>Related Articles</Text>
          {relatedArticles.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.relatedCard}
              onPress={() => navigation.navigate('NewsDetail', { id: item.id })}
            >
              <View style={styles.relatedBadge}>
                <Text style={styles.relatedBadgeText}>{item.category}</Text>
              </View>
              <Text style={styles.relatedTitle}>{item.title}</Text>
              <Text style={styles.relatedDate}>{item.date}</Text>
            </TouchableOpacity>
          ))}
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
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface.container,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface.container,
    alignItems: 'center',
    justifyContent: 'center',
  },
  articleHeader: {
    padding: 20,
    paddingTop: 0,
  },
  categoryBadge: {
    backgroundColor: colors.primary.DEFAULT,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  categoryText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginBottom: 16,
    lineHeight: 36,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  authorBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary.DEFAULT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  authorInitials: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  authorName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.onSurface.DEFAULT,
  },
  authorRole: {
    fontSize: 12,
    color: colors.onSurface.variant,
  },
  metaInfo: {
    flexDirection: 'row',
    gap: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaText: {
    fontSize: 14,
    color: colors.onSurface.variant,
  },
  featuredImage: {
    height: 220,
    backgroundColor: colors.surface.containerHigh,
    marginHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    fontSize: 64,
    fontWeight: '700',
    color: colors.onSurface.variant,
  },
  content: {
    padding: 20,
  },
  articleText: {
    fontSize: 16,
    lineHeight: 26,
    color: colors.onSurface.variant,
    marginBottom: 16,
  },
  shareSection: {
    padding: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.outline.variant,
  },
  shareTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.onSurface.DEFAULT,
    marginBottom: 12,
  },
  shareButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  shareButtonSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: colors.surface.container,
  },
  shareButtonText: {
    fontSize: 14,
    color: colors.onSurface.DEFAULT,
    fontWeight: '500',
  },
  relatedSection: {
    padding: 20,
    backgroundColor: colors.surface.containerLow,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.onSurface.DEFAULT,
    marginBottom: 16,
  },
  relatedCard: {
    backgroundColor: colors.surface.containerLowest,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.outline.variant,
  },
  relatedBadge: {
    backgroundColor: colors.surface.container,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  relatedBadgeText: {
    fontSize: 12,
    color: colors.onSurface.DEFAULT,
    fontWeight: '500',
  },
  relatedTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.onSurface.DEFAULT,
    marginBottom: 4,
  },
  relatedDate: {
    fontSize: 12,
    color: colors.onSurface.variant,
  },
});
