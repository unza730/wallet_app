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
import { useNavigation } from '@react-navigation/native'

const PayMethodList = [ 
    {
        name: 'Bank Account',
    },
    {
        name: 'PayPocket Wallet',
    },
]
const TransferSelect = ({navigation: {navigate}}) => {
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
                    {PayMethodList.map((item, index) => (

                        <TouchableOpacity
                        style={{
                            borderRadius: 2,
                            backgroundColor: Colors.lightPrimary,
                            color: 'white',
                            padding: Spacing * 1.5,
                            borderRadius: Spacing,
                            marginVertical: Spacing,
                            fontFamily: Font['poppins-regular'],
                            fontSize: FontSize.small,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                        onPress={() => {
                            if(item.name === 'Bank Account'){
                                navigate('transfer-bank')
                            }else{ 
                                navigate('transfer-ewallet')
                            }
                        }}
                        >
                        <Text>{item.name}</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                    </TouchableOpacity>
                ))}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default TransferSelect