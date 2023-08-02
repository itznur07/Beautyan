import { Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Search = () => {
  return (
    <View>
      <View>
        <Text style={{ fontSize: 32, fontWeight: "500" }}>
          Find Most Popular
        </Text>
        <Text style={{ fontSize: 24, fontWeight: "500" }}>Beauty Products</Text>
      </View>
      <View>
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
          placeholder='Search products here'
        />
        <Icon
          style={{ position: "absolute", right: 20, top: 24 }}
          name='search'
          size={28}
          color='#a4a5a4'
        />
      </View>
    </View>
  );
};

export default Search;
