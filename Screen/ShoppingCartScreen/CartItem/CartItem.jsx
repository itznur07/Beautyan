import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CartItem = ({ _id, title, price, category, image }) => {
  const [quantity, setQuantity] = useState(0);

  /** DELETE ACTION */
  const handleDeletePress = (_id) => {
    fetch(`https://beautyan-server.vercel.app/carts/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": " application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data._id === _id) {
          Alert.alert("Deleted Successfully!", "Item Deleted Successfully!");
        }
      });
  };

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ flex: 4, flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, marginRight: 20 }}>
          <Image
            source={image}
            contentFit='cover'
            style={{
              width: 80,
              height: 80,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ flex: 3 }}>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            {title.slice(0, 20)}
          </Text>
          <Text>{category}</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
            <Text style={{ fontWeight: "500" }}>${price}.00</Text>
            <AntDesign name='close' size={16} />
            <Text style={{ fontSize: 14, fontWeight: "500" }}>{quantity}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          marginHorizontal: 4,
        }}
      >
        <Pressable onPress={() => handleDeletePress(_id)}>
          <EvilIcons color={"red"} name='trash' size={34} />
        </Pressable>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            gap: 5,
          }}
        >
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <AntDesign name='pluscircleo' size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
          >
            <AntDesign name='minuscircleo' size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
