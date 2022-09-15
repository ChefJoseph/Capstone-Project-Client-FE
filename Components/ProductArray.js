import React, { useState, useEffect} from 'react'
import { useScrollToTop } from '@react-navigation/native';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios'
import BouncyCheckBox from 'react-native-bouncy-checkbox'
import {useDispatch, useSelector} from "react-redux"

function ProductArray() {
    
    const [products, setProducts] = useState([])

    const API_URL = "http://localhost:3000/api/v1/products"
    const ref = React.useRef(null)
    useScrollToTop(ref);
  
    useEffect (()=> {
      axios
      .get(API_URL)
      .then(res => {
        setProducts(res.data)
        // console.log(res.data)
      })
      .finally(() => {setLoading(false);
        
      })
    },[])

    const dispatch = useDispatch()
    const selectItem = (itemData, checkboxValue) => 
        dispatch({
            type: "ADD_TO_CART",
            payload: {...itemData,
            checkboxValue: checkboxValue,
            }
         })
    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
    )
    const isFoodInCart = (itemData, cartItems) => 
        Boolean(cartItems.find((item) => item.product_name === itemData.product_name))
    
    //add touchableopacity with detailed ordering 3.25
    const renderItem = (itemData) => {
      return (
        <View style={[styles.containerFlat, { backgroundColor: "#fff"}]}>
          <Text style={styles.title}>{itemData.item.product_name}</Text>
          <Text style={styles.titleprice}>${itemData.item.price}</Text>
          <BouncyCheckBox
          fillColor="green"
          onPress={(checkboxValue) => selectItem(itemData, checkboxValue)}
          isChecked={isFoodInCart(itemData, cartItems)}
          />
        </View>
        
      )
      
    }
  
  return (
    <FlatList
            contentContainerStyle={styles.grid}
            numColumns={2}
            ref={ref}
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id }
        />

    
  )
}



const styles = StyleSheet.create({
    grid:{
      alignItems:"center"
    },
    containerFlat: {
  
        margin: 8,
        height: 150,
        width: '45%',
        borderRadius: 8,
        elevation: 2,
        backgroundColor: '#c91111',
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 8,
    },
    buttonStyle: {
        // justifyContent:'center',
        // alignItems: 'center',
        // backgroundColor: '#DDDDDD',
        // padding: 10,
        // width: '45%',
        // marginTop: 400,
    },
    innerContainer: {
        flex: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
    },
    titleprice: {
      fontWeight: '200',
      fontSize: 12,
      color: 'black',
  },
  });

export default ProductArray