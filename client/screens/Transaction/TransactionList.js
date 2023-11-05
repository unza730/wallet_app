import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Table from '../../components/Tables/Table'
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-native';

const items = [
  {
    type: 'weWork',
    icon: require('../../assets/images/ic_spotify.png'),
    date: 'Jun 12, 12:30',
    payment: '-12.00',
    mode: 'Card',
    currency: 'EUR'
  },
  {
    type: 'AHMED TRADER',
    icon: require('../../assets/images/ic_paypal.png'),
    date: 'Jun 12, 12:30',
    payment: '-12.00',
    mode: 'Transfer',
    currency: 'EUR'
  },
  {
    type: 'Fly Airways',
    icon: require('../../assets/images/ic_dribble.png'),
    date: 'Jun 12, 12:30',
    payment: '-14.00',
    mode: 'Card',
    currency: 'EUR'
  },
  {
    type: 'Burno Taxi',
    icon: require('../../assets/images/ic_dribble.png'),
    date: 'Jun 12, 12:30',
    payment: '-14.00',
    mode: 'Card',
    currency: 'EUR'
  },
  {
    type: 'Tech Crunch',
    icon: require('../../assets/images/ic_dribble.png'),
    date: 'Jun 12, 12:30',
    payment: '-14.00',
    mode: 'Card',
    currency: 'EUR'
  },
  {
    type: 'Dribble',
    icon: require('../../assets/images/ic_dribble.png'),
    date: 'Jun 12, 12:30',
    payment: '-14.00',
    mode: 'Card',
    currency: 'EUR'
  },
];
const TransactionList = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerTable}>
          <Text style={styles.title}>Transaction History</Text>
          <View style={styles.icon}>
            <AntDesign name="filter" size={24} color="black" />
          </View>
        </View>
        <ScrollView horizontal={true} style={styles.row}>
          <Button style={styles.btn} mode="contained" onPress={() => console.log('Pressed')}>
            All
          </Button>
          <Button style={styles.btn} mode="contained" onPress={() => console.log('Pressed')}>
            Card
          </Button>
          <Button style={styles.btn} mode="contained" onPress={() => console.log('Pressed')}>
            Bank Transfer
          </Button>
          <Button style={styles.btn} mode="contained" onPress={() => console.log('Pressed')}>
            Other Wallet
          </Button>
          <Button style={styles.btn} mode="contained" onPress={() => console.log('Pressed')}>
            All
          </Button>
        </ScrollView>
        <Table
          items={items}
        />
      </View>
    </SafeAreaView>
  )
}

export default TransactionList

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    overflow: 'scroll',
    marginVertical: 10,
  },
  btn: {
    backgroundColor: 'gray',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  headerTable: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  icon: {
    padding: 10,
    backgroundColor: 'white',
    width: 45,
    height: 45,
    shadowColor: '#000',
    shadowOffset: { height: 10, width: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})