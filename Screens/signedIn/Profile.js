import React, {useState, useEffect} from 'react'
import {Text, View, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity} from 'react-native'
import axios from "axios";
import Auth from '../../Components/auth'
import { useDispatch } from 'react-redux';
import { Avatar } from 'react-native-elements';

const Profile =({navigation, setIsSignedIn })=> {
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
          })
          .then ( setIsSignedIn(false))
        }
      


    return(
        <SafeAreaView style={styles.mainView}>
        <StatusBar barStyle="dark" />
        <View>
          <Text style={styles.Header1}>Profile</Text>
            <View style={{alignItems: "center"}}>
            <Avatar
              rounded
              size="xlarge"
              source={require(
              '../../assets/shohei.jpeg')
              }
            />
            {/* <Text style={styles.subtotalText}>Avatar_uri:</Text> */}
            <Text style={styles.subtotalText}>Change avatar</Text>
            <Text style={styles.subtotalText2}>{profile.first_name} {profile.last_name}</Text>
            {/* <Text style={styles.subtotalText}>Email:   {profile.email}</Text>
            <Text style={styles.subtotalText}>Mobile:    {profile.mobile}</Text> */}
            <Avatar
              size="xlarge"
              title="LW"
              style={{height: 120,
                width: 180}}
              source={require('../../assets/asiandriverlicense.jpeg')
                }
            />
            <Text style={styles.subtotalText}>Change license</Text>
            <TouchableOpacity style={styles.Button} onPress={handleLogoutClick}>
                    <Text style={styles.ButtonText}
                    >
                    Log out
                    </Text>
                    
            </TouchableOpacity>
            </View>
        </View>
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
      justifyContent: 'left',
      
    },
    Header1: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 35,
      marginBottom: 40,
      marginTop: 40,
      color: "black",
      
    },
    subtotalText: {
      textAlign: "left",
      fontWeight: "400",
      fontSize: 15,
      marginBottom: 10,
      color: "grey",
      padding: 10
      
    },
    subtotalText2: {
      textAlign: "left",
      fontWeight: "400",
      fontSize: 15,
      marginBottom: 10,
      color: "black",
      padding: 10
      
    },
    Button:{
        width:300,
        height:48,
        backgroundColor:'#000',
        borderRadius:30,
        marginTop:'120%',
        // marginLeft: '12%',
        // display:'flex',
        justifyContent:'center',
        // alignItems:'flex-end',
        // textAlign:'center'
        postion: 'absolute',
        alignItems: "center",
        bottom: 242
    
    },
    ButtonText:{
        fontWeight:'bold',
        fontSize:18,
        color: '#fff'
     
    }
})