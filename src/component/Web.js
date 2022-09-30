import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, SIZES } from "../constant";
import flex from "../constant/flex";
import { moderateScale } from "../constant/Common";

const Web = ({ navigation, route }) => {
  const link = route.params.item;
  console.log('====================================');
  console.log("link", link);
  console.log('====================================');
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.root}>
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={20}
            color={COLORS.white}
          />
        </TouchableOpacity>

        <Text
          // numberOfLines={1}
          style={{
            color: COLORS.white,
            fontSize: SIZES.h4,
            fontWeight: "600",
            letterSpacing: 1,
          }}
        >
          Allotment Status
        </Text>
        <View></View>
      </View>
      <WebView
        source={{ uri: link }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
      />
    </View>
  );
};

export default Web;

const styles = StyleSheet.create({
  root: {
    height: moderateScale(50),
    backgroundColor: COLORS.primary,
    paddingHorizontal: moderateScale(20),
    ...flex.rowSpaceBetween,
  },
});
