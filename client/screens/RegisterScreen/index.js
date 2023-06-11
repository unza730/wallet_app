import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Spacing from '../../constants/Spacing'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'
import { TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import CustomTextInput from '../../components/CustomTextInput'

const RegisterScreen = ({ navigation: { navigate } }) => {
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
                            marginBottom: Spacing * 2,
                        }}
                    >
                        Create account
                    </Text>
                    <Text

                        style={{
                            fontFamily: Font['poppins-semiBold'],
                            fontSize: FontSize.small,
                            maxWidth: "80%",
                            textAlign: "center",

                        }}
                    >Create an account to  Unlock wallet features, explore secure financial management world!</Text>
                </View>
                <View
                    style={{
                        marginVertical: Spacing * 3
                    }}
                >
                    {/* <TextInput
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

                    /> */}
                    <CustomTextInput placeholder="Email"/>
                    <CustomTextInput placeholder="Password"/>
                   
                    <CustomTextInput placeholder="Confirm Password"/>
                   
                    {/* <TextInput
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

                    /> */}
                     {/* <TextInput
                        placeholder='Confirm Password'
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

                    /> */}
                </View>
                {/* <View>
                    <Text
                        style={{
                            fontFamily: Font['poppins-semiBold'],
                            fontSize: FontSize.small,
                            color: Colors.primary,
                            alignSelf: 'flex-end'
                        }}
                    >Forgot your password ?</Text>
                </View> */}
                <TouchableOpacity
                 onPress={() => navigate("Home")}
                    style={{
                        // padding: 12,
                        padding: Spacing * 2,
                        backgroundColor: Colors.primary,
                        // marginVertical: Spacing * 2,
                        marginVertical: 7,

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
                onPress={() => navigate("Login")}
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
                     Already have an account
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

export default RegisterScreen