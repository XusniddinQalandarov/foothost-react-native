import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Team, sport or venue",
  onSearch,
  value,
  onChangeText,
}) => {
  return (
    <View className="flex-row items-center mb-4">
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        className="flex-1 bg-[#F4F4F4] rounded-lg px-4 py-3 mr-2 border border-[#F4F4F4]"
        placeholderTextColor="#A8A8A8"
      />
      <TouchableOpacity 
        className="w-12 h-12 bg-primary rounded-lg items-center justify-center"
        onPress={onSearch}
      >
        <MaterialCommunityIcons name="magnify" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}; 