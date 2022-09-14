import React from 'react'
import {Text, View, SafeAreaView, StyleSheet, StatusBar} from 'react-native'
import { SearchBar } from 'react-native-elements'


function Search ({search, setSearch}) {
    const searchFilterFunction = (value) => {
     
        setSearch(value);
      };
    return(
        // <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        // <StatusBar barStyle="dark" />
        <View style={{ backgroundColor: 'white',}}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Search food, snack, drink, merch"
          value={search}
            inputStyle={{backgroundColor: '#eee'}}
            inputContainerStyle={{backgroundColor: '#eee'}}
            containerStyle={{backgroundColor: '#eee',
            borderWidth: 0, 
            borderRadius: 30,  
            borderWidth: 0,
            padding: 3, 
            shadowColor: 'white', //no effect
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent', marginTop: 15}
            }
        />
        {/* <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        /> */}
        </View>
        // </SafeAreaView>
    )
}
export default Search

      
