import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native'
import Spacing from '../../constants/Spacing'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'
import Font from '../../constants/Font'
import Scan from '../../assets/images/scanning_face.gif'
import { TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import CustomTextInput from '../../components/CustomTextInput'

const ScanningScreen = ({ navigation: { navigate } }) => {
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
                            marginBottom: Spacing * 2,
                        }}
                    >
                        Scanning...
                    </Text>
                </View>
                <View>
<Image source={require('../../assets/images/scanning_face.gif')}  
style={styles.scanner_icon} />
                </View>
            </View >
        </SafeAreaView >
    )
}

export default ScanningScreen
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
    },
    scanner_icon: {
        borderColor: Colors.text,
        borderWidth: 2,
        width: 310, 
        height: 500,
        // marginHorizontal: 5,
    }
})