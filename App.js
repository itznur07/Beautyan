import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import BannerSlider from "./components/Banner/Banner";
import FlatListComponent from "./components/FlatList/FlatList";
import Products from "./components/Products/Products";
import MyScrollView from "./components/ScrollView/ScrollView";
import Search from "./components/Search/Search";
import TopBar from "./components/TopBar/TopBar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <TopBar />
          
          <Search />
          <BannerSlider />

          <Products />
          <Text style={{ fontSize: 24, fontWeight: "500" }}>
            FlatList Slider
          </Text>
          <FlatListComponent />
          <Text style={{ fontSize: 24, fontWeight: "500" }}>Scroll View</Text>
          <MyScrollView />
          <StatusBar style='auto' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    paddingVertical: 10,
  },
  content: {
    marginHorizontal: 10,
  },
});
