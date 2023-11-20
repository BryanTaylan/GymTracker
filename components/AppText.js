import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import defaultStyles from '../app/styles';

function AppText({ children, style, ...otherProps }) {
  return <Text style={[defaultStyles.text, style]} {...otherProps}> {children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "#000",
  },
});

export default AppText;
