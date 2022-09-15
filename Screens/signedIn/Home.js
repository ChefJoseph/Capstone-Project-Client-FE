import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Search from './Search'
import Category from '../../Components/Category';
import HeaderTabs from '../../Components/HeaderTabs';
import MenuItems from '../../Components/MenuItems';
// import ProductArray from '../../Components/ProductArray';
import axios from "axios";

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  // const [products, setProducts] = useState([])
  const [activeTab, setActiveTab] = useState("Delivery");
  const [foods, setFoods] = useState([])
  const [search, setSearch] = useState("")
    
  const API_URL = "http://localhost:3000/api/v1/products"
  useEffect (()=> {
      axios
      .get(API_URL, 
        // { headers: {'Authorization': `token ${access_token}` }}
        )
      .then(res => {
        setFoods(res.data)
      })
      .finally(() => {setLoading(false);
      })
    },[])
  
  const filteredItems = foods.filter(items=>       
      items.product_name?.toLowerCase().includes(search.toLowerCase())||
      items.category?.toLowerCase().includes(search.toLowerCase())||
      items.description?.toLowerCase().includes(search.toLowerCase())
      ) 

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <StatusBar barStyle="black" />
    <View style={{ backgroundColor: "white", padding: 5}}>
      
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
      <Search search={search} setSearch={setSearch}/>
      <Category foods={foods}/>
      <MenuItems filteredItems={filteredItems}/>
        {/* <FlatList
            contentContainerStyle={styles.grid}
            numColumns={2}
            ref={ref}
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id }
        /> */}

        {/* {isLoading && 
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={getAPIData}>
                <Text>Simple Get Call</Text>
            </TouchableOpacity>
        } */}
        
        {/* <StatusBar /> */}
  
    </View>
    </SafeAreaView>
);
}
// const styles = StyleSheet.create({
//   grid:{
//     alignItems:"center"
//   },
//   containerFlat: {

//       margin: 8,
//       height: 150,
//       width: '45%',
//       borderRadius: 8,
//       elevation: 2,
//       backgroundColor: '#c91111',
//       shadowColor: 'black',
//       shadowOpacity: 0.1,
//       shadowOffset: {
//           width: 0,
//           height: 2,
//       },
//       shadowRadius: 8,
//   },
//   buttonStyle: {
//       // justifyContent:'center',
//       // alignItems: 'center',
//       // backgroundColor: '#DDDDDD',
//       // padding: 10,
//       // width: '45%',
//       // marginTop: 400,
//   },
//   innerContainer: {
//       flex: 1,
//       borderRadius: 8,
//       justifyContent: 'center',
//       alignItems: 'center',
//   },
//   title: {
//       fontWeight: 'bold',
//       fontSize: 18,
//       color: 'black',
//   },
// });
    
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
