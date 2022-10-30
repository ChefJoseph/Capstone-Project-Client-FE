import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Touchable } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {useScrollToTop} from '@react-navigation/native'
// import axios from "axios";

export default function MenuItems({hideCheckbox, filteredItems}) {
  const ref = React.useRef(null)
  useScrollToTop(ref);
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );
  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.product_name === food.product_name));

return (
  <ScrollView showsVerticalScrollIndicator={false} ref={ref}>
    {filteredItems.map((food, index) => (
      <View key={index}> 
        <View style={styles.menuItemStyle}>            
          <Image
          // source={require("../assets/menuitems/hotdog.png")}
            source={{uri: food.product_image_url}}
            style={{
              width: 75,
              height: 75,
              // borderRadius: 8,
              resizeMode: 'contain',
            }}
          />
          <View style={{ width: 240, justifyContent: "space-evenly" }}>
            <Text style={styles.titleStyle}>{food.product_name}</Text>
            <Text style={styles.titleStylePrice}>${food.price}</Text>
          </View>
          <View style= {styles.checkbox}>
            {hideCheckbox ? (
              <></>
              ) : (
              <BouncyCheckbox
                style={{ borderColor: '#64D80B', borderRadius: 40,  }}
                innerIconStyle={{ borderWidth: 2, borderColor: 'grey', width:60, height: 27, alignContent: "right", marginLeft: 20}}
                fillColor='#fff'
                text="Custom Checkbox"
                isChecked={isFoodInCart(food, cartItems)}
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              />
            )}
          </View>
        </View>
          <Divider width={1} style={{ marginHorizontal: 20 }}/>
      </View>
    ))}
  </ScrollView>
);
}

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
    left: 10
  },
  titleStylePrice: {
    fontSize: 16,
    fontWeight: "400",
    left: 10
  },
  checkbox: {
      top: 45,
      // bottom: 0, 
      right: 50 
  },
  });
