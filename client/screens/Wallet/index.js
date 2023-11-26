import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { customStyles } from '../../styles/style'
import { TouchableOpacity } from 'react-native'
import Spacing from '../../constants/Spacing'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'

const Wallet = ({ navigation: { navigate } }) => {
    return (
        <SafeAreaView style={{ flex: 1, marginBottom: 50 }}>
            <ScrollView style={{
                padding: Spacing * 2,
            }}>
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
                        Create Wallet
                    </Text>
                    <Text
                        style={{
                            fontFamily: Font['poppins-semiBold'],
                            fontSize: FontSize.small,
                            maxWidth: "100%",
                            textAlign: "center",

                        }}
                    >Create your wallet now and enjoy effortless financial management.</Text>
                </View>
                <View
                    style={{
                        marginVertical: Spacing,
                        height: 400,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text style={{
                        fontSize: FontSize.small,
                        fontFamily: Font['poppins-semiBold'],
                        color: "gray",
                        textAlign: "center",
                    }}>Create your PayPocket wallet in a few short steps to enjoy hassle-free payments right away as well as get your transactions.</Text>
                    </View>
            </ScrollView>
            <View style={customStyles.bottomButtonWrapper}>
                <TouchableOpacity
                    onPress={() => navigate('create-wallet')}
                    style={customStyles.btnContainer}
                >
                    <Text
                        style={customStyles.btnText}
                    >
                        Create Wallet
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Wallet

const styles = StyleSheet.create({})