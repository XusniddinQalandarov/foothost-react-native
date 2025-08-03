import React from 'react';
import { View, TextInput, TouchableOpacity, Modal, KeyboardAvoidingView, Platform } from 'react-native';
import { ModalHeader } from './ModalHeader';
import { Button } from './Button';
import CameraSvg from '../../../assets/images/profile/camera.svg';

interface CreateTeamModalProps {
  visible: boolean;
  teamName: string;
  onTeamNameChange: (name: string) => void;
  onSubmit: () => void;
  onClose: () => void;
}

export const CreateTeamModal: React.FC<CreateTeamModalProps> = ({
  visible,
  teamName,
  onTeamNameChange,
  onSubmit,
  onClose,
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
        
        <View className="bg-white rounded-t-3xl shadow-lg" style={{ height: '70%' }}>
          <ModalHeader
            title="КОМАНДА"
            onBack={onClose}
          />

          <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
          >
            <View className="flex-1 px-4">
              {/* Team Input Field */}
              <View className="bg-gray-100 rounded-lg p-4 mb-6">
                <View className="flex-row items-center">
                  <TouchableOpacity 
                    className="w-16 h-16 bg-gray-300 rounded-full items-center justify-center mr-4"
                    activeOpacity={0.7}
                  >
                    <CameraSvg width={24} height={24} />
                  </TouchableOpacity>
                  
                  <View className="flex-1">
                    <TextInput
                      placeholder="Название команды"
                      placeholderTextColor="#9CA3AF"
                      className="text-base font-manrope-medium text-text-primary"
                      value={teamName}
                      onChangeText={onTeamNameChange}
                      autoFocus={true}
                      returnKeyType="done"
                      onSubmitEditing={onSubmit}
                    />
                  </View>
                </View>
              </View>

              {/* Empty space for visual balance */}
              <View className="flex-1" />

              {/* Create Button */}
              <View className="pb-6">
                <Button
                  title="СОЗДАТЬ"
                  onPress={onSubmit}
                  variant="primary"
                  className="w-full"
                  textClassName="font-manrope-bold text-base"
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </Modal>
  );
}; 