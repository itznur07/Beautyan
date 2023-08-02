import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import BannerSlider from "./components/Banner/Banner";
import FlatListComponent from "./components/FlatList/FlatList";
import Products from "./components/Products/Products";
import MyScrollView from "./components/ScrollView/ScrollView";
import Search from "./components/Search/Search";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={{ fontSize: 32, fontWeight: "500" }}>
            Find Most Popular
          </Text>
          <Text style={{ fontSize: 24, fontWeight: "500" }}>
            Beauty Products
          </Text>
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
    marginTop: 20,
    paddingVertical: 10,
  },
  content: {
    marginHorizontal: 10,
  },
});
