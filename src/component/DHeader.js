import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constant";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerActions } from "@react-navigation/native";
import flex from "../constant/flex";
import { moderateScale } from "../constant/Common";
import typography from "../constant/Typography";

export const DHeader = ({ HName, navigation }) => {
  return (
    <View
      style={{
        display: "flex",
        height: moderateScale(50),
        backgroundColor: COLORS.primary,
        ...flex.rowSpaceBetween,
      }}
    >
      <View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <MaterialCommunityIcons
            name="format-align-left"
            size={20}
            color={COLORS.white}
            style={{ marginLeft: moderateScale(20) }}
          />
        </TouchableOpacity>
      </View>
      {/* <View> */}
      <Text
        style={{
          color: COLORS.white,
          ...typography.fontSizes.f20,
          fontWeight: "600",
          letterSpacing: 1,
          marginLeft: moderateScale(-20),
        }}
      >
        {HName}
      </Text>
      {/* </View> */}
      <View></View>
    </View>
  );
};

export default DHeader;

const styles = StyleSheet.create({});
