import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Spacing from '../../constants/Spacing'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'
import React, { useState, useEffect } from 'react'
import { TextInput, Image } from 'react-native'
import { customStyles } from '../../styles/style'
import DropDownPicker from 'react-native-dropdown-picker'
import { createWallet } from '../../axiosApi/apiCall'


const CreateWallet = ({ navigation: { navigate } }) => {
    const [open, setOpen] = useState(false);
    const [wallet, setWallet] = useState({
        address: "",
        country: "",
        province: "",
        city: "",
        walletType: "",
    });
    const [errMsg, setErrMsg] = useState({
        address: "",
        country: "",
        province: "",
        city: "",
        walletType: "",
    });

    const handleChange = (name, value) => {
        if (value !== "") {
            setErrMsg({
                ...errMsg,
                [name]: "",
            });
        }
        setWallet({
            ...wallet,
            [name]: value,
        });
    }

    const handleCreateWallet = () => {
        console.log(wallet);
        navigate("upload-image")
        // if (wallet.address === "") {
        //     setErrMsg({
        //         ...errMsg,
        //         address: "Address is required",
        //     });
        //     return;
        // }
        // if (wallet.country === "") {
        //     setErrMsg({
        //         ...errMsg,
        //         country: "Country is required",
        //     });
        //     return;
        // }
        // if (wallet.province === "") {
        //     setErrMsg({
        //         ...errMsg,
        //         province: "Province is required",
        //     });
        //     return;
        // }
        // if (wallet.city === "") {
        //     setErrMsg({
        //         ...errMsg,
        //         city: "City is required",
        //     });
        //     return;
        // }
        // if (wallet.walletType === "") {
        //     setErrMsg({
        //         ...errMsg,
        //         walletType: "Wallet type is required",
        //     });
        //     return;
        // }
        // createWallet(wallet, (res) => {
        //     console.log(res);
        //     navigate("upload-image")
        // }, (err) => {
        // })
    }
    const walletList = [
        {
            label: "Personal",
            value: "personal",
        },
        {
            label: "Business",
            value: "business",
        },
    ];


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View
                style={{
                    padding: Spacing * 2,
                    height: "100%",
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
                            textAlign: 'center'
                        }}
                    >
                        Create Wallet
                    </Text>
                    <Text
                        style={{
                            fontSize: FontSize.small,
                            fontFamily: Font['poppins-semiBold'],
                            textAlign: 'center',
                            color: "gray",
                        }}
                    >
                        Welcome to our finance app! Let's get started by creating your new wallet. This wallet will securely hold your funds and help you manage your finances effortlessly.
                    </Text>
                </View>
                <View style={{
                    height: "100%",
                    marginVertical: Spacing * 3
                }}>
                    <TextInput
                        placeholder='Address'
                        placeholderTextColor={Colors.darkText}
                        style={customStyles.textField}
                        value={wallet.address}
                        onChangeText={(text) => handleChange("address", text)}
                    />
                    <TextInput
                        placeholder='Country'
                        placeholderTextColor={Colors.darkText}
                        style={customStyles.textField}
                        value={wallet.country}
                        onChangeText={(text) => handleChange("country", text)}
                    />
                    <TextInput
                        placeholder='Province'
                        placeholderTextColor={Colors.darkText}
                        style={customStyles.textField}
                        value={wallet.province}
                        onChangeText={(text) => handleChange("province", text)}
                    />
                    <TextInput
                        placeholder='City'
                        placeholderTextColor={Colors.darkText}
                        style={customStyles.textField}
                        value={wallet.city}
                        onChangeText={(text) => handleChange("city", text)}
                    />
                    <DropDownPicker
                        items={walletList}
                        open={open}
                        value={wallet.walletType}
                        setOpen={setOpen}
                        // setValue={setValue}
                        theme="LIGHT"
                        style={customStyles.textField}
                        placeholder="Select Wallet Type"
                        onChangeValue={(value) => handleChange("walletType", value)}
                    />
                </View>
                <View style={customStyles.bottomButtonWrapper}>
                    <TouchableOpacity
                        onPress={handleCreateWallet}
                        style={customStyles.btnContainer}
                    >
                        <Text
                            style={customStyles.btnText}
                        >
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default CreateWallet

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})