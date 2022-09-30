import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constant";
import { DHeader } from "../../component/DHeader";
import Card from "../../component/Card";
import DATA from "../../component/Data.json";
import { moderateScale } from "../../constant/Common";
import Loader from "../../component/Loader";
import { useQuery } from "@apollo/client";
import {
  GET_SME_LISTED_COMPANY_DETAIL,
  GET_SME_COMPANY_DETAIL,
} from "../../graphql/query";


const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const SmeIpo = ({ navigation }) => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [refreshing, setRefreshing] = React.useState(false);

  const queryMultiple = () => {
    const res1 = useQuery(GET_SME_COMPANY_DETAIL);
    const res2 = useQuery(GET_SME_LISTED_COMPANY_DETAIL);
    return [res1, res2];
  };
  const [res1, res2] = queryMultiple();
  const loading = res1.loading || res2.loading;
  const error = res1.error || res2.error;
  const data = res1.data || res2.data;
  const refetch = res1.refetch || res2.refetch;

  const Unlisted = res1?.data?.Mainline_company_detail_connection?.edges.map(
    (item) => {
      return item.node;
    }
  );

  const Listed = res2?.data?.Mainline_company_detail_connection?.edges?.map(
    (item) => {
      return item.node;
    }
  );

  tabIndex === 0;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2500)
      .then(refetch())
      .then(() => setRefreshing(false));
  }, []);

  console.log("====================================");
  console.log("data>>>>>>", Unlisted);
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
      <DHeader HName="Sme Ipo" navigation={navigation} />
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setTabIndex(0)}
          style={[styles.tabContainer, tabIndex === 0 && styles.activeTab]}
        >
          <Text
            style={[styles.tabText, tabIndex === 0 && styles.activeTabText]}
          >
            Unlisted
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setTabIndex(1)}
          style={[styles.tabContainer, tabIndex != 0 && styles.activeTab]}
        >
          <Text style={[styles.tabText, tabIndex != 0 && styles.activeTabText]}>
            Listed
          </Text>
        </TouchableOpacity>
      </View>
      <Loader visible={loading} />
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        {/* <Carousel /> */}
        <FlatList
          data={tabIndex == 0 ? Unlisted : Listed}
          showsVerticalScrollIndicator={false}
          onRefresh={onRefresh}
          refreshing={refreshing}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("DetailPage", { item: item })}
            >
              <Card
                logo={{ uri: item.company_img }}
                CName={item.company_name}
                SDate={item.s_date}
                EDate={item.e_date}
                Year={item.year}
                MinPrice={item.min_price}
                MaxPrice={item.max_price}
                Lot={item.lot_size}
                Subs={item.subscriber}
                Description={item.description}
                Allotment={item.flag}
                Status={item.status}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </View>
    // <View style={{ flex: 1, backgroundColor: COLORS.darkWhite }}>
    //   <DHeader HName="Sme Ipo" navigation={navigation} />
    //   <View style={styles.container}>
    //     <TouchableOpacity
    //       activeOpacity={1}
    //       onPress={() => setTabIndex(0)}
    //       style={[styles.tabContainer, tabIndex === 0 && styles.activeTab]}
    //     >
    //       <Text
    //         style={[styles.tabText, tabIndex === 0 && styles.activeTabText]}
    //       >
    //         Unlisted
    //       </Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       activeOpacity={1}
    //       onPress={() => setTabIndex(1)}
    //       style={[styles.tabContainer, tabIndex != 0 && styles.activeTab]}
    //     >
    //       <Text style={[styles.tabText, tabIndex != 0 && styles.activeTabText]}>
    //         Listed
    //       </Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View style={{ flex: 1, paddingHorizontal: 15 }}>
    //     <FlatList
    //       data={tabIndex == 0 ? DATA : DATA}
    //       showsVerticalScrollIndicator={false}
    //       renderItem={({ item }) => (
    //         <TouchableOpacity
    //           onPress={() => navigation.navigate("DetailPage", { item: item })}
    //         >
    //           <Card
    //             logo={require("../../assets/images/download.png")}
    //             CName={item.Name}
    //             SDate={item.SDate}
    //             EDate={item.EDate}
    //             Year={item.Year}
    //             MinPrice={item.MinOffer}
    //             MaxPrice={item.MaxOffer}
    //             Lot={item.LotSize}
    //             Subs={item.Subs}
    //             Description={item.OtherDetails}
    //           />
    //         </TouchableOpacity>
    //       )}
    //       keyExtractor={(item) => item.key}
    //     />
    //   </View>
    // </View>
  );
};

export default SmeIpo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    // alignItems: "center",
    // flexDirection: "row",
    // justifyContent: "space-around",
    height: moderateScale(50),
    width: "100%",
    ...DStyle.rowSpaceAround,
  },
  tabContainer: {
    // alignItems: "center",
    // justifyContent: "center",
    borderColor: COLORS.primary,
    width: "50%",
    height: moderateScale(50),
    ...DStyle.center,
  },
  tabText: {
    color: COLORS.gray,
    fontSize: SIZES.body3,
    fontWeight: "500",
  },
  activeTab: {
    borderBottomColor: COLORS.white,
    borderBottomWidth: 2,
    width: "50%",
  },
  activeTabText: {
    color: COLORS.white,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: COLORS.primary,
//     alignItems: "center",
//     flexDirection: "row",
//     justifyContent: "space-around",
//     height: 50,
//     width: "100%",
//   },
//   tabContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     borderColor: COLORS.primary,
//     width: "50%",
//     height: 50,
//   },
//   tabText: {
//     color: COLORS.gray,
//     fontSize: SIZES.body3,
//     fontWeight: "500",
//   },
//   activeTab: {
//     borderBottomColor: COLORS.white,
//     borderBottomWidth: 2,
//     width: "50%",
//   },
//   activeTabText: {
//     color: COLORS.white,
//   },
// });
