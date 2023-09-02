import React, { useState } from "react";
import {
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const TopFilterInputButton = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
        <Text style={styles.buttonText}>
          {selectedFilter || "Filter"}
        </Text>
      </TouchableOpacity>
      <Modal
        visible={isDropdownVisible}
        animationType='fade'
        transparent={true}
        onRequestClose={() => setDropdownVisible(false)}
      >
        <TouchableOpacity
          style={styles.dropdownOverlay}
          activeOpacity={1}
          onPress={() => setDropdownVisible(false)}
        >
          <View style={styles.dropdown}>
            <TouchableOpacity
              onPress={() => handleFilterSelection("Option 1")}
              style={styles.dropdownItem}
            >
              <Text style={styles.dropdownItemText}>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleFilterSelection("Option 2")}
              style={styles.dropdownItem}
            >
              <Text style={styles.dropdownItemText}>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleFilterSelection("Option 3")}
              style={styles.dropdownItem}
            >
              <Text style={styles.dropdownItemText}>Option 3</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
      <TextInput style={styles.input} placeholder='Search' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    marginTop: 100,
  },
  button: {
    flex: 1,
    padding: 12,
    backgroundColor: "lightblue",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  input: {
    flex: 3,
    marginLeft: 8,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 0.5,
  },
  dropdownOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  dropdownItem: {
    paddingVertical: 12,
  },
  dropdownItemText: {
    fontSize: 16,
  },
});

export default TopFilterInputButton;
