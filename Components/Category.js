import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import { useScrollToTop } from '@react-navigation/native';

const items = [
  {
    image: require("../assets/fast-food.png"),
    text: "Food",
  },
  {
    image: require("../assets/desserts.png"),
    text: "Snack",
  },
  {
    image: require("../assets/soft-drink.png"),
    text: "Drink",
  },
  {
    image: require("../assets/shopping-bag.png"),
    text: "Merch",
  },
  {
    image: require("../assets/fast-food.png"),
    text: "Taco",
  },
  {
    image: require("../assets/fast-food.png"),
    text: "Pizza",
  },
  {
    image: require("../assets/fast-food.png"),
    text: "Desserts",
  },
];

export default function Category() {
  const ref = React.useRef(null)
  useScrollToTop(ref);

  return (
    <View
      
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false} ref={ref}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
           
          </View>
        ))}
        
      </ScrollView>
      <Divider
        width={1}
        // orientation="vertical"
        style={{ marginHorizontal: 20, top: 10, right: 10 }}
          />
    </View>
  );
}