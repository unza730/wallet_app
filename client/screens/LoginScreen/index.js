// components/LoginScreen.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';
import { SafeAreaView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';
import { customStyles } from '../../styles/style';

const LoginScreen = ({ navigation, loginUser, loginError }) => {
  const [value, setValue] = useState({
    email_address: '',
    password: '',
  });
  const [error, setError] = React.useState({
    email_address: '',
    password: ''
})
  const handleChanges = (name, text) => {
    setValue({ ...value, [name]: text });
  };

  const handleLogin = async () => {
    console.log("value-->:: ",value, value.email_address, value.password);
    if (value.email_address === '' || value.password === '') {
      alert('Please fill all fields');
    } else {
      try {
        await loginUser(
         value,
          () => {
            // Redirect to the desired screen after successful login
            navigation.navigate('Home');
          },
          (error) => {
            console.log('Complete error response:', error);
            const errorMessage =
              error.response && error.response.data && error.response.data.message
                ? error.response.data.message
                : 'Something went wrong';
            alert(errorMessage);
          }
        );
      } catch (error) {
        console.log('Error during login:', error);
        alert('Something went wrong');
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
    <View
        style={{
            padding: Spacing * 2,
            flex: 1,
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
                Login
            </Text>
            <Text style={{
                fontFamily: Font['poppins-semiBold'],
                fontSize: FontSize.small,
                maxWidth: "80%",
                textAlign: "center",

            }}
            >Welcome back you've been missed!</Text>
        </View>
        <View
            style={{
                marginVertical: Spacing * 4,

            }}>
            <TextInput
                placeholder='Email'
                placeholderTextColor={Colors.darkText}
                style={customStyles.textField}
                value={value.email_address}
                keyboardType='email-address'
                onChangeText={(text) => handleChanges('email_address', text)}
            />
            <Text style={customStyles.errorText}>{error.email_address}</Text>
            <TextInput
                placeholder='Password'
                placeholderTextColor={Colors.darkText}
                secureTextEntry
                style={customStyles.textField}
                value={value.password}
                onChangeText={(text) => handleChanges('password', text)}
                keyboardType='password'
            />
            <Text style={customStyles.errorText}>{error.password}</Text>
            <View>
                <Text
                    style={{
                        fontFamily: Font['poppins-semiBold'],
                        fontSize: FontSize.small,
                        color: Colors.primary,
                        alignSelf: 'flex-end'
                    }}
                >Forgot your password ?</Text>
            </View>
        </View>
        <TouchableOpacity
            onPress={handleLogin}
            style={customStyles.btnContainer}
        >
            <Text
                style={customStyles.btnText}
            >
                Sign in
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                padding: Spacing,
            }}
        >
            <Text
                style={{
                    fontFamily: Font['poppins-bold'],
                    color: Colors.text,
                    textAlign: 'center',
                    fontSize: FontSize.small
                }}
            >
                Create new account <Text style={{ color: "gray" }} onPress={() => navigation.navigate("Register")}>Sign up</Text>
            </Text>
        </TouchableOpacity>
    </View>
</SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  loginError: state.auth.loginError,
});

export default connect(mapStateToProps, { loginUser })(LoginScreen);
