import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constant';
import typography, {fontSizes} from '../constant/Typography';
import {moderateScale} from '../constant/Common';
import {
  CURRENCYINR,
  CURRENCYINRCARD,
  LIVE,
  LOTSIZE,
  SUBS,
  YOUTUBE,
} from '../assets/svg/index';
import flex from '../constant/flex';

const Card = props => {
  const {
    logo,
    CName,
    SDate,
    EDate,
    Year,
    MinPrice,
    MaxPrice,
    Lot,
    Subs,
    Description,
    Allotment,
    Status,
    ClosingPrice,
    Live,
  } = props;
  return (
    <View style={styles.root}>
      {Live == 1 ? (
        <View
          style={{
            backgroundColor: COLORS.primary,
            opacity: 0.9,
            position: 'absolute',
            right: 0,
            top: 0,
            width: moderateScale(55),
            borderBottomLeftRadius: 10,
            borderTopRightRadius: 10,
            padding: 1,
            ...flex.rowAlign,
          }}>
          <LIVE
            width={moderateScale(20)}
            height={moderateScale(20)}
            fill={'white'}
          />
          <Text
            style={{
              color: COLORS.white,
              alignSelf: 'center',
              ...typography.fontSizes.f14,
              fontWeight: '600',
            }}>
            live
          </Text>
        </View>
      ) : null}
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 10,
            width: '25%',
            height: '100%',
            // backgroundColor: COLORS.yellow,
          }}>
          <Image resizeMode="cover" source={logo} style={styles.CompanyLogo} />
        </View>
        <View style={{flexDirection: 'column', width: '75%'}}>
          <Text numberOfLines={2} style={styles.CompanyName}>
            {CName}
          </Text>
        </View>
      </View>
      <View style={styles.OfferContainer}>
        <Text style={{...typography.fontSizes.f14}}>
          Offer Date: {SDate} - {EDate}, {Year}
        </Text>
      </View>
      <View style={styles.DetailContainer}>
        <View style={styles.DetailPrice}>
          <View style={flex.rowAlign}>
            <CURRENCYINRCARD width={SIZES.cardIcon} height={SIZES.cardIcon} />
            <Text style={styles.PriceHead}>Offer Price</Text>
          </View>
          <Text style={styles.Price}>
            {MinPrice}-{MaxPrice}
          </Text>
        </View>
        <View style={styles.DetailPrice}>
          <View style={flex.rowAlign}>
            <LOTSIZE width={SIZES.cardIcon} height={SIZES.cardIcon} />
            <Text style={styles.PriceHead}>Lot Size</Text>
          </View>
          <Text style={styles.Price}>{Lot}</Text>
        </View>
        <View style={styles.DetailPrice}>
          <View style={flex.rowAlign}>
            <Text style={styles.PriceHead}>
              {Status == 0 ? (
                <SUBS width={SIZES.cardIcon} height={SIZES.cardIcon} />
              ) : (
                <CURRENCYINR width={SIZES.cardIcon} height={SIZES.cardIcon} />
              )}
              {Status == 0 ? 'Subs' : 'Closing Price'}
            </Text>
          </View>
          <Text style={styles.Price}>{Status == 0 ? Subs : ClosingPrice}</Text>
        </View>
      </View>
      {Status == 0 ? (
        <View style={styles.container}>
          <Text>{Description}</Text>
        </View>
      ) : null}
      {Allotment ? (
        <View style={styles.container}>
          <Text style={styles.AllotmentText}>Allotment is Out Now!</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  root: {
    padding: SIZES.Cheight,
    alignSelf: 'center',
    marginVertical: SIZES.marginVertical,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    borderColor: COLORS.primary,
    borderWidth: 0.2,
    position: 'relative',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CompanyLogo: {
    width: '100%',
    height: 55,
    borderRadius: SIZES.radius,
    resizeMode: 'contain',
  },
  CompanyName: {
    color: COLORS.primary,
    marginLeft: SIZES.padding,
    fontWeight: '700',
    numberOfLines: 2,
    ...typography.fontSizes.f22,
  },
  OfferContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: SIZES.base,
  },
  DetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  DetailPrice: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: SIZES.base,
  },
  PriceHead: {
    color: COLORS.gray,
    marginVertical: SIZES.base,
  },
  AllotmentText: {
    color: COLORS.primary,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: SIZES.base,
    ...typography.fontSizes.f14,
  },
});
