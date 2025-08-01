import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface TeamCardProps {
  name: string;
  logo?: React.ReactNode;
  onPress?: () => void;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  name,
  logo,
  onPress,
}) => {
  return (
    <TouchableOpacity
      className="flex-row items-center justify-between bg-gray-100 rounded-lg p-4 mb-3 shadow-sm border border-gray-100"
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View className="flex-row items-center flex-1">
        <View className="w-12 h-12 rounded-full bg-gray-200 items-center justify-center mr-4">
          {logo || (
            <MaterialCommunityIcons name="soccer" size={24} color="#666" />
          )}
        </View>
        <Text className="text-base font-manrope-medium text-text-primary flex-1">
          {name}
        </Text>
      </View>
      <MaterialCommunityIcons name="chevron-right" size={24} color="#666" />
    </TouchableOpacity>
  );
}; 