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
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio nam beatae tenetur adipisci eaque, voluptatem voluptates. Magnam expedita mollitia eum, iure accusamus enim nesciunt impedit aliquid at molestiae pariatur assumenda nemo sapiente corporis sed fugit optio voluptas inventore commodi.",
    },

    {
      id: 2,
      title: "Best Sampoo for Hiar",
      category: "Hair",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio nam beatae tenetur adipisci eaque, voluptatem voluptates. Magnam expedita mollitia eum, iure accusamus enim nesciunt impedit aliquid at molestiae pariatur assumenda nemo sapiente corporis sed fugit optio voluptas inventore commodi.",
    },
    {
      id: 3,
      title: "Natureal Face creams for woman",
      category: "Face",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1601049315503-07926a49f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio nam beatae tenetur adipisci eaque, voluptatem voluptates. Magnam expedita mollitia eum, iure accusamus enim nesciunt impedit aliquid at molestiae pariatur assumenda nemo sapiente corporis sed fugit optio voluptas inventore commodi.",
    },
    {
      id: 4,
      title: "Pink Facial Roller",
      category: "Face",
      price: 49,
      image:
        "https://images.pexels.com/photos/8015783/pexels-photo-8015783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio nam beatae tenetur adipisci eaque, voluptatem voluptates. Magnam expedita mollitia eum, iure accusamus enim nesciunt impedit aliquid at molestiae pariatur assumenda nemo sapiente corporis sed fugit optio voluptas inventore commodi.",
    },
    {
      id: 5,
      title: "Hiar Oil Combo Pack",
      category: "Hair",
      price: 55,
      image:
        "https://images.pexels.com/photos/10427810/pexels-photo-10427810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio nam beatae tenetur adipisci eaque, voluptatem voluptates. Magnam expedita mollitia eum, iure accusamus enim nesciunt impedit aliquid at molestiae pariatur assumenda nemo sapiente corporis sed fugit optio voluptas inventore commodi.",
    },
    {
      id: 6,
      title: "Clear Glass Perfume Bottle",
      category: "Perfume",
      price: 85,
      image:
        "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio nam beatae tenetur adipisci eaque, voluptatem voluptates. Magnam expedita mollitia eum, iure accusamus enim nesciunt impedit aliquid at molestiae pariatur assumenda nemo sapiente corporis sed fugit optio voluptas inventore commodi.",
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
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 10,
        }}
      >
        {products.slice(0, 6).map((item) => (
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
                    width: 180,
                    height: 170,
                    borderRadius: 10,
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
