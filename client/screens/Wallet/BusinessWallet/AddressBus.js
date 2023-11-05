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
import { ScrollView } from 'react-native-gesture-handler'

const AddressBus = () => {
    const navigation = useNavigation() 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView>
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
         Mailing Address Details
            </Text>
            <Text

                        style={{
                            fontFamily: Font['poppins-semiBold'],
                            fontSize: FontSize.small,
                            maxWidth: "80%",
                            textAlign: "center",

                        }}
                    >Business Wallet (Optional)</Text>
                
        </View>
        <View
            style={{
                // marginVertical: Spacing * 3
            }}
        >
            {/* <TextInput
                placeholder='Email'
                placeholderTextColor={Colors.darkText}
                style={{
                    fontFamily: Font['poppins-regular'],
                    fontSize: FontSize.small,
                    backgroundColor: Colors.lightPrimary,
                    color: 'white',
                    padding: Spacing * 2,
                    borderRadius: Spacing,
                    marginVertical: Spacing
                }}

            /> */}
            <CustomTextInput placeholder="Address Line no. 1"/>
          
            <CustomTextInput placeholder="Landmark"/>

            <CustomTextInput placeholder="Province"/>
            <CustomTextInput placeholder="City"/>
           
        </View>
     <TouchableOpacity
         onPress={() => navigation.navigate("business-wallet-business-details")}
            style={{
                padding: Spacing,
                backgroundColor: Colors.primary,
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
     <TouchableOpacity
         onPress={() => navigation.navigate("business-wallet-business-details")}
            style={{
                padding: Spacing ,
                borderColor: Colors.text,
                borderWidth: 1,
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
                    color: Colors.text,
                    textAlign: 'center',
                    fontSize: FontSize.large
                }}
            >
                Skip
            </Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
</SafeAreaView>
  )
}

export default AddressBus

const styles = StyleSheet.create({})