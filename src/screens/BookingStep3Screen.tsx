import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { colors, typography, spacing } from '../styles';
import { Input } from '../components/common';

const mockBookingDetails = {
  date: '11.06.2025 23:30-0:00',
  price: '200.000 Sum',
};

export const BookingStep3Screen: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.modalBox}>
        <Text style={styles.title}>БРОНИРОВАНИЕ</Text>
        <Input
          placeholder="Имя"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <Input
          placeholder="Телефон"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
        />
        <Text style={styles.label}>Дата и время</Text>
        <Text style={styles.value}>{mockBookingDetails.date}</Text>
        <Text style={styles.label}>Стоимость</Text>
        <Text style={styles.value}>{mockBookingDetails.price}</Text>
        <TouchableOpacity style={styles.submitButton}><Text style={styles.submitButtonText}>Отправить Заявку</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.default,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: spacing.lg,
    width: '90%',
    elevation: 4,
    alignItems: 'center',
  },
  title: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  input: {
    width: '100%',
    marginBottom: spacing.sm,
  },
  label: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    marginTop: spacing.sm,
  },
  value: {
    fontSize: typography.fontSize.base,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    marginTop: spacing.lg,
    alignItems: 'center',
    padding: spacing.lg,
    width: '100%',
  },
  submitButtonText: {
    color: colors.white,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
  },
}); 