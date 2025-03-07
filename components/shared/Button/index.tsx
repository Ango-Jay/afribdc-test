import globalUtilStyles from '@/styles';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import type {ReactNode} from 'react';
import CustomPressable from './Pressable';
import CustomText from '../Text';
import {scale} from 'react-native-size-matters';
import {bgColorStyle, borderColorStyle, textColorStyle} from '@/styles/color';

interface Props extends TouchableOpacityProps {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: {
    weight: number;
    size: number;
    style: StyleProp<TextStyle>;
  };
  children?: ReactNode;
  text?: string;
  disabled?: boolean;
}
const CustomButton = ({
  containerStyle,
  textStyle,
  children,
  text,
  disabled,
  ...props
}: Props) => {
  return (
    <View style={[styles.btnBorderRadius, containerStyle]}>
      <CustomPressable
        {...props}
        disabled={disabled}
        role="button"
        accessibilityState={{
          disabled: disabled,
        }}
        style={[
          globalUtilStyles.grow,
          globalUtilStyles.py3,
          globalUtilStyles.px4,
          globalUtilStyles.itemsCenter,
          globalUtilStyles.justifyCenter,
          styles.btnBorderRadius,
          bgColorStyle.primary,
          borderColorStyle.primary,
          props.style,
        ]}>
        {Boolean(text) ? (
          <CustomText
            style={[textColorStyle.white, textStyle?.style]}
            weight={textStyle?.weight}
            size={textStyle?.size}>
            {text}
          </CustomText>
        ) : (
          <>{children}</>
        )}
      </CustomPressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnBorderRadius: {
    borderRadius: scale(20),
  },
});
