import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import BannerSlider from "../../components/Banner/Banner";
import Products from "../../components/Products/Products";
import Search from "../../components/Search/Search";
import TopBar from "../../components/TopBar/TopBar";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20, paddingVertical: 10 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: 10 }}>
          <View>
            <TopBar />
            <Search />
            <BannerSlider />
            <Products />
          </View>
        </View>
        <StatusBar style='auto' />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    paddingVertical: 10,
  },
});
