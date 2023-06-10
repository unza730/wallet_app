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
        <Stack.Screen name='Splash' options={{ headerShown: false }} component={SplashScreen} />
        <Stack.Screen name='History' options={{ headerShown: false }} component={History} />
        <Stack.Screen name='WelcomeScreen' options={{ headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name='Home' options={{ headerShown: false }} component={HomeTabs} />
        {/* <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} /> */}
        <Stack.Screen name='Login' options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name='Register' options={{ headerShown: false }} component={RegisterScreen} />
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
        name="Profile"
        component={ProfileScreen}
      // options={{
      //   tabBarIcon: 'account',
      // }}
      />
      <Tab.Screen
        name="History"
        component={History}
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

    icon = focused ? <HomeSolid size='30' color={themeColors.bgLight} /> : <HomeOutline size='30' color="white" />

  } else if (route.name == 'History') {
    icon = focused ? <HeartSolid size='30' color={themeColors.bgLight} /> : <HeartOutline size='30' strokeWidth={2} color='white' />
  } else if (route.name == 'Profile') {
    icon = focused ? <BagOutline size='30' color={themeColors.bgLight} /> : <BagOutline size='30' strokeWidth={2} color='white' />

  }
  let buttonClass = focused ? { backgroundColor: '#fff' } : '';
  return (
    <View style={[
      styles.iconContainer,
      buttonClass ? styles.iconContainerFocused : null,
    ]}>
      {icon}
      {/* <MaterialIcons name={iconName} size='30' color={themeColors.bgLight} /> */}


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
    borderRadius: 9999,
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