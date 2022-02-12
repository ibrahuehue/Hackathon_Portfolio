import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Portfolio from "./src/screens/Portfolio";
import Testimonials from "./src/screens/Testimonials";
import Details from "./src/screens/Details";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import ContactForm from "./src/screens/ContactForm";

export default function App() {
  const BottomTabScreens = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Portfolio"
          component={Portfolio}
          options={{
            tabBarLabel: "Portfolio",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="photo" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Testimonials"
          component={Testimonials}
          options={{
            tabBarLabel: "Testimonials",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="questioncircleo" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="ContactForm"
          component={ContactForm}
          options={{
            tabBarLabel: "Contact",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="questioncircleo" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name=" "
          component={BottomTabScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
