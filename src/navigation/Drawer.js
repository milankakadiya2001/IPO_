import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Share,
  Linking,
} from "react-native";
import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { StackRoute } from "./NavigationRoutes";
import { StackNav, TabNav } from "./NavigationKeys";
import { COLORS, Images, SIZES } from "../constant";
import Break from "../component/Break";
import DrawerBtn from "../component/DrawerBtn";
import Regulation from "../Data/Regulation.json";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { moderateScale } from "../constant/Common";
import typography from "../constant/Typography";

const Drawer = createDrawerNavigator();

function DrawerView(navigation) {
  const Back = navigation.navigation.navigation;
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const PricayPolicy = () => {
    Back.navigate(StackNav.DScreen, { item: Regulation[0] });
  };
  const TermsOfUse = () => {
    Back.navigate(StackNav.DScreen, { item: Regulation[1] });
  };

  return (
    // <SafeAreaView style={styles.topSafeArea} />
    // <SafeAreaView style={styles.topSafeArea}>
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <ImageBackground
          resizeMode="cover"
          source={Images.DrawerBg}
          style={styles.img}
        >
          <View style={styles.container}>
            <Image source={Images.User} style={styles.user} />
            <Text style={styles.text}>Hello Investor!</Text>
          </View>
        </ImageBackground>
        <View style={styles.root}>
          <DrawerBtn
            Head="Home"
            name="home"
            onPress={() => Back.navigate(TabNav.TabBar)}
          />
          <Break />
          <View style={{ marginVertical: 10 }}>
            <DrawerBtn
              Head="Share with Friends"
              name="share-variant"
              onPress={onShare}
            />
            <DrawerBtn Head="Rate the App" name="star" onPress={onShare} />
            <DrawerBtn
              Head="Contact Us"
              name="card-account-mail"
              onPress={() =>
                Linking.openURL(
                  "mailto:support@example.com?subject=SendMail&body=Description"
                )
              }
              title="support@example.com"
            />
          </View>
          <Break />
          <View style={{ marginVertical: 10 }}>
            <DrawerBtn
              Head="Privacy Policy"
              name="cloud-print"
              onPress={PricayPolicy}
            />
            <DrawerBtn
              Head="Terms & Conditions"
              name="printer-pos"
              onPress={TermsOfUse}
            />
          </View>
          <Break />
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <MaterialCommunityIcons
              name="instagram"
              size={30}
              color={COLORS.primary}
            />
            <MaterialCommunityIcons
              name="facebook"
              size={30}
              color={COLORS.primary}
            />
            <MaterialCommunityIcons
              name="twitter"
              size={30}
              color={COLORS.primary}
            />
            <MaterialCommunityIcons
              name="youtube"
              size={30}
              color={COLORS.primary}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const MyDrawer = (navigation) => {
  return (
    <Drawer.Navigator
      initialRouteName={TabNav.TabBar}
      screenOptions={{
        headerShown: false,
      }}  
      drawerContent={(props) => (
        <DrawerView {...props} navigation={navigation} />
      )}
    >
      {/* <Drawer.Screen name={StackNav.DHeader} component={StackRoute.DHeader} /> */}
      <Drawer.Screen name={TabNav.TabBar} component={StackRoute.TabBar} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: moderateScale(20),
    bottom: moderateScale(20),
  },
  text: {
    color: COLORS.white,
    fontWeight: "500",
    marginTop: 5,
    ...typography.fontSizes.f18,
  },
  img: {
    height: moderateScale(210),
    width: "100%",
  },
  user: {
    height: 85,
    width: 85,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLORS.white,
    marginBottom: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  root: {
    backgroundColor: COLORS.white,
  },
});
