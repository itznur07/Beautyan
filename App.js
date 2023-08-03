import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import BottomTabNavigator from "./Navigation/BottomTabNavigator";
import LoginScreen from "./Screen/LogInScreen/LoginScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <NavigationContainer>
            <LoginScreen />
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <BottomTabNavigator />
            </View>
          </NavigationContainer>
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
