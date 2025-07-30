import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { FieldCard, Container, Header, FilterButton } from '../components/common';
import Logo from '../../assets/images/logo.svg';

// 1. Add 'price' to the mock data
const mockStadiums = [
  { id: 1, name: 'BUNYODKOR', location: 'Малая кольцевая дорога', distance: '4.9 км от вас', rating: 9.9, price: 200000, image: require('../../assets/images/homepage/homepage.png') },
  { id: 2, name: 'BUNYODKOR', location: 'Малая кольцевая дорога', distance: '4.9 км от вас', rating: 9.9, price: 200000, image: require('../../assets/images/homepage/homepage.png') },
  { id: 3, name: 'BUNYODKOR', location: 'Малая кольцевая дорога', distance: '4.9 км от вас', rating: 9.9, price: 200000, image: require('../../assets/images/homepage/homepage.png') },
];

const mockDates = [
  { label: 'Сегодня', value: 'today', day: 'Ср' },
  { label: 'Завтра', value: 'tomorrow', day: 'Чт' },
  { label: '11.06', value: '11.06', day: 'Pt' },
];

type StadiumListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'StadiumList'
>;

interface Props {
  navigation: StadiumListScreenNavigationProp;
  rootNavigation?: StackNavigationProp<RootStackParamList, 'Main'>;
}

export const StadiumListScreen: React.FC<Props> = ({ navigation, rootNavigation }) => {
  const [selectedDate, setSelectedDate] = useState('today');

  const handleDetailPress = () => {
    if (rootNavigation) {
      rootNavigation.navigate('BookingStep1');
    }
  };

  const textShadow = {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header Layout */}
      <Header
        left={<TouchableOpacity><Text>{'< Back'}</Text></TouchableOpacity>}
        title="СПИСОК ПОЛЕЙ"
        right={<TouchableOpacity><Text>...</Text></TouchableOpacity>}
      />

      {/* Stadium count subtext */}
      <View className="items-center pb-2 -mt-2">
        <Text className="text-gray-600 font-manrope-medium text-xs">121 стадион</Text>
      </View>

      <View className="flex-row space-x-3 p-2 bg-white">
        {mockDates.map((date) => (
          <FilterButton
            key={date.value}
            text={date.label}
            subLabel={date.day}
            isActive={selectedDate === date.value}
            hideIcon
            onPress={() => setSelectedDate(date.value)}
            activeColor="#45AF31"
            inactiveColor="#fff"
            activeTextColor="#fff"
            inactiveTextColor="#212121"
            activeBorderColor="#45AF31"
            inactiveBorderColor="#E0E0E0"
            className="mr-2"
          />
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Use FieldCard for each stadium */}
        {mockStadiums.map((item) => (
          <Container key={item.id} padding="md" className="mb-2">
            <View className="rounded-xl overflow-hidden shadow-lg bg-white">
              <FieldCard
                name={item.name}
                location={item.location}
                rating={item.rating}
                distance={item.distance}
                price={item.price}
                image={item.image}
                ratingPosition="next-to-name"
                onPress={handleDetailPress}
              />
              <TouchableOpacity 
                className="bg-primary py-3 items-center"
                onPress={handleDetailPress}
                style={{ marginTop: 0 }}
              >
                <Text className="text-white text-base font-bold">Подробнее</Text>
              </TouchableOpacity>
            </View>
          </Container>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};