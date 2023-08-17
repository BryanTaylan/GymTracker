import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../app/colors";

export function AppButton({ title, onPress, backgroundColor, textColor }) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: colors[backgroundColor]}]} onPress={onPress}>
      <Text style={[styles.text, {color: colors[textColor]}]}>{title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    position: "relative",
    bottom: 15,
    height: 75,
    marginVertical: 10,
  },
  text: {
    color:"white",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
