import React, {useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import FormError from '../Components/FormError'
import '../assets/HOMEPAGE.png'
import Icon from 'react-native-vector-icons/Feather'
import Auth from '../Components/auth'



export default function SignIn({navigation,setIsSignedIn}) {
    const [displayFormErr, setDisplayFormErr] = useState(false)
    const [errorMessage,setErrorMessage] =useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = new Auth({host:'http://localhost:3000/api/v1'})

    const authenticateUser= async ()=>{
        const response = await auth.signIn(email,password)
       setIsSignedIn(true)
        navigation.navigate('Home')
    }

    const navigate = () => {
        navigation.navigate('signUp')
    }
    const homeBack = () => {
        navigation.navigate('IntroScreen')
    }
    // const Home =() => {
    //     navigation.navigate("Home")
    //     setIsSignedIn(true)
    //     // console.log(isSignedIn)
    // }
  
    // const validateForm =()=>{
    //     var form_inputs = [email, password]
       
    //     if(form_inputs.includes('') || form_inputs.includes(undefined)){           
    //         setErrorMessage("Incorrect email or password")
    //         return setDisplayFormErr(true)
    //     }
        
    // }

    return (
        <SafeAreaView style={styles.mainView}>
        <StatusBar barStyle="light-content" />
        <View style={styles.TopView} >
        <ImageBackground
        source={require("../assets/HOMEPAGE.png")}
        style={styles.BackgroundHome}
        >
        
        <View style={styles.BottomView}>
            <Icon onPress={homeBack} style={styles.Icon} name="chevron-left" size={60} color={'#212530'}/>
            <Text style={styles.Heading}>
                Welcome 
            </Text>
            <View style={styles.FormView}>  
                <TextInput 
                onChangeText={(val)=>setEmail(val)}
                value={email}
                placeholder={"Email address"} 
                style={styles.TextInput}
                placeholderTextColor={"#212530"}
                
                />
                <TextInput 
                onChangeText={(val)=>setPassword(val)}
                value={password}
                placeholder={"Password"} 
                style={styles.TextInput}
                placeholderTextColor={"#212530"}
                secureTextEntry={true}
                />
                <TouchableOpacity style={styles.Button} onPress={() => authenticateUser()}>
                    {/* change onPress to validateForm */}
                    <Text style={styles.ButtonText}
                    >
                    Sign in
                    </Text>
                </TouchableOpacity>
                <Text onPress={navigate} style={styles.LinkCreateAccount}>
                    Create new account
                </Text>
            </View>
        </View>
        </ImageBackground>
        </View>

        
        {displayFormErr == true?
          <FormError setDisplayFormErr={setDisplayFormErr} err={errorMessage}/>
          :
          null
          }
      
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    mainView: {
    //   marginTop:40,
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#212530',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    textStyle:{
      color:'blue',
      fontSize: 48, 
      color: 'green',
    },
    TopView:{
        // flex: 1,
        width: '100%',
        // height: '0%',
        
        alignItems: 'center',
      justifyContent: 'center',
    },
    BackgroundHome:{
        width: '100%',
        height: '100%'
    },    
    BottomView:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#212530',
        // borderTopLeftRadius:30,
        // borderTopRightRadius:30
    },
    Heading: {
        color: '#fff',
        fontSize:40,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop:60
    },
    FormView: {
        width:"100%",
        display: "flex",
        flexDirection:'column',
        alignItems:'center',
        marginTop:40
    },
    TextInput:{
        width:'90%',
        borderWidth:1,
        borderColor:'#fff',
        height:52,
        borderRadius:10,
        paddingLeft:10,
        marginTop:20,
        color:'#000',
        fontSize: 18,
        backgroundColor:'#fff'
    },
    Button:{
        width:'90%',
        color:'#000',
        height:52,
        backgroundColor:'#64D80B',
        borderRadius:10,
        marginTop:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    },
    ButtonText:{
        fontWeight:'bold',
        fontSize:18,
        color: '#212530'
     
    },
    LinkCreateAccount:{
        color: '#fff',
        fontSize:20,
        // fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 20
    },
    Icon:{
        marginLeft:10,
        marginTop:15
    }
  });