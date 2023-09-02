import { Image } from "expo-image";
import { View } from "react-native";
import Swiper from "react-native-swiper";


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

  return (
    <View>
      <Swiper
        containerStyle={{ width: "100%", height: 260, borderRadius: 10 }}
        showsButtons={false}
        autoplay={true}
      >
        {data.map((slide) => (
          <View key={slide.id}>
            <Image
              source={{ uri: slide.imageUrl }}
              style={{ width: "100%", height: 250, borderRadius: 10 }}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default BannerSlider;
