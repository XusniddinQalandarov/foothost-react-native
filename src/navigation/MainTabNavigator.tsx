import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { StadiumListScreen } from '../screens/StadiumListScreen';
import { TournamentsScreen } from '../screens/TournamentsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

type MainTabNavigatorProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Main'>;
};

export const MainTabNavigator: React.FC<MainTabNavigatorProps> = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }: { route: RouteProp<Record<string, object | undefined>, string> }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#F5F5F5', borderTopWidth: 0, height: 60 },
        tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
          if (route.name === 'Home') {
                            return <MaterialCommunityIcons name="home" size={28} color={focused ? '#45AF31' : '#212121'} />;
          }
          if (route.name === 'StadiumList') {
                            return <MaterialCommunityIcons name="soccer-field" size={28} color={focused ? '#45AF31' : '#212121'} />;
          }
          if (route.name === 'Tournaments') {
                            return <MaterialCommunityIcons name="soccer" size={28} color={focused ? '#45AF31' : '#212121'} />;
          }
          if (route.name === 'Profile') {
                            return <MaterialCommunityIcons name="account-outline" size={28} color={focused ? '#45AF31' : '#212121'} />;
          }
          return null;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="StadiumList">
        {(props) => <StadiumListScreen {...props} rootNavigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen name="Tournaments">
        {(props) => <TournamentsScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Profile">
        {(props) => <ProfileScreen {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}; 