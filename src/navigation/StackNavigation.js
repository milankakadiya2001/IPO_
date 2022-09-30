import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StackNav, TabNav } from "./NavigationKeys";
import { StackRoute } from "./NavigationRoutes";

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={TabNav.TabBar}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={StackNav.MyDrawer}
          component={StackRoute.MyDrawer}
        />
        <Stack.Screen
          name={StackNav.DetailPage}
          component={StackRoute.DetailPage}
        />
        <Stack.Screen name={StackNav.Web} component={StackRoute.Web} />
        <Stack.Screen
          name={StackNav.DWebView}
          component={StackRoute.DWebView}
        />
        <Stack.Screen name={StackNav.DScreen} component={StackRoute.DScreen} />
        <Stack.Screen name={StackNav.Loader} component={StackRoute.Loader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
