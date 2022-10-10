import {Dimensions} from 'react-native';
import {moderateScale} from './Common';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#002B5B', // blue
  secondary: '#0C381F', // dark green
  background: '#E1EFFF',

  green: '#66D59A',
  lightGreen: '#E6FEF0',

  lime: '#00BA63',
  emerald: '#2BC978',

  red: '#FF4134',
  lightRed: '#FFF1F0',

  purple: '#6B3CE9',
  lightpurple: '#F3EFFF',

  yellow: '#FFC664',
  lightyellow: '#FFF9EC',

  black: 'black',
  white: '#FFFFFF',
  darkWhite: '#f5f5f5',

  lightGray: '#FCFBFC',
  gray: '#919194',
  darkgray: '#C3C6C7',

  transparent: 'transparent',
};

// export const GRADIENT = {
//     backgroundImage: linearGradient('to bottom, #f6fe1d, #ffdd7c, #ffd8db, #ffeeff, #ffffff')
// }

export const SIZES = {
  // global sizes
  base: 4,
  font: 14,
  radius: 10,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 23,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // card dimensions
  Cheight: 15,
  Cwidth: '90%',
  marginVertical: 8,

  // tabicon
  tabIcon: moderateScale(30),

  // card icon
  cardIcon: moderateScale(16),

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Quicksand-Regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
    color: 'black',
  },
  h1: {
    fontFamily: 'Quicksand-Black',
    fontSize: SIZES.h1,
    lineHeight: 36,
    color: 'black',
  },
  h2: {
    fontFamily: 'Quicksand-Bold',
    fontSize: SIZES.h2,
    lineHeight: 30,
    color: 'black',
  },
  h3: {
    fontFamily: 'Quicksand-Bold',
    fontSize: SIZES.h3,
    lineHeight: 22,
    color: 'black',
  },
  h4: {
    fontFamily: 'Quicksand-Bold',
    fontSize: SIZES.h4,
    lineHeight: 22,
    color: 'black',
  },
  body1: {
    fontFamily: 'Quicksand-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
    color: 'black',
  },
  body2: {
    fontFamily: 'Quicksand-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
    color: 'black',
  },
  body3: {
    fontFamily: 'Quicksand-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
    color: 'black',
  },
  body4: {
    fontFamily: 'Quicksand-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
    color: 'black',
  },
  body5: {
    fontFamily: 'Quicksand-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
    color: 'black',
  },
};

const Theme = {COLORS, SIZES, FONTS};

export default Theme;
