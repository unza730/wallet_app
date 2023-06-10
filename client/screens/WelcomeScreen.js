import React from 'react'
import { Dimensions, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
const {height} = Dimensions.get('window')
import Spacing from '../constants/Spacing'
import FontSize from '../constants/FontSize'
import Colors from '../constants/Colors'
import Font from '../constants/Font'
// import { useNavigation } from '@react-navigation/native';
const WelcomeScreen = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
        <View>
            <ImageBackground 
            style={{
                height:  height / 2.5,
            }}
            resizeMode='contain'
            source={require('../assets/images/welcome-img.png') } />
            <View style={{
                paddingHorizontal: Spacing * 4,
                paddingHorizontal: Spacing * 4,
            }}> 
                <Text
                style={{
                    fontSize: FontSize.xLarge,
                     color: Colors.primary,
                     fontFamily: Font['poppins-bold'],
                     textAlign: 'center'
                }}
                >
                    Secure. Convenient. Effortless money management.
                      </Text>
           <Text
                style={{
                    marginTop: Spacing * 2,
                    fontSize: FontSize.medium,
                     color: Colors.text,
                     fontFamily: Font['poppins-regular'],
                     textAlign: 'center'
                }}
                > Simplify your life with seamless transactions and effortless control over your money.
                </Text> 
            </View>
            <View
            style={{
                paddingHorizontal: Spacing * 2,
                paddingTop: Spacing * 5,
                flexDirection:'row'
            }}
            >
                <TouchableOpacity
                onPress={() => navigate("Login")}
                style={{
                    backgroundColor: Colors.primary,
                    paddingVertical: Spacing * 1.5,
                    paddingHorizontal: Spacing * 2,
                    width: '48%',
                    borderRadius: Spacing,
                    shadowColor: Colors.primary,
                    shadowOffset: {
                        width: 0,
                        height: Spacing
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: Spacing
                }}
                >
                    <Text
                    style={{
                        fontFamily: Font['poppins-bold'],
                        color: Colors.onPrimary,
                        fontSize: FontSize.large,
                        textAlign: 'center'
                    }}

                    >
                        Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigate("Register")}

                style={{
                    // backgroundColor: Colors.primary,
                    paddingVertical: Spacing * 1.5,
                    paddingHorizontal: Spacing * 2,
                    width: '48%',
                    borderRadius: Spacing
                }}
                >
                    <Text
                    style={{
                        fontFamily: Font['poppins-bold'],
                        color: Colors.text,
                        fontSize: FontSize.large,
                        textAlign: 'center'
                    }}>
                        Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen