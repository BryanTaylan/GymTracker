import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../app/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="trash-can" size={35} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 70,
    height: "100%",
    justifyContent: "center",
    backgroundColor: colors.danger,
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
