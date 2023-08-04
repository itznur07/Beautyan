import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";

const TopBar = () => {
  const navigate = useNavigation();

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
        <Icon name='map-marker-alt' size={20} />
      </View>
      <View>
        <Text style={{ color: "gray", fontSize: 14 }}>California, USA</Text>
      </View>
      <View style={{ position: "relative" }}>
        <TouchableOpacity>
          <Icon
            onPress={() => {
              navigate.navigate("Login");
            }}
            name='shopping-bag'
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;
