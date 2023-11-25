import React, { useState } from 'react'
import { Dimensions, Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import CreateWalletModal from '../WalletModal/CreateWalletModal';
import { useNavigation } from '@react-navigation/native';
const listService = [
    {
      name: 'Wallet',
      icon: require('../../assets/images/ic_wallet.png'),
      path: 'Wallet',
    },
    {
      name: 'Transaction',
      icon: require('../../assets/images/ic_history.png'),
      path: 'transaction',
    },
    {
      name: 'Transfer',
      icon: require('../../assets/images/ic_transfer.png'),
      path: 'transfer',
    },
    {
      name: 'Top Up',
      icon: require('../../assets/images/ic_topup.png'),
    },
  ];

  const renderServiceItem = item => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigate = useNavigation(); 
    return (
      <>
      <View>
      <Pressable onPress={() => {
        console.log(item.name)
        if(item.name === 'Wallet'){
          setModalVisible(true)
        } else if(item.name === 'Transfer'){
          console.log('transfer')
          navigate.navigate('transfer')
        } else if(item.name === 'Transaction'){
          console.log('transaction')
          navigate.navigate('transaction')
        }
        }}>
      <View key={item.name} style={styles.items}>
        <View style={styles.icon}>
            <Image source={item.icon} />
        </View>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
      </Pressable>
      </View>
      <CreateWalletModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      </>
    )
  }
  
  const ListService = () => {
  return (
    <View>
        <Text style={styles.title}>Service</Text>
        <View style={styles.list}>{listService.map(renderServiceItem)}</View>
    </View>
  )
}

export default ListService

const styles = StyleSheet.create({
title:{
    fontWeight: 'bold',
    fontSize: 18,
},
list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
},
icon:{
    padding: 10,
    backgroundColor:'white',
    width: 60,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {height: 10, width:2},
    shadowOpacity: 0.7,
    shadowRadius: 80,
    borderRadius: 10,
    justifyContent:'center',
    alignItems: 'center',
},
items:{
    justifyContent:'center',
    alignItems: 'center',
},
itemText:{
    marginTop: 10,
}
})