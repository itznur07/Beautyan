import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { useProductsQuery } from "../../../redux/features/products/productsApi";

const NewProducts = () => {
  const { data, isLoading, isError } = useProductsQuery();
  const navigate = useNavigation();

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: "500" }}>New Arrival</Text>
      <View>
        <FlatList
          data={data}
          horizontal
          scrollEnabled
          contentContainerStyle={{ gap: 15 }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigate.navigate("ProductDetails", item)}
            >
              <View>
                <View
                  style={{
                    marginTop: 15,
                    backgroundColor: "#f9f9f9",
                    borderRadius: 10,
                  }}
                >
                  <Image
                    style={{
                      width: 190,
                      height: 160,
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
          )}
        />
      </View>
    </View>
  );
};

export default NewProducts;
