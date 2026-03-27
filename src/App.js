// GOJI2027 Citizens Portal - Simple Web App
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>GOJI2027</Text>
        <View style={styles.nav}>
          {['home', 'manifesto', 'about', 'events', 'donate'].map((p) => (
            <TouchableOpacity key={p} onPress={() => setPage(p)}>
              <Text style={[styles.navLink, page === p && styles.navActive]}>
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.scroll}>
        {page === 'home' && (
          <View style={styles.hero}>
            <Text style={styles.heroTitle}>GOJI2027</Text>
            <Text style={styles.heroSubtitle}>Digital Majlis</Text>
            <Text style={styles.heroDesc}>
              A comprehensive political campaign management system connecting citizens with their representatives
            </Text>
            <View style={styles.heroBtns}>
              <TouchableOpacity style={styles.btn1} onPress={() => setPage('manifesto')}>
                <Text style={styles.btnText}>View Manifesto</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn2} onPress={() => setPage('about')}>
                <Text style={styles.btn2Text}>About Vision</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.features}>
              <Text style={styles.sectionTitle}>Citizens Portal</Text>
              <View style={styles.grid}>
                {[
                  { icon: '📋', title: 'Manifesto', page: 'manifesto' },
                  { icon: '🎯', title: 'Vision', page: 'about' },
                  { icon: '🗳️', title: 'Polling Unit', page: null },
                  { icon: '🌍', title: 'Diaspora', page: null },
                  { icon: '📅', title: 'Events', page: 'events' },
                  { icon: '💝', title: 'Donate', page: 'donate' },
                ].map((item, i) => (
                  <TouchableOpacity
                    key={i}
                    style={styles.card}
                    onPress={() => item.page && setPage(item.page)}
                  >
                    <Text style={styles.cardIcon}>{item.icon}</Text>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.stats}>
              {[{ n: '50+', l: 'Wards' }, { n: '10K+', l: 'Volunteers' }, { n: '100+', l: 'Events' }, { n: '24/7', l: 'Support' }].map((s, i) => (
                <View key={i} style={styles.stat}>
                  <Text style={styles.statNum}>{s.n}</Text>
                  <Text style={styles.statLabel}>{s.l}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {page === 'manifesto' && (
          <View style={styles.page}>
            <Text style={styles.pageTitle}>Campaign Manifesto</Text>
            <Text style={styles.pageText}>
              Our manifesto outlines the key priorities and commitments for the GOJI2027 campaign.
            </Text>
            <Text style={styles.pageText}>
              We are dedicated to bringing positive change and development to our communities through:
            </Text>
            <View style={styles.list}>
              {['Economic development and job creation', 'Education reform and youth empowerment', 'Healthcare accessibility for all', 'Infrastructure development', 'Good governance and transparency'].map((item, i) => (
                <Text key={i} style={styles.listItem}>• {item}</Text>
              ))}
            </View>
            <TouchableOpacity style={styles.backBtn} onPress={() => setPage('home')}>
              <Text style={styles.backText}>← Back to Home</Text>
            </TouchableOpacity>
          </View>
        )}

        {page === 'about' && (
          <View style={styles.page}>
            <Text style={styles.pageTitle}>About & Vision</Text>
            <Text style={styles.pageText}>
              The GOJI2027 campaign represents a new vision for our future. We believe in inclusive development, transparent governance, and empowering every citizen to reach their full potential.
            </Text>
            <Text style={styles.pageText}>
              Our mission is to create opportunities for all, bridge the gap between leaders and citizens, and build a prosperous future for the next generation.
            </Text>
            <TouchableOpacity style={styles.backBtn} onPress={() => setPage('home')}>
              <Text style={styles.backText}>← Back to Home</Text>
            </TouchableOpacity>
          </View>
        )}

        {page === 'events' && (
          <View style={styles.page}>
            <Text style={styles.pageTitle}>Events Calendar</Text>
            <Text style={styles.pageText}>
              Stay updated on campaign events, rallies, and town halls in your area.
            </Text>
            <Text style={styles.pageText}>
              Upcoming events will be listed here. Check back regularly for updates.
            </Text>
            <TouchableOpacity style={styles.backBtn} onPress={() => setPage('home')}>
              <Text style={styles.backText}>← Back to Home</Text>
            </TouchableOpacity>
          </View>
        )}

        {page === 'donate' && (
          <View style={styles.page}>
            <Text style={styles.pageTitle}>Donation Portal</Text>
            <Text style={styles.pageText}>
              Support the GOJI2027 campaign with secure online donations.
            </Text>
            <Text style={styles.pageText}>
              Your contribution helps us reach more citizens and spread our message.
            </Text>
            <TouchableOpacity style={styles.backBtn} onPress={() => setPage('home')}>
              <Text style={styles.backText}>← Back to Home</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2027 GOJI Campaign. All rights reserved.</Text>
        <Text style={styles.footerSub}>Digital Majlis - Campaign Platform</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, backgroundColor: '#e3efff', borderBottomWidth: 1, borderBottomColor: '#c0c9bb' },
  logo: { fontSize: 24, fontWeight: '800', color: '#003683' },
  nav: { flexDirection: 'row', gap: 16 },
  navLink: { color: '#41493e', fontWeight: '500', paddingVertical: 8 },
  navActive: { color: '#003683', fontWeight: '700', borderBottomWidth: 2, borderBottomColor: '#003683' },
  scroll: { flex: 1 },
  hero: { backgroundColor: '#003683', padding: 40, alignItems: 'center' },
  heroTitle: { fontSize: 48, fontWeight: '800', color: '#fff' },
  heroSubtitle: { fontSize: 24, fontWeight: '600', color: '#e3efff', marginTop: 8 },
  heroDesc: { fontSize: 18, color: '#e3efff', textAlign: 'center', maxWidth: 600, marginTop: 16, opacity: 0.9 },
  heroBtns: { flexDirection: 'row', gap: 12, marginTop: 24 },
  btn1: { backgroundColor: '#fff', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 8 },
  btnText: { color: '#003683', fontWeight: '600' },
  btn2: { backgroundColor: 'transparent', borderWidth: 2, borderColor: '#fff', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 8 },
  btn2Text: { color: '#fff', fontWeight: '600' },
  features: { marginTop: 40 },
  sectionTitle: { fontSize: 32, fontWeight: '700', color: '#003683', textAlign: 'center', marginBottom: 24 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16, justifyContent: 'center', paddingHorizontal: 16 },
  card: { backgroundColor: '#fff', padding: 24, borderRadius: 12, width: 140, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  cardIcon: { fontSize: 40, marginBottom: 8 },
  cardTitle: { fontSize: 14, fontWeight: '600', color: '#003683', textAlign: 'center' },
  stats: { flexDirection: 'row', justifyContent: 'space-around', padding: 32, backgroundColor: '#edf4ff', marginTop: 32 },
  stat: { alignItems: 'center' },
  statNum: { fontSize: 36, fontWeight: '700', color: '#003683' },
  statLabel: { color: '#717a6d', marginTop: 4 },
  page: { padding: 32 },
  pageTitle: { fontSize: 32, fontWeight: '700', color: '#003683', marginBottom: 16 },
  pageText: { fontSize: 18, color: '#41493e', lineHeight: 28, marginBottom: 16 },
  list: { marginLeft: 16, marginVertical: 16 },
  listItem: { fontSize: 16, color: '#41493e', lineHeight: 32 },
  backBtn: { marginTop: 24, alignSelf: 'flex-start' },
  backText: { color: '#003683', fontWeight: '600', fontSize: 16 },
  footer: { padding: 24, backgroundColor: '#e3efff', alignItems: 'center' },
  footerText: { color: '#717a6d', fontSize: 14 },
  footerSub: { color: '#717a6d', fontSize: 12, marginTop: 4 },
});
