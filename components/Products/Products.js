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

const Products = () => {
  const navigate = useNavigation();

  const products = [
    {
      id: 1,
      title: "Pure Oil for Hiar",
      category: "Hair",
      price: 60,
      image:
        "https://images.unsplash.com/photo-1643123158509-b07b9fd5e802?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "Best Sampoo for Hiar",
      category: "Hair",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "Natureal Face creams for woman",
      category: "Face",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1601049315503-07926a49f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    },
    {
      id: 4,
      title: "Best Sampoo for Hiar",
      category: "Hair",
      price: 49,
      image:
        "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

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
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        {products.map((item) => (
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
                    resizeMode: "contain",
                    borderRadius: 10,
                  }}
                  source={{ uri: item.image }}
                />
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 5,
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>
                      {item.title.slice(0, 18)}..
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: "500" }}>
                      ${item.price}
                    </Text>
                  </View>
                  <View>
                    <Text></Text>
                    <TouchableOpacity onPress={() => handleAddToCart()}>
                      <Icon
                        style={{
                          color: "#000",
                          backgroundColor: "#fff",
                          paddingHorizontal: 6,
                          paddingVertical: 4,
                          borderRadius: 24,
                          shadowOpacity: 0.7,
                          shadowColor: "#000",
                        }}
                        name='plus'
                        size={20}
                      />
                    </TouchableOpacity>
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
