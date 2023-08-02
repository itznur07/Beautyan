import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const BannerSlider = () => {
  const data = [
    {
      id: "1",
      imageUrl:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "2",
      imageUrl:
        "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1136&q=80",
    },
    {
      id: "3",
      imageUrl:
        "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.image}>
      <Image
        source={{ uri: item.imageUrl }}
        style={{ flex: 1, borderRadius: 10, marginHorizontal: 5 }}
        resizeMode='cover'
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      {/* Slider indicator */}
      <View style={styles.sliderIndicator}>
        {data.map((item, index) => (
          <Icon
            key={item.id}
            name={index === 0 ? "circle" : "circle-thin"}
            size={10}
            color={index === 0 ? "white" : "#fff"}
            style={styles.indicatorIcon}
          />
        ))}
      </View>
    </View>
  );
};

export default BannerSlider;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 230,
    position: "relative",
  },
  image: {
    width: Dimensions.get("window").width,
    height: 230,
    borderRadius: 10,
  },
  sliderIndicator: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
  },
  indicatorIcon: {
    margin: 5,
  },
});
