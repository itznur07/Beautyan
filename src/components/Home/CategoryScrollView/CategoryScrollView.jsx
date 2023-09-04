import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../../redux/features/filters/filterSlice";

const CategoryScrollView = () => {
  const categoryList = [
    "All",
    "Hair",
    "Face",
    "Body",
    "Eye",
    "Makeup",
    "Perfume",
  ];

  const [activeCategory, setActiveCategory] = useState(categoryList[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeStatus(activeCategory));
  }, [activeCategory]);

  const renderItem = ({ item }) => {
    const isActive = item === activeCategory;

    return (
      <TouchableOpacity
        style={[styles.categoryItem, isActive && styles.activeCategoryItem]}
        onPress={() => setActiveCategory(item)}
      >
        <Text style={isActive && styles.activeText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginBottom: 15 }}
    >
      <FlatList
        data={categoryList}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    paddingHorizontal: 30,
    paddingVertical: 8,
    marginRight: 10,
    borderWidth: 0.5,
    borderRadius: 24,
  },
  activeCategoryItem: {
    backgroundColor: "black",
  },
  activeText: {
    color: "white",
  },
});

export default CategoryScrollView;
