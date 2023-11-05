import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Spacing from '../../constants/Spacing'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'
import Icon from 'react-native-vector-icons/Ionicons';

const SuccessScreen = ({ navigation: { navigate } }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View
                style={{
                    padding: Spacing * 2,
                    alignItems: 'center',
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
                        Successfully!
                    </Text>
                    <Text

                        style={{
                            fontFamily: Font['poppins-semiBold'],
                            fontSize: FontSize.small,
                            maxWidth: "80%",
                            textAlign: "center",

                        }}
                    >You have Successfully Recognized</Text>
                </View>
                <View style={styles.icon}>
                    <Icon name="md-checkmark-sharp" size={100} color={Colors.onPrimary} /> 
                </View>
                <TouchableOpacity
                 onPress={() => navigate("Home")}
                    style={{
                        // padding: 12,
                        padding: Spacing * 2,
                        borderColor: Colors.primary,
                        borderWidth: 1,
                        width: 300,
                        marginTop: 180,
                        color: Colors.primary,
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
                            color: Colors.primary,
                            textAlign: 'center',
                            fontSize: FontSize.medium
                        }}
                    >
                        Back to Home
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SuccessScreen;
const styles = StyleSheet.create({
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        width: 150,
        height: 150,
        backgroundColor: Colors.text,
        color: Colors.onPrimary,
        marginTop:  100,
    }
})