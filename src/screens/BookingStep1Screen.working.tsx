import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export const BookingStep1Screen: React.FC<any> = ({ navigation, route }) => {
  const { stadium } = route.params || {};
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeSlots = [
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00',
    '17:00 - 18:00',
    '18:00 - 19:00',
    '19:00 - 20:00',
    '20:00 - 21:00',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Назад</Text>
        </TouchableOpacity>
        <Text style={styles.title}>📅 Бронирование</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.stadiumInfo}>
          <Text style={styles.stadiumName}>{stadium?.name || 'Стадион'}</Text>
          <Text style={styles.stadiumLocation}>{stadium?.location || 'Выберите время'}</Text>
          <Text style={styles.stadiumPrice}>{stadium?.price || 'Цена по запросу'}</Text>
        </View>

        <Text style={styles.sectionTitle}>Выберите время:</Text>
        
        <View style={styles.timeGrid}>
          {timeSlots.map((time) => (
            <TouchableOpacity
              key={time}
              style={[
                styles.timeSlot,
                selectedTime === time && styles.selectedTimeSlot
              ]}
              onPress={() => setSelectedTime(time)}
            >
              <Text style={[
                styles.timeText,
                selectedTime === time && styles.selectedTimeText
              ]}>
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {selectedTime && (
          <TouchableOpacity 
            style={styles.continueButton}
            onPress={() => navigation.navigate('Main')}
          >
            <Text style={styles.continueButtonText}>Продолжить бронирование</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    marginRight: 16,
  },
  backButtonText: {
    fontSize: 16,
    color: '#45AF31',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    padding: 20,
  },
  stadiumInfo: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  stadiumName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  stadiumLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  stadiumPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#45AF31',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  timeSlot: {
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    minWidth: '45%',
  },
  selectedTimeSlot: {
    backgroundColor: '#45AF31',
    borderColor: '#45AF31',
  },
  timeText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  selectedTimeText: {
    color: 'white',
    fontWeight: '600',
  },
  continueButton: {
    backgroundColor: '#45AF31',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
