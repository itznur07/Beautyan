import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Image, Text, View } from "react-native";

const SplashScreen = () => {
  const navigate = useNavigation();

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      navigate.navigate("Splash");
    }, 3000);
    return () => {
      clearTimeout(splashTimeout);
    };
  }, [navigate]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 300,
      }}
    >
      <Image
        source={{ uri: "https://legacy.reactjs.org/logo-og.png" }}
        style={{ width: 400, height: 500, resizeMode: "cover" }}
      />
      <Text style={{ textAlign: "center", fontSize: 40 }}>
        Welcome to 465 Filter
      </Text>
    </View>
  );
};

export default SplashScreen;
