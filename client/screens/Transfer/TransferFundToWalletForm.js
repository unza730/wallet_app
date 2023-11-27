import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Spacing from '../../constants/Spacing'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'
import { TextInput } from 'react-native'
import { customStyles } from '../../styles/style'


const TransferFundToWalletForm = ({ navigation: { navigate } }) => {
    const [val, setVal] = React.useState({
        account_number: '',
        amount: '',
        description: '',
    })

    const handleChange = (name, text) => {
        setVal({ ...val, [name]: text })
    }

    const handleWalletTransfer = () => {
        console.log(val);
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
                    <Text
                        style={{
                            fontSize: FontSize.xLarge,
                            color: Colors.primary,
                            fontFamily: Font['poppins-bold'],
                            marginTop: Spacing * 4,
                        }}
                    >
                        Transfer funds to Bank
                    </Text>
                    <Text

                        style={{
                            fontFamily: Font['poppins-semiBold'],
                            fontSize: FontSize.xsmall,
                            maxWidth: "80%",
                            textAlign: "center",

                        }}
                    > Transfer your fund to any bank account with ease. </Text>
                </View>
                <View
                    style={{
                        marginVertical: Spacing * 3
                    }}
                >
                    <TextInput
                        style={customStyles.textField}
                        placeholder="PayPocket wallet ID"
                        value={val.account_number}
                        onChangeText={handleChange}
                    />
                    <TextInput
                        style={customStyles.textField}
                        placeholder="Amount"
                        value={val.amount}
                        onChangeText={handleChange}
                    />
                    <TextInput
                        style={customStyles.textField}
                        placeholder="Description"
                        value={val.description}
                        onChangeText={handleChange}
                    />
                    <TouchableOpacity
                        onPress={handleWalletTransfer}
                        style={customStyles.btnContainer}
                    >
                        <Text style={customStyles.btnText}>
                            Transfer
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default TransferFundToWalletForm