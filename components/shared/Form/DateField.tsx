import {textColorStyle} from '@/styles/color';
import globalUtilStyles from '@/styles';
import {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import CalendarIcon from '@/assets/icons/calendar.svg';
import CustomText from '../Text';
import CustomPressable from '../Button/Pressable';
import {inputStyle} from './CustomInput';
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {appColors} from '@/constants/Colors';
import {MotiView} from 'moti';

interface Props {
  labelTitle?: string;
  value: string;
  setFieldValue: (value: string) => void;
  errorMessage?: string;
}
const today = new Date();
const DateField = ({labelTitle, value, setFieldValue, errorMessage}: Props) => {
  const [show, setShow] = useState(false);
  const animationValue = useSharedValue(0);
  useEffect(() => {
    if (errorMessage) {
      animationValue.value = withTiming(1);
    } else {
      animationValue.value = withTiming(0);
    }
  }, [errorMessage, animationValue]);
  const animatedContainerStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      animationValue.value,
      [0, 0.2, 0.4, 0.8, 1],
      [0, -4, 0, 4, 0],
      {
        extrapolateRight: Extrapolation.CLAMP,
      },
    );
    return {
      transform: [
        {
          translateX,
        },
      ],
    };
  });
  const animatedBorderStyle = useAnimatedStyle(() => {
    return {
      borderWidth: withTiming(errorMessage ? 0.5 : 0, {
        duration: 400,
      }),
      borderColor: withTiming(errorMessage ? appColors.error : 'transparent', {
        duration: 400,
      }),
      shadowColor: withTiming(errorMessage ? appColors.error : '#000'),
    };
  });
  return (
    <Animated.View style={[animatedContainerStyle]}>
      {labelTitle && (
        <CustomText
          size={12}
          weight={500}
          style={[textColorStyle.secondary, globalUtilStyles.mb2]}>
          {labelTitle}
        </CustomText>
      )}
      <MotiView
        transition={{
          type: 'timing',
          duration: 300,
          easing: Easing.inOut(Easing.ease),
        }}
        style={[
          globalUtilStyles.roundedlg,
          inputStyle.inputContainerHeight,
          globalUtilStyles.boxShadow,
          animatedBorderStyle,
        ]}>
        <CustomPressable
          onPress={() => {
            setShow(true);
          }}
          style={[
            globalUtilStyles.wfull,
            globalUtilStyles.hfull,
            globalUtilStyles.flexRow,
            globalUtilStyles.itemsCenter,
            globalUtilStyles.gap3,
            globalUtilStyles.roundedlg,
            globalUtilStyles.px3,
            globalUtilStyles.py2,
          ]}>
          <CalendarIcon />
          <CustomText
            style={[value ? textColorStyle.secondary : textColorStyle.gray]}>
            {value ? value : 'dd/mm/yyyy'}
          </CustomText>
        </CustomPressable>
      </MotiView>
      {show && (
        <DatePicker
          modal
          open={show}
          date={value ? new Date(value) : today}
          onConfirm={date => {
            setShow(false);
            setFieldValue(
              date.toLocaleString('en-GB', {timeZone: 'UTC'}).split(',')[0],
            );
          }}
          onCancel={() => {
            setShow(false);
          }}
        />
      )}
      {errorMessage && (
        <CustomText size={13} style={[textColorStyle.error]}>
          {errorMessage}
        </CustomText>
      )}
    </Animated.View>
  );
};

export default DateField;
