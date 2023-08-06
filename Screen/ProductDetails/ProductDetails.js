import { EvilIcons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Pressable, SafeAreaView, Text, View } from "react-native";
import { Rating } from "react-native-ratings";
import Icon from "react-native-vector-icons/AntDesign";
import Back from "../../components/BackButton/Back";

const ProductDetails = () => {
  const navigate = useNavigation();
  const route = useRoute();

  const [quantity, setQuantity] = useState(0);

  const item = route.params;

  return (
    <SafeAreaView
      style={{ position: "relative", backgroundColor: "#fff", height: "100%" }}
    >
      {/* Product Image View Here */}
      <View>
        <Image
          source={{ uri: item.image }}
          style={{
            width: 415,
            height: 430,
            marginTop: -20,
            borderRadius: 20,
          }}
        />
      </View>
      {/* Product Image View Ends Here */}
      {/* Top View Here */}
      <View
        style={{
          width: "100%",
          marginTop: 30,
          paddingHorizontal: 10,
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-between",
          zIndex: 200,
        }}
      >
        <Pressable
          onPress={() => navigate.navigate("Root", { screen: "Home" })}
        >
          <Back />
        </Pressable>
        <Pressable onPress={() => Alert.alert("Added Wishlist")}>
          <Icon name='hearto' size={28} />
        </Pressable>
      </View>
      {/* Top View Ends Here */}

      <View style={{ paddingHorizontal: 15, paddingVertical: 20 }}>
        {/* Product Information View Here */}
        <View style={{}}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 20, fontWeight: "500" }}>
              {item.title.slice(0, 20)}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>
              ${item.price}.00
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Rating
                type='star'
                ratingColor='#3498db'
                ratingBackgroundColor='#ffffff'
                ratingCount={5}
                imageSize={24}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 10 }}
              />
              <Text style={{ fontSize: 14 }}>(5.00)</Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable onPress={() => setQuantity(quantity + 1)}>
                <Icon name='pluscircleo' size={28} />
              </Pressable>
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                {quantity}
              </Text>
              <Pressable
                onPress={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
              >
                <Icon name='minuscircleo' size={28} />
              </Pressable>
            </View>
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Description</Text>
            <Text style={{ fontSize: 14, marginTop: 3 }}>{item.desc}</Text>
          </View>
          <View
            style={{
              marginTop: 25,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <EvilIcons name='location' size={36} />
            <Text>Dhaka</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <Pressable onPress={() => Alert.alert("Buying Successfully!")}>
              <Text
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  paddingHorizontal: 100,
                  paddingVertical: 10,
                  borderRadius: 24,
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                Buy Now
              </Text>
            </Pressable>
            <Pressable onPress={() => Alert.alert("Product Added to cart")}>
              <FontAwesome5 style={{}} name='cart-plus' size={28} />
            </Pressable>
          </View>
        </View>
        {/* Product Information View Ends Here */}
      </View>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

export default ProductDetails;
