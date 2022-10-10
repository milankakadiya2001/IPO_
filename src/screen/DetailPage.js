import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constant';
import Break from '../component/Break';
import {StackNav} from '../navigation/NavigationKeys';
import flex from '../constant/flex';
import {moderateScale} from '../constant/Common';
import typography from '../constant/Typography';
import margin from '../constant/margin';
import {
  ALTCHECK,
  BACK,
  COMPANY,
  CURRENCYINR,
  CURRENCYINRCARD,
  FILE,
  LOTSIZE,
  OFFERDATE,
  PROMOTERS,
} from '../assets/svg';

const DetailPage = ({navigation, route}) => {
  const AllItem = route.params.item;
  console.log('====================================');
  console.log('AllItem====>>>>>', AllItem);
  console.log('====================================');
  const HName = AllItem.company_name;
  const IpoDetails = AllItem.ipo_details;
  const SubscriptionDetails = AllItem.subscription_details;
  const Valuations = AllItem.valuations;
  const CompanyFinancial = AllItem.company_financials;
  const CPromoters = AllItem.company_promoters;
  const Allotment = AllItem.flag;
  const AllotmentLink = AllItem.allotment_link;
  const Status = AllItem.status;
  console.log('CompanyFinancial====>>>>>', Status);

  return (
    <View style={{flex: 1, backgroundColor: COLORS.darkWhite}}>
      <View style={styles.root}>
        <TouchableOpacity
          style={{marginRight: moderateScale(10)}}
          onPress={() => navigation.goBack()}>
          <BACK
            width={moderateScale(20)}
            height={moderateScale(20)}
            fill={'white'}
          />
        </TouchableOpacity>
        <View
          style={{
            marginRight: moderateScale(25),
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <Text
            numberOfLines={1}
            style={{
              color: COLORS.white,
              fontSize: SIZES.h4,
              fontWeight: '600',
              letterSpacing: 1,
              // flex: 1,
            }}>
            {HName}
          </Text>
        </View>
      </View>
      <ScrollView style={{paddingHorizontal: 8}}>
        <View style={styles.container}>
          <Image
            source={{uri: AllItem.company_img}}
            style={styles.CompanyLogo}
          />
          <View style={styles.CompanyName}>
            <Text style={styles.CompanyNameText}>{AllItem.company_name}</Text>
            <Text style={styles.CompanyType}>{AllItem.company_type}</Text>
          </View>
          <View style={styles.DetailContainer}>
            <View style={styles.DetailPrice}>
              <View style={flex.rowAlign}>
                <OFFERDATE
                  width={SIZES.cardIcon}
                  height={SIZES.cardIcon}
                  fill={'#000'}
                />
                <Text style={styles.PriceHead}>Offer Date</Text>
              </View>
              <Text style={styles.Price}>
                {AllItem.start_date}
                {'\n'}
                {AllItem.end_date}
              </Text>
            </View>
            <View style={styles.DetailPrice}>
              <View style={flex.rowAlign}>
                <CURRENCYINRCARD
                  width={SIZES.cardIcon}
                  height={SIZES.cardIcon}
                />
                <Text style={styles.PriceHead}>Offer Price</Text>
              </View>
              <View style={flex.rowAlign}>
                <CURRENCYINR width={SIZES.cardIcon} height={SIZES.cardIcon} />
                <Text style={styles.Price}>
                  {AllItem.min_price}-{AllItem.min_price}
                </Text>
              </View>
            </View>
            <View style={styles.DetailPrice}>
              <View style={flex.rowAlign}>
                <LOTSIZE width={SIZES.cardIcon} height={SIZES.cardIcon} />
                <Text style={styles.PriceHead}>Lot Size</Text>
              </View>
              <Text style={styles.Price}>{AllItem.lot_size}</Text>
            </View>
          </View>
        </View>

        {/** Price Summary */}
        {Status === true ? (
          <View style={styles.container}>
            <Text style={styles.Expectation}>Price Summary</Text>
            <View style={[styles.DetailContainer, styles.Secondary]}>
              <View style={styles.DetailPrice}>
                <Text style={styles.PriceHead}>Last Closing</Text>
                <Text style={styles.Price}>492.00 (-6.3%)</Text>
              </View>
              <View style={styles.DetailPrice}>
                <Text style={styles.PriceHead}>52 Week High</Text>
                <View style={flex.rowAlign}>
                  <CURRENCYINR width={SIZES.cardIcon} height={SIZES.cardIcon} />
                  <Text style={styles.Price}>525.00</Text>
                </View>
              </View>
              <View style={styles.DetailPrice}>
                <Text style={styles.PriceHead}>52 Week Low</Text>
                <Text style={styles.Price}>481.00</Text>
              </View>
            </View>
            <View style={styles.DetailContainer}>
              <View style={styles.DetailPrice}>
                <Text style={styles.PriceHead}>Last Updated</Text>
                <Text style={styles.Price}>21 SEP 2022</Text>
              </View>
            </View>
          </View>
        ) : null}

        {/** Expected Listing */}
        {Status === false ? (
          <View style={styles.container}>
            <Text style={styles.Expectation}>Expected Listing Earning</Text>
            <View style={styles.Secondary}>
              <Text style={styles.Width}>
                Expected{'\n'}
                <Text>Premium / GMP:</Text>
              </Text>
              <View style={flex.rowAlign}>
                <CURRENCYINR width={SIZES.cardIcon} height={SIZES.cardIcon} />
                <Text>{AllItem.expected_premium}</Text>
              </View>
            </View>
          </View>
        ) : null}

        {/* IPO Details */}
        <View style={styles.container}>
          <Text style={styles.Expectation}>IPO Details</Text>
          <Break />
          {IpoDetails.map((item, index) => {
            return (
              <View
                style={[
                  styles.IpoDetails,
                  {
                    backgroundColor:
                      index % 2 == 0 ? COLORS.white : COLORS.background,
                  },
                ]}
                // key={index}
              >
                <Text style={styles.Width}>{item.key}:</Text>
                <Text style={{width: '62%'}}>{item.value}</Text>
              </View>
            );
          })}
          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity>
              <View style={flex.rowAlign}>
                <Text style={{color: COLORS.primary, fontWeight: '600'}}>
                  DRHP
                </Text>
                <FILE width={SIZES.cardIcon} height={SIZES.cardIcon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={flex.rowAlign}>
                <Text style={{color: COLORS.primary, fontWeight: '600'}}>
                  RHP
                </Text>
                <FILE width={SIZES.cardIcon} height={SIZES.cardIcon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Subscription Details */}
        <View style={styles.container}>
          <Text style={styles.Expectation}>Subscription Details</Text>
          <Text
            style={{
              color: COLORS.primary,
              alignSelf: 'center',
              marginBottom: 5,
            }}>
            Updated at End of the Day
          </Text>
          <Break />
          <View style={[styles.IpoDetails, {flexDirection: 'row'}]}>
            <Text style={{width: '22%', fontWeight: 'bold'}}>As on</Text>
            <Text style={[styles.SubscriptionRow, styles.bold]}>QIIB</Text>
            <Text style={[styles.SubscriptionRow, styles.bold]}>NII</Text>
            <Text style={[styles.SubscriptionRow, styles.bold]}>Retail</Text>
            <Text style={[styles.SubscriptionRow, styles.bold]}>Total</Text>
          </View>
          {SubscriptionDetails.map((item, index) => {
            return (
              <View
                style={[
                  styles.IpoDetails,
                  {
                    backgroundColor:
                      index % 2 != 0 ? COLORS.white : COLORS.background,
                  },
                ]}>
                <Text style={{width: '24%', fontWeight: 'bold'}}>
                  {item.key}
                </Text>
                <Text style={styles.SubscriptionRow}>{item.value1}</Text>
                <Text style={styles.SubscriptionRow}>{item.value2}</Text>
                <Text style={styles.SubscriptionRow}>{item.value3}</Text>
                <Text style={styles.SubscriptionRow}>{item.value4}</Text>
              </View>
            );
          })}
        </View>

        {/* Valuation */}
        <View style={styles.container}>
          <Text style={styles.Expectation}>Valuations</Text>
          <Break />
          {Valuations.map((item, index) => {
            return (
              <View
                style={[
                  styles.IpoDetails,
                  {
                    backgroundColor:
                      index % 2 == 0 ? COLORS.white : COLORS.background,
                  },
                ]}>
                <Text style={styles.Width}>{item.key}</Text>
                <Text style={{width: '62%', paddingLeft: 10}}>
                  {item.value}
                </Text>
              </View>
            );
          })}
        </View>

        {/* Company Financials */}
        <View style={styles.container}>
          <Text style={styles.Expectation}>Company Financials (in Crs)</Text>
          <Break />
          <View style={styles.IpoDetails}>
            <Text style={[{width: '30%'}, styles.bold]}>Time</Text>
            <Text style={[{width: '23%'}, styles.bold]}>Total Assets</Text>
            <Text style={[{width: '23%'}, styles.bold]}>Total Revalued</Text>
            <Text style={[{width: '23%'}, styles.bold]}>Profit After Tax</Text>
          </View>
          {CompanyFinancial.map((item, index) => {
            return (
              <View
                style={[
                  styles.IpoDetails,
                  {
                    backgroundColor:
                      index % 2 != 0 ? COLORS.white : COLORS.background,
                  },
                ]}
                key={index}>
                <Text style={[{width: '30%'}, styles.bold]}>{item.key}</Text>
                <Text style={{width: '23%'}}>{item.value1}</Text>
                <Text style={{width: '23%'}}>{item.value2}</Text>
                <Text style={{width: '23%'}}>{item.value3}</Text>
              </View>
            );
          })}
        </View>

        {/* about_company */}
        <View style={styles.container}>
          <View style={flex.rowCenter}>
            <Text style={styles.Expectation}>About Company</Text>
            <COMPANY width={SIZES.cardIcon} height={SIZES.cardIcon} />
          </View>
          <Break />
          <Text style={styles.Static}>{AllItem.about_company}</Text>
        </View>

        {/* Promoters */}
        <View style={styles.container}>
          <View style={flex.rowCenter}>
            <Text style={styles.Expectation}>Promoters </Text>
            <PROMOTERS width={SIZES.cardIcon} height={SIZES.cardIcon} />
          </View>
          <View
            style={{
              backgroundColor: COLORS.background,
              flexDirection: 'column',
              padding: 10,
              borderRadius: 5,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{width: '30%'}}>Pre Issue Share Holding</Text>
              <Text style={{...margin.ml10}}>{AllItem.pre_promoter}</Text>
            </View>
            <Text></Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{width: '30%'}}>Post Issue Share Holding</Text>
              <Text style={{...margin.ml10}}>{AllItem.pre_promoter}</Text>
            </View>
          </View>
          <View style={{marginTop: 10, paddingLeft: 10}}>
            <Text
              style={{
                fontWeight: '700',
                marginBottom: 4,
                ...typography.fontSizes.f16,
              }}>
              Company Promoters:
            </Text>
          </View>
          {CPromoters.map(item => {
            return (
              <View style={{paddingHorizontal: 10, borderRadius: 5}}>
                <Text style={{marginTop: 8}}>{item.value}</Text>
              </View>
            );
          })}
        </View>

        {/* Issue Objectives */}
        <View style={styles.container}>
          <Text style={styles.Expectation}>Issue Objectives</Text>
          <Break />
          {CPromoters.map((item, index) => {
            return (
              <View style={{paddingHorizontal: 10, borderRadius: 5}}>
                <Text style={{marginTop: 8}}>{item.value}</Text>
              </View>
            );
          })}
        </View>

        {/* Anchor Investor */}
        <View style={styles.container}>
          <Text style={styles.Expectation}>Anchor Investor</Text>
          <Break />
          <Text style={styles.Static}>{AllItem.anchor_investors}</Text>
        </View>

        {/* Disclaimer */}
        <View style={styles.container}>
          <Text style={styles.Expectation}>Disclaimer</Text>
          <Break />
          <Text style={styles.Static}>
            Disclaimer: The information provided on this website is for general
            information purposes only. The information is provided by
            www.moneycontrol.com and while we endeavour to keep the information
            up to date and correct, we make no representations or warranties of
            any kind, express or implied, about the completeness, accuracy,
            reliability, suitability or availability with respect to the website
            or the information, products, services, or related graphics
            contained on the website for any purpose. {'\n'}Any reliance you
            place on such information is therefore strictly at your own risk.
            \n\nIn no event will we be liable for any loss or damage including
            without limitation, indirect or consequential loss or damage, or any
            loss or damage whatsoever arising from loss of data or profits
            arising out of, or in connection with
          </Text>
        </View>
      </ScrollView>
      {Allotment && (
        <TouchableOpacity
          style={styles.Allotment}
          onPress={() =>
            navigation.navigate(StackNav.Web, {item: AllotmentLink})
          }>
          <Text style={styles.AllotmentText}>Check Allotment </Text>
          <ALTCHECK width={moderateScale(18)} height={moderateScale(18)} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    position: 'relative',
    height: moderateScale(50),
    backgroundColor: COLORS.primary,
    ...flex.itemsCenter,
    paddingHorizontal: moderateScale(20),
  },
  container: {
    backgroundColor: COLORS.white,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(5),
    borderRadius: SIZES.radius,
    marginVertical: moderateScale(10),
  },
  CompanyLogo: {
    width: '100%',
    height: moderateScale(125),
    borderRadius: SIZES.radius,
  },
  CompanyName: {
    ...flex.nonFlexCenter,
    marginTop: moderateScale(10),
  },
  CompanyNameText: {
    ...typography.fontSizes.f22,
    color: COLORS.primary,
    fontWeight: 'bold',
    ...flex.nonFlexCenter,
  },
  CompanyType: {
    color: COLORS.gray,
    ...typography.fontSizes.f14,
  },
  DetailContainer: {
    ...flex.itemsStart,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  DetailPrice: {
    marginVertical: SIZES.base,
    ...flex.columnSpaceAround,
  },
  PriceHead: {
    color: COLORS.gray,
    marginVertical: SIZES.base,
  },
  Secondary: {
    backgroundColor: COLORS.background,
    padding: moderateScale(10),
    borderRadius: 5,
    ...flex.flexRow,
    ...flex.itemsCenter,
  },
  SubscriptionRow: {
    width: '19.5%',
    textAlign: 'right',
    // fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  Expectation: {
    color: COLORS.primary,
    ...typography.fontSizes.f18,
    fontWeight: 'bold',
    marginVertical: 5,
    ...flex.selfCenter,
  },
  Width: {width: '38%'},
  IpoDetails: {
    padding: moderateScale(10),
    borderRadius: 5,
    ...flex.rowAlign,
  },
  Static: {
    marginVertical: moderateScale(5),
    marginHorizontal: moderateScale(10),
  },
  Allotment: {
    position: 'absolute',
    bottom: moderateScale(25),
    backgroundColor: COLORS.primary,
    padding: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    ...flex.selfCenter,
    opacity: 0.8,
    borderRadius: 15,
    ...flex.rowCenter,
  },
  AllotmentText: {
    color: COLORS.white,
    // fontSize: SIZES.body3,
    ...typography.fontSizes.f16,
    fontWeight: '600',
    letterSpacing: 1,
  },
});
