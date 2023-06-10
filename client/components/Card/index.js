import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

const width_screen = Dimensions.get('window').width;

const card_item = width_screen - 24 * 2 ;

const card_size = {
    width: 325,
    height: 196
}

const Card = () => {
  return (
    <ImageBackground
    source={require('../../assets/images/card_visa_bg.png')}
    style={styles.card}
    >
     <View style={styles.cardIcon}>
        <Image source={require('../../assets/images/card_icon.png')} />
     </View>
     <View style={styles.cardNumber} >
        <Text style={styles.cardNumberText}>{`1234 5678 1234 5678`}</Text>
     </View>
     <View style={styles.cardFooter}>
        <View>
            <Text style={styles.cardHolderName}>Card holder</Text>
            <Text style={styles.cardName}>Nguyen Van A</Text>

        </View>
        <Image source={require('../../assets/images/visa_text.png')} />
     </View>
    </ImageBackground>
  )
}

export default Card

const styles = StyleSheet.create({
card:{
    width: card_item,
    height: (card_item * card_size.height) / card_size.width,
    padding: 24,
},
cardNumber: {
    flex: 1,
justifyContent: 'center',
},
cardNumberText: {
    color:'white',
    fontSize: 24,
    fontWeight: 600,
},
cardIcon: {

},
cardHolderName: {color: 'rgba(255,255,255, 0.4)', fontSize: 17},
cardName: {color: 'white', fontSize: 17},
cardFooter: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
}
})