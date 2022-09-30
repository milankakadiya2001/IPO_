import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { COLORS } from "../constant";
import { ActivityIndicator } from "react-native-paper";
import Lottie from "lottie-react-native";

const Loader = ({ visible = false }) => {
  const { width, height } = useWindowDimensions();
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current?.play();

    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120);
  }, []);
  return (
    visible && (
      <View style={[styles.container, { height, width }]}>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.primary} />
          {/* <Lottie
            ref={animationRef}
            source={require("../Data/loader.json")}
            style={styles.loader}
            autoSize="true"
            resizeMode="cover"
            autoPlay
          /> */}
          {/* <Text style={{ marginLeft: 10, fontSize: 16 }}>Loading...</Text> */}
        </View>
      </View>
    )
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
    // backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
  loader: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    height: "95%",
    width: "95%",

  },
});
