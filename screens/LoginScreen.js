import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";

import Screen from "../components/Screen";
import colors from "../app/colors";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onChange = (text) => {
    console.log("text", text);
    setEmail(text);
  }

  return (
    <Screen>
      <Image
        style={styles.logo}
        source={require("../assets/GymTrackerPLus.png")}
        tintColor="black"
      />
      <AppTextInput
        icon="email"
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={text=> onChange(text)}
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={text=> setPassword(text)}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />
      <AppButton
        style={styles.button}
        title="Login"
        onPress={() => console.log(email, password)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  button: {},
});

export default LoginScreen;
