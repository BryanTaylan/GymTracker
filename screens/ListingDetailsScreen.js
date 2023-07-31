import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../app/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/Chest.png")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}> Chest Workout</AppText>
        <AppText style={styles.price}>$9.99</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/iconprofile.png")}
            title="John Smith"
            subTitle="Certified Lifting Coach"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },

  price: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    left: -10,
  },
  userContainer:{
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
