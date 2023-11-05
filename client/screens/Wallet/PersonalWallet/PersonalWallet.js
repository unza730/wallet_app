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

const PersonalWallet = () => {
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
                        Create Personal Wallet
                    </Text>
                </View>
                <View>
                    <CustomTextInput placeholder="Wallet name" />

                    <View style={styles.row}>
                        <CustomTextInput placeholder="First Name" />
                        <CustomTextInput placeholder="Last Name" />
                    </View>
                    <CustomTextInput placeholder="Email" />
                    <CustomTextInput placeholder="Mobile No" />
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

                    <CustomTextInput placeholder="Country" />


                </View>
                <TouchableOpacity
                    onPress={() => navigate.navigate("personal-wallet-address")}
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

export default PersonalWallet

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})