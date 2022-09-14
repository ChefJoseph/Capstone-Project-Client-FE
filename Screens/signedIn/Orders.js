import React, {useEffect, useState} from 'react'
import {Text, View, SafeAreaView, StyleSheet, StatusBar, ScrollView} from 'react-native'
import {useScrollToTop} from '@react-navigation/native'
import { Divider } from "react-native-elements";
import axios from "axios";

export default function Orders ( {refresh, setRefresh} ) {
    const[orders, setOrders] = useState([])
    const[products, setProducts] = useState([])

    const ref = React.useRef(null)
    useScrollToTop(ref);

    const API_URL = "http://localhost:3000/api/v1/orders"
    useEffect (()=> {
        axios
        .get(API_URL, 
          )
        .then(res => {
          setOrders(res.data)
          // console.log(res.data)
        })
        // .finally(() => {setLoading(false);
        // })
      },[refresh])
  console.log(setRefresh)
    return(
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1,  flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'left', }}>
      <StatusBar barStyle="black" />
        <View>
        <Text style={styles.Header1}>Past Orders</Text>
        <ScrollView showsVerticalScrollIndicator={false} ref={ref}>
          {orders.map((order, index) => (
            <View key={index} > 
            <View style={styles.menuItemStyle}>  
            <View style={{ width: "90%", justifyContent: "space-evenly" }}>
               
              <Text style={styles.titleStyle}>Order Number: A300{order.id}</Text>
              <Text style={styles.totalItems}>Total: ${order.total_price}</Text>
                {order.products.map((product, index)=> (
                    <View key={index} > 
                    {/* {console.log(index)}  */}
                      <Text style={styles.totalItems}>{product.product_name}</Text>
                    </View>
                ))}
              
              
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
        </View>
      </SafeAreaView>
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
  Header1: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: 35,
    marginBottom: 40,
    marginTop: 40,
    color: "black",
    left: 27
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
    left: 10
  },
  totalItems: {
    fontSize: 12,
    fontWeight: "400",
    left: 10
  },
 
  checkbox: {
      top: 50,
      // bottom: 0, 
      right: 25
    
  }
});
