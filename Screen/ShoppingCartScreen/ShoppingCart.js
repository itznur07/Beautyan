import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Back from "../../components/BackButton/Back";
import CartItem from "./CartItem/CartItem";

const ShoppingCart = () => {
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

  const renderItem = ({ item }) => (
    <View style={{ marginVertical: 10}}>
      <CartItem {...item} />
    </View>
  );

  return (
    <SafeAreaView>
      {/* Back Button */}
      <Pressable
        onPress={() => {
          navigate.navigate("Root", { screen: "Home" });
        }}
      >
        <View
          style={{
            margin: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Back />
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Cart</Text>
        </View>
      </Pressable>
      {/* Back Button Ends */}

      {/* Cart Item View */}
      <View style={{ marginHorizontal: 10, marginTop: 20 }}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* Cart Item View Ends */}

      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

export default ShoppingCart;
