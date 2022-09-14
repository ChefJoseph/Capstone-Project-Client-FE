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
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <LottieView
          style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
          source={require("../../assets/check-mark.json")}
          autoPlay
          speed={1}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
          Your order at has been placed
        </Text>
   
          <LottieView
            style={{ height: 300, alignSelf: "center", marginTop: 5 }}
            source={require("../../assets/burgerAnimation.json")}
            autoPlay
            speed={.9}
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
                <Text style={{ color: "white", fontSize: 20 }}>New Order</Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    color: "white",
                    fontSize: 15,
                    top: 17,
                  }}
                >
                </Text>
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
        bottom: 90,
        alignSelf: 'center'
      
      }
})