import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";

const TopBar = () => {
  const navigate = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 4,
      }}
    >
      <View>
        <Icon name='map-marker-alt' size={24} />
      </View>
      <View>
        <Text style={{ color: "gray", fontSize: 14 }}>California, USA</Text>
      </View>
      <View style={{ position: "relative" }}>
        <Pressable
          onPress={() => {
            navigate.navigate("ShoppingCart");
          }}
        >
          <AntDesign name='shoppingcart' size={28} />
        </Pressable>
      </View>
    </View>
  );
};

export default TopBar;
