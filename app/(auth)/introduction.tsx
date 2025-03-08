import CustomButton from '@/components/shared/Button';
import CustomImage from '@/components/shared/Image';
import {LayoutWithoutScroll} from '@/components/shared/Layout/LayoutWithoutScroll';
import CustomText from '@/components/shared/Text';
import globalUtilStyles from '@/styles';
import {bgColorStyle, borderColorStyle, textColorStyle} from '@/styles/color';
import {router} from 'expo-router';
import {View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

export default function Introduction() {
  return (
    <LayoutWithoutScroll>
      <View
        style={[
          globalUtilStyles.flex1,
          globalUtilStyles.itemsCenter,
          globalUtilStyles.justifyCenter,
        ]}>
        <CustomImage
          resizeMode="contain"
          source={require('../../assets/images/globe.png')}
          style={[
            {
              width: scale(192),
              height: verticalScale(194),
            },
            globalUtilStyles.mb6,
          ]}
        />
        <CustomText
          size={20}
          weight={500}
          style={[globalUtilStyles.textCenter]}>
          Exchange currencies with ease and confidence, anytime, anywhere.
        </CustomText>
        <View
          style={[
            globalUtilStyles.wfull,
            globalUtilStyles.gap4,
            globalUtilStyles.mt10,
            globalUtilStyles.mb4,
          ]}>
          <CustomButton
            onPress={() => router.push('/previewRates')}
            containerStyle={[
              globalUtilStyles.border1,
              borderColorStyle.secondary,
            ]}
            style={[bgColorStyle.white]}
            textStyle={{
              weight: 600,
              size: 15,
              style: textColorStyle.secondary,
            }}
            text="View Best Rate Now"
          />
          <CustomButton
            onPress={() => {
              router.push('/(auth)/(signup)/phoneNumber');
            }}
            text="Get started"
          />
        </View>
        <CustomText weight={500}>
          Already have an account?{' '}
          <CustomText
            onPress={() => router.push('/login')}
            weight={500}
            style={[textColorStyle.highlight]}>
            Login
          </CustomText>
        </CustomText>
      </View>
    </LayoutWithoutScroll>
  );
}
