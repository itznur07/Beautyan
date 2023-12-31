import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { changeKey } from "../../../redux/features/filters/filterSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch(changeKey(searchText));
  }, [searchText]);

  const handleChange = (text) => {
    setSearchText(text);
  };

  return (
    <View>
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
    </View>
  );
};

export default Search;
