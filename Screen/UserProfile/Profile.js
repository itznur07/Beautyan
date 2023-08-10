import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { Alert, FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/AntDesign";

const Profile = () => {
  const profileOptions = [
    {
      id: 1,
      title: "Favorits",
      icon: "hearto",
    },
    {
      id: 2,
      title: "Orders",
      icon: "car",
    },
    {
      id: 3,
      title: "Cart",
      icon: "shoppingcart",
    },
    {
      id: 4,
      title: "Delete Account",
      icon: "deleteuser",
    },
    {
      id: 5,
      title: "Edit Profile",
      icon: "edit",
    },
    {
      id: 6,
      title: "Logout",
      icon: "logout",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 4, flexDirection: "column" }}>
      <View
        style={{
          position: "relative",
          flex: 1.2,
          backgroundColor: "#ddd",
          top: -30,
        }}
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
          }}
          style={{ position: "absolute", width: "100%", height: "100%" }}
          contentFit='cover'
        />
      </View>
      <View style={{ flex: 3 }}>
        <View
          style={{
            position: "absolute",
            top: "-20%",
            left: "30%",
          }}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
            }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 3,
              borderColor: "#ddd",
              outlineWidth: 0,
            }}
            contentFit='cover'
          />
          <View style={{ marginTop: 10, right: 20 }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              Rafsan kabir
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              nuruddinalway99@gmail.com
            </Text>
          </View>
        </View>

        <View style={{ top: "25%", marginHorizontal: 20 }}>
          <FlatList
            data={profileOptions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable onPress={() => Alert.alert(`${item.title} Items`)}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    marginTop: 30,
                  }}
                >
                  <Icon name={item.icon} size={24} />
                  <Text style={{ fontSize: 20, fontWeight: "500" }}>
                    {item.title}
                  </Text>
                </View>
              </Pressable>
            )}
          />
        </View>
      </View>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

export default Profile;
