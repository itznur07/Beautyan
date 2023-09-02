import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BannerSlider from "../../components/Banner/Banner";
import CategoryScrollView from "../../components/CategoryScrollView/CategoryScrollView";
import Products from "../../components/Products/Products";
import Search from "../../components/Search/Search";
import TopBar from "../../components/TopBar/TopBar";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ paddingVertical: 10 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: 10 }}>
          <TopBar />
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
