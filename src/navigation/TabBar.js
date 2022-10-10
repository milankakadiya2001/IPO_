import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackRoute} from './NavigationRoutes';
import {TabNav} from './NavigationKeys';
import {COLORS, SIZES} from '../constant';
import {
  MAINLINE,
  MAINLINEHIGHLIGHT,
  NEWS,
  NEWSHIGHLIGHT,
  OFFER,
  OFFERHIGHLIGHT,
  SME,
  SMEHIGHLIGHT,
} from '../assets/svg';
import {moderateScale} from '../constant/Common';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={TabNav.MainlineIpo}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name={TabNav.MainlineIpo}
        component={StackRoute.MainlineIpo}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.tabBarIcon}>
                <MAINLINE width={SIZES.tabIcon} height={SIZES.tabIcon} />
                <Text style={styles.tabBarTextHighlight}>Mainline IPO</Text>
              </View>
            ) : (
              <View style={styles.tabBarIcon}>
                <MAINLINEHIGHLIGHT
                  width={SIZES.tabIcon}
                  height={SIZES.tabIcon}
                />
                <Text style={styles.tabBarText}>Mainline IPO</Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name={TabNav.SmeIpo}
        component={StackRoute.SmeIpo}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.tabBarIcon}>
                <SMEHIGHLIGHT width={SIZES.tabIcon} height={SIZES.tabIcon} />
                <Text style={styles.tabBarTextHighlight}>Sme IPO</Text>
              </View>
            ) : (
              <View style={styles.tabBarIcon}>
                <SME width={SIZES.tabIcon} height={SIZES.tabIcon} />
                <Text style={styles.tabBarText}>Sme IPO</Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name={TabNav.IpoNews}
        component={StackRoute.IpoNews}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.tabBarIcon}>
                <NEWS width={SIZES.tabIcon} height={SIZES.tabIcon} />
                <Text style={styles.tabBarTextHighlight}>News</Text>
              </View>
            ) : (
              <View style={styles.tabBarIcon}>
                <NEWSHIGHLIGHT width={SIZES.tabIcon} height={SIZES.tabIcon} />
                <Text style={styles.tabBarText}>News</Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name={TabNav.Offer}
        component={StackRoute.Offer}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.tabBarIcon}>
                <OFFER width={SIZES.tabIcon} height={SIZES.tabIcon} />
                <Text style={styles.tabBarTextHighlight}>Offer</Text>
              </View>
            ) : (
              <View style={styles.tabBarIcon}>
                <OFFERHIGHLIGHT width={SIZES.tabIcon} height={SIZES.tabIcon} />
                <Text style={styles.tabBarText}>Offer</Text>
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBarIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarText: {
    fontSize: moderateScale(14),
    color: COLORS.black,
    fontWeight: 'bold',
  },
  tabBarTextHighlight: {
    fontSize: moderateScale(14),
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});
