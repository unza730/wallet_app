import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Spacing from '../../constants/Spacing'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'
import { TextInput } from 'react-native'
import { customStyles } from '../../styles/style'
import axios from 'axios'
import { login } from '../../axiosApi/apiCall'

const LoginScreen = ({ navigation: { navigate } }) => {
    const [value, setValue] = React.useState({
        email: '',
        password: ''
    })
    const [error, setError] = React.useState({
        email: '',
        password: ''
    })

    const handleChanges = (name, text) => {
        if (name === 'email') {
            if (text === '') {
                setError({ ...error, email: 'Email is required' })
            } else {
                setError({ ...error, email: '' })
            }
        } else if (name === 'password') {
            if (text === '') {
                setError({ ...error, password: 'Password is required' })
            } else if (text.length < 8) {
                setError({ ...error, password: 'Password must be 8 characters long' })
            } else {
                setError({ ...error, password: '' })
            }
        }
        setValue({ ...value, [name]: text })
    }

    const handleLogin = async () => {
        if (value.email === '' || value.password === '') {
            setError({ ...error, email: 'Email is required', password: 'Password is required' })
            return
        } else if (value.password.length < 8) {
            setError({ ...error, password: 'Password must be 8 characters long' })
            return
        }
        login(value, (response) => {
            console.log(response)
            navigate("Home")
        }, (error) => {
            console.log(error)
        })
        // navigate("Home")
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
                        Login
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
                        value={value.email}
                        keyboardType='email-address'
                        onChangeText={(text) => handleChanges('email', text)}
                    />
                    <Text style={customStyles.errorText}>{error.email}</Text>
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
                    <View>
                        <Text
                            style={{
                                fontFamily: Font['poppins-semiBold'],
                                fontSize: FontSize.small,
                                color: Colors.primary,
                                alignSelf: 'flex-end'
                            }}
                        >Forgot your password ?</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={customStyles.btnContainer}
                >
                    <Text
                        style={customStyles.btnText}
                    >
                        Sign in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        padding: Spacing,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: Font['poppins-bold'],
                            color: Colors.text,
                            textAlign: 'center',
                            fontSize: FontSize.small
                        }}
                    >
                        Create new account <Text style={{ color: "gray" }} onPress={() => navigate("Register")}>Sign up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen