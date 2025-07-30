import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface SectionHeaderProps {
  title: string;
  onViewAll?: () => void;
  viewAllText?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  onViewAll,
  viewAllText = "View all >",
}) => {
  return (
    <View className="flex-row items-center justify-between mb-4">
      <Text className="text-xl font-artico-medium text-text-primary">{title}</Text>
      {onViewAll && (
        <TouchableOpacity onPress={onViewAll}>
          <Text className="text-primary font-manrope-semibold">{viewAllText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}; 