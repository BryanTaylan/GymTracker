import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik, useFormikContext } from "formik";
import Screen from "../components/Screen";
import colors from "../app/colors";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import * as Yup from "yup";
import AppText from "../components/AppText";
import { View, TextInput, Button, Text } from "react-native";
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/GymTrackerPLus.png")}
        tintColor="black"
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          icon="email"
          placeholder="Email Address"
          style={styles.textInput}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          icon="lock"
          placeholder="Password"
          style={styles.textInput}
          textContentType="password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.secondary
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
