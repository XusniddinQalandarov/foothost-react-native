import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Team {
  name: string;
  logo?: React.ReactNode; // SVG component or image source
}

interface MatchCardProps {
  id: string;
  location: string;
  dateTime: string;
  teams: [Team, Team];
  title: string;
  stadiumName?: string;
  cost: string;
  participants: string; // e.g., "10/12"
  image?: any; // Optional background image
  isPastMatch?: boolean; // To control icon colors
  onPress?: () => void;
}

export const MatchCard: React.FC<MatchCardProps> = ({
  id,
  location,
  dateTime,
  teams,
  title,
  stadiumName,
  cost,
  participants,
  image,
  isPastMatch = false,
  onPress,
}) => {
  const iconColor = isPastMatch ? "#000000" : "#45AF31";
  
  return (
    <TouchableOpacity 
      className="overflow-hidden"
      style={{ backgroundColor: '#EEEDED' }}
      onPress={onPress}
    >
      {/* Background Image with Overlaid Tags */}
      {image && (
        <View className="relative">
          <Image
            source={image}
            className="w-full h-48"
            resizeMode="cover"
          />
          {/* Overlaid Location and Date/Time Tags */}
          <View className="absolute top-3 left-3 right-3 flex-row justify-between">
            <View className="bg-[#D6D5D5] rounded-md px-3 py-1 flex-row items-center">
              <MaterialCommunityIcons name="map-marker" size={16} color={iconColor} />
              <Text className="text-xs text-text-grays100 ml-1 font-manrope-semibold">{location}</Text>
            </View>
            <View className="bg-[#D6D5D5] rounded-md px-3 py-1 flex-row items-center">
              <MaterialCommunityIcons name="calendar" size={16} color={iconColor} />
              <Text className="text-xs text-text-grays100 ml-1 font-manrope-semibold">{dateTime}</Text>
            </View>
          </View>
        </View>
      )}
      
      {/* Content - Only show if no image */}
      {!image && (
        <View className="p-4">
          {/* Location and Date/Time Tags */}
          <View className="flex-row justify-between mb-4">
            <View className="bg-[#D6D5D5] rounded-md px-3 py-1 flex-row items-center">
              <MaterialCommunityIcons name="map-marker" size={16} color={iconColor} />
              <Text className="text-xs text-text-grays100 ml-1 font-manrope-semibold">{location}</Text>
            </View>
            <View className="bg-[#D6D5D5] rounded-md px-3 py-1 flex-row items-center">
              <MaterialCommunityIcons name="calendar" size={16} color={iconColor} />
              <Text className="text-xs text-text-grays100 ml-1 font-manrope-semibold">{dateTime}</Text>
            </View>
          </View>

          {/* Teams Section with Diagonal Separation */}
          <View className="flex-row relative h-32">
            {/* Left Team */}
            <View className="flex-1 items-center justify-center">
              <View className="flex-row items-center">
                <Text className="text-sm font-manrope-semibold text-center mr-2">{teams[0].name}</Text>
                <View className="w-16 h-16 items-center justify-center">
                  {teams[0].logo ? (
                    teams[0].logo
                  ) : (
                    <View className="w-16 h-16 bg-[#D6D5D5] rounded-full items-center justify-center">
                      <MaterialCommunityIcons name="soccer" size={32} color="#666" />
                    </View>
                  )}
                </View>
              </View>
            </View>
            
            {/* Diagonal Line */}
            <View 
              className="absolute top-0 bottom-0 w-px bg-gray-300"
              style={{ 
                left: '50%',
                transform: [{ rotate: '15deg' }]
              }}
            />
            
            {/* Right Team */}
            <View className="flex-1 items-center justify-center">
              <View className="flex-row items-center">
                <View className="w-16 h-16 items-center justify-center">
                  {teams[1].logo ? (
                    teams[1].logo
                  ) : (
                    <View className="w-16 h-16 bg-[#D6D5D5] rounded-full items-center justify-center">
                      <MaterialCommunityIcons name="soccer" size={32} color="#666" />
                  </View>
                  )}
                </View>
                <Text className="text-sm font-manrope-semibold text-center ml-2">{teams[1].name}</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}; 