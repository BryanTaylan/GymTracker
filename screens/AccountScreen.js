import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import colors from "../app/colors";
import Icon from "../components/Icon";
import ListItemSeparatorComponent from "../components/lists/ListItemSeparator";

const menuItems = [
  {
    title: "My Workouts",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.primary,
    },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="John Smith"
          subTitle="johnsmith@gmail.com"
          image={require("../assets/iconprofile.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList 
            data={menuItems} 
            keyExtractor={menuItem => menuItem.title}
            ItemSeparatorComponent={ListItemSeparatorComponent}
            renderItem={({ item }) =>
            <ListItem 
                title={item.title}
                IconComponent={
                    <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                }
                onPress={() => navigation.navigate(item.targetScreen)}
                />    
        }
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={
            <Icon name="logout" backgroundColor="#000" />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,

    },
  
    container: {
    marginVertical: 20,
    
  },
});

export default AccountScreen;
