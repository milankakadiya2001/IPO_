import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect } from "react";
import DHeader from "../component/DHeader";
// import NEWSDATA from "../Data/News.json";
import { GET_NEWS_DETAIL } from "../graphql/query";
import { COLORS, SIZES } from "../constant";
import { StackNav } from "../navigation/NavigationKeys";
import { useQuery } from "@apollo/client";
import Loader from "../component/Loader";
import typography from "../constant/Typography";
import { moderateScale } from "../constant/Common";
import flex from "../constant/flex";

const IpoNews = ({ navigation }) => {
  const { data, loading, error } = useQuery(GET_NEWS_DETAIL);
  const NEWSDATA = data?.News_news_connection?.edges?.map((item) => {
    return item.node;
  });

  console.log("====================================");
  console.log("NEWSDATA", NEWSDATA);
  console.log("====================================");
  console.log("loading", loading);
  console.log("====================================");
  console.log("error", error);

  if (loading) {
    const loading = true;
  }
  if (error) {
    return <Text>Error...</Text>;
  }
  if (error) return <pre>{error.message}</pre>;

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.darkWhite }}>
      <DHeader HName="Ipo News" navigation={navigation} />
      <Loader visible={loading} />
      <View style={{ flex: 1 }}>
        <FlatList
          data={NEWSDATA}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.container}
              onPress={(item) =>
                navigation.navigate(StackNav.DWebView, {
                  item: NEWSDATA,
                })
              }
            >
              <View style={{ width: "90%" }}>
                <View style={styles.cardImg}>
                  <Image
                    resizeMode="cover"
                    source={{ uri: item.image }}
                    style={styles.img}
                  />
                </View>
                <View style={styles.cardText}>
                  <Text numberOfLines={2} style={styles.HeadText}>
                    {item.title}
                  </Text>
                  <Text numberOfLines={3} style={styles.text}>
                    {item.description}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </View>
  );
};

export default IpoNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...flex.nonFlexCenter,
    paddingVertical: SIZES.marginVertical,
  },
  cardImg: {
    backgroundColor: "grey",
    margin: 2,
    borderRadius: 10,
  },
  img: {
    width: "100%",
    height: moderateScale(185),
    borderRadius: 10,
  },
  HeadText: {
    ...typography.fontSizes.f18,
    fontWeight: "700",
    color: COLORS.primary,
  },
  text: {
    ...typography.fontSizes.f14,
    color: "grey",
  },
  cardText: {
    padding: moderateScale(5),
  },
});
