
import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native'
import '../assets/HOMEPAGE.png'
import "../assets/PRIMETIME.png"
import "../assets/concessionsondemand.png"

const IntroScreen =({navigation})=> {
    const navigate = () => {
        navigation.navigate('signIn')
    }  
    return(
    // <View style={styles.mainView}>
        <ImageBackground
        source={require("../assets/HOMEPAGE.png")}
        style={styles.BackgroundHome}
        >
            <Image source={require("../assets/PRIMETIME.png")}
            style={styles.Title}
            />
            <Image source={require("../assets/concessionsondemand.png")}
            style={styles.SubTitle}
            />
            <TouchableOpacity style={styles.Button} onPress={navigate}>
                    <Text style={styles.ButtonText}
                    >
                    Enter
                    </Text>
            </TouchableOpacity>
        </ImageBackground>

    )
}
export default IntroScreen

const styles = StyleSheet.create({

BackgroundHome:{
    flex: 1
    // width: '100%',
    // height: '100%'
},
Title:{
    // marginTop: "50%",
    width: '95%',
    // height: '100%'
    justifyContent:'center',
    alignItems:'center',
    marginTop:'27%',
    marginLeft: '3%',
},
SubTitle:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft: '8%',
    marginTop: '5%'
},
Button:{
    width:200,
    height:52,
    backgroundColor:'rgba(52, 52, 52, 0)',
    borderRadius:10,
    marginTop:'133%',
    marginLeft: '25%',
    // display:'flex',
    justifyContent:'center',
    alignItems:'center',
    // textAlign:'center'

},
ButtonText:{
    fontWeight:'bold',
    fontSize:18,
    color: 'rgba(52, 52, 52, 0.3)'
 
}
}
)