// BottomTabNavigator.js
import { AntDesign } from "@expo/vector-icons"; // You can use any icon library you prefer
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../Screen/HomeScreen/HomeScreen";
import LoginScreen from "../Screen/LogInScreen/LoginScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
        showLabel: true,
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='home' size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='find' size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Login'
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='user' size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
