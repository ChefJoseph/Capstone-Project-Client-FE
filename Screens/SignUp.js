import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView   } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import FormError from '../Components/FormError'
// import FormSuccess from '../Components/FormSuccess'

export default function SignUp({navigation}) {
    const [firstName, setFirstnName] = useState ("")
    const [lastName, setLastName] = useState ("")
    const [email, setEmail] = useState ("")
    const [mobile, setMobile] = useState ("")
    const [password, setPassword] = useState ("")
    const [confirmPassword, setConfirmPassword] = useState ("")
    const [displayFormErr, setDisplayFormErr] = useState(false)
    const [errorMessage,setErrorMessage] =useState('')


    function firstNameChange (value) {
        setFirstnName(value)
    }

    const navigate = () => {
        navigation.navigate('signIn')
    }

    //create user auth firebaase
    // https://youtube.com/clip/UgkxOYoalj540gOW9_VveS_qPKgvJBHIk0GV
    function createUser () {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(()=>{
        })
        .catch((err)=>{
            setErrorMessage(err.message)
            setDisplayFormErr(true)
        })
    }
    const validateForm =()=>{
        var form_inputs = [firstName, lastName, email, mobile, password, confirmPassword]
        var passwords_match = password === confirmPassword

        if(form_inputs.includes('') || form_inputs.includes(undefined)) {setErrorMessage("Please fill in all fields")
        return setDisplayFormErr(true)
        }
        if(!passwords_match) {
            setErrorMessage("Passwords do not match")
            return setDisplayFormErr(true)
        }
        if(passwords_match) createUser()
    }
    
    return (
        <View style={styles.mainView}>
          <View style={styles.TopView} ></View>

          <ScrollView style={styles.BottomView}>
              <Icon onPress={navigate} style={styles.Icon} name="chevron-left" size={60} color={'#fff'}/>
              <Text style={styles.Heading}>
                  Create{'\n'}
                  Account
              </Text>
              <View style={styles.FormView}>
                  <TextInput 
                  onChangeText={firstNameChange}
                  value= {firstName}
                  placeholder={"First Name"} 
                  style={styles.TextInput}
                  placeholderTextColor={"#212530"}
                  />
                   <TextInput 
                  onChangeText={(val)=>setLastName(val)}
                  value={lastName}
                  placeholder={"Last Name"} 
                  style={styles.TextInput}
                  placeholderTextColor={"#212530"}
                  />  
                  <TextInput 
                  onChangeText={(val)=>setEmail(val)}
                  value={email}
                  placeholder={"Email address"} 
                  style={styles.TextInput}
                  placeholderTextColor={"#212530"}
                  />
                  <TextInput 
                  onChangeText={(val)=>setMobile(val)}
                  value={mobile}
                  placeholder={"Cell Number"} 
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
                  <TextInput 
                  onChangeText={(val)=>setConfirmPassword(val)}
                  value={confirmPassword}
                  placeholder={"Confirm password"} 
                  style={styles.TextInput}
                  placeholderTextColor={"#212530"}
                  secureTextEntry={true}
                  />
                  <TouchableOpacity onPress={validateForm} style={styles.Button}>
                      <Text style={styles.ButtonText}>Sign up</Text>
                  </TouchableOpacity>
                  <Text onPress={navigate} style={styles.LinkCreateAccount}>
                    Already have an account? Log in
                </Text>
              </View>
          </ScrollView>
          {displayFormErr == true?
          <FormError setDisplayFormErr={setDisplayFormErr} err={errorMessage}/>
          :
          null
          }
        </View>
      )
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
      },
      TopView:{
          width: '100%',
          height: '10%',
          display:'flex',
          alignItems: 'center',
          justifyContent: 'center',
      },
      BottomView:{
          width: '100%',
          height: '90%',
          backgroundColor: '#212530',
          borderTopLeftRadius:30,
          borderTopRightRadius:30
      },
      Heading: {
          color: '#64D80B',
          fontSize:40,
          fontWeight: 'bold',
          marginLeft: 30,
          marginTop: 5
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
          borderWidth:1.5,
        //   borderColor:'#fff',
          height:52,
          borderRadius:10,
          paddingLeft:10,
          marginTop:20,
          fontSize:18,
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
      Icon:{
        marginLeft:10,
        marginTop:15
      },
      LinkCreateAccount:{
        color: '#fff',
        fontSize:20,
        // fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 20
    }
      
  });