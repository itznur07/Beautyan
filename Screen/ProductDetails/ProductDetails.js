import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const ProductDetails = () => {
  const route = useRoute();

  const item = route.params;

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <Text>Product Details Screen</Text>
      </View>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

export default ProductDetails;
