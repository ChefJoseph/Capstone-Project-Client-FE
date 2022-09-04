import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
// import { SectionGrid } from 'react-native-super-grid';
import { useScrollToTop } from '@react-navigation/native';
import axios from 'axios'

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([])

  const API_URL = "http://localhost:3000/api/v1/products"
  const ref = React.useRef(null)
  useScrollToTop(ref);

  const getAPIData= ()=> {
    axios
    .get(API_URL)
    // .then((res) => {
    //   (res.data)})
    .then(res => {
      setProducts(res.data)
      // console.log(res.data)
    })
    .finally(() => {setLoading(false);
      
    })
  }
  
  const renderItem = (itemData) => {
    return (
      <View style={[styles.containerFlate, { backgroundColor: "#fff"}]}>
        <Text style={styles.title}>Name:{itemData.item.product_name}</Text>
        <Text style={styles.title}>${itemData.item.price}</Text>
      </View>
    )
    
  }

  return (
    <View style={styles.container}>
      
        <FlatList
            ref={ref}
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id }
        />

        {isLoading && 
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={getAPIData}>
                <Text>Simple Get Call</Text>
            </TouchableOpacity>
        }
        
        {/* <StatusBar /> */}
    </View>
);
}
const styles = StyleSheet.create({
  containerFlate: {
      flex: 1,
      margin: 16,
      height: 150,
      borderRadius: 8,
      elevation: 4,
      backgroundColor: '#c91111',
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowRadius: 8,
  },
  buttonStyle: {
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: '100%',
      marginTop: 400,
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
});
    
    // <View>
    //     <Text> Hello!</Text>
    //     {/* {props.map((product) =>{
    //       return(
    //         <View style={[styles.itemContainer, { backgroundColor: "#fff"}]}>
    //           <Text style={styles.itemName}>{product.name}</Text>
    //           <Text style={styles.itemprice}>{product.price}</Text>
    //         </View>
    //       )
    //     })} */}
    // </View>
    // )}
//   const [items, setItems] = React.useState([
//     { name: 'Hot dog', price: "$8.00" },
//     { name: 'Hamburger', price: "$8.00" },
//     { name: 'Pizza', price: "$8.00" },
//     { name: 'Corn dog', price: "$8.00" },
//     { name: 'Nachos', price: "$8.00" },
//     { name: 'Chicken sandy', price: "$8.00" },
//     { name: 'Salad', price: "$8.00" },
//     { name: 'Chicken tendy', price: "$8.00" },
//     { name: 'Brisket Sandy', price: "$8.00" },
//     { name: 'Wings', price: "$8.00" },
//     { name: 'Fries', price: "$8.00" },
//     { name: 'Garlic Fries', price: "$8.00" },
//     { name: 'Nachos', price: "$8.00" },
//     { name: 'Onion Rings', price: "$8.00" },
//     { name: 'Cotton Candy', price: "$8.00" },
//     { name: 'Popcorn', price: "$8.00" },
//     { name: 'Cookies', price: "$8.00" },
//     { name: 'Ice Cream', price: "$8.00" },
//     { name: 'Milkshake', price: "$8.00" },
//     { name: 'Beer', price: "$8.00" },
//     { name: 'Wine', price: "$8.00" },
//     { name: 'Soda', price: "$8.00" },
//     { name: 'Cocktail', price: "$8.00" },
//     { name: 'Water', price: "$8.00" },
//     { name: 'Juice', price: "$8.00" }
//   ]);

//   return (
    // <View>
      // <SectionGrid
      //   ref={ref}
      //   itemDimension={120}
      //   // staticDimension={300}
      //   // fixed
      //   // spacing={20}
      //   sections={[
      //     {
      //       title: 'Food',
      //       data: items.slice(0, 10),
      //     },
      //     {
      //       title: 'Snack',
      //       data: items.slice(11, 19)
      //     },
      //     {
      //       title: 'Drink',
      //       data: items.slice(19, 28),
      //     },
      //   ]}
      //   style={styles.gridView}
      //   renderItem={({ item, section, index }) => (
      //     <View style={[styles.itemContainer, { backgroundColor: "#fff"}]}>
      //       <Text style={styles.itemName}>{item.name}</Text>
      //       <Text style={styles.itemprice}>{item.price}</Text>
      //     </View>
      //   )}
      //   renderSectionHeader={({ section }) => (
      //     <Text style={styles.sectionHeader}>{section.title}</Text>
      //   )}
      // />
    // </View>
//   );
// }

// const styles = StyleSheet.create({
//     gridView: {
//       marginTop: 20,
//       flex: 1,
//     },
//     itemContainer: {
//       justifyContent: 'flex-end',
//       borderRadius: 5,
//       padding: 10,
//       height: 150,
//     },
//     itemName: {
//       fontSize: 16,
//       color: '#000',
//       fontWeight: '600',
//     },
//     itemprice: {
//       fontWeight: '600',
//       fontSize: 12,
//       color: '#000',
//     },
//     sectionHeader: {
//       flex: 1,
//       fontSize: 15,
//       fontWeight: '600',
//       alignItems: 'center',
//       backgroundColor: '#636e72',
//       color: 'white',
//       padding: 10,
//     }
// })
