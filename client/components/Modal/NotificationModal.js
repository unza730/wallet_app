import React from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet, Dimensions, BackHandler } from 'react-native';
import Spacing from '../../constants/Spacing';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import Font from '../../constants/Font';
import { Entypo } from '@expo/vector-icons';
const windowHeight = Dimensions.get('window').height;

const NotificationModal = ({ visible, message, onClose }) => {
  const handleBackPress = () => {
    return true;
  };

  React.useEffect(() => {
    if (visible) {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    } else {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }

    return () => {
     BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [visible]);
console.log("message: " , message);
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        {/* Custom blur background */}
        <View style={styles.blurBackground} />
        <View style={styles.modalContent}>
        <Entypo name="info-with-circle" size={24} color="black" />

          <Text style={styles.modalMessage}>{message}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurBackground: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    width: '100%',
    height: '100%',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: Spacing,
    padding: Spacing * 2,
    width: '90%',
    height:'50%',
    alignItems: 'center',
    position: 'absolute',
    justifyContent:'center'
   },
  modalMessage: {
    fontFamily: Font['poppins-regular'],
    fontSize: FontSize.large,
    marginBottom: Spacing,
    color: 'black',
    textAlign:'center',
   },
  closeButton: {
    backgroundColor: Colors.primary,
    padding: Spacing,
    borderRadius: Spacing,
    marginTop: 25,
   },
  closeButtonText: {
    fontFamily: Font['poppins-bold'],
    color: Colors.onPrimary,
    textAlign: 'center',
  },
});

export default NotificationModal;
