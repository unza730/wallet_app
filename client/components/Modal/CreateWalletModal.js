import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import Spacing from '../../constants/Spacing'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CreateWalletModal = ({ modalVisible, setModalVisible }) => {

const navigate = useNavigation()
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text onPress={() => setModalVisible(false)}>x</Text>
            <Text style={styles.modalHead}>Create Wallet</Text>
            <Text style={styles.modalText}>Select Wallet Type </Text>
            <Pressable
              style={[styles.button ]}
              onPress={() => {
                navigate.navigate("personal-wallet")
                setModalVisible(!modalVisible)
                }}>
              <Text style={styles.textStyle}>Personal Wallet</Text>
            </Pressable>
            <Pressable
              style={[styles.button]}
              onPress={() => {
                navigate.navigate("business-wallet")
                setModalVisible(!modalVisible)
                }}>
              <Text style={styles.textStyle}>Business Wallet</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default CreateWalletModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        borderWidth: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalView: {
        // margin: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        fontSize: 30,
        padding: 35,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
          width: 10,
          height: 5,
        },
        shadowOpacity: 0.25,
        elevation: 5,
      },
      button: {
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 50,
        paddingVertical: 10,
        width: 250,
        marginVertical: 10,
      },
      // buttonOpen: {
      //   backgroundColor: '#F194FF',
      // },
      // buttonClose: {
      //   backgroundColor: '#2196F3',
      // },
      textStyle: {
        color: Colors.text,
        textAlign: 'center',
        fontWeight: 'bold',
      },
      modalHead: {
          fontSize: FontSize.large,
          color: Colors.primary,
          fontFamily: Font['poppins-bold'],
          textAlign: "center"
      },
      modalText: {
          fontFamily: Font['poppins-semiBold'],
          color: Colors.text,
          marginBottom: Spacing * 2,
      }
})