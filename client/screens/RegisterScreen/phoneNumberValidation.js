import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import PhoneInput from "react-native-phone-number-input";
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';
import { TouchableOpacity } from 'react-native';
import { customStyles } from '../../styles/style';
import { sendOTP } from '../../axiosApi/apiCall';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PhoneNumberValidation = ({ navigation: { navigate } }) => {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const handleSendOTP = () => {
        console.log(value);
        if (value === "") {
            setShowMessage("Please enter your phone number");
            return;
        }
        sendOTP(value, (res) => {
            console.log(res);
            navigate("Verify-OTP")
            AsyncStorage.setItem('is_verified', res.data.is_verified);
        }, (err) => {
            console.log(err);
        })
        navigate("Verify-OTP")
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
                    <Text
                        style={{
                            fontSize: FontSize.xLarge,
                            color: Colors.primary,
                            fontFamily: Font['poppins-bold'],
                            marginTop: Spacing * 4,
                        }}
                    >
                        Hi Reeba,
                    </Text>
                </View>
                <View
                    style={{
                        marginVertical: Spacing * 3,
                    }}
                >

                    <Text
                        style={{
                            fontFamily: Font['poppins-semiBold'],
                            fontSize: FontSize.small,
                            maxWidth: '80%',
                        }}
                    >
                        What's your Phone number?
                    </Text>
                    <PhoneInput
                        // ref={phoneInput}
                        defaultValue={value}
                        defaultCode="PK"
                        layout="first"
                        onChangeText={(text) => {
                            setValue(text);
                        }}
                        onChangeFormattedText={(text) => {
                            setFormattedValue(text);
                        }}
                        withDarkTheme
                        withShadow
                        autoFocus
                        containerStyle={{
                            width: '100%',
                            marginTop: Spacing * 2,
                        }}
                    />
                <Text style={customStyles.errorText}>{showMessage}</Text>
                </View>
            </View>
            <View style={customStyles.bottomButtonWrapper}>
                <TouchableOpacity
                    onPress={handleSendOTP}
                    style={customStyles.btnContainer}
                >
                    <Text style={customStyles.btnText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default PhoneNumberValidation;

// const styles = StyleSheet.create({})