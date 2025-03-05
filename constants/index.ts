import {Dimensions, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-screen-helper';

export const STATUSBAR_HEIGHT = getStatusBarHeight();
export const {height, width} = Dimensions.get('window');
export const IsIOS = Platform.OS === 'ios';
