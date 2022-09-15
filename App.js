// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Image, StyleSheet, Text, View } from 'react-native';
import IntroScreen from './Screens/IntroScreen';
import Home from './Screens/signedIn/Home';
import Orders from './Screens/signedIn/Orders';
import Profile from './Screens/signedIn/Profile';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
// import Cart from './Screens/signedIn/Cart'
import CartToOrder from './Screens/signedIn/CartToOrder';
import OrderCompleted from './Screens/signedIn/OrderCompleted';
// import 'react-native-gesture-handler'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Authentication from './Screens/Authentication'
// import axios from "axios"
// import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";


const store = configureStore()
 
export default function App() {
  //isSigned in Video#9 <13:00
  const [isSignedIn,setIsSignedIn]=useState(false)
  const Stack = createStackNavigator()
  const Tab =createBottomTabNavigator()
  const [user, setUser] = useState(null);
  const [refresh, setRefresh] = useState(false)
  
  // const devices = useCameraDevices()
  // const device = devices.back

  // if (device == null) return <LoadingView />
  // return ( 
  //   <Camera
  //     style={StyleSheet.absoluteFill}
  //     device={device}
  //     isActive={true}
  //   />
  // )
  // if(isLoading) {
  //   return(
  //     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  //       <ActivityIndicator size="large"/>
  //     </View>
  //   )
  // }

function SignInComponent({navigation}) {
  return <SignIn setIsSignedIn={setIsSignedIn} navigation={navigation}
/>}
function SignUpComponent({navigation}) {
  return <SignUp setIsSignedIn={setIsSignedIn} navigation={navigation}
/>}
function CartComponent({navigation}) {
  return <CartToOrder refresh={refresh} setRefresh={setRefresh} navigation={navigation}
/>}
function OrdersComponent({navigation}) {
  return <Orders refresh={refresh} setRefresh={setRefresh}  navigation={navigation}
/>}
function ProfileComponent({navigation}) {
  return <Profile setIsSignedIn={setIsSignedIn}  navigation={navigation}
/>}

if(isSignedIn == true) {
      return(
        <ReduxProvider store={store}>
        <NavigationContainer >
          <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused? 'md-home-sharp': 'md-home-sharp';
              } else if (route.name === 'Orders') {
                iconName = focused ?'ios-receipt-sharp':'ios-receipt-sharp';
              } else if (route.name === 'Cart') {
                iconName = focused ? 'md-cart-sharp' : 'md-cart-sharp';
              } else if (route.name === 'Profile') {
                iconName = focused ?'ios-person-sharp':'ios-person-sharp';
              } 
              return <Ionicons name={iconName} size={size} color={color} />;
            },
                tabBarActiveTintColor: '#64D80B',
                tabBarInactiveTintColor: '#fff',
                tabBarStyle:{
                  backgroundColor: '#212530',
                  height: '10%'
                }
            })}>
            <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
            <Tab.Screen name="Orders" component={OrdersComponent} options={{headerShown:false}} />
            <Tab.Screen name="Cart" component={CartComponent} options= {{headerShown:false}} />
            <Tab.Screen name="Profile" component={ProfileComponent} options={{headerShown:false}} />
          </Tab.Navigator>
        </NavigationContainer>
        </ReduxProvider>
      )
    } else {
      return(
        <ReduxProvider store={store}>
        <NavigationContainer> 
          <Stack.Navigator >
            <Stack.Screen name ="IntroScreen" component={IntroScreen} options= {{headerShown:false}} />       
            <Stack.Screen name ="signIn" component={SignInComponent} options= {{headerShown:false}} 
            />
            <Stack.Screen name ="signUp" component={SignUpComponent} options= {{headerShown:false}} />
            <Stack.Screen name ="Home" component={Home} options= {{headerShown:false}} />
          </Stack.Navigator>
        </NavigationContainer>
        </ReduxProvider>
      )
    }
  
    // <View style={styles.mainView}>
    //   <SignIn/>
    //   {/* <SignUp/> */} 
    // </View>
  
}

const styles = StyleSheet.create({
  mainView: {
    marginTop:40,
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textStyle:{
    color:'blue',
    fontSize: 48, 
    color: 'green',
  }
});


