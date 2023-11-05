import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native'
import Spacing from '../../constants/Spacing'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'

const OtpScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View
                style={{
                    padding: Spacing * 2,
                }}
            >
                <View
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <Text style={styles.heading}>
                        Verify Your Phone Number
                    </Text>
                    <Text style={styles.headerText}>Enter your OTP code here</Text>
                </View>
                <View
                    style={{
                        marginVertical: Spacing * 3,
                        flexDirection: 'row',
                    }}
                >
                
                    <TextInput 
                    keyboardType='numeric'
                    maxLength={1}
                    style={styles.circleInput}/>
                    <TextInput 
                    keyboardType='numeric'
                    maxLength={1}
                    style={styles.circleInput}/>
                    <TextInput 
                    keyboardType='numeric'
                    maxLength={1}
                    style={styles.circleInput}/>
                    <TextInput 
                    keyboardType='numeric'
                    maxLength={1}
                    style={styles.circleInput}/>
                    <TextInput 
                    keyboardType='numeric'
                    maxLength={1}
                    style={styles.circleInput}/>
                    <TextInput 
                    keyboardType='numeric'
                    maxLength={1}
                    style={styles.circleInput}/>
                 
                </View>
                <TouchableOpacity
                 onPress={() => navigate("Home")}
                    style={styles.button}
                >
                    <Text
                        style={{
                            fontFamily: Font['poppins-bold'],
                            color: Colors.onPrimary,
                            textAlign: 'center',
                            fontSize: FontSize.large
                        }}
                    >
                        Verify
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigate("Login")}
                    style={{
                        padding: Spacing,
                      }}
                >
                    <Text
                        style={styles.footerText}
                    >
                    RESEND OTP
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
  )
}

export default OtpScreen

const styles = StyleSheet.create({
    heading: {
        fontSize: FontSize.xLarge,
        color: Colors.primary,
        fontFamily: Font['poppins-bold'],
        marginTop: Spacing * 4,
        marginBottom: Spacing * 2,
        textAlign: "center"
    },
    headerText: {
        fontFamily: Font['poppins-semiBold'],
        fontSize: FontSize.small,
        maxWidth: "80%",
        textAlign: "center",

    },
    button: {
        padding: Spacing * 2,
        backgroundColor: Colors.primary,
        marginVertical: 7,
        borderRadius: Spacing,
        shadowColor: Colors.primary,
        shadowOffset: {
            width: 0,
            height: Spacing
        },
        shadowOpacity: 0.3,
        shadowRadius: Spacing
    },
    footerText: {
        fontFamily: Font['poppins-bold'],
        color: Colors.text,
        textAlign: 'center',
        fontSize: FontSize.small
    },
    footerTextSmall: {
        fontFamily: Font['poppins-bold'],
        color: Colors.text,
        textAlign: 'center',
        fontSize: FontSize.small
    },
    circleInput: {
        width: 50,
        height: 50,
        borderRadius: 75, // half of the width and height to create a perfect circle
        borderWidth: 1,
        borderColor: 'black',
        textAlign: 'center',
        fontSize: 16,
        marginHorizontal: 5
      },
});