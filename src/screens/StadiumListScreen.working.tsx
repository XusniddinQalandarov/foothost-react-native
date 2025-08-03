import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';

const stadiums = [
  {
    id: '1',
    name: 'Центральный стадион',
    location: 'Ташкент, район Чиланзар',
    price: '50,000 сум/час',
    rating: '4.8',
    facilities: ['Парковка', 'Раздевалка', 'Освещение'],
  },
  {
    id: '2',
    name: 'Спорт Комплекс "Олимпия"',
    location: 'Ташкент, район Яшнабад',
    price: '60,000 сум/час',
    rating: '4.9',
    facilities: ['Парковка', 'Раздевалка', 'Душ', 'Трибуны'],
  },
  {
    id: '3',
    name: 'Футбольный клуб "Динамо"',
    location: 'Ташкент, район Мирабад',
    price: '70,000 сум/час',
    rating: '4.7',
    facilities: ['Парковка', 'Раздевалка', 'Душ', 'Освещение', 'Кафе'],
  },
];

export const StadiumListScreen: React.FC<any> = ({ navigation }) => {
  const [selectedStadium, setSelectedStadium] = useState<string | null>(null);

  const renderStadium = ({ item }: any) => (
    <TouchableOpacity 
      style={[
        styles.stadiumCard,
        selectedStadium === item.id && styles.selectedCard
      ]}
      onPress={() => {
        setSelectedStadium(item.id);
        navigation.navigate('BookingStep1', { stadium: item });
      }}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.stadiumName}>{item.name}</Text>
        <Text style={styles.rating}>⭐ {item.rating}</Text>
      </View>
      
      <Text style={styles.location}>📍 {item.location}</Text>
      <Text style={styles.price}>💰 {item.price}</Text>
      
      <View style={styles.facilities}>
        {item.facilities.map((facility: string, index: number) => (
          <View key={index} style={styles.facilityTag}>
            <Text style={styles.facilityText}>{facility}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Назад</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Стадионы</Text>
      </View>

      <FlatList
        data={stadiums}
        renderItem={renderStadium}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
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
  list: {
    padding: 20,
  },
  stadiumCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectedCard: {
    borderColor: '#45AF31',
    backgroundColor: '#F0F8ED',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  stadiumName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    flex: 1,
  },
  rating: {
    fontSize: 14,
    color: '#666',
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#45AF31',
    marginBottom: 12,
  },
  facilities: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  facilityTag: {
    backgroundColor: '#E8F5E8',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  facilityText: {
    fontSize: 12,
    color: '#45AF31',
  },
});
