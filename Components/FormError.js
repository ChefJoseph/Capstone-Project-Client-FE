
import React, {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { Overlay } from 'react-native-elements'


const FormError =(props)=> {
    // const [visible, setVisible] = useState(false)

    // const toggleOverlay=()=>{
    //     setVisible(!visible)
    // }

    return(
    <Overlay isVisible={true} onBackdropPress={()=>props.setDisplayFormErr(false)} >
        <Text style={styles.errorMessage}>{props.err}</Text>
    </Overlay>

    )
}
export default FormError

const styles = StyleSheet.create({
errorMessage:{
    fontSize:30
}
})