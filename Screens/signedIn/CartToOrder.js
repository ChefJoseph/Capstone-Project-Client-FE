import React, {useState} from 'react'

import{createStackNavigator} from '@react-navigation/stack'
import Cart from './Cart'
import OrderCompleted from './OrderCompleted'
const Stack = createStackNavigator()

function CartToOrder({navigtion, setRefresh}) {
   
    function CartComponent ({navigation}) {
        return <Cart setRefresh={setRefresh} navigation={navigation}/>
    }

  return (
    <Stack.Navigator>
            <Stack.Screen 
                name="CartTab"
                component={CartComponent}
                options= {{headerShown:false}}
            />
            <Stack.Screen
                name="OrderCompleted"
                component={OrderCompleted}
                options= {{headerShown:false}}
            />
    </Stack.Navigator>
  )
}

export default CartToOrder