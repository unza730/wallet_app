import React, { useEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Card from '../components/Card'
import ListService from '../components/ListService'
import RecentTransaction from '../components/RecentTransaction'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen = () => {
  const authState = useSelector((state) => state.auth);
// console.log("authState_;;;; ",authState, authState.name);
console.log("User Name:", authState?.user?.name); // Output: User Name: Hina
console.log("User Email:", authState?.user?.email_address); // Output: User Email: hina123@gmail.com
// ... and so on for other user properties
useEffect(() => {
  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      console.log('token:-->>> ', token);
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
  };

  getToken();
}, []);
  // Check if the 'auth' state is available
  if (!authState) {
    // Handle the case where 'auth' state is not available (Redux setup issue)
    console.error("Redux 'auth' state is not available. Check your Redux setup.");
    return null; // or render an error component
  }

  return (
   <SafeAreaView style={{flex: 1}}>
    
    <ScrollView style={styles.container}>
      <View style={styles.header}> 
        <View>
          <Text>Hello</Text>
          <Text style={styles.userName}>{authState?.user?.name}</Text>
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