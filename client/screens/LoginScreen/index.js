import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Spacing from '../../constants/Spacing'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'
import { TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const LoginScreen = ({ navigation: { navigate } }) => {
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
                            marginVertical: Spacing * 3,
                        }}
                    >
                        Login Here
                    </Text>
                    <Text

                        style={{
                            fontFamily: Font['poppins-semiBold'],
                            fontSize: FontSize.large,
                            maxWidth: "60%",
                            textAlign: "center",

                        }}
                    >Welcome back you've been missed!</Text>
                </View>
                <View
                    style={{
                        marginVertical: Spacing * 3
                    }}
                >
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor={Colors.darkText}
                        style={{
                            fontFamily: Font['poppins-regular'],
                            fontSize: FontSize.small,
                            backgroundColor: Colors.lightPrimary,
                            color: 'white',
                            padding: Spacing * 2,
                            borderRadius: Spacing,
                            marginVertical: Spacing
                        }}

                    />
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor={Colors.darkText}
                        secureTextEntry
                        style={{
                            fontFamily: Font['poppins-regular'],
                            fontSize: FontSize.small,
                            backgroundColor: Colors.lightPrimary,
                            color: 'white',
                            padding: Spacing * 2,
                            borderRadius: Spacing,
                            marginVertical: Spacing
                        }}

                    />
                </View>
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
                <TouchableOpacity
                    style={{
                        padding: Spacing * 2,
                        backgroundColor: Colors.primary,
                        marginVertical: Spacing * 3,
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
                            textAlign: 'center',
                            fontSize: FontSize.large
                        }}
                    >
                        Sign in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigate("Register")}
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
                       Create new account
                    </Text>
                </TouchableOpacity>
                <View
                style={{
                    marginVertical: Spacing * 3,
                }}
                >
                <Text
                        style={{
                            fontFamily: Font['poppins-bold'],
                            color: Colors.primary,
                            textAlign: 'center',
                            fontSize: FontSize.small
                        }}
                    >
                      or Continue with
                    </Text>
                    <View
                     style={{
                        marginTop: Spacing,
                        flexDirection: 'row',
                        justifyContent: 'center'
                     }}
                    >
                        <TouchableOpacity
                        style={{
                            padding: Spacing,
                            backgroundColor: Colors.gray,
                            borderRadius: Spacing / 2,
                            marginHorizontal: Spacing,
                        }}
                        >
                            <Ionicons name='logo-google' color={Colors.text} size={Spacing * 2.2} />
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{
                            padding: Spacing,
                            backgroundColor: Colors.gray,
                            borderRadius: Spacing / 2,
                            marginHorizontal: Spacing,
                        }}
                        >
                            <Ionicons name='logo-apple' color={Colors.text} size={Spacing * 2.2} />
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{
                            padding: Spacing,
                            backgroundColor: Colors.gray,
                            borderRadius: Spacing / 2,
                            marginHorizontal: Spacing,
                        }}
                        >
                            <Ionicons name='logo-facebook' color={Colors.text} size={Spacing * 2.2} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen