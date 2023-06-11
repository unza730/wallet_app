import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const listHistory = [
    {
      type: 'Netflix',
      icon: <MaterialCommunityIcons name="netflix" size={24} color="black" />,
      date: 'Jun 12, 12:30',
      payment: '+ $12',
    },
    {
      type: 'Apple Store',
      icon: <AntDesign name="apple1" size={24} color="black" />,
      date: 'Jun 12, 12:30',
      payment: '+ $12',
    },
    {
      type: 'Utility Bill',
      icon: <Ionicons name="receipt" size={24} color="black" />,
      date: 'Jun 12, 12:30',
      payment: '+ $14',
    },
  ];

const renderHistoryItem = item => (
    <View key={item.type} style={styles.items}>
        <View style={styles.icon}>
            {item.icon}
            {/* <Image source={item.icon} /> */}
        </View>
        <View style={styles.itemBody}>
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.date}>{item.date}</Text>

        </View>
        <View>
        <Text style={styles.payment}>{item.payment}</Text>

        </View>
    </View>
)

const RecentHistory = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>History</Text>
    <View style={styles.list}>{listHistory.map(renderHistoryItem)}</View>
</View>
  )
}

export default RecentHistory

const styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    container:{
        marginTop: 12,
    },
    items:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 22,
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
    itemBody:{
        flex: 1,
        paddingLeft: 14,
    },
    type:{
        fontWeight: '500',
        fontSize: 16,
    },
    date:{
        marginTop: 5,
    },
    payment: {
        fontWeight: 'bold',
        fontSize: 14,
    }
})