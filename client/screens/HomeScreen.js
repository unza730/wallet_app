import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Card from '../components/Card'
import ListService from '../components/ListService'
import RecentTransaction from '../components/RecentTransaction'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { businessWalletListService, personalWalletListService } from '../constants/constants'

const HomeScreen = () => {
  const walletType = AsyncStorage.getItem('walletType')
  const user = AsyncStorage.getItem('user')
  console.log(user,"<--")
  return (
   <SafeAreaView style={{flex: 1}}>
    
    <ScrollView style={styles.container}>
      <View style={styles.header}> 
        <View>
          <Text>Hello</Text>
          <Text style={styles.userName}>My Name</Text>
        </View>
        <Image  source={require('../assets/images/ic_notif.png')} />
      </View>
      <View style={styles.card}>
        <Card />
      </View>
      {/* {walletType === 'personal' ?  */}
      <View style={styles.card}>
      <ListService listService={personalWalletListService}/>
      <RecentTransaction />
      </View>
       {/* :
       <View style={styles.card}>
        <ListService listService={businessWalletListService}/>
         <RecentTransaction /> 
      </View>
    }  */}
    </ScrollView>
   </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#E5E4E2',
    // backgroundColor: 'white',
    padding: 24,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card:{
    paddingVertical: 14
  }
})