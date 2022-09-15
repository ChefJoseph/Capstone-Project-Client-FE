import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
// import firebase from "../firebase";
// import MenuItems from "../../Components/MenuItems";

export default function OrderCompleted() {


function handleOrder() {

}


  useEffect(() => {

  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* green checkmark */}
      <View
        style={{
          margin: 40,
          alignItems: "left",
          height: "100%",
        }}
      >
        <View style={{flexDirection: "row", alignItems: "center", left: 19}}>
        <LottieView
          style={{ height: 50,  }}
          source={require("../../assets/check-mark.json")}
          autoPlay
          speed={1}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "regular", }}>
          Order placed
        </Text>
        </View>
        <Text style={{ fontSize: 20, fontWeight: "regular", marginBottom: 20, left: 69, marginTop: 5}}>
          Preparing order
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "regular", marginBottom: 20, left: 69}}>
          Out for delivery
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "regular", marginBottom: 20, left: 69}}>
          Delivery Complete
        </Text>
   
          <LottieView
            style={{ height: 300, alignSelf: "center", marginTop: 5 }}
            source={require("../../assets/burgerAnimation.json")}
            autoPlay
            speed={.7}
          />
      
      </View>
      {/* <View style={{ flexDirection: "row", justifyContent: "center", flex: 1 }}> */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                //   clearCart()
                  // navigation.navigate("OrderCompleted")
                //   addOrderToFireBase();
                  // setModalVisible(false);
                }}
              >
                <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>New Order</Text>
            
              </TouchableOpacity>
            {/* </View> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    button: {
        postion: 'absolute',
        // marginTop: 20,
        backgroundColor: "black",
        alignItems: "center",
        padding: 13,
        borderRadius: 30,
        width: 300,
        // display:'flex',
        // justifyContent:'center',
        bottom: 139,
        alignSelf: 'center'
      
      }
})