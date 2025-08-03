import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Team {
  id: string;
  name: string;
  logo?: React.ReactNode;
}

interface TeamSelectionModalProps {
  visible: boolean;
  teams: Team[];
  selectedTeamId?: string;
  onClose: () => void;
  onSelectTeam: (team: Team) => void;
}

export const TeamSelectionModal: React.FC<TeamSelectionModalProps> = ({
  visible,
  teams,
  selectedTeamId,
  onClose,
  onSelectTeam,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="flex-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <TouchableOpacity 
          className="flex-1" 
          activeOpacity={1}
          onPress={onClose}
        />
        
        <View className="bg-white rounded-t-3xl shadow-lg mx-4 mb-8">
          {/* Modal Header */}
          <View className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100">
            <TouchableOpacity onPress={onClose} className="p-2">
              <MaterialCommunityIcons name="arrow-left" size={24} color="#212121" />
            </TouchableOpacity>
            <Text className="text-lg font-manrope-bold text-text-primary">
              ВЫБЕРИТЕ КОМАНДУ
            </Text>
            <View className="w-10" />
          </View>

          {/* Team List */}
          <View className="px-4 pb-6">
            {teams.map((team) => (
              <TouchableOpacity 
                key={team.id}
                className="py-4 border-b border-gray-100 flex-row items-center"
                onPress={() => onSelectTeam(team)}
                activeOpacity={0.7}
              >
                <View className="w-6 h-6 rounded-full border-2 border-gray-300 items-center justify-center mr-4">
                  {selectedTeamId === team.id && (
                    <View className="w-3 h-3 rounded-full bg-primary" />
                  )}
                </View>
                <Text className="text-base font-manrope-medium text-text-primary flex-1">
                  {team.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
}; 