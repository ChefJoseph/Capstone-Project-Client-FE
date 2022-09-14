import React, {useState, useEffect} from 'react'
import {Text, View, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity} from 'react-native'
import axios from "axios";
import Auth from '../../Components/auth'
import { useDispatch } from 'react-redux';

const Profile =({navigation})=> {
    const [profile, setProfiles] = useState([])
    const dispatch = useDispatch()
    
    const navigate = () => {
        navigation.navigate('signIn')
    }  
    

    const API_URL = "http://localhost:3000/api/v1/users/1"
    
    useEffect (()=> {
        axios
        .get(API_URL, 
          // { headers: {'Authorization': `token ${access_token}` }}
          )
        .then(res => {
          setProfiles(res.data)
          console.log(res.data)
        })
        .finally(() => {
        })
      },[])

    // const auth = new Auth({host:'http://localhost:3000/api/v1'})

    // const authenticateUser= async ()=>{
    //   auth.signOut()
    //     // setIsSignedIn(false)
    //     // navigation.navigate('Home')
    //     dispatch({type: 'opposite_set_user'}
    //    )
    // }  
        // dispatch({type: 'set_user', payload: response.data})
  
        function handleLogoutClick() {
          fetch("http://localhost:3000/api/v1/auth/sign_out", 
          { method: "DELETE" })
          .then((r) => {
            if (r.ok) {
              // setUser(null)
              dispatch({type: 'opposite_set_user', payload: r.data})
            }
          });
        }
      


    return(
        <SafeAreaView style={styles.mainView}>
        <StatusBar barStyle="dark" />
            <View style={{alignItems: "left", justifyContent:'center'}}>
            <Text>Avatar_uri:</Text>
            <Text>Name: {profile.first_name} {profile.last_name}</Text>
            <Text>Email: {profile.email}</Text>
            <Text>Mobile: {profile.mobile}</Text>
            <Text>ID_uri: </Text>
            </View>
            <TouchableOpacity style={styles.Button} onPress={handleLogoutClick}>
                    <Text style={styles.ButtonText}
                    >
                    Log out
                    </Text>
                    
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default Profile
const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: "#fff",
      // backgroundColor: '#212530',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    Button:{
        width:200,
        height:52,
        backgroundColor:'rgba(52, 52, 52, 0.4)',
        borderRadius:10,
        marginTop:'120%',
        // marginLeft: '12%',
        // display:'flex',
        justifyContent:'center',
        alignItems:'center',
        // textAlign:'center'
    
    },
    ButtonText:{
        fontWeight:'bold',
        fontSize:18,
        color: '#212530'
     
    }
})