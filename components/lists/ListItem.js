import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { TouchableOpacity, TouchableHighlight } from "react-native";
import colors from "../../app/colors";
import AppText from "../AppText";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';


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
        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
      </View>
      <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25}/>
    </View>
    </TouchableHighlight>
  </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white"
  },
  detailsContainer: {
    marginLeft: 10,
    flex: 1,
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
