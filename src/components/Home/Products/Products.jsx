import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Alert,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useProductsQuery } from "../../../redux/features/products/productsApi";

const Products = () => {
  const navigate = useNavigation();

  const { data: products, isLoading, isError } = useProductsQuery();

  const handleAddToCart = () => {
    Alert.alert("Added", "Product added successfully!");
  };

  return (
    <View
      style={{
        marginVertical: 20,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "500", marginBottom: 10 }}>
          New Arrival
        </Text>
        <View style={{ marginRight: 10 }}>
          <TouchableOpacity>
            <Icon name='th-list' size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 10,
        }}
      >
        {products?.slice(0, 6).map((item) => (
          <Pressable
            key={item.id}
            onPress={() => navigate.navigate("ProductDetails", item)}
          >
            <View>
              <View
                style={{
                  marginTop: 10,
                  backgroundColor: "#f9f9f9",
                  borderRadius: 10,
                }}
              >
                <Image
                  style={{
                    width: 190,
                    height: 190,
                    borderRadius: 10,
                    resizeMode: "contain",
                  }}
                  source={{ uri: item.image }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 5,
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>
                      {item.title.slice(0, 17)}..
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: "500" }}>
                      ${item.price}
                    </Text>
                  </View>
                  <View>
                    <Text></Text>
                    <Pressable
                      onPress={() => navigate.navigate("ProductDetails", item)}
                    >
                      <AntDesign
                        style={{ paddingVertical: 5 }}
                        name='rightcircleo'
                        size={20}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};
export default Products;
