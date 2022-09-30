import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, SIZES } from '../constant';


const DrawerBtn = ({Head, onPress, name}) => {
  
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        height: 50,
      }}
    >
      <MaterialCommunityIcons
        name={name}
        size={25}
        color={COLORS.primary}
        style={{ marginLeft: 20 }}
      />
      <Text style={styles.rootText}>{Head}</Text>
    </TouchableOpacity>
  );
}

export default DrawerBtn

const styles = StyleSheet.create({
  rootText: {
    color: COLORS.primary,
    fontSize: SIZES.body3,
    fontWeight: "500",
    marginLeft: 20,
  },
});