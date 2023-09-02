import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BannerSlider from "../../components/Home/Banner/Banner";
import CategoryScrollView from "../../components/Home/CategoryScrollView/CategoryScrollView";
import Products from "../../components/Home/Products/Products";
import TopBar from "../../components/Home/TopBar/TopBar";
import TopHeading from "../../components/Home/TopHeading/TopHeading";
import Search from "../../components/Search/Search";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ paddingVertical: 10 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: 10 }}>
          
          <TopBar />
          <TopHeading />
          <Search />
          <CategoryScrollView />
          <BannerSlider />
          <Products />
        </View>
        <StatusBar style='auto' />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
