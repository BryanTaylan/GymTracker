import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import useLocation from "../app/hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array()
    .min(1, "Please select at least one image")
    .label("Images"),
});

const categories = [
  { label: "Workout 1", value: 1, backgroundColor: "black", icon: "dumbbell" },
  { label: "Workout 2", value: 2, backgroundColor: "black", icon: "dumbbell" },
  { label: "Workout 3", value: 3, backgroundColor: "black", icon: "dumbbell" },
  { label: "Workout 4", value: 4, backgroundColor: "black", icon: "dumbbell" },
  { label: "Workout 5", value: 5, backgroundColor: "black", icon: "dumbbell" },
  { label: "Workout 6", value: 6, backgroundColor: "black", icon: "dumbbell" },
  { label: "Workout 7", value: 7, backgroundColor: "black", icon: "dumbbell" },
  { label: "Workout 8", value: 8, backgroundColor: "black", icon: "dumbbell" },
  { label: "Workout 9", value: 9, backgroundColor: "black", icon: "dumbbell" },
];

function ListingEditScreen() {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Total Exercises"
          width={130}
        />
        <Picker
          items={categories}
          name="category"
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
          width="50%"
          numberOfColumns={3}
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
