import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
// import TabBar from "./src/navigation/TabBar";
import { COLORS } from "./src/constant";
import StackNavigation from "./src/navigation/StackNavigation";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import client from "./src/graphql/client";


const THEME_COLOR = COLORS.primary;

const App = () => {
  console.log("====================================");
  console.log("client", client);
  console.log("====================================");
  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.bottomSafeArea}>
        <ApolloProvider client={client}>
          <StatusBar barStyle="light-content" />
          <StackNavigation />
        </ApolloProvider>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: THEME_COLOR,
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
