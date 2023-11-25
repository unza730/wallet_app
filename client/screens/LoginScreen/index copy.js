import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';
import NotificationModal from '../../components/WalletModal/NotificationModal';

const LoginScreen = ({ navigation: { navigate }, error, loginUser, userList }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleLogin = async () => {
    setEmailError('');
    setPasswordError('');

    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    }

    const user = userList?.user;

    if (user && user.email === email) {
      if (user.password === password) {
        try {
          await loginUser(email, password);
          navigate('Home');
        } catch (error) {
          setNotificationMessage(error);
          setNotificationVisible(true);
        }
      } else {
        // Show a modal with "Invalid credentials" message
        setNotificationMessage('Invalid credentials');
        setNotificationVisible(true);
      }
    } else {
      // Show a modal if the user is not found
      setNotificationMessage("You're not registered. Please sign up.");
      setNotificationVisible(true);
    }
  };

  const closeNotificationModal = () => {
    setNotificationVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          padding: Spacing * 2,
          marginTop: Spacing * 6
        }}
      >
        <Text
          style={{
            fontSize: FontSize.xLarge,
            color: Colors.primary,
            fontFamily: Font['poppins-bold'],
            marginVertical: Spacing * 3,
          }}
        >
          Login Here
        </Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor={Colors.text}
          style={{
            fontFamily: Font['poppins-regular'],
            fontSize: FontSize.small,
            backgroundColor: Colors.lightPrimary,
            color: Colors.text,
            padding: Spacing * 2,
            borderRadius: Spacing,
            marginVertical: Spacing,
          }}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={Colors.darkText}
          secureTextEntry
          style={{
            fontFamily: Font['poppins-regular'],
            fontSize: FontSize.small,
            backgroundColor: Colors.lightPrimary,
            color: Colors.text,
            padding: Spacing * 2,
            borderRadius: Spacing,
            marginVertical: Spacing,
          }}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        {emailError ? (
          <Text
            style={{
              fontFamily: Font['poppins-semiBold'],
              fontSize: FontSize.small,
              color: 'red',
              textAlign: 'center',
              marginBottom: Spacing,
            }}
          >
            {emailError}
          </Text>
        ) : null}

        {passwordError ? (
          <Text
            style={{
              fontFamily: Font['poppins-semiBold'],
              fontSize: FontSize.small,
              color: 'red',
              textAlign: 'center',
              marginBottom: Spacing,
            }}
          >
            {passwordError}
          </Text>
        ) : null}

        {error ? (
          <Text
            style={{
              fontFamily: Font['poppins-semiBold'],
              fontSize: FontSize.small,
              color: 'red',
              textAlign: 'center',
              marginBottom: Spacing,
            }}
          >
            {error}
          </Text>
        ) : null}

        <TouchableOpacity
          onPress={handleLogin}
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
        <TouchableOpacity
          onPress={() => navigate('Register')}
          style={{
            padding: Spacing,
          }}
        >
          <Text
            style={{
              fontFamily: Font['poppins-bold'],
              color: Colors.text,
              textAlign: 'center',
              fontSize: FontSize.small,
            }}
          >
            Create a new account
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <Text
            style={{
              fontFamily: Font['poppins-bold'],
              color: Colors.primary,
              textAlign: 'center',
              fontSize: FontSize.small,
            }}
          >
            or Continue with
          </Text>
          <View
            style={{
              marginTop: Spacing,
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons name="logo-google" color={Colors.text} size={Spacing * 2.2} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons name="logo-apple" color={Colors.text} size={Spacing * 2.2} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons name="logo-facebook" color={Colors.text} size={Spacing * 2.2} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Render the NotificationModal */}
      <NotificationModal
        visible={notificationVisible}
        message={notificationMessage}
        onClose={closeNotificationModal}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
  userList: state.auth, 
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
