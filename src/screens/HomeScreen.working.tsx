import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export const HomeScreen: React.FC<any> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>FootHost</Text>
        <Text style={styles.subtitle}>Футбольные площадки для всех</Text>

        <View style={styles.menu}>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('StadiumList')}
          >
            <Text style={styles.menuItemTitle}>🏟️ Стадионы</Text>
            <Text style={styles.menuItemSubtitle}>Найти и забронировать площадку</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('Tournaments')}
          >
            <Text style={styles.menuItemTitle}>🏆 Турниры</Text>
            <Text style={styles.menuItemSubtitle}>Участвовать в соревнованиях</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.menuItemTitle}>👤 Профиль</Text>
            <Text style={styles.menuItemSubtitle}>Управление аккаунтом</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('AboutUs')}
          >
            <Text style={styles.menuItemTitle}>ℹ️ О нас</Text>
            <Text style={styles.menuItemSubtitle}>Информация о приложении</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#45AF31',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  menu: {
    gap: 16,
  },
  menuItem: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  menuItemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  menuItemSubtitle: {
    fontSize: 14,
    color: '#666',
  },
});
