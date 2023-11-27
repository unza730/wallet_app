import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Spacing from '../../constants/Spacing'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'
import { TextInput } from 'react-native'
import { customStyles } from '../../styles/style'
import { resetPassword } from '../../axiosApi/apiCall'

const ResetPassword = ({ navigation: { navigate } }) => {
    const [value, setValue] = React.useState({
        password: '',
        otp: ''
    })
    const [error, setError] = React.useState({
        password: '',
        otp: ''
    })

    const handleChanges = (name, text) => {
        if (name === 'password') {
            if (text === '') {
                setError({ ...error, password: 'Password is required' })
            }
        } else if (name === 'otp') {
            if (text === '') {
                setError({ ...error, otp: 'OTP is required' })
            }
        }
        setValue({ ...value, [name]: text })
    }

    const handleReset = async () => {
        if (value.otp === '' || value.password === '') {
            setError({ ...error, otp: 'OTP is required', password: 'Password is required' })
            return
        } else if (value.password.length < 8) {
            setError({ ...error, password: 'Password must be 8 characters long' })
            return
        }
        resetPassword(value, (response) => {
            navigate('Login')
        }, (error) => {
            console.log(error)
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
                        Reset Password
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
                        placeholder='OTP Code'
                        placeholderTextColor={Colors.darkText}
                        style={customStyles.textField}
                        value={value.otp}
                        onChangeText={(text) => handleChanges('otp', text)}
                    />
                    <Text style={customStyles.errorText}>{error.otp}</Text>
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor={Colors.darkText}
                        secureTextEntry
                        style={customStyles.textField}
                        value={value.password}
                        onChangeText={(text) => handleChanges('password', text)}
                        keyboardType='password'
                    />
                    <Text style={customStyles.errorText}>{error.password}</Text>
                </View>
                <TouchableOpacity
                    onPress={handleReset}
                    style={customStyles.btnContainer}
                >
                    <Text style={customStyles.btnText}>
                        Reset Password
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ResetPassword