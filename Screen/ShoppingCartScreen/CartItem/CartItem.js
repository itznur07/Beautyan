import { EvilIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";

const CartItem = ({ title, price, category, image }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ flex: 4, flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, marginRight: 20 }}>
          <Image
            source={image}
            style={{
              width: 80,
              height: 80,
              resizeMode: "contain",
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ flex: 3 }}>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>{title}</Text>
          <Text>{category}</Text>
          <Text style={{ fontWeight: "500" }}>${price}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "column", alignItems: "center", gap: 5 }}>
        <EvilIcons color={"red"} name='trash' size={28} />
        <Pressable>
          <Text
            style={{
              backgroundColor: "dodgerblue",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 5,
              color: "#fff",
            }}
          >
            Checkout
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;
