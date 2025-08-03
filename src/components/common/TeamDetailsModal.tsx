import React from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ModalHeader } from './ModalHeader';
import { Button } from './Button';

interface TeamMember {
  id: string;
  name: string;
  avatar?: string;
}

interface TeamDetailsModalProps {
  visible: boolean;
  teamName: string;
  members: TeamMember[];
  isUserOwner: boolean;
  onClose: () => void;
  onOptions: () => void;
  onInvite: () => void;
  onRemoveMember: (memberId: string, memberName: string) => void;
  onLeave: () => void;
}

export const TeamDetailsModal: React.FC<TeamDetailsModalProps> = ({
  visible,
  teamName,
  members,
  isUserOwner,
  onClose,
  onOptions,
  onInvite,
  onRemoveMember,
  onLeave,
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
            title={teamName}
            onBack={onClose}
            onOptions={isUserOwner ? onOptions : onLeave}
            showOptions={true}
            optionsIcon={isUserOwner ? 'dots-vertical' : 'logout'}
          />

          <View className="flex-1 px-4">
            {/* Team Members List */}
            <ScrollView className="flex-1">
              <View className="py-4">
                {members.map((member) => (
                  <TouchableOpacity
                    key={member.id}
                    className="flex-row items-center py-3 border-b border-gray-100"
                    onPress={isUserOwner ? () => onRemoveMember(member.id, member.name) : undefined}
                    activeOpacity={isUserOwner ? 0.7 : 1}
                  >
                    <View className="w-12 h-12 bg-gray-200 rounded-full items-center justify-center mr-4">
                      <MaterialCommunityIcons name="account" size={24} color="#666" />
                    </View>
                    <Text className="text-base font-manrope-medium text-text-primary flex-1">
                      {member.name}
                    </Text>
                    {isUserOwner && (
                      <TouchableOpacity
                        onPress={() => onRemoveMember(member.id, member.name)}
                        activeOpacity={0.7}
                        className="p-2"
                      >
                        <MaterialCommunityIcons name="close-circle" size={20} color="#ef4444" />
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            {/* Invite Button - Same for both owners and members */}
            <View className="pb-6">
              <Button
                title="Пригласить"
                onPress={onInvite}
                variant="secondary"
                className="w-full"
                textClassName="font-manrope-bold text-base text-text-primary text-center"
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}; 