import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {useScrollToTop} from '@react-navigation/native'
import axios from "axios";


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
          <View key={index} > 
            <View style={styles.menuItemStyle}>            
              <Image
              source={require("../assets/fast-food.png")}
              // source={{uri: food.product_image_url}}
              style={{
                  width: 75,
                  height: 75,
                  borderRadius: 8,
              }}
              />
              <View style={{ width: 240, justifyContent: "space-evenly" }}>
                  <Text style={styles.titleStyle}>{food.product_name}</Text>
                  <Text style={styles.titleStyle}>${food.price}</Text>
              </View> 
            <View style= {styles.checkbox} >
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                fillColor="grey"
                isChecked={isFoodInCart(food, cartItems)}
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              />
            )}
            </View>
          </View>
            <Divider
            width={1}
            // orientation="vertical"
            style={{ marginHorizontal: 20 }}
            />
          </View>
      ))}
  </ScrollView>
  );
}

const styles = StyleSheet.create({
    // container:{
    //     flex: 1,
    //     height: 175
    //     },
        
    menuItemStyle: {
        // flex:1,
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 15,
    },

    titleStyle: {
      fontSize: 19,
      fontWeight: "600",
      left: 10
    },
   
    checkbox: {
        top: 50,
        // bottom: 0, 
        right: 25
      
    }
  });
