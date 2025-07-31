import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FirstSvg from '../../../assets/images/homepage/first.svg';
import SecondSvg from '../../../assets/images/homepage/second.svg';
import ThirdSvg from '../../../assets/images/homepage/third.svg';

interface ClanCardProps {
  rank: number;
  name: string;
  wins: number;
  losses: number;
  score: number;
  logo?: React.ReactNode;
}

export const ClanCard: React.FC<ClanCardProps> = ({
  rank,
  name,
  wins,
  losses,
  score,
  logo,
}) => {
  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return <FirstSvg width={77} height={77} />;
      case 2:
        return <SecondSvg width={77} height={77} />;
      case 3:
        return <ThirdSvg width={77} height={77} />;
      default:
        // A default badge for ranks other than 1, 2, 3 might be needed
        return <FirstSvg width={77} height={77} />;
    }
  };

  return (
    <View className="flex-row items-center py-2 gap-2">
      <View className="w-12 h-12 mr-4 items-center justify-center">
        {getRankBadge(rank)}
      </View>
      <View className="flex-row items-center py-2 rounded-md bg-[#EEEDED] w-[81%] justify-center">
        <View className="flex-row items-center w-[260px]">
          {logo}
          <View className="flex-1 ml-2">
            <Text className="text-[15px] font-manrope-bold text-text-primary mb-1">{name}</Text>
            <View className="flex-column items-start">
              <Text className="text-xs font-manrope-regular text-text-secondary">
                победа - {wins}
              </Text>
              <Text className="text-xs font-manrope-regular text-text-secondary">
                поражение - {losses}
              </Text>
            </View>
          </View>
          <View className="flex-row items-center gap-1">
            <Text className="text-[15px] font-manrope-bold text-text-primary">{score}</Text>
            <MaterialCommunityIcons name="trophy" size={15} color="#000000" />
          </View>
        </View>
      </View>
    </View>
  );
};