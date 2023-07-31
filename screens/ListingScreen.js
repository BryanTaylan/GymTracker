import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../app/colors";
import Constants from "expo-constants";


const listings = [
  {
    id: 1,
    title: "Chest ",
    subTitle: "Today's Workout",
    image: require("../assets/Chest.png"),
  },
  {
    id: 2,
    title: "Back",
    subTitle: "Tomorrow's Workout",
    image: require("../assets/Back.png"),
  },
];

function ListingScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light

    }
})

export default ListingScreen;
