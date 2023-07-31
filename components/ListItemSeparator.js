import React from 'react';
import { StyleSheet, View} from 'react-native';
import colors from '../app/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';


function ListItemSeparator() {
    return (
        <View style={styles.separator}/> 
      
    );
}
const styles = StyleSheet.create({
    separator: {
        width: "100%",
        height: 1,
        backgroundColor: colors.light,
    }
})

export default ListItemSeparator;