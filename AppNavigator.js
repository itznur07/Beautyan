import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import LoginScreen from "./Screen/LogInScreen/LoginScreen";
import SignUpScreen from "./Screen/SignUpScreen/SignUpScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
