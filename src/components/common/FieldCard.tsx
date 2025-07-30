import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface FieldCardProps {
  name: string;
  location: string;
  rating: number;
  distance: string;
  image: any;
  price?: string | number;
  ratingPosition?: 'next-to-name' | 'right';
  onPress?: () => void;
}

export const FieldCard: React.FC<FieldCardProps> = ({
  name,
  location,
  rating,
  distance,
  image,
  price,
  ratingPosition = 'right',
  onPress,
}) => {
  const renderRating = () => (
    <View className="bg-primary rounded-md py-1 px-1">
      <View className="flex-row items-center">
        <Text className="text-white font-manrope-medium text-sm mr-1">{rating}</Text>
        <MaterialCommunityIcons name="star" size={16} color="white" />
      </View>
    </View>
  );

  return (
    <TouchableOpacity className="relative" onPress={onPress}>
      <Image
        source={image}
        className="w-full h-56 rounded-t-lg"
        resizeMode="cover"
      />
      <View className="absolute bottom-4 left-4">
        {ratingPosition === 'next-to-name' ? (
          <View className="flex-row items-center mb-1">
            <Text className="text-white font-artico-medium text-[30px] mr-2">{name}</Text>
            {renderRating()}
          </View>
        ) : (
          <Text className="text-white font-artico-medium text-[30px] mb-1">{name}</Text>
        )}
        <View className="flex-row items-center">
          <MaterialCommunityIcons name="map-marker" size={16} color="white" />
          <Text className="text-white font-manrope-medium text-xs ml-1">{location}</Text>
        </View>
      </View>
      <View className="absolute bottom-4 right-4 items-end">
        {ratingPosition === 'right' && (
          <View className="mb-1">
            {renderRating()}
          </View>
        )}
        {price !== undefined && (
          <Text className="text-white font-artico-bold text-[30px] mb-1">{price} сум</Text>
        )}
        <Text className="text-white font-manrope-medium text-xs">{distance}</Text>
      </View>
    </TouchableOpacity>
  );
}; 