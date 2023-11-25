import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';
import CustomTextInput from '../../components/CustomTextInput';

const OnboardingScreen = ({ navigation: { navigate } }) => {
  const [isPersonal, setIsPersonal] = useState(true);

  const personalFields = [
    "First Name",
    "Last Name",
    "Profile Pic",
    "Logo",
    "Country",
    "Bank Code",
    "Branch",
    "Contact Number",
    "Contact Email",
    "Address",
    "Supported Currencies",
    "Status",
    "Compliance Status",
  ];

  const businessFields = [
    "First Name",
    "Last Name",
    "Profile Pic",
    "Logo",
    "Store Name",
    "Document Type",
    "Document Path",
    "Bank Name",
    "Country",
    "Bank Code",
    "Branch",
    "Contact Number",
    "Contact Email",
    "Address",
    "Supported Currencies",
    "Status",
    "Compliance Status",
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ padding: Spacing * 2 }}>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              fontFamily: Font['poppins-bold'],
              marginTop: Spacing * 4,
              marginBottom: Spacing * 2,
            }}
          >
            Create account
          </Text>
          <Text
            style={{
              fontFamily: Font['poppins-semiBold'],
              fontSize: FontSize.small,
              maxWidth: '80%',
              textAlign: 'center',
            }}
          >
            Create an account to unlock wallet features, explore secure financial management world!
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            style={{
              flex: 1,
              padding: Spacing,
              backgroundColor: isPersonal ? Colors.primary : Colors.gray,
              borderRadius: Spacing / 2,
              marginRight: Spacing / 2,
            }}
            onPress={() => setIsPersonal(true)}
          >
            <Text
              style={{
                fontFamily: Font['poppins-bold'],
                color: isPersonal ? Colors.onPrimary : Colors.text,
                textAlign: 'center',
                fontSize: FontSize.small,
              }}
            >
              Personal
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              padding: Spacing,
              backgroundColor: !isPersonal ? Colors.primary : Colors.gray,
              borderRadius: Spacing / 2,
              marginLeft: Spacing / 2,
            }}
            onPress={() => setIsPersonal(false)}
          >
            <Text
              style={{
                fontFamily: Font['poppins-bold'],
                color: !isPersonal ? Colors.onPrimary : Colors.text,
                textAlign: 'center',
                fontSize: FontSize.small,
              }}
            >
              Business
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {isPersonal
            ? personalFields.map((placeholder, index) => (
                <CustomTextInput key={index} placeholder={placeholder} />
              ))
            : businessFields.map((placeholder, index) => (
                <CustomTextInput key={index} placeholder={placeholder} />
              ))}
        </ScrollView>
        <TouchableOpacity
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.primary,
            marginVertical: Spacing * 2,
            borderRadius: Spacing,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
          }}
        >
          <Text
            style={{
              fontFamily: Font['poppins-bold'],
              color: Colors.onPrimary,
              textAlign: 'center',
              fontSize: FontSize.large,
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Login')} style={{ padding: Spacing }}>
          <Text
            style={{
              fontFamily: Font['poppins-bold'],
              color: Colors.text,
              textAlign: 'center',
              fontSize: FontSize.small,
            }}
          >
            Already have an account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
