import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { colors, typography, spacing } from '../styles';

const mockStadium = {
  name: 'BUNYODKOR',
  address: 'Малая кольцевая дорога',
  distance: '4.9 км от вас',
  rating: 9.9,
  image: require('../../assets/images/stadium/field.svg'),
  cover: 'Искусственное покрытие',
  type: 'Открытая',
  size: '20x40',
  workTime: '08:00 - 03:00',
  amenities: {
    parking: false,
    locker: true,
    shower: true,
    tribune: true,
    lighting: true,
  },
};
const mockSchedule = [
  { time: '07:00 AM - 09:00 AM', available: false },
  { time: '07:00 AM - 09:00 AM', available: true },
  { time: '07:00 AM - 09:00 AM', available: false },
  { time: '07:00 AM - 09:00 AM', available: false },
  { time: '07:00 AM - 09:00 AM', available: false },
];

export const BookingStep1Screen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('today');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={mockStadium.image} style={styles.stadiumImage} />
        <View style={styles.headerRow}>
          <Text style={styles.stadiumName}>{mockStadium.name}</Text>
          <Text style={styles.stadiumRating}>{mockStadium.rating}</Text>
        </View>
        <Text style={styles.stadiumAddress}>{mockStadium.address}</Text>
        <Text style={styles.stadiumDistance}>{mockStadium.distance}</Text>
        <View style={styles.infoRow}>
          <View style={styles.infoBox}><Text style={styles.infoLabel}>Покрытие</Text><Text style={styles.infoValue}>{mockStadium.cover}</Text></View>
          <View style={styles.infoBox}><Text style={styles.infoLabel}>Тип площадки</Text><Text style={styles.infoValue}>{mockStadium.type}</Text></View>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoBox}><Text style={styles.infoLabel}>Длина x Ширина (м)</Text><Text style={styles.infoValue}>{mockStadium.size}</Text></View>
          <View style={styles.infoBox}><Text style={styles.infoLabel}>Время работы</Text><Text style={styles.infoValue}>{mockStadium.workTime}</Text></View>
        </View>
        <Text style={styles.sectionTitle}>РАСПИСАНИЕ:</Text>
        <View style={styles.scheduleRow}>
          <TouchableOpacity style={[styles.dateButton, selectedDate === 'today' && styles.dateButtonActive]} onPress={() => setSelectedDate('today')}><Text style={[styles.dateButtonText, selectedDate === 'today' && styles.dateButtonTextActive]}>Сегодня</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.dateButton, selectedDate === 'tomorrow' && styles.dateButtonActive]} onPress={() => setSelectedDate('tomorrow')}><Text style={[styles.dateButtonText, selectedDate === 'tomorrow' && styles.dateButtonTextActive]}>Завтра</Text></TouchableOpacity>
          <TouchableOpacity style={styles.dateButton}><Text style={styles.dateButtonText}>11.06</Text></TouchableOpacity>
        </View>
        <View style={styles.scheduleList}>
          {mockSchedule.map((slot, idx) => (
            <View key={idx} style={[styles.scheduleSlot, slot.available && styles.scheduleSlotAvailable]}>
              <Text style={[styles.scheduleSlotText, slot.available && styles.scheduleSlotTextAvailable]}>{slot.time}</Text>
              <Text style={styles.scheduleSlotStatus}>{slot.available ? 'Свободно' : 'Мест Нет'}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.sectionTitle}>УДОБСТВО</Text>
        <View style={styles.amenitiesRow}>
          <Text style={[styles.amenity, !mockStadium.amenities.parking && styles.amenityUnavailable]}>Парковка {mockStadium.amenities.parking ? 'Есть' : 'Нет'}</Text>
          <Text style={styles.amenity}>Раздевалки {mockStadium.amenities.locker ? 'Есть' : 'Нет'}</Text>
          <Text style={styles.amenity}>Душ {mockStadium.amenities.shower ? 'Есть' : 'Нет'}</Text>
        </View>
        <View style={styles.amenitiesRow}>
          <Text style={styles.amenity}>Трибуны {mockStadium.amenities.tribune ? 'Есть' : 'Нет'}</Text>
          <Text style={styles.amenity}>Освещение {mockStadium.amenities.lighting ? 'Есть' : 'Нет'}</Text>
        </View>
        <View style={styles.mapBox}>
          <Text style={styles.sectionTitle}>МЕСТОПОЛОЖЕНИЕ:</Text>
          <View style={styles.mapPlaceholder}><Text>Map Placeholder</Text></View>
        </View>
        <TouchableOpacity style={styles.submitButton}><Text style={styles.submitButtonText}>Отправить заявку</Text></TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  stadiumImage: {
    width: '100%',
    height: 180,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: spacing.md,
  },
  stadiumName: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
  stadiumRating: {
    backgroundColor: colors.success,
    color: colors.white,
    borderRadius: 8,
    paddingHorizontal: spacing.xs,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
  },
  stadiumAddress: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    marginHorizontal: spacing.md,
  },
  stadiumDistance: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    marginHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },
  infoBox: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: spacing.sm,
    marginHorizontal: 2,
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
  },
  infoValue: {
    fontSize: typography.fontSize.base,
    color: colors.text.primary,
    fontWeight: typography.fontWeight.bold,
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginHorizontal: spacing.md,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  scheduleRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.sm,
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
  scheduleList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  scheduleSlot: {
    width: '48%',
    backgroundColor: colors.gray[200],
    borderRadius: 8,
    padding: spacing.sm,
    margin: '1%',
    alignItems: 'center',
  },
  scheduleSlotAvailable: {
    backgroundColor: colors.success,
  },
  scheduleSlotText: {
    color: colors.text.primary,
    fontSize: typography.fontSize.sm,
  },
  scheduleSlotTextAvailable: {
    color: colors.white,
    fontWeight: typography.fontWeight.bold,
  },
  scheduleSlotStatus: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    marginTop: 2,
  },
  amenitiesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.sm,
  },
  amenity: {
    fontSize: typography.fontSize.sm,
    color: colors.text.primary,
  },
  amenityUnavailable: {
    color: colors.error,
  },
  mapBox: {
    margin: spacing.md,
  },
  mapPlaceholder: {
    backgroundColor: colors.gray[200],
    height: 120,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    margin: spacing.md,
    alignItems: 'center',
    padding: spacing.lg,
  },
  submitButtonText: {
    color: colors.white,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
  },
}); 