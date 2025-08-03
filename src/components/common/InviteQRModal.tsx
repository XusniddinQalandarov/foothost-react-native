import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';
import { ModalHeader } from './ModalHeader';

interface InviteQRModalProps {
  visible: boolean;
  teamName: string;
  onClose: () => void;
  onCopyLink: () => void;
}

export const InviteQRModal: React.FC<InviteQRModalProps> = ({
  visible,
  teamName,
  onClose,
  onCopyLink,
}) => {
  // Generate team invitation URL
  const generateTeamInviteUrl = () => {
    const baseUrl = 'https://foothost.app/team/invite';
    const teamId = Date.now().toString(); // In real app, this would be the actual team ID
    return `${baseUrl}?team=${teamId}&name=${encodeURIComponent(teamName)}`;
  };

  const inviteUrl = generateTeamInviteUrl();

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
          />

          <View className="flex-1 px-4">
            {/* QR Code Section */}
            <View className="flex-1 justify-center items-center">
              <View className="bg-white rounded-lg p-6 items-center justify-center">
                <View className="w-48 h-48 bg-gray-100 rounded-lg items-center justify-center">
                  {/* Real QR Code */}
                  <QRCode
                    value={inviteUrl}
                    size={220}
                    color="black"
                    backgroundColor="white"
                    logo={require('../../../assets/images/logo.svg')}
                    logoSize={30}
                    logoBackgroundColor="white"
                    logoBorderRadius={30}
                    getRef={(c) => {
                      // QR code reference for potential future use
                    }}
                  />
                </View>
              </View>
            </View>

            {/* Copy Link Button */}
            <View className="pb-6">
              <TouchableOpacity
                className="bg-gray-100 rounded-lg py-4 px-6 flex-row items-center justify-center"
                onPress={onCopyLink}
                activeOpacity={0.7}
              >
                <MaterialCommunityIcons name="link-variant" size={20} color="#666" />
                <Text className="text-base font-manrope-medium text-text-primary ml-2">
                  Скопировать ссылку
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}; 