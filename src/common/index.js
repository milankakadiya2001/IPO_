import { Platform, Dimensions, StatusBar } from "react-native";
// import { DeviceInfo } from "react-native-web";

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 30 : StatusBar.currentHeight;
const HEADER_HEIGHT = Platform.OS === "ios" ? 44 : 56;


