import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Spacing from '../../constants/Spacing'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'
import { TextInput } from 'react-native'
import { customStyles } from '../../styles/style'
import axios from 'axios'
import { forgotPassword, login } from '../../axiosApi/apiCall'

const ForgotPassword = ({ navigation: { navigate } }) => {
    const [email_address, setEmail_address] = React.useState('')
    const [error, setError] = React.useState('')

    const handleChanges = (name, text) => {
        if (name === 'email') {
            if (text === '') {
                setError('Email is required')
            }
        }
        setEmail_address(text)
    }

    const handleForgot = async () => {
        if(email_address === ''){
            setError('Email is required')
            return
        }
        forgotPassword(email_address, (res) => {
            navigate('ResetPassword', {email: email_address})
        }, (err) => {
            alert(err)
        })
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View
                style={{
                    padding: Spacing * 2,
                    flex: 1,
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
                        Forgot Password
                    </Text>
                    <Text style={{
                        fontFamily: Font['poppins-semiBold'],
                        fontSize: FontSize.small,
                        maxWidth: "80%",
                        textAlign: "center",

                    }}
                    >Welcome back you've been missed!</Text>
                </View>
                <View
                    style={{
                        marginVertical: Spacing * 4,

                    }}>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor={Colors.darkText}
                        style={customStyles.textField}
                        value={email_address}
                        keyboardType='email-address'
                        onChangeText={(text) => handleChanges('email', text)}
                    />
                    <Text style={customStyles.errorText}>{error.email}</Text>
                </View>
                <TouchableOpacity
                    onPress={handleForgot}
                    style={customStyles.btnContainer}
                >
                    <Text
                        style={customStyles.btnText}
                    >
                       Send Link
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ForgotPassword