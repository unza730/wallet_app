import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Spacing from '../../constants/Spacing';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect, useSelector } from 'react-redux';
import NotificationModal from '../../components/Modal/NotificationModal';

import { registerUser } from '../../redux/actions/authActions';
const RegisterScreen = ({ navigation: { navigate }, registerUser, error }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [notificationVisible, setNotificationVisible] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const userList = useSelector((state) => state.auth);
    console.log("Is user authenticated?", userList);
    const validateEmail = (email) => {
        // Implement email validation logic (e.g., using regex)
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePassword = (password) => {
        // Implement password validation logic (e.g., minimum length)
        return password.length >= 6;
    };

    const handleRegister = async () => {
        // Reset previous validation errors
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

        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }
        if (userList && userList?.user?.email !== email && userList?.user?.password !== password) {

            try {
                await registerUser(email, password);
                navigate('Home');
            } catch (error) {
                setNotificationMessage(error);
                setNotificationVisible(true);
            }
        } else {
            // Show a modal if the user is not found
            setNotificationMessage("You're already registered. Please sign in.");
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
                    marginTop: Spacing * 5
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
                    Create account
                </Text>
                <TextInput
                    placeholder='Email'
                    placeholderTextColor={Colors.darkText}
                    style={{
                        fontFamily: Font['poppins-regular'],
                        fontSize: FontSize.small,
                        backgroundColor: Colors.lightPrimary,
                        color: Colors.primary,
                        padding: Spacing * 2,
                        borderRadius: Spacing,
                        marginVertical: Spacing,
                    }}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    placeholder='Password'
                    placeholderTextColor={Colors.darkText}
                    secureTextEntry
                    style={{
                        fontFamily: Font['poppins-regular'],
                        fontSize: FontSize.small,
                        backgroundColor: Colors.lightPrimary,
                        color: Colors.primary,
                        padding: Spacing * 2,
                        borderRadius: Spacing,
                        marginVertical: Spacing,
                    }}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TextInput
                    placeholder='Confirm Password'
                    placeholderTextColor={Colors.darkText}
                    secureTextEntry
                    style={{
                        fontFamily: Font['poppins-regular'],
                        fontSize: FontSize.small,
                        backgroundColor: Colors.lightPrimary,
                        color: Colors.primary,
                        padding: Spacing * 2,
                        borderRadius: Spacing,
                        marginVertical: Spacing,
                    }}
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                />

                {/* Display email validation error */}
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

                {/* Display password validation error */}
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

                {/* Display general registration error */}
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
                    onPress={handleRegister}
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
                        Sign Up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate("Login")}
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
                        Already have an account
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
                            fontSize: FontSize.small
                        }}
                    >
                        or Continue with
                    </Text>
                    <View
                        style={{
                            marginTop: Spacing,
                            flexDirection: 'row',
                            justifyContent: 'center'
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
                            <Ionicons name='logo-google' color={Colors.text} size={Spacing * 2.2} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                padding: Spacing,
                                backgroundColor: Colors.gray,
                                borderRadius: Spacing / 2,
                                marginHorizontal: Spacing,
                            }}
                        >
                            <Ionicons name='logo-apple' color={Colors.text} size={Spacing * 2.2} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                padding: Spacing,
                                backgroundColor: Colors.gray,
                                borderRadius: Spacing / 2,
                                marginHorizontal: Spacing,
                            }}
                        >
                            <Ionicons name='logo-facebook' color={Colors.text} size={Spacing * 2.2} />
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
});

const mapDispatchToProps = {
    registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
