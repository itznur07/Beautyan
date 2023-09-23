import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/logo.png";
import Back from "../../components/BackButton/Back";

const LoginScreen = () => {
  const navigate = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "user@example.com" && password === "password") {
      Alert.alert("Login Successful", "Welcome!");
    } else {
      Alert.alert("Login Failed", "Invalid email or password.");
    }
  };

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        backgroundColor: "#fff",
        position: "relative",
      }}
    >
      <View style={{ marginHorizontal: 20 }}>
        {/* Back button */}
        <View style={{ position: "absolute", top: 10 }}>
          <Pressable
            onPress={() => navigate.navigate("Root", { screen: "Home" })}
          >
            <Back />
          </Pressable>
        </View>

        {/* Logo View Here */}
        <Pressable
          onPress={() => navigate.navigate("Root", { screen: "Home" })}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 100,
            }}
          >
            <Image
              source={logo}
              style={{ width: 100, height: 100, resizeMode: "contain" }}
            />
          </View>
        </Pressable>
        {/* Logo View Ends Here */}

        {/* Input View Here */}
        <View style={{ marginTop: 40 }}>
          <TextInput
            style={{
              borderWidth: 0.5,
              borderColor: "#a7a7a7",
              fontSize: 16,
              padding: 10,
              paddingVertical: 14,
              borderRadius: 5,
            }}
            placeholder='Name'
            value={name}
            onChangeText={setName}
            keyboardType=''
            autoCapitalize='none'
          />

          <TextInput
            style={{
              borderWidth: 0.5,
              borderColor: "#a7a7a7",
              fontSize: 16,
              padding: 10,
              paddingVertical: 14,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            keyboardType=''
            autoCapitalize='none'
          />

          <TextInput
            style={{
              borderWidth: 0.5,
              borderColor: "#a7a7a7",
              fontSize: 16,
              padding: 10,
              paddingVertical: 14,
              borderRadius: 5,
              marginTop: 10,
            }}
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            keyboardType=''
            autoCapitalize='none'
          />
          <TouchableOpacity onPress={handleLogin}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                padding: 14,
                backgroundColor: "#000",
                textAlign: "center",
                color: "white",
                marginTop: 14,
                borderRadius: 5,
              }}
            >
              Registration
            </Text>
          </TouchableOpacity>
        </View>
        {/* Input View Ends Here */}

        {/* Social Login View  Here */}
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                padding: 14,
                backgroundColor: "#5CAFFF",
                textAlign: "center",
                color: "white",
                marginTop: 14,
                borderRadius: 5,
              }}
            >
              Sign in on Google
            </Text>
          </TouchableOpacity>
        </View>
        {/* Social Login View Ends Here */}

        <TouchableOpacity onPress={() => navigate.navigate("Login")}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              textAlign: "center",
              marginTop: 14,
              color: "gray",
              borderRadius: 5,
              marginBottom: 75,
            }}
          >
            Already have account? Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
