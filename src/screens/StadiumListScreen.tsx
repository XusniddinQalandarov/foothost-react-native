import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { colors, typography, spacing } from '../styles';

const mockStadiums = [
  { id: 1, name: 'BUNYODKOR', address: 'Малая кольцевая дорога', distance: '4.9 км от вас', rating: 9.9, image: require('../../assets/images/homepage/homepage.png') },
  { id: 2, name: 'BUNYODKOR', address: 'Малая кольцевая дорога', distance: '4.9 км от вас', rating: 9.9, image: require('../../assets/images/homepage/homepage.png') },
  { id: 3, name: 'BUNYODKOR', address: 'Малая кольцевая дорога', distance: '4.9 км от вас', rating: 9.9, image: require('../../assets/images/homepage/homepage.png') },
];

const mockDates = [
  { label: 'Сегодня', value: 'today' },
  { label: 'Завтра', value: 'tomorrow' },
  { label: '11.06', value: '11.06' },
];

export const StadiumListScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('today');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity><Text style={styles.backText}>{'< Back'}</Text></TouchableOpacity>
        <Text style={styles.title}>СПИСОК ПОЛЕЙ</Text>
        <Text style={styles.count}>121 полей</Text>
      </View>
      <View style={styles.dateRow}>
        {mockDates.map((date) => (
          <TouchableOpacity
            key={date.value}
            style={[styles.dateButton, selectedDate === date.value && styles.dateButtonActive]}
            onPress={() => setSelectedDate(date.value)}
          >
            <Text style={[styles.dateButtonText, selectedDate === date.value && styles.dateButtonTextActive]}>{date.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {mockStadiums.map((item) => (
          <View key={item.id} style={styles.stadiumCard}>
            <Image source={item.image} style={styles.stadiumImage} />
            <View style={styles.stadiumInfo}>
              <Text style={styles.stadiumName}>{item.name}</Text>
              <Text style={styles.stadiumAddress}>{item.address}</Text>
              <View style={styles.stadiumMetaRow}>
                <Text style={styles.stadiumDistance}>{item.distance}</Text>
                <View style={styles.ratingBox}><Text style={styles.stadiumRating}>{item.rating}</Text></View>
              </View>
              <TouchableOpacity style={styles.detailButton}><Text style={styles.detailButtonText}>Подробнее</Text></TouchableOpacity>
            </View>
          </View>
        ))}
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
    justifyContent: 'space-between',
  },
  backText: {
    color: colors.primary,
    fontSize: typography.fontSize.base,
  },
  title: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
  count: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.md,
  },
  dateButton: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: spacing.sm,
    marginHorizontal: 2,
    alignItems: 'center',
  },
  dateButtonActive: {
    backgroundColor: colors.primary,
  },
  dateButtonText: {
    color: colors.primary,
    fontSize: typography.fontSize.base,
  },
  dateButtonTextActive: {
    color: colors.white,
  },
  stadiumCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    margin: spacing.md,
    overflow: 'hidden',
    elevation: 2,
  },
  stadiumImage: {
    width: '100%',
    height: 160,
  },
  stadiumInfo: {
    padding: spacing.md,
  },
  stadiumName: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  stadiumAddress: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    marginBottom: spacing.xs,
  },
  stadiumMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  stadiumDistance: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    flex: 1,
  },
  ratingBox: {
    backgroundColor: colors.success,
    borderRadius: 8,
    paddingHorizontal: spacing.xs,
    paddingVertical: 2,
  },
  stadiumRating: {
    color: colors.white,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
  },
  detailButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  detailButtonText: {
    color: colors.white,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
  },
}); 