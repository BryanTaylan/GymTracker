import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../app/colors";

export function AppButton({
  title,
  onPress,
  type = "button",
  backgroundColor,
  textColor,
}) {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress} type={type}>
      <Text style={[styles.text]}>{title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    position: "relative",
    bottom: -25,
    height: 55,
    marginVertical: 10,
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
