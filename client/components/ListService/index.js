import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'


  const renderServiceItem = item => {
    const navigate = useNavigation().navigate
    return (
      <TouchableOpacity key={item.name} style={styles.items} onPress={() => navigate(item.onPress)}>
      <View key={item.name} style={styles.items}>
        <View style={styles.icon}>
            <Image source={item.icon} />
        </View>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
      </TouchableOpacity>
    )
  }

const ListService = ({listService}) => {
  return (
    <View>
        <Text style={styles.title}>Service</Text>
        <View style={styles.list}>{listService?.map(renderServiceItem)}</View>
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