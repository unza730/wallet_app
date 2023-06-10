

import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ImageBackground, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
const SplashScreen = () => {
    const insets = useSafeAreaInsets()
    const [layouts, setLayouts] = useState(null)
const navigation = useNavigation()
    return (
        <ImageBackground
            source={require("../../assets/images/bg_welcome.png")}
            //    style={[styles.container, {paddingTop: insets.top}]}
            style={styles.container}
        >
            <View style={styles.wrapper}>

              <View style={styles.logoView}>
                <View onLayout={({ nativeEvent }) => setLayouts(nativeEvent?.layout)}>
                    {layouts && (
                        <Image source={require("../../assets/images/card_welcome_1.png")}
                            // style={styles.cardImg1}
                            style={[styles.cardImg1, { width: layouts.width, height: layouts.height }]}
                            resizeMode='contain'
                        />)}
                    <Image source={require("../../assets/images/card_welcome_2.png")} />
                </View>
            </View>
            <View style={styles.wrapText}>
                <Text style={styles.TextTile}>Payments anywhere and anytime easily</Text>
                <Text style={styles.textDesc}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada diam sit amet tincidunt laoreet. Nullam a purus non dolor laoreet aliquet. Fusce eget sagittis dolor. Morbi ullamcorper tellus eu odio condimentum, ut rutrum erat gravida. Nam vel urna vitae diam commodo auctor. Sed id nisi ut nunc condimentum commodo..`}</Text>
                <View>
                    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
          {/* </View> */}
        </ImageBackground>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center'
    },
    TextTile: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textDesc: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 15,
        marginVertical: 30,
    },
    wrapText: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        paddingBottom: 100,
        marginTop: 40,
        
    },
    wrapper:{
marginTop: 90
    },
    cardImg1: {
        position: 'absolute',
        zIndex: 2,
        bottom: 30,
    },
    logoView: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    button: {
        backgroundColor: '#FFF',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 100,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '700',
    }
})