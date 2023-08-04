import { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen = () => {
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
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#fff" }}
    >
      <View style={{ marginHorizontal: 10 }}>
        {/* Logo View Here */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Image
            source={{
              uri: "https://i.ibb.co/yRnn19Z/Black-Beige-Minimalist-Simple-Modern-Typography-Vanilla-Cosmetics-Logo.png",
            }}
            style={{ width: 200, height: 200, resizeMode: "contain" }}
          />
        </View>
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
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
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
            keyboardType='password'
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
              Login
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

        <TouchableOpacity>
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
            Don't have account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
