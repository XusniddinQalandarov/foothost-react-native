import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { colors, typography, spacing } from '../styles';
import { Button } from '../components/common';

const mockPopularStadiums = [
  { id: 1, name: 'BUNYODKOR', address: 'Малая кольцевая дорога', distance: '4.9 км от вас', rating: 9.9, image: require('../../assets/images/homepage/homepage.png') },
];
const mockNews = [
  { id: 1, title: 'Gamemag.ru - Состоялся релиз футбольного ...', image: require('../../assets/images/homepage/news1.svg') },
  { id: 2, title: 'Yamal helps Barcelona seal La Liga title at rivals', image: require('../../assets/images/homepage/news2.svg') },
];
const mockClans = [
  { id: 1, name: 'Paxtakor', wins: 37, losses: 8, score: 1886 },
  { id: 2, name: 'Paxtakor', wins: 37, losses: 8, score: 1456 },
  { id: 3, name: 'Paxtakor', wins: 37, losses: 8, score: 1286 },
];

export const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <Image source={require('../../assets/images/logo.svg')} style={styles.logo} />
          <Text style={styles.logoText}>FOOT HOST</Text>
          <TouchableOpacity style={styles.bellIcon}>
            <Image source={require('../../assets/images/homepage/bell.svg')} style={styles.bellImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchRow}>
          <View style={styles.searchBox} />
          <TouchableOpacity style={styles.searchButton} />
        </View>
        <View style={styles.filterRow}>
          <TouchableOpacity style={styles.filterButton}><Text style={styles.filterText}>Ташкент</Text></TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}><Text style={styles.filterText}>00/00/2026</Text></TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}><Text style={styles.filterText}>00:00</Text></TouchableOpacity>
        </View>
        <Text style={styles.sectionTitle}>ПОПУЛЯРНЫЕ ПОЛЯ</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {mockPopularStadiums.map((item) => (
            <View key={item.id} style={styles.stadiumCard}>
              <Image source={item.image} style={styles.stadiumImage} />
              <Text style={styles.stadiumName}>{item.name}</Text>
              <Text style={styles.stadiumAddress}>{item.address}</Text>
              <Text style={styles.stadiumDistance}>{item.distance}</Text>
              <Text style={styles.stadiumRating}>{item.rating}</Text>
            </View>
          ))}
        </ScrollView>
        <Text style={styles.sectionTitle}>NEWS</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {mockNews.map((item) => (
            <View key={item.id} style={styles.newsCard}>
              <Image source={item.image} style={styles.newsImage} />
              <Text style={styles.newsTitle}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>
        <Text style={styles.sectionTitle}>ЛУЧШИЕ ФУТБОЛЬНЫЕ ПОЛЯ В ТАШКЕНТЕ</Text>
        <View style={styles.bestStadiumCard}>
          <Image source={require('../../assets/images/homepage/bestfield.svg')} style={styles.bestStadiumImage} />
          <Text style={styles.bestStadiumTitle}>Debits - 03 June 2023</Text>
          <Button title="Читать" style={styles.readButton} onPress={() => {}} />
        </View>
        <Text style={styles.sectionTitle}>CLANS</Text>
        <View style={styles.clansList}>
          {mockClans.map((clan, idx) => (
            <View key={clan.id} style={styles.clanRow}>
              <Text style={styles.clanRank}>{idx + 1}</Text>
              <Text style={styles.clanName}>{clan.name}</Text>
              <Text style={styles.clanScore}>{clan.score}</Text>
            </View>
          ))}
        </View>
        <View style={styles.ctaBox}>
          <Text style={styles.ctaText}>ГОТОВ К ИГРЕ?</Text>
          <Button title="Создать Матч" style={styles.ctaButton} onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: spacing.sm,
  },
  logoText: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    flex: 1,
  },
  bellIcon: {
    padding: spacing.sm,
  },
  bellImage: {
    width: 24,
    height: 24,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },
  searchBox: {
    flex: 1,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginRight: spacing.sm,
  },
  searchButton: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  filterButton: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: spacing.sm,
    marginHorizontal: 2,
    alignItems: 'center',
  },
  filterText: {
    color: colors.primary,
    fontSize: typography.fontSize.base,
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginHorizontal: spacing.md,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  horizontalScroll: {
    marginBottom: spacing.md,
    paddingLeft: spacing.md,
  },
  stadiumCard: {
    width: 220,
    marginRight: spacing.md,
    backgroundColor: colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  stadiumImage: {
    width: '100%',
    height: 120,
  },
  stadiumName: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    margin: spacing.sm,
  },
  stadiumAddress: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    marginHorizontal: spacing.sm,
  },
  stadiumDistance: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    marginHorizontal: spacing.sm,
    marginBottom: spacing.sm,
  },
  stadiumRating: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    backgroundColor: colors.success,
    color: colors.white,
    borderRadius: 8,
    paddingHorizontal: spacing.xs,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
  },
  newsCard: {
    width: 160,
    marginRight: spacing.md,
    backgroundColor: colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  newsImage: {
    width: '100%',
    height: 90,
  },
  newsTitle: {
    fontSize: typography.fontSize.sm,
    color: colors.text.primary,
    margin: spacing.sm,
  },
  bestStadiumCard: {
    margin: spacing.md,
    backgroundColor: colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    alignItems: 'center',
  },
  bestStadiumImage: {
    width: '100%',
    height: 140,
  },
  bestStadiumTitle: {
    fontSize: typography.fontSize.base,
    color: colors.text.primary,
    margin: spacing.sm,
  },
  readButton: {
    marginBottom: spacing.md,
  },
  clansList: {
    margin: spacing.md,
  },
  clanRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
    marginBottom: spacing.sm,
    padding: spacing.sm,
    elevation: 1,
  },
  clanRank: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    width: 32,
    textAlign: 'center',
  },
  clanName: {
    flex: 1,
    fontSize: typography.fontSize.base,
    color: colors.text.primary,
    marginLeft: spacing.sm,
  },
  clanScore: {
    fontSize: typography.fontSize.base,
    color: colors.text.primary,
    fontWeight: typography.fontWeight.bold,
    marginLeft: spacing.sm,
  },
  ctaBox: {
    backgroundColor: colors.white,
    borderRadius: 12,
    margin: spacing.md,
    alignItems: 'center',
    padding: spacing.lg,
    elevation: 2,
  },
  ctaText: {
    fontSize: typography.fontSize.lg,
    color: colors.primary,
    fontWeight: typography.fontWeight.bold,
    marginBottom: spacing.md,
  },
  ctaButton: {
    width: '100%',
  },
}); 