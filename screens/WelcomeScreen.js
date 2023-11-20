import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
const image = {
  uri: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
};
import { AppButton } from "../components/AppButton";

function WelcomeScreen({navigation}) {
  {
  }
  return (
    <ImageBackground blurRadius={5} style={styles.background} source={image}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/GymTrackerPLus.png")}
        />
        <Text style={styles.tagLine}>
          GymTracker+
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          backgroundColor="primary"
          onPress={() => navigation.navigate("Login")}
          styles={styles.login}
          textColor="secondary"
        />
        <AppButton
          title="Register"
          backgroundColor="secondary"
          textColor="primary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    
  },

  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },

  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  tagLine: {
    color: "#dcdcdc",
    fontSize: 14,
    paddingVertical: 2,
    fontWeight: "bold",
    fontStyle: "italic",
    top: -20
  },

  registerButton: {
    width: "100%",
    height: 90,
    backgroundColor: "#dcdcdc",
  },
});

export default WelcomeScreen;
