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
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 32, // pt-8
          paddingBottom: 8, // pb-2 (reduced from 16)
          paddingHorizontal: 24, // px-6
          backgroundColor: 'white',
        },
        style,
      ]}
    >
      {/* Left (e.g., back button) */}
      <View style={{ minWidth: 40, alignItems: 'flex-start' }}>{left}</View>
      {/* Title or children */}
      {children ? (
        <View style={{ flex: 1, alignItems: 'center' }}>{children}</View>
      ) : title ? (
        <Text
          style={[
            {
              fontSize: 22,
              fontFamily: 'Artico-Bold',
              color: '#212121',
              textAlign: 'center',
              flex: 1,
            },
            titleStyle,
          ]}
          numberOfLines={1}
        >
          {title}
        </Text>
      ) : null}
      {/* Right (e.g., actions) */}
      <View style={{ minWidth: 40, alignItems: 'flex-end' }}>{right}</View>
    </View>
  );
}; 