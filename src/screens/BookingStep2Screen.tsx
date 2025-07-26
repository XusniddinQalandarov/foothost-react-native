import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { colors, typography, spacing } from '../styles';

const mockBookingDetails = {
  date: '11.06.2025',
  time: '23:30-0:00',
  price: '200.000 Sum',
};

const mockSlots = [
  { time: '07:00 AM - 09:00 AM', available: false },
  { time: '07:00 AM - 09:00 AM', available: true },
  { time: '07:00 AM - 09:00 AM', available: false },
  { time: '07:00 AM - 09:00 AM', available: true },
  { time: '07:00 AM - 09:00 AM', available: false },
];

export const BookingStep2Screen: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Выберите время</Text>
        <View style={styles.slotsList}>
          {mockSlots.map((slot, idx) => (
            <TouchableOpacity
              key={idx}
              style={[styles.slot, slot.available && styles.slotAvailable, selectedSlot === idx && styles.slotSelected]}
              disabled={!slot.available}
              onPress={() => setSelectedSlot(idx)}
            >
              <Text style={[styles.slotText, slot.available && styles.slotTextAvailable, selectedSlot === idx && styles.slotTextSelected]}>{slot.time}</Text>
              <Text style={styles.slotStatus}>{slot.available ? 'Свободно' : 'Мест Нет'}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.detailsBox}>
          <Text style={styles.detailsLabel}>Дата и время</Text>
          <Text style={styles.detailsValue}>{mockBookingDetails.date} {mockBookingDetails.time}</Text>
          <Text style={styles.detailsLabel}>Стоимость</Text>
          <Text style={styles.detailsValue}>{mockBookingDetails.price}</Text>
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
  title: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    margin: spacing.md,
    textAlign: 'center',
  },
  slotsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  slot: {
    width: '48%',
    backgroundColor: colors.gray[200],
    borderRadius: 8,
    padding: spacing.sm,
    margin: '1%',
    alignItems: 'center',
  },
  slotAvailable: {
    backgroundColor: colors.success,
  },
  slotSelected: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
  slotText: {
    color: colors.text.primary,
    fontSize: typography.fontSize.sm,
  },
  slotTextAvailable: {
    color: colors.white,
    fontWeight: typography.fontWeight.bold,
  },
  slotTextSelected: {
    textDecorationLine: 'underline',
  },
  slotStatus: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    marginTop: 2,
  },
  detailsBox: {
    backgroundColor: colors.white,
    borderRadius: 8,
    margin: spacing.md,
    padding: spacing.md,
    elevation: 2,
  },
  detailsLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    marginTop: spacing.xs,
  },
  detailsValue: {
    fontSize: typography.fontSize.base,
    color: colors.text.primary,
    fontWeight: typography.fontWeight.bold,
    marginBottom: spacing.sm,
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