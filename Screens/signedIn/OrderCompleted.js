import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";

export default function OrderCompleted() {

  return (
    <SafeAreaView style={styles.container}>
      {/* green checkmark */}
      <View
        style={{
          margin: 40,
          alignItems: "left",
          height: "100%",
        }}
      >
        <View style={styles.lottecontainer}>
          <LottieView
            style={{ height: 50,  }}
            source={require("../../assets/check-mark.json")}
            autoPlay
            speed={1}
            loop={false}
          />
          <Text style={styles.orderplaced}>
            Order placed
          </Text>
        </View>
        <Text style={styles.ordersteps}>
          Preparing order
        </Text>
        <Text style={styles.ordersteps}>
          Out for delivery
        </Text>
        <Text style={styles.ordersteps}>
          Delivery Complete
        </Text>
        <LottieView
          style={{ height: 300, alignSelf: "center", marginTop: 5 }}
          source={require("../../assets/burgerAnimation.json")}
          autoPlay
          speed={.7}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
        //   clearCart()
          // navigation.navigate("OrderCompleted")
        //   addOrderToFireBase();
          // setModalVisible(false);
        }}
      >
        <Text style={styles.buttontext}>New Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor: "white" 
  },
  lottecontainer:{
    flexDirection: "row", 
    alignItems: "center", 
    left: 19
  },
  orderplaced: {
    fontSize: 20, 
    fontWeight: "regular"
  },
  ordersteps: {
    fontSize: 20, 
    fontWeight: "regular", 
    marginBottom: 20, 
    left: 69, 
    marginTop: 5
  },
  button: {
    postion: 'absolute',
    // marginTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 300,
    bottom: 139,
    alignSelf: 'center'
  },
  buttontext:{
    color: "white", 
    fontSize: 18, 
    fontWeight: "bold" 
  }
})