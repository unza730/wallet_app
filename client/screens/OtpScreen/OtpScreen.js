import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native'
import Spacing from '../../constants/Spacing'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'
import axios from 'axios'
import { customStyles } from '../../styles/style'

const OtpScreen = ({ navigation: { navigate } }) => {
    const boxArray = new Array(4).fill(0);
    const [code, setCode] = React.useState(Array(4).fill(''));
    const textInputsRefs = boxArray.map(() => React.createRef());

    const focusNextInput = (index) => {
        if (index < boxArray.length - 1) {
            textInputsRefs[index + 1].current.focus();
        } else {
            // Last input field reached
            // You can trigger the verification here or perform any other action
        }
    };

    const handleVerifyOTP = async () => {
        const otpCode = code.join("")
        console.log(otpCode);
        // await axios.post('http://localhost:3005/api/auth/verify-otp', {
        //     "phone_number": "1234567890",
        //     "otp": "1234"
        // }).then((response) => {
        //     console.log(response);
        // }).catch((error) => {
        //     console.log(error);
        // })
        // await AsyncStorage.setItem('is_verified', 'true')
        navigate("Home")
    }
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
                        marginTop: Spacing * 3,
                        marginBottom: Spacing,
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}
                >
                    {boxArray.map((data, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    marginHorizontal: Spacing / 2,
                                    height: 50,
                                    width: 50,
                                    borderRadius: 75,
                                    borderWidth: 1,
                                    borderColor: 'black',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <TextInput
                                    ref={textInputsRefs[index]}
                                    style={{
                                        textAlign: 'center',
                                        fontSize: 16
                                    }}
                                    keyboardType='numeric'
                                    maxLength={1}
                                    onChangeText={(text) => {
                                        let tempCode = [...code];
                                        tempCode[index] = text;
                                        setCode(tempCode);
                                        if (text !== '') {
                                            focusNextInput(index);
                                        }
                                    }}
                                    value={code[index]}
                                />
                            </View>
                        )
                    })}
                </View>
                <Text style={customStyles.smallText}>Please request a new OTP if you don't receive it in <Text style={{ color: '#6699CC' }}>00:05</Text></Text>
                <TouchableOpacity
                    onPress={() => navigate("Login")}
                >
                    <Text
                        style={styles.footerText}
                    >
                        RESEND OTP
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={customStyles.bottomButtonWrapper}>
                <TouchableOpacity
                    onPress={handleVerifyOTP}
                    style={customStyles.btnContainer}
                >
                    <Text style={customStyles.btnText}>
                        Verify
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