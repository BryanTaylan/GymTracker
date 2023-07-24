import { React, Image, StyleSheet, View } from "react-native";
import colors from "../app/colors";
const imageView = {
  uri: "https://images.squarespace-cdn.com/content/v1/59370fb86b8f5b0c2917fb42/1616990393359-IH9QE468XHGDZF68WDZI/DSC05545.jpg?format=2500w",
};
import { MaterialCommunityIcons} from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={50} />
      </View>
      <View style={styles.confirmIcon}>
        <MaterialCommunityIcons name="check" color="white" size={50} /> 
      </View>
      <Image style={styles.imageView} source={imageView} />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 30,
    zIndex: 1000,
  },

  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  confirmIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    right: 30,
    zIndex: 1000,
  },
  imageView: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
