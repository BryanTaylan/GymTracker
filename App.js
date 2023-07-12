import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  View,
  Button,
  Alert,
  Platform,
} from "react-native";

export default function App() {
  return (
    <>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          flexDirection: "row", //horizontal
          justifyContent: "center", //main
          alignItems: "center", // secondary
          alignContent: "center",
          
        }}
      >
        <View
          style={{
            backgroundColor: "black",
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            backgroundColor: "gray",
            width: 100,
            height: 100,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "green",
            width: 100,
            height: 100,
          }}
        />
      </View>
    </>
  );
}
