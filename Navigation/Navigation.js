import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../Screen/HomeScreen/HomeScreen";
import LoginScreen from "../Screen/LogInScreen/LoginScreen";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Details' component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
