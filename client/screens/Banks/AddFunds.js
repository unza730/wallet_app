import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { customStyles } from '../../styles/style'
import { transferFund } from '../../axiosApi/apiCall'
import { useNavigation } from '@react-navigation/native'

const AddFunds = ({ route }) => {
    const { selectedBank } = route.params;
    const navigate = useNavigation();
    const [errMsg, setErrMsg] = React.useState({
        account_number: '',
        account_title: '',
        amount: '',
    });
    const [val, setVal] = React.useState({
        bank: selectedBank,
        account_number: '',
        account_title: '',
        amount: '',
    })

    const handleChange = (name, text) => {
        if (text !== '') {
            setErrMsg({
                ...errMsg,
                [name]: ''
            })
        }
        setVal({ ...val, [name]: text })
    }

    const hnadleTransferFunds = () => {
        console.log(val);
        if (val.account_number === '') {
            setErrMsg({
                ...errMsg,
                account_number: 'Account Number is required'
            })
            return
        } else if (val.account_title === '') {
            setErrMsg({
                ...errMsg,
                account_title: 'Account Title is required'
            })
            return
        } else if (val.amount === '') {
            setErrMsg({
                ...errMsg,
                amount: 'Amount is required'
            })
            return
        }
        transferFund(val, (res) => {
            console.log(res, "res");
            alert('Funds added successfully')
            navigate("Home")
        }, (err) => {
            console.log(err, "err");
        })
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
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
                            Add Acounts details.
                        </Text>
                    </View>
                    <View
                        style={{
                            marginVertical: Spacing * 4,
                        }}>
                        <TextInput
                            style={customStyles.textField}
                            placeholder="Account Number..."
                            value={val.account_number}
                            onChangeText={handleChange}
                        />
                        <Text style={customStyles.errorText}>{errMsg.account_number}</Text>
                        <TextInput
                            style={customStyles.textField}
                            placeholder="Account Title..."
                            value={val.account_title}
                            onChangeText={handleChange}
                        />
                        <Text style={customStyles.errorText}>{errMsg.account_title}</Text>
                        <TextInput
                            style={customStyles.textField}
                            placeholder="Amount..."
                            value={val.amount}
                            onChangeText={handleChange}
                        />
                        <Text style={customStyles.errorText}>{errMsg.amount}</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={customStyles.bottomButtonWrapper}>
                <TouchableOpacity
                    style={customStyles.bottomButton}
                    onPress={hnadleTransferFunds}
                >
                    <Text style={customStyles.bottomButtonText}>Add Funds</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default AddFunds

const styles = StyleSheet.create({})