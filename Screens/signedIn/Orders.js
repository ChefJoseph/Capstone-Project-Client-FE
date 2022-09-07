import React from 'react'
import {Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native'

const Orders =()=> {

    return(
        <SafeAreaView style={styles.mainView}>
        <StatusBar barStyle="dark" />
        <Text>Orders</Text>
        </SafeAreaView>
    )
}
export default Orders
const styles = StyleSheet.create({
    mainView: {
    //   marginTop:40,
      flex: 1,
      flexDirection:'column',
    //   backgroundColor: '#212530',
      alignItems: 'center',
      justifyContent: 'top',
      
    }})