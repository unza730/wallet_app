import { ScrollView, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Table = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {props.items.map(item => (
          <View key={item.type} style={styles.items}>
            <View style={styles.icon}>
              <Image source={item.icon} />
            </View>
            <View style={styles.itemBody}>
              <Text style={styles.type}>{item.type}</Text>
              <Text style={styles.date}>{item.mode}</Text>
            </View>
            <View>
              <Text style={styles.payment}>{item.payment} {item.currency}</Text>
              <Text >{item.date}</Text>
            </View>
          </View>))}
      </View>
    </ScrollView>
  )
}

export default Table

const styles = StyleSheet.create({
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
  container: {
    width: 350,
    // height: 300,
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
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
  itemBody: {
    flex: 1,
    paddingLeft: 14,
  },
  type: {
    fontWeight: '500',
    fontSize: 16,
  },
  date: {
    marginTop: 5,
  },
  payment: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'right',
  }
})