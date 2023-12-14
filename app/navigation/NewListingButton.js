import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function NewListingButton({onPress}) {
  return (
     <TouchableOpacity onPress={onPress}>
     <View style={styles.container}>
         <MaterialCommunityIcons name="plus" color={colors.secondary} size={40}/>
     </View>
     </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",  
    backgroundColor: colors.primary,
      borderColor: colors.light,
      borderRadius: 400,
      borderWidth: 10,
      bottom: 20,
      height: 80,
      justifyContent: "center",
      width: 80,

  }
});

export default NewListingButton;