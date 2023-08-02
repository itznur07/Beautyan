import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";

const TopBar = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 4,
      }}
    >
      <View>
        <Icon name='map-marker-alt' size={24} color={"a5a5a5"} />
      </View>
      <View>
        <Text style={{ color: "gray", fontSize: 14 }}>California, USA</Text>
      </View>
      <View>
        <Icon name='shopping-bag' size={24} color={"a5a5a5"} />
      </View>
    </View>
  );
};

export default TopBar;
