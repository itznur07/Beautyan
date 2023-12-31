import { Entypo, EvilIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Pressable, SafeAreaView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Rating } from "react-native-ratings";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Icon from "react-native-vector-icons/AntDesign";
import Back from "../../components/BackButton/Back";
import { useAddCartsMutation } from "../../redux/features/carts/cartsApi";
import { useGetProductQuery } from "../../redux/features/products/productsApi";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const ProductDetails = () => {
  const navigate = useNavigation();
  const route = useRoute();
  const [quantity, setQuantity] = useState(0);
  const item = route.params;
  const { _id } = item;

  /** <!-- RTK_Query HOOK --> */
  const {
    data: product,
    isLoading: productIsLoading,
    isError,
  } = useGetProductQuery(_id);

  const [addCarts, { isLoading, error, isSuccess }] = useAddCartsMutation();

  const handleAddToCart = () => {
    addCarts(product);
  };

  if (isSuccess) {
    Toast.show({
      type: "success",
      text1: "added",
      text2: "item added to cart 👋",
    });
  }

  return (
    <SafeAreaView
      style={{ position: "relative", backgroundColor: "#fff", height: "100%" }}
    >
      {/* Product Image View Here */}
      <View>
        <Image
          source={{ uri: product?.image }}
          style={{
            width: 415,
            height: 430,
            marginTop: -20,
            borderRadius: 20,
          }}
          placeholder={blurhash}
          transition={1000}
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
              {product?.title.slice(0, 20)}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>
              ${product?.price}.00
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
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                <Icon name='pluscircleo' size={28} />
              </TouchableOpacity>
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                {quantity}
              </Text>
              <TouchableOpacity
                onPress={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
              >
                <Icon name='minuscircleo' size={28} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Description</Text>
            <Text style={{ fontSize: 14, marginTop: 3 }}>{product?.desc}</Text>
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
            <TouchableOpacity onPress={() => handleAddToCart()}>
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
                Add to Cart
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate.navigate("ShoppingCart")}>
              <Entypo name='shopping-cart' size={34} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Product Information View Ends Here */}
      </View>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

// Stylesheet


export default ProductDetails;
