import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const Profile = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <Text>User Profile</Text>
      </View>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

export default Profile;
