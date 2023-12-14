import React, { useState } from "react";
import ListItem from "../components/lists/ListItem";
import { FlatList, StyleSheet, SafeAreaView, View } from "react-native";
import Constants from "expo-constants";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Swipeable from "react-native-gesture-handler/Swipeable";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import colors from "../app/colors";

const initialMessages = [
  {
    id: 1,
    title: "John Smith",
    description: "This is a great app!",
    image: require("../assets/iconprofile.png"),
  },
  {
    id: 2,
    title: "Smith John",
    description: "Greatest app ever made!",
    image: require("../assets/iconprofile.png"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "T1",
              description: "D1",
              image: require("../assets/iconprofile.png"),
            },
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/iconprofile.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    height: "100%",
    backgroundColor: colors.light
  },
});

export default MessagesScreen;
