import Icon from "./Icon";
import Images from "../constant/Image";
import Theme, { COLORS, SIZES, FONTS } from "./Theme";
const NEWS_API =
  "https://newsapi.org/v2/everything?q=Apple&from=2022-09-15&sortBy=popularity&apiKey=eec7a9f15cd049059b3f0cefaacd07b6";
export { Icon, Images, Theme, COLORS, SIZES, FONTS, NEWS_API };

import { StyleSheet } from "react-native";
import flex from "./flex";
import margin from "./margin";
import padding from "./padding";
import commonStyle from "./commonStyle";

export default DStyle = StyleSheet.create({
  ...flex,
  ...margin,
  ...padding,
  ...commonStyle
});


