// components/RegisterScreen.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions/authActions';
import { SafeAreaView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';
import { customStyles } from '../../styles/style';

const RegisterScreen = ({ navigation, registerUser, registrationError }) => {
  const [value, setValue] = useState({
    name: '',
    email_address: '',
    cnic: '',
    paypocket_id: '',
    password: '',
  });

  const handleChanges = (name, text) => {
    setValue({ ...value, [name]: text });
  };
  const handleRegister = async () => {
    if (
      value.name === '' ||
      value.email_address === '' ||
      value.cnic === '' ||
      value.paypocket_id === '' ||
      value.password === ''
    ) {
      alert('Please fill all fields');
    } else {
      try {
        console.log("value:--> ",value);
        await registerUser(
          value,
          () => {
            // navigation.navigate('Verify-phone');
            navigation.navigate('Home');
          },
          (error) => {
            console.log('Complete error response:', error); // Log the complete error response
  
            // Extract and display a relevant part of the error message
            const errorMessage =
              error.response && error.response.data && error.response.data.message
                ? error.response.data.message
                : 'Something went wrong';
  
            alert(errorMessage);
          }
        );
      } catch (error) {
        console.log('Error during registration:', error);
        alert('Something went wrong');
      }
    }
  };
  
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
            Create an account to Unlock wallet features!
          </Text>
        </View>
        <View style={{ marginVertical: Spacing }}>
          <TextInput
            placeholder="Name"
            placeholderTextColor={Colors.darkText}
            style={customStyles.textField}
            value={value.name}
            onChangeText={(text) => handleChanges('name', text)}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={Colors.darkText}
            style={customStyles.textField}
            value={value.email_address}
            onChangeText={(text) => handleChanges('email_address', text)}
          />
          <TextInput
            placeholder="cnic"
            placeholderTextColor={Colors.darkText}
            style={customStyles.textField}
            value={value.cnic}
            onChangeText={(text) => handleChanges('cnic', text)}
          />
          <TextInput
            placeholder="PayPocket ID"
            placeholderTextColor={Colors.darkText}
            style={customStyles.textField}
            value={value.paypocket_id}
            onChangeText={(text) => handleChanges('paypocket_id', text)}
          />
          <Text style={customStyles.smallText}>
            Create your unique ID so people can look you up and make payments to you.
          </Text>
          <TextInput
            placeholder="Password"
            placeholderTextColor={Colors.darkText}
            secureTextEntry
            style={customStyles.textField}
            value={value.password}
            onChangeText={(text) => handleChanges('password', text)}
          />
        </View>

        <TouchableOpacity onPress={handleRegister} style={customStyles.btnContainer}>
          <Text style={customStyles.btnText}>Create account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: Spacing }}>
          <Text
            style={{
              fontFamily: Font['poppins-bold'],
              color: Colors.text,
              textAlign: 'center',
              fontSize: FontSize.small,
            }}
          >
            Already have an account{' '}
            <Text style={{ color: 'gray' }} onPress={() => navigation.navigate('Login')}>
              Sign in
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({

  registrationError: state.auth.registrationError,
});

export default connect(mapStateToProps, { registerUser })(RegisterScreen);
