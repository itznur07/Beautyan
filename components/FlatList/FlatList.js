import { FlatList, Image, StyleSheet } from "react-native";

const FlatListComponent = () => {
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
    }
  ];

  return (
    <FlatList
      style={styles.flatlist}
      data={products}
      pagingEnabled={true}
      horizontal={true}
      keyExtractor={(item, index) => item.id + index}
      renderItem={({ item }) => {
        return (
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 300,
    resizeMode: "contain",
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default FlatListComponent;
