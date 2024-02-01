import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Dimensions,
  Image,
} from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./src/navigators/HomeStack";

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack></HomeStack>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
