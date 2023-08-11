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
import Back from "../../components/BackButton/Back";

const SignUpScreen = () => {
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
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
        position: "relative",
      }}
    >
      <View style={{ marginHorizontal: 10 }}>
        {/* Back button */}
        <View style={{ position: "absolute", left: 10 }}>
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
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 100,
            }}
          >
            <Image
              source={{
                uri: "https://i.ibb.co/yRnn19Z/Black-Beige-Minimalist-Simple-Modern-Typography-Vanilla-Cosmetics-Logo.png",
              }}
              style={{ width: 200, height: 200, resizeMode: "contain" }}
            />
          </View>
        </Pressable>
        {/* Logo View Ends Here */}

        {/* Input View Here */}
        <View style={{ marginTop: 100 }}>
          <TextInput
            style={{
              borderWidth: 0.5,
              borderColor: "#a7a7a7",
              fontSize: 16,
              padding: 10,
              paddingVertical: 14,
              borderRadius: 5,
            }}
            placeholder='Full Name'
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
              borderRadius: 5,
              marginTop: 10,
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
            keyboardType='  '
            autoCapitalize='none'
          />
          <TouchableOpacity onPress={handleLogin}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                padding: 14,
                backgroundColor: "dodgerblue",
                textAlign: "center",
                color: "white",
                marginTop: 14,
                borderRadius: 5,
              }}
            >
              Registar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogin}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                textAlign: "center",
                marginTop: 14,
                color: "gray",
                borderRadius: 5,
              }}
            >
              forget password?
            </Text>
          </TouchableOpacity>
        </View>
        {/* Input View Ends Here */}

        {/* Social Login View  Here */}
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={handleLogin}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                padding: 14,
                backgroundColor: "#f8f8f8",
                textAlign: "center",
                color: "blue",
                marginTop: 14,
                borderRadius: 5,
              }}
            >
              Sign in on Facebook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogin}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                padding: 14,
                backgroundColor: "#f8f8f8",
                textAlign: "center",
                color: "red",
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
              marginBottom: 30,
            }}
          >
            already have account? Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
