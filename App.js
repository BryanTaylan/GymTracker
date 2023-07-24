import { StatusBar } from "expo-status-bar";
import {
  Text,
  Image,
  SafeAreaView,
  View,
  Button,
  Alert,
  Platform,
  StyleSheet,

} from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import AppText from "./components/AppText";
import Card from "./components/Card";
import colors from "./app/colors";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import MessagesScreen from "./screens/MessagesScreen";
const imageChest = {
  uri: "https://cdn2.iconfinder.com/data/icons/fitness-outline-4/512/chest_strong_muscle_exercise_body_parts_medical_sports_man_fitness_anatomy-512.png",
};



export default function App() {
  return <MessagesScreen/>;
}
