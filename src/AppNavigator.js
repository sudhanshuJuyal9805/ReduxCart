import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";
import Products from "./redux/Products";
import Cart from "./redux/Cart";
import { View,Text } from "react-native";
const Stack = createStackNavigator();

const HomeScreen = () => {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
    );
  };
const AppNavigator = () => {
return(
    <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen
          name="Products"
          component={Products}/>
     </Stack.Navigator>
    </NavigationContainer>
)

}
export default AppNavigator;