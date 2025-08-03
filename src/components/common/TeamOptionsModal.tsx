import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { ModalHeader } from './ModalHeader';

interface TeamOptionsModalProps {
  visible: boolean;
  teamName: string;
  onClose: () => void;
  onChangeAvatar: () => void;
  onDeleteTeam: () => void;
  onLeave: () => void;
  onCancel: () => void;
}

export const TeamOptionsModal: React.FC<TeamOptionsModalProps> = ({
  visible,
  teamName,
  onClose,
  onChangeAvatar,
  onDeleteTeam,
  onLeave,
  onCancel,
}) => {
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
        
        <View className="bg-white rounded-t-3xl shadow-lg mx-4 mb-8">
          <ModalHeader
            title={teamName}
            onBack={onClose}
          />

          {/* Modal Content - Only Buttons */}
          <View className="px-4 pb-6">
            <TouchableOpacity 
              className="py-4 border-b border-gray-100"
              onPress={onChangeAvatar}
              activeOpacity={0.7}
            >
              <Text className="text-base font-manrope-medium text-text-primary text-center">
                Изменить аватарку
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              className="py-4 border-b border-gray-100"
              onPress={onDeleteTeam}
              activeOpacity={0.7}
            >
              <Text className="text-base font-manrope-medium text-red-500 text-center">
                Удалить команду
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              className="py-4 border-b border-gray-100"
              onPress={onLeave}
              activeOpacity={0.7}
            >
              <Text className="text-base font-manrope-medium text-red-500 text-center">
                Покинуть
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              className="py-4"
              onPress={onCancel}
              activeOpacity={0.7}
            >
              <Text className="text-base font-manrope-medium text-blue-500 text-center">
                Отмена
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}; 