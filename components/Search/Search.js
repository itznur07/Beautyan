import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Search = () => {
  return (
    <View>
      <TextInput
        style={{
          borderWidth: 0.5,
          borderRadius: 5,
          borderColor: "#a4a5a4",
          padding: 14,
          marginVertical: 20,
          fontSize: 16,
          position: "relative",
        }}
        placeholder='Search products here'
      />
      <Icon
        style={{ position: "absolute", right: 24, top: 32 }}
        name='search'
        size={28}
        color='#a4a5a4'
      />
    </View>
  );
};

export default Search;
