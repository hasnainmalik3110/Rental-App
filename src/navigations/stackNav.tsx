import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Authentication/login";
import Signup from "../screens/Authentication/signup";
import Home from "../screens/Home/home";
import ProductsScreen from "../screens/Home/productScreen";
import CartScreen from "../screens/Home/cartScreen";


const Stack=createNativeStackNavigator();

const StackNav=()=>{
    return(
      
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Products"
            screenOptions={{headerShown:true}}>
                <Stack.Screen name="LoginScreen" component={Login} />
                <Stack.Screen name="SignupScreen" component={Signup} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />

            </Stack.Navigator>
            
        </NavigationContainer>
   
    )
}
export default StackNav