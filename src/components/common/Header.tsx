import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';

interface HeaderProps {
  title?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  left,
  right,
  style,
  titleStyle,
  children,
}) => {
  return (
    <View
      className="flex-row items-center px-4 pt-4 pb-2"
      style={style}
    >
      {/* Left (e.g., back button) */}
      <View className="flex-1 items-start">{left}</View>
      {/* Title or children */}
      {children ? (
        <View className="flex-1 items-center">{children}</View>
      ) : title ? (
        <View className="flex-1 items-center justify-center">
          <Text
            className="text-[28px] font-artico-bold text-text-primary text-center"
            style={titleStyle}
          >
            {title}
          </Text>
        </View>
      ) : null}
      {/* Right (e.g., actions) */}
      <View className="flex-1 items-end">{right}</View>
    </View>
  );
}; 