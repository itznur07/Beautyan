import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NotLogged = () => {
  const navigate = useNavigation();

  return (
    <SafeAreaView style={{ flex: 4, flexDirection: "column" }}>
      <View
        style={{
          position: "relative",
          flex: 1.2,
          backgroundColor: "#ddd",
          top: -30,
        }}
      ></View>
      <View style={{ flex: 3 }}>
        <View
          style={{
            position: "absolute",
            top: "-20%",
            left: "30%",
          }}
        >
          <View
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 3,
              borderColor: "#ddd",
              backgroundColor: "#aaa",
              outlineWidth: 0,
            }}
          ></View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{ textAlign: "center", fontSize: 20, fontWeight: "500" }}
            >
              User N/A
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              example@gmail.com
            </Text>
          </View>
        </View>
        <View
          style={{ top: "60%", flexDirection: "row", justifyContent: "center" }}
        >
          <Pressable onPress={() => navigate.navigate("Login")}>
            <Text
              style={{
                backgroundColor: "dodgerblue",
                padding: 10,
                paddingHorizontal: 20,
                borderRadius: 5,
                fontSize: 20,
                color: "#fff",
                fontWeight: "500",
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

export default NotLogged;
