import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import FontSize from '../constants/FontSize';

const RequestWallet = () => {
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
                        Please Create Wallet First
                    </Text>
                    <Text
                        style={{
                            fontFamily: Font['poppins-semiBold'],
                            fontSize: FontSize.xsmall,
                            maxWidth: "80%",
                            textAlign: "center",

                        }}
                    >We're excited to invite you to become a part of our community! Customize your preferences and enjoy a personalized experience tailored to your needs.</Text>
                </View>
                <View>
                    <FontAwesome5 name="wallet" size={24} color="black" />
                    <Text style={{ fontSize: FontSize.small }}>
                        To access exclusive features and be a part of our growing community, we invite you to create your account today.
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RequestWallet

const styles = StyleSheet.create({})