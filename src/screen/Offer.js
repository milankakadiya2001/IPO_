import {
  Button,
  FlatList,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Children, useCallback, useEffect, useRef } from "react";
import DHeader from "../component/DHeader";
// import { dummyData } from "../Data/Data";
import { COLORS, SIZES } from "../constant";
import { useQuery } from "@apollo/client";
import { GET_OFFER_DETAIL } from "../graphql/query";
import Loader from "../component/Loader";
import flex from "../constant/flex";
import { moderateScale } from "../constant/Common";
import typography from "../constant/Typography";

const Offer = ({ navigation }) => {
  const { data, loading, error } = useQuery(GET_OFFER_DETAIL);
  const OFFER = data?.Offer_offer_connection?.edges?.map((item) => {
    return item.node;
  });

  console.log("====================================");
  console.log("OFFER", OFFER);
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
    <View style={{ flex: 1, marginBottom: 20, backgroundColor: COLORS.darkWhite }}>
      <DHeader HName="Offer" navigation={navigation} />
      <Loader visible={loading} />
      <View style={{ marginBottom: 20 }}>
        <FlatList
          data={OFFER}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.container}
              onPress={() => Linking.openURL(item.link)}
            >
              <View style={{ width: "90%" }}>
                <View style={styles.cardImg}>
                  <Image
                    resizeMode="cover"
                    source={{ uri: item.url }}
                    style={styles.img}
                  />
                </View>
                <View style={styles.cardText}>
                  <Text style={styles.HeadText}>{item.title}</Text>
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

export default Offer;

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
