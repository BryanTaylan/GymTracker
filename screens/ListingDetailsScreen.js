import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../app/colors";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View style={styles.background}>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
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
  background: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: "100%",
  },

  detailsContainer: {
    padding: 20,
    backgroundColor: colors.secondary,
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
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
