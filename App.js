import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import LoginScreen from "./Screen/LogInScreen/LoginScreen";
import ProductDetails from "./Screen/ProductDetails/ProductDetails";
import SearchProduct from "./Screen/SearchScreen/Search";
import ShoppingCart from "./Screen/ShoppingCartScreen/ShoppingCart";
import SignUpScreen from "./Screen/SignUpScreen/SignUpScreen";
import NotLogged from "./Screen/UserProfile/NotLogged";
import Profile from "./Screen/UserProfile/Profile";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  const isLogged = true;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
        showLabel: false,
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='home' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchProduct}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='search1' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={isLogged ? NotLogged : Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='user' size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Root'
        screenOptions={{ headerShown: false, headerMode: "none" }}
      >
        <Stack.Screen name='Root' component={Root} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Signup' component={SignUpScreen} />
        <Stack.Screen name='ProductDetails' component={ProductDetails} />
        <Stack.Screen name='ShoppingCart' component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
