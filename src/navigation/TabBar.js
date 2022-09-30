import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackRoute } from "./NavigationRoutes";
import { TabNav } from "./NavigationKeys";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, SIZES } from "../constant";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={TabNav.MainlineIpo}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === TabNav.MainlineIpo) {
            iconName = focused ? "chart-box" : "chart-box-outline";
          } else if (route.name === TabNav.SmeIpo) {
            iconName = focused ? "chart-line-stacked" : "chart-line";
          } else if (route.name === TabNav.Offer) {
            iconName = focused ? "file-chart" : "file-chart-outline";
          } else if (route.name === TabNav.IpoNews) {
            iconName = focused ? "tag-text" : "tag-text-outline";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: COLORS.primary,
        inactiveTintColor: COLORS.secondary,
        labelStyle: { fontSize: 12, fontWeight: "bold" },
      }}
    >
      <Tab.Screen
        name={TabNav.MainlineIpo}
        component={StackRoute.MainlineIpo}
        options={{
          title: "Mainline Ipo",
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: SIZES.h3,
          },
        }}
      />
      <Tab.Screen
        name={TabNav.SmeIpo}
        component={StackRoute.SmeIpo}
        options={{
          title: "Sme Ipo",
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: SIZES.h3,
          },
        }}
      />
      <Tab.Screen
        name={TabNav.IpoNews}
        component={StackRoute.IpoNews}
        options={{
          title: "News",
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: SIZES.h3,
          },
        }}
      />
      <Tab.Screen
        name={TabNav.Offer}
        component={StackRoute.Offer}
        options={{
          title: "Offer",
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: SIZES.h3,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;

const styles = StyleSheet.create({});
