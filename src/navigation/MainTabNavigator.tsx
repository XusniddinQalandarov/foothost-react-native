import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { StadiumListScreen } from '../screens/StadiumListScreen';
import { BookingStep1Screen } from '../screens/BookingStep1Screen';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../styles';
import { RouteProp } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Page (Coming Soon)</Text>
  </View>
);

export const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }: { route: RouteProp<Record<string, object | undefined>, string> }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { backgroundColor: colors.background.default, borderTopWidth: 0, height: 60 },
      tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
        if (route.name === 'Home') {
          return <MaterialCommunityIcons name="home" size={28} color={focused ? colors.primary : colors.text.primary} />;
        }
        if (route.name === 'StadiumList') {
          return <MaterialCommunityIcons name="soccer-field" size={28} color={focused ? colors.primary : colors.text.primary} />;
        }
        if (route.name === 'BookingStep1') {
          return <MaterialCommunityIcons name="soccer" size={28} color={focused ? colors.primary : colors.text.primary} />;
        }
        if (route.name === 'Profile') {
          return <MaterialCommunityIcons name="account-outline" size={28} color={focused ? colors.primary : colors.text.primary} />;
        }
        return null;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="StadiumList" component={StadiumListScreen} />
    <Tab.Screen name="BookingStep1" component={BookingStep1Screen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
); 