import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { TouchableOpacity, TouchableHighlight } from "react-native";
import colors from "../app/colors";
import AppText from "./AppText";
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({ title, subTitle, image, onPress, renderRightActions, IconComponent }) {
  return (
  <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight 
    underlayColor={colors.light}
    onPress={onPress}>
    <View style={styles.container}>
      {IconComponent}
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
      </View>
    </View>
    </TouchableHighlight>
  </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white"
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent:"center"

  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: 500,
  },
  subTitle: {
    color: "gray",
  },
});

export default ListItem;
