import React from "react";
import { View, Text } from "react-native";

export default function OrderItem({ item }) {
  console.log(item, "FROM ORDERITEM")
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        // padding: 20,
        paddingBottom: 20,
        paddingTop: 20,
        // marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 16 }}>{item.product_name}</Text>
     
      <Text style={{ opacity: 2, fontSize: 14 }}>Qty: 1        ${item.price}.00</Text>
    </View>
  );
}