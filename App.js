// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ActivityIndicator } from 'react-native';
import React, {useEffect, useState} from 'react'
import IntroScreen from './Screens/IntroScreen';
import SignIn from './Screens/SignIn'
import SignUp from './Screens/SignUp'
import Home from './Screens/signedIn/Home'
import Orders from './Screens/signedIn/Orders'
import Profile from './Screens/signedIn/Profile'
import Cart from './Screens/signedIn/Cart'
// import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import Authentication from './Screens/Authentication'
// import axios from "axios"
import { Provider as ReduxProvider } from "react-redux"
import configureStore from "./redux/store"



const store = configureStore()
 
export default function App() {
  //isSigned in Video#9 <13:00
  const [isSignedIn,setIsSignedIn]=useState(true)
  const Stack = createStackNavigator()
  const Tab =createBottomTabNavigator()
  const [user, setUser] = useState(null);
 

 
 const changeIsSignedInTrue=() =>{

      setIsSignedIn(true)
      console.log(isSignedIn)
 }
  
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
            <Tab.Screen name="Orders" component={Orders} options={{headerShown:false}} />
            <Tab.Screen name="Cart" component={Cart}  />
            <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}} />
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
            <Stack.Screen name ="signUp" component={SignUp} options= {{headerShown:false}} />
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


