import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constant';
import {
  CONTACTUS,
  HOME,
  PRIVACYPOLICY,
  SHARE,
  STAR,
  TERMSCONDITION,
} from '../assets/svg';

const IconSelctor = name => {
  switch (name) {
    case 'home':
      return <HOME width={SIZES.tabIcon} height={SIZES.tabIcon} />;
    case 'Share with Friends':
      return <SHARE width={SIZES.tabIcon} height={SIZES.tabIcon} />;
    case 'Rate the App':
      return <STAR width={SIZES.tabIcon} height={SIZES.tabIcon} />;
    case 'Contact Us':
      return <CONTACTUS width={SIZES.tabIcon} height={SIZES.tabIcon} />;
    case 'Privacy Policy':
      return <PRIVACYPOLICY width={SIZES.tabIcon} height={SIZES.tabIcon} />;
    case 'Terms & Conditions':
      return <TERMSCONDITION width={SIZES.tabIcon} height={SIZES.tabIcon} />;
    default:
      return <HOME width={SIZES.tabIcon} height={SIZES.tabIcon} />;
  }
};

const DrawerBtn = ({Head, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
      }}>
      <View style={{marginLeft: 20}}>{IconSelctor(Head)}</View>
      <Text style={styles.rootText}>{Head}</Text>
    </TouchableOpacity>
  );
};

export default DrawerBtn;

const styles = StyleSheet.create({
  rootText: {
    color: COLORS.primary,
    fontSize: SIZES.body3,
    fontWeight: '500',
    marginLeft: 20,
  },
});
