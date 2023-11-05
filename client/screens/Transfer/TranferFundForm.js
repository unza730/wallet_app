import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Spacing from '../../constants/Spacing'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'
import { TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import CustomTextInput from '../../components/CustomTextInput'
import { MaterialIcons } from '@expo/vector-icons';


const TransferFundForm = ({ navigation: { navigate } }) => {
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
                        Transfer Funds
                    </Text>
                    <Text

                        style={{
                            fontFamily: Font['poppins-semiBold'],
                            fontSize: FontSize.small,
                            maxWidth: "80%",
                            textAlign: "center",

                        }}
                    >Select Payment Method</Text>
                </View>
                <View
                    style={{
                        marginVertical: Spacing * 3
                    }}
                >
                    <CustomTextInput placeholder="Name"/>
                        <CustomTextInput placeholder="Email"/>
                        <CustomTextInput placeholder="Select Bank"/>

                    <CustomTextInput placeholder="IBAN number"/>
                   
                    <CustomTextInput placeholder="Amount"/>
                    <TouchableOpacity
                 onPress={() => navigate("Home")}
                    style={{
                        // padding: 12,
                        padding: Spacing,
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
                        Transfer
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default TransferFundForm