import { View } from "react-native";
import BannerSlider from "../../components/Banner/Banner";
import Products from "../../components/Products/Products";
import Search from "../../components/Search/Search";
import TopBar from "../../components/TopBar/TopBar";

const HomeScreen = () => {
  return (
    <View>
      <TopBar />
      <Search />
      <BannerSlider />
      <Products />
    </View>
  );
};

export default HomeScreen;
