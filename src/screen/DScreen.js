import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constant';
import typography from '../constant/Typography';
import {moderateScale} from '../constant/Common';
import flex from '../constant/flex';
import {BACK} from '../assets/svg';

const DScreen = ({route, navigation}) => {
  const item = route.params.item;
  console.log('====================================');
  console.log('props', item);
  return (
    <View>
      <View style={styles.root}>
        <TouchableOpacity
          // style={{ marginRight: 20 }}
          onPress={() => navigation.goBack()}>
          <BACK
            width={moderateScale(20)}
            height={moderateScale(20)}
            fill={'white'}
          />
        </TouchableOpacity>

        <Text
          numberOfLines={1}
          style={{
            color: COLORS.white,
            fontSize: SIZES.h4,
            fontWeight: '600',
            letterSpacing: 1,
          }}>
          {item.Name}
        </Text>
        <View></View>
      </View>
      <ScrollView>
        <Text style={styles.details}>{item.Datails}</Text>
      </ScrollView>
    </View>
  );
};

export default DScreen;

const styles = StyleSheet.create({
  root: {
    height: moderateScale(50),
    backgroundColor: COLORS.primary,
    paddingHorizontal: moderateScale(20),
    ...flex.rowSpaceBetween,
  },
  details: {...typography.fontSizes.f18, padding: moderateScale(15)},
});
