import { Image, Text, View } from "react-native";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Pure Oil for Hiar",
      image:
        "https://images.unsplash.com/photo-1643123158509-b07b9fd5e802?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "Best Sampoo for Hiar",
      image:
        "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "Natureal Face creams for woman",
      image:
        "https://images.unsplash.com/photo-1601049315503-07926a49f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    },
    {
      id: 4,
      title: "Best Sampoo for Hiar",
      image:
        "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <View
      style={{
        marginVertical: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "500", marginBottom: 10 }}>
        New Arrival
      </Text>
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
          <View key={item.id}>
            <Image
              style={{
                width: 190,
                height: 190,
                resizeMode: "contain",
                borderRadius: 10,
              }}
              source={{ uri: item.image }}
            />
          </View>
        ))}
      </View>
    </View>
  );
};
export default Products;
