import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";

const MyScrollView = () => {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1541894057-5b49aa61d02b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1541894057-5b49aa61d02b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1541894057-5b49aa61d02b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1541894057-5b49aa61d02b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1541894057-5b49aa61d02b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
          }}
          style={styles.image}
        />
        {/* Add more items here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
  },
  image: {
    width: 350,
    height: 300,
    resizeMode: "contain",
  },
});

export default MyScrollView;
