import {Dimensions, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-screen-helper';

export const STATUSBAR_HEIGHT = getStatusBarHeight();
export const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} =
  Dimensions.get('window');
export const IsIOS = Platform.OS === 'ios';
export const OTP_EXPIRY_TIME = 1 * 60 * 1000;
export const today = new Date();
export const eighteenYearsAgo = new Date(today.getFullYear() - 18, 0, 1);
export const hundredYearsAgo = new Date(today.getFullYear() - 100, 0, 1);
