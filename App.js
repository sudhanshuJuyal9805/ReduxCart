import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cart from './src/redux/Cart'
import Products from './src/redux/Products'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Products"
            component={Products} />
          <Stack.Screen
            name="Cart"
            component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({

})