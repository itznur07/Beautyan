import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import searchImg from "../../assets/images/search-illus.svg";

const SearchProduct = () => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (text) => {
    setSearchText(text);
  };

  return (
    <SafeAreaView style={{ marginHorizontal: 10 }}>
      <View style={{ marginTop: 30 }}>
        <TextInput
          style={{
            borderWidth: 0.5,
            borderRadius: 5,
            borderColor: "#a4a5a4",
            padding: 14,
            marginBottom: 20,
            marginTop: 10,
            fontSize: 16,
            position: "relative",
          }}
          value={searchText}
          onChangeText={handleChange}
          placeholder='Search products here'
        />
        <Icon
          style={{ position: "absolute", right: 20, top: 24 }}
          name='search1'
          size={28}
          color='#a4a5a4'
        />
      </View>

      <View style={{ flex: 1, alignItems: "center", marginTop: 100 }}>
        <Image
          source={searchImg}
          style={{ width: 400, height: 400, resizeMode: "contain" }}
        />
      </View>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

export default SearchProduct;
