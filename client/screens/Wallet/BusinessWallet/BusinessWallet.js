import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Spacing from '../../../constants/Spacing'
import FontSize from '../../../constants/FontSize'
import Colors from '../../../constants/Colors'
import Font from '../../../constants/Font'
import { TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import CustomTextInput from '../../../components/CustomTextInput'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const BusinessWallet = () => {
    const navigate = useNavigation()
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
                            textAlign: 'center'
                        }}
                    >
                        Create Business Wallet
                    </Text>
                    <Text

                        style={{
                            fontFamily: Font['poppins-semiBold'],
                            fontSize: FontSize.small,
                            maxWidth: "80%",
                            textAlign: "center",

                        }}
                    >First Enter your Business Details</Text>
                
                </View>
                <View>
                    <CustomTextInput placeholder="Wallet name" />

                        <CustomTextInput placeholder="Company Name" />
                        <CustomTextInput placeholder="Email" />
                    <View style={styles.row}>
                    <CustomTextInput placeholder="Country code" />
                    <CustomTextInput placeholder="Mobile No" />
                    </View>
                    {/* <View style={styles.row}>
            <CustomTextInput placeholder="Country code"/>
            <CustomTextInput placeholder="Mobile No"/>
      </View>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker> */}
                </View>
                <TouchableOpacity
                    onPress={() => navigate.navigate("business-wallet-address")}
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
                        Next
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default BusinessWallet

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})