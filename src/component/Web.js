import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import {COLORS, SIZES} from '../constant';
import flex from '../constant/flex';
import {moderateScale} from '../constant/Common';
import {BACK} from '../assets/svg';

const Web = ({navigation, route}) => {
  const link = route.params.item;
  console.log('====================================');
  console.log('link', link);
  console.log('====================================');
  return (
    <View style={{flex: 1}}>
      <View style={styles.root}>
        <TouchableOpacity
          style={{marginRight: 20}}
          onPress={() => navigation.goBack()}>
          <BACK
            width={moderateScale(20)}
            height={moderateScale(20)}
            fill={'white'}
          />
        </TouchableOpacity>

        <Text
          // numberOfLines={1}
          style={{
            color: COLORS.white,
            fontSize: SIZES.h4,
            fontWeight: '600',
            letterSpacing: 1,
          }}>
          Allotment Status
        </Text>
        <View></View>
      </View>
      <WebView
        source={{uri: link}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
      />
    </View>
  );
};

export default Web;

const styles = StyleSheet.create({
  root: {
    height: moderateScale(50),
    backgroundColor: COLORS.primary,
    paddingHorizontal: moderateScale(20),
    ...flex.rowSpaceBetween,
  },
});
