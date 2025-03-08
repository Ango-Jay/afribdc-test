import {JostFontStyle} from '@/styles/fonts';
import {type ReactNode} from 'react';
import {Text, TextProps} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

interface Props extends TextProps {
  weight?: number;
  size?: number;
  children: ReactNode;
}
const CustomText = ({weight = 400, size = 15, children, ...props}: Props) => {
  const fontStyle = {
    '400': JostFontStyle.fontNormal,
    '500': JostFontStyle.fontMedium,
    '600': JostFontStyle.fontSemiBold,
    '700': JostFontStyle.fontBold,
  }[weight];
  return (
    <Text
      {...props}
      style={[fontStyle, {fontSize: moderateScale(size, 0.3)}, props.style]}>
      {children}
    </Text>
  );
};

export default CustomText;
