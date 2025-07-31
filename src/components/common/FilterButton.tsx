import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface FilterButtonProps {
  icon?: string;
  text: string;
  subLabel?: string;
  isActive?: boolean;
  hideIcon?: boolean;
  onPress?: () => void;
  className?: string;
  activeColor?: string;
  inactiveColor?: string;
  activeTextColor?: string;
  inactiveTextColor?: string;
  activeBorderColor?: string;
  inactiveBorderColor?: string;
  iconColor?: string;
  activeIconColor?: string;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  icon,
  text,
  subLabel,
  isActive = false,
  hideIcon = false,
  onPress,
  className = '',
  activeColor = '#45AF31',
  inactiveColor = '#fff',
  activeTextColor = '#fff',
  inactiveTextColor = '#212121',
  activeBorderColor = '#45AF31',
  inactiveBorderColor = '#E0E0E0',
  iconColor,
  activeIconColor,
}) => {
  const bgColor = isActive ? activeColor : inactiveColor;
  const borderColor = isActive ? activeBorderColor : inactiveBorderColor;
  const textColor = isActive ? activeTextColor : inactiveTextColor;
  const iconFinalColor = isActive
    ? (activeIconColor || activeTextColor)
    : (iconColor || inactiveTextColor || '#757575');

  return (
    <TouchableOpacity
      className={`flex-1 rounded-lg p-2 items-center justify-center h-12 ${className}`}
      onPress={onPress}
      style={{ backgroundColor: bgColor, borderWidth: 1, borderColor }}
    >
      {!hideIcon && icon ? (
        <View className="flex-row items-center">
          <MaterialCommunityIcons
            name={icon as any}
            size={16}
            color={iconFinalColor}
            style={{ marginRight: 4 }}
          />
          <Text style={{ color: textColor }} className="text-xs font-manrope-medium">{text}</Text>
        </View>
      ) : (
        <>
          <Text style={{ color: textColor }} className="text-xs font-manrope-medium">{text}</Text>
          {subLabel !== undefined && (
            <Text style={{ color: textColor }} className="text-sm">{subLabel}</Text>
          )}
        </>
      )}
    </TouchableOpacity>
  );
}; 