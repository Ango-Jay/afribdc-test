import {Dimensions, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-screen-helper';

export const STATUSBAR_HEIGHT = getStatusBarHeight();
export const {height:SCREEN_HEIGHT, width:SCREEN_WIDTH} = Dimensions.get('window');
export const IsIOS = Platform.OS === 'ios';
