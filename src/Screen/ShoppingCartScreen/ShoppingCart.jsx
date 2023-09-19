import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { FlatList, Pressable, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import cartEmpty from "../../assets/images/cart-empty.png";
import Back from "../../components/BackButton/Back";
import { useGetCartsQuery } from "../../redux/features/carts/cartsApi";
import CartItem from "./CartItem/CartItem";

const ShoppingCart = () => {
  const navigate = useNavigation();
  const { data: carts, isLoading, isError } = useGetCartsQuery();

  const subTotal = carts?.reduce((prevData, item) => prevData + item.price, 0);

  const renderItem = ({ item }) => (
    <View style={{ marginVertical: 10 }}>
      <CartItem {...item} />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 7 }}>
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
      <View style={{ flex: 5, marginHorizontal: 10, marginTop: 14 }}>
        <FlatList
          data={carts?.slice(0, 5)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/** Checkout view end here */}
      {carts?.length > 0 ? (
        <View style={{ flex: 2, marginHorizontal: 10, marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Order Info</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <View>
              <Text>Subtotal:</Text>
              <Text>Delivery:</Text>
              <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 2 }}>
                Total:
              </Text>
            </View>
            <View>
              <Text style={{ textAlign: "center" }}>${subTotal}.00</Text>
              <Text style={{ textAlign: "center" }}>$50.00</Text>
              <View style={{ borderWidth: 0.5, marginVertical: 2 }}></View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                ${subTotal + 50}.00
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                backgroundColor: "#000",
                color: "#fff",
                fontSize: 16,
                fontWeight: "500",
                marginTop: 14,
                paddingVertical: 10,
                borderRadius: 5,
              }}
            >
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 200,
            left: 75,
          }}
        >
          <Image
            style={{ width: 250, height: 250, resizeMode: "cover" }}
            source={cartEmpty}
          />
          <Text style={{ fontSize: 20, fontWeight: "500", color: "gray" }}>
            Empty Carts!
          </Text>
        </View>
      )}
      {/** Checkout view end here */}
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

export default ShoppingCart;
