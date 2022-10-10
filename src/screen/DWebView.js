import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import {COLORS, SIZES} from '../constant';
import flex from '../constant/flex';
import {moderateScale} from '../constant/Common';
import {BACK} from '../assets/svg';

const DWebView = ({navigation, route}) => {
  console.log('====================================');
  console.log('Webbbb', navigation);
  console.log('====================================');
  const link = route.params.item;
  var obj = link.reduce(function (link, cur, i) {
    link[i] = cur;
    return link;
  }, {});

  const url = obj[0].url;

  console.log('====================================');
  console.log(' url ==>', url);
  console.log('====================================');
  return (
    <View style={{flex: 1}}>
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
          News
        </Text>
        <View></View>
      </View>
      <WebView
        source={{uri: url}}
        originWhitelist={['*']}
        // style={{ marginTop: 20 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        // source={{ uri: url }}
        mediaPlaybackRequiresUserAction={false}
        androidLayerType="hardware"
        mixedContentMode="always"
        textZoom={100}
        decelerationRate={0.998}
        allowsInlineMediaPlayback={true}
        // injectedJavaScript={INJECTED_SCRIPTS}
        cacheEnabled
        onShouldStartLoadWithRequest={req => {
          if (req.url.startsWith('about')) {
            return false;
          }
          return true;
        }}
        // style={{ height: scrollViewHeight }}
        // ref={webviewRef}
      />
    </View>
  );
};

export default DWebView;

const styles = StyleSheet.create({
  root: {
    height: moderateScale(50),
    backgroundColor: COLORS.primary,
    paddingHorizontal: moderateScale(20),
    ...flex.rowSpaceBetween,
  },
});
