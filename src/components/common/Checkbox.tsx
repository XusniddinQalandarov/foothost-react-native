import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
  label?: string;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onPress,
  label,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      className="flex-row items-center my-1"
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <View className={`w-5 h-5 border-2 rounded justify-center items-center mr-2 ${
        checked 
          ? 'bg-primary border-primary' 
          : 'border-gray-400'
      }`}>
        {checked && (
          <Ionicons name="checkmark" size={16} color="white" />
        )}
      </View>
      {label && (
        <Text className="text-sm text-text-secondary flex-1">{label}</Text>
      )}
    </TouchableOpacity>
  );
}; 