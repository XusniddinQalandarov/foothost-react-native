import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Team {
  id: string;
  name: string;
  logo?: React.ReactNode;
}

interface TeamConfirmationModalProps {
  visible: boolean;
  selectedTeam: Team | null;
  tournamentName: string;
  onClose: () => void;
  onConfirm: () => void;
}

export const TeamConfirmationModal: React.FC<TeamConfirmationModalProps> = ({
  visible,
  selectedTeam,
  tournamentName,
  onClose,
  onConfirm,
}) => {
  if (!selectedTeam) return null;

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <TouchableOpacity 
          className="flex-1" 
          activeOpacity={1}
          onPress={onClose}
        />
        
        <View className="bg-white rounded-2xl shadow-lg mx-6 mb-20">
          {/* Modal Header */}
          <View className="flex-row items-center justify-between px-6 py-4 border-b border-gray-100">
            <TouchableOpacity onPress={onClose} className="p-2">
              <MaterialCommunityIcons name="close" size={24} color="#212121" />
            </TouchableOpacity>
            <Text className="text-lg font-manrope-bold text-text-primary">
              Подтверждение
            </Text>
            <View className="w-10" />
          </View>

          {/* Modal Content */}
          <View className="px-6 py-6">
            {/* Team Logo and Name */}
            <View className="items-center mb-6">
              <View className="w-20 h-20 bg-gray-100 rounded-full items-center justify-center mb-4">
                {selectedTeam.logo ? (
                  selectedTeam.logo
                ) : (
                  <MaterialCommunityIcons name="shield" size={40} color="#666" />
                )}
              </View>
              <Text className="text-xl font-manrope-bold text-text-primary text-center">
                {selectedTeam.name}
              </Text>
            </View>

            {/* Confirmation Message */}
            <View className="mb-6">
              <Text className="text-base font-manrope-medium text-text-primary text-center mb-2">
                Вы действительно хотите добавить команду
              </Text>
              <Text className="text-lg font-manrope-bold text-primary text-center mb-2">
                {selectedTeam.name}
              </Text>
              <Text className="text-base font-manrope-medium text-text-primary text-center">
                в турнир
              </Text>
              <Text className="text-lg font-manrope-bold text-primary text-center">
                {tournamentName}
              </Text>
              <Text className="text-base font-manrope-medium text-text-primary text-center">
                ?
              </Text>
            </View>

            {/* Action Buttons */}
            <View className="flex-row">
              <TouchableOpacity 
                className="flex-1 py-3 border border-gray-300 rounded-xl mr-2"
                onPress={onClose}
                activeOpacity={0.7}
              >
                <Text className="text-center font-manrope-bold text-gray-600">
                  Отмена
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                className="flex-1 py-3 bg-primary rounded-xl ml-2"
                onPress={onConfirm}
                activeOpacity={0.7}
              >
                <Text className="text-center font-manrope-bold text-white">
                  Подтвердить
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}; 