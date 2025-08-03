import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ModalHeaderProps {
  title: string;
  onBack?: () => void;
  onOptions?: () => void;
  showOptions?: boolean;
  optionsIcon?: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  onBack,
  onOptions,
  showOptions = false,
  optionsIcon = 'dots-vertical',
}) => {
  return (
    <View className="bg-white rounded-t-3xl" style={{ height: 80 }}>
      <View className="flex-1 flex-row items-center justify-between px-4">
        <TouchableOpacity 
          onPress={onBack}
          className="p-2"
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        
        <Text className="text-base font-manrope-semibold text-text-primary">
          {title}
        </Text>
        
        {showOptions ? (
          <TouchableOpacity 
            onPress={onOptions}
            className="p-2"
            activeOpacity={0.7}
          >
            <MaterialCommunityIcons name={optionsIcon as any} size={24} color="#000" />
          </TouchableOpacity>
        ) : (
          <View className="w-10" />
        )}
      </View>
    </View>
  );
}; 