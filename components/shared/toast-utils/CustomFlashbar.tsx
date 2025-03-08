import {
  type MessageComponentProps,
  hideMessage,
} from 'react-native-flash-message';
import CloseIcon from '@/assets/icons/x_mark.svg';
import {View, StyleSheet} from 'react-native';
import ExclamationIcon from '@/assets/icons/exclamation.svg';
import CheckInCircleIcon from '@/assets/icons/check_mark_in_circle.svg';
import {scale, verticalScale} from 'react-native-size-matters';
import globalUtilStyles from '@/styles';
import CustomText from '../Text';
import {textColorStyle} from '@/styles/color';
import CustomPressable from '../Button/Pressable';

export const CustomFlashbar = ({message}: MessageComponentProps) => (
  <View style={[globalUtilStyles.wfull, globalUtilStyles.itemsCenter]}>
    <View
      style={[
        flashBarStyles.container,
        globalUtilStyles.flexRow,
        globalUtilStyles.itemsCenter,
        globalUtilStyles.roundedmd,
        {
          backgroundColor:
            flashbarContent[message.type as keyof typeof flashbarContent]
              .backgroundColor,
        },
      ]}>
      {Boolean(message.type) &&
        flashbarContent[message.type as keyof typeof flashbarContent].icon}
      <CustomText style={[textColorStyle.white, globalUtilStyles.ml2]}>
        {message.message}
      </CustomText>
      {message.type !== 'info' && (
        <CustomPressable
          onPress={hideMessage}
          style={[
            flashBarStyles.closeButton,
            globalUtilStyles.mlauto,
            globalUtilStyles.mr6,
          ]}>
          <CloseIcon width={scale(20)} height={scale(20)} fill={'#FFF'} />
        </CustomPressable>
      )}
    </View>
  </View>
);

export const flashbarContent = {
  danger: {
    icon: <ExclamationIcon width={24} height={24} fill={'#FFF'} />,
    backgroundColor: '#D92D20',
  },
  success: {
    icon: <CheckInCircleIcon width={24} height={24} fill={'#FFF'} />,
    backgroundColor: '#045B04',
  },
  warning: {
    icon: '',
    backgroundImage: '',
    backgroundColor: '',
  },
  info: {
    icon: '',
    backgroundImage: '',
    backgroundColor: '#071C8E',
  },
  default: {
    icon: '',
    backgroundImage: '',
    backgroundColor: '',
  },
  none: {
    icon: '',
    backgroundImage: '',
    backgroundColor: '',
  },
};

const flashBarStyles = StyleSheet.create({
  container: {
    width: '80%',
    position: 'absolute',
    top: verticalScale(60),
    height: verticalScale(60),
    paddingLeft: scale(24),
  },
  closeButton: {
    zIndex: 30,
  },
});
