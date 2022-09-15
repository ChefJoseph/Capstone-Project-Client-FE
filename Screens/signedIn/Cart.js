import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
// import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import { useSelector } from "react-redux";
import OrderItem from "../../Components/OrderItem";
import { useDispatch } from "react-redux";

// import firebase from "../../firebase";
// import LottieView from "lottie-react-native";

export default function Cart({ navigation, setRefresh }) {
  const [modalVisible, setModalVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()

  const items = useSelector(state => state.cartReducer.selectedItems.items)
  // console.log(JSON.stringify(items), "From Cart Page")
  const user = useSelector(state => state.userReducer.user)
  // user_id: user.id
  const total = items
    .map((item) => Number(item.price))
    .reduce((prev, curr) => prev + curr, 0)
  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  // console.log(totalUSD)
  const deliveryFee = (total*0.15)
  const deliveryFeeUSD = deliveryFee.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  const taxes = (total*0.12)
  const taxesUSD = taxes.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  const grandTotal = total+deliveryFee+taxes
  const grandTotalUSD = grandTotal.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  function handleOrder() {
    // setIsLoading(true)
    const newOrder = {
      user_id: user.id,
      products: items,
      total_price: total
    }

    fetch("http://localhost:3000/api/v1/orders", 
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(newOrder),
  }) 
    // .then(res => res.json())
    .then(() => {
     
        navigation.navigate("OrderCompleted")
      })
    .then(()=>{
      setRefresh(true)
    })  
      // setTimeout(() => {
        // setLoading(false);
// 
      // }, 0);
        // console.log(data,"FROM ORDERING")
    //   setUser(data.user)
    
}


// const navigate = () => {
//   navigation.navigate('OrderCompleted')
// }

//   const checkoutModalContent = () => {
        
    return (
      <SafeAreaView style={styles.mainView} >
        <StatusBar barStyle="dark" style= {{backgroundColor: "white"}}/>
          <View>
          <Text style={styles.Header1}>Checkout</Text>
          <Text style={styles.Header}>Your items</Text>
          <ScrollView style= {{height: 400}} showsVerticalScrollIndicator={false}>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} /> 
            
            ))}
            {/* //uncomment here */}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text style={styles.subtotalText}>{totalUSD}</Text>
            </View>
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Delivery Fee</Text>
              <Text style={styles.subtotalText}>{deliveryFeeUSD}</Text>
            </View>
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Taxes &amp; Fees</Text>
              <Text style={styles.subtotalText}>{taxesUSD}</Text>
            </View>
            <View style={styles.subtotalContainer}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalText}>{grandTotalUSD}</Text>
            </View>
            </ScrollView>
            <View style={{ flexDirection: "row", justifyContent: "center", flex: 1 }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  handleOrder()
                  // navigation.navigate("OrderCompleted")
                //   addOrderToFireBase();
                  // setModalVisible(false);
                }}
              >
                <Text style={{ color: "white",fontWeight:'bold', fontSize: 18 }}>Checkout</Text>
                {/* <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    color: "white",
                    fontSize: 18,
                    top: 17,
                    fontWeight:'bold',
                  }}
                >
                </Text> */}
              </TouchableOpacity>
            </View>
          </View>
    
      </SafeAreaView>
    );

  // return (
  //   <>
  //     <Modal
  //       animationType="slide"
  //       visible={modalVisible}
  //       transparent={true}
  //       onRequestClose={() => setModalVisible(false)}
  //     >
  //       {checkoutModalContent()}
  //     </Modal>
  //   </>
  //   )

    

  
      }
  const styles = StyleSheet.create({
    mainView: {
        // marginTop:40,
        flex: 1,
         // backgroundColor: '#212530',
        backgroundColor: "#fff",
        flexDirection:'column',
       
        alignItems: 'center',
        justifyContent: 'left',
        // display: 'flex'
        
      },
      Header1: {
        textAlign: "left",
        fontWeight: "600",
        fontSize: 35,
        marginBottom: 40,
        marginTop: 40,
        color: "black"
      },
      Header: {
        textAlign: "left",
        fontWeight: "600",
        fontSize: 15,
        marginBottom: 10,
        color: "black"
      },
    modalCheckoutContainer: {
      // position: 'absolute',
      // bottom: 0,
        // width: '100%',
        // height: '100%',
  
    },

    OrderItem: {
  
    },


    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 5,
    },

    subtotalText: {
      textAlign: "left",
      fontWeight: "400",
      fontSize: 15,
      marginBottom: 10,
      color: "grey"
    },
    totalText: {
      textAlign: "left",
      fontWeight: "500",
      fontSize: 20,
      marginBottom: 10,
    },
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
      bottom: 10,
      alignSelf: 'flex-end'
    
    }
  });   