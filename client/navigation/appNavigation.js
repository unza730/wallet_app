import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, Text } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { themeColors } from '../theme';
import { MaterialIcons } from '@expo/vector-icons';
import { HomeIcon as HomeOutline, HeartIcon as HeartOutline, ShoppingBagIcon as BagOutline } from 'react-native-heroicons/outline';
import { HomeIcon as HomeSolid, HeartIcon as HeartSolid, ShoppingBagIcon as BagSolid } from 'react-native-heroicons/solid';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import History from '../screens/History';
import SplashScreen from '../screens/SplashScreen';
import { AntDesign } from '@expo/vector-icons';
import OtpScreen from '../screens/OtpScreen/OtpScreen';
import SuccessScreen from '../screens/Scanning/SuccessScreen';
import ScanningScreen from '../screens/Scanning/ScanningLoading';
import PersonalWallet from '../screens/Wallet/PersonalWallet/PersonalWallet';
import BusinessWallet from '../screens/Wallet/BusinessWallet/BusinessWallet';
import Address from '../screens/Wallet/PersonalWallet/Address';
import AddressBus from '../screens/Wallet/BusinessWallet/AddressBus';
import ContactDetails from '../screens/Wallet/BusinessWallet/ContactDetails';
import BusinessDetails from '../screens/Wallet/BusinessWallet/BusinessDetails';
import TransactionList from '../screens/Transaction/TransactionList';
import TransferFundForm from '../screens/Transfer/TranferFundForm';
import TransferSelect from '../screens/Transfer/TransferSelect';
import CreateWallet from '../screens/Wallet/CreateWallet';
import Wallet from '../screens/Wallet';
import UploadImage from '../screens/Wallet/UploadImage';
// import {
//     HomeOutline,
//     HeartOutline,
//     BagOutline,
//     HomeSolid,
//     HeartSolid,
//     BagSolid,
//   } from 'react-native-heroicons';


const Stack = createStackNavigator()
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: 'white' }
        }}
      >
          {/* <Stack.Screen name='History' options={{ headerShown: false }} component={History} /> */}
      
        <Stack.Screen name='Splash' options={{ headerShown: false }} component={SplashScreen} />
        <Stack.Screen name='WelcomeScreen' options={{ headerShown: false }} component={WelcomeScreen} />
        {/* <Stack.Screen name='OnBoarding' options={{ headerShown: false }} component={OnboardingScreen} /> */}

        <Stack.Screen name='Home' options={{ headerShown: false }} component={HomeTabs} />
        {/* <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} /> */}
        <Stack.Screen name='Login' options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name='Register' options={{ headerShown: false }} component={RegisterScreen} />
        <Stack.Screen name='Success' options={{ headerShown: false }} component={SuccessScreen} />
        <Stack.Screen name='ScanningLoader' options={{ headerShown: false }} component={ScanningScreen} />
        <Stack.Screen name='personal-wallet' options={{ headerShown: false }} component={PersonalWallet} />
        <Stack.Screen name='personal-wallet-address' options={{ headerShown: false }} component={Address} />
        <Stack.Screen name='business-wallet' options={{ headerShown: false }} component={BusinessWallet} />
        <Stack.Screen name='business-wallet-address' options={{ headerShown: false }} component={AddressBus} />
        <Stack.Screen name='business-wallet-business-details' options={{ headerShown: false }} component={BusinessDetails} />
        <Stack.Screen name='business-wallet-contact' options={{ headerShown: false }} component={ContactDetails} />
        <Stack.Screen name='transaction' options={{ headerShown: false }} component={TransactionList} />
        <Stack.Screen name='transfer' options={{ headerShown: false }} component={TransferSelect} />
        <Stack.Screen name='transfer-bank' options={{ headerShown: false }} component={TransferFundForm} />
        <Stack.Screen name='transfer-wallet' options={{ headerShown: false }} component={TransferFundForm} />
        <Stack.Screen name='Verify-phone' options={{ headerShown: false }} component={PhoneNumberValidation} />
        <Stack.Screen name='Verify-OTP' options={{ headerShown: false }} component={OtpScreen} />
        <Stack.Screen name='create-batch' options={{ headerShown: false }} component={BatchCreationScreen} />
        <Stack.Screen name='Wallet' options={{ headerShown: false }} component={Wallet} />
        <Stack.Screen name='create-wallet' options={{ headerShown: false }} component={CreateWallet} />
        <Stack.Screen name='upload-image' options={{ headerShown: false }} component={UploadImage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
// function HomeScreen() {
//   return (
//     <View style={styles.screenContainer}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

function ProfileScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      // tabBarOptions={{
      //   style: styles.tabBar,
      //   labelStyle: styles.tabLabel,
      // }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 6,
          borderRadius: 8,
          backgroundColor: 'black',
          height: 60,
          marginHorizontal: 10,
          //   paddingTop: 20 ,
          //   paddingBottom: 20 

        },
        tabBarItemStyle: {
          marginTop: 5,
        },
        //   headerShown: false,
        //   tabBarShowLabel: false,
        //   tabBarIcon: ({focused, color, size}) => menuIcons(route, focused),
        //   tabBarStyle: {
        //     marginBottom: 10,
        //     borderRadius: 50,
        //     backgroundColor: 'black'
        //   },
        //   tabBarItemStyle:{
        //     marginTop: 30
        //   }
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      // options={{
      //   tabBarIcon: 'home',
      // }}
      />
       <Tab.Screen
        name="History"
        component={History}
      // options={{
      //   tabBarIcon: 'account',
      // }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      // options={{
      //   tabBarIcon: 'account',
      // }}
      />
     
    </Tab.Navigator>
  );
}
const menuIcons = (route, focused) => {
  let icon;
  if (route.name == 'Home') {
    // iconName = focused ? 'home' : 'menu';

    icon = focused ? <HomeSolid size='30' color="black" /> : <HomeOutline size='30' color="white" />

  } else if (route.name == 'History') {
    icon = focused ? <AntDesign name="clockcircle" size={24} color="black" /> : <AntDesign name="clockcircleo" size={24} color="white" />
  } else if (route.name == 'Profile') {
    icon = focused ? <AntDesign name="user" size={24} color="black" /> :<AntDesign name="user" size={24} color="white" />

  }
  let backgroundColor = focused ? 'white' : 'black';
  let buttonClass = focused ? { backgroundColor: '#ffff' } : '';
  return (
    <View style={[
      styles.iconContainer,
      { backgroundColor: backgroundColor },
      focused ? styles.iconContainerFocused : null,
      // buttonClass ? styles.iconContainerFocused : null,
    ]}>
      {icon}
    </View>
  )
}
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    // marginBottom: 5,
  },
  tabLabel: {
    marginBottom: -3,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    // padding: 12,
    padding: 7,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainerFocused: {
    // backgroundColor: '#fff',
  }
})
