import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { useProductsQuery } from "../../../redux/features/products/productsApi";

const Products = () => {
  const navigate = useNavigation();
  const { searchKey, status } = useSelector((state) => state.filters);
  const { data: products, isLoading, isError } = useProductsQuery();

  const searchProduct = (product) =>
    product?.title?.toLowerCase()?.includes(searchKey);

  const searchCategory = (product) => {
    if (status === "All") {
      return product.category;
    }
    if (status !== "All") {
      return product?.category?.includes(status);
    }
  };

  return (
    <View
      style={{
        marginVertical: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "500" }}>All Products</Text>
        <View style={{ marginRight: 10 }}>
          <TouchableOpacity>
            <AntDesign name='filter' size={28} />
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
        {products
          ?.filter(searchProduct)
          ?.filter(searchCategory)
          ?.slice(0, 4)
          ?.map((item) => (
            <View>
              <Pressable
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
                          onPress={() =>
                            navigate.navigate("ProductDetails", item)
                          }
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
            </View>
          ))}
      </View>
    </View>
  );
};
export default Products;
