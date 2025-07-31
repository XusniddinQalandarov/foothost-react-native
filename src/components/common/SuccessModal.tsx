import React from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import SuccessSvg from '../../../assets/images/success.svg';

interface SuccessModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  visible,
  onClose,
  title = 'ЗАЯВКА ОТПРАВЛЕНА',
  message
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 bg-black bg-opacity-50 justify-center items-center px-6">
          <TouchableWithoutFeedback>
            <View className="bg-white rounded-xl p-8 items-center shadow-lg" style={{ elevation: 8 }}>
              {/* Success Icon */}
              <View className="mb-6">
                <SuccessSvg width={80} height={80} />
              </View>
              
              {/* Title */}
              <Text className="text-lg font-bold text-text-primary text-center mb-2">
                {title}
              </Text>
              
              {/* Optional Message */}
              {message && (
                <Text className="text-sm text-text-secondary text-center">
                  {message}
                </Text>
              )}
              
              {/* Close Button */}
              <TouchableOpacity 
                className="mt-6 bg-primary rounded-lg py-3 px-8"
                onPress={onClose}
              >
                <Text className="text-white font-bold text-base">OK</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}; 