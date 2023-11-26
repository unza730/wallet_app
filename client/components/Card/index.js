import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

const width_screen = Dimensions.get('window').width;

const card_item = width_screen - 24 * 2;

const card_size = {
    width: 325,
    height: 150
}

const Card = () => {
    return (
        <ImageBackground
            source={require('../../assets/images/card_visa_bg.png')}
            style={styles.card}
        >
            <View style={styles.cardFooter}>
                <View>
                    <Text style={styles.cardHolderName}>Total Balance</Text>
                    <Text style={styles.cardName}>$500000</Text>

                </View>
                {/* <Image source={require('../../assets/images/visa_text.png')} /> */}
            </View>
            <View style={styles.cardNumber} >
                <Text style={styles.cardHolderName}>PayPocket ID</Text>
                <Text style={styles.cardNumberText}>{`1234 5678 1234 5678`}</Text>
            </View>
        </ImageBackground>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        width: card_item,
        height: (card_item * card_size.height) / card_size.width,
        padding: 24,
    },
    cardNumber: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 24,
    },
    cardNumberText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 600,
    },
    cardIcon: {

    },
    cardHolderName: { color: 'rgba(255,255,255, 0.4)', fontSize: 15 },
    cardName: { color: 'white', fontSize: 24, fontWeight: 600 },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})