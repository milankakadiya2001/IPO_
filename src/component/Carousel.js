import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';
import { COLORS } from '../constant';

const Carousel = () => {
  return (
    <Swiper style={styles.wrapper} 
    autoplay={true}
    loop={true}
    activeDotColor={COLORS.primary}
    dotStyle={{marginBottom: 10}}
    >
      <View style={styles.slide1}>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
      </View>
    </Swiper>
  );
}

export default Carousel

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 5,
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});