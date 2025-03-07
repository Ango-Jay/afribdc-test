import CustomButton from '@/components/shared/Button';
import BackButton from '@/components/shared/Button/BackButton';
import CustomPressable from '@/components/shared/Button/Pressable';
import {PinFieldGroup, PinKeypad} from '@/components/shared/Form/Pin';
import {LayoutWithScroll} from '@/components/shared/Layout/LayoutWithScroll';
import CustomText from '@/components/shared/Text';
import CountdownTimer from '@/components/shared/utils/CountdownTimer';
import {OTP_EXPIRY_TIME} from '@/constants';
import globalUtilStyles from '@/styles';
import {textColorStyle} from '@/styles/color';
import {router} from 'expo-router';
import {useState} from 'react';
import {View} from 'react-native';

export default function VerifyEmailForgotPassword() {
  const [otp, setOtp] = useState<string[]>([]);
  return (
    <LayoutWithScroll>
      <View style={[globalUtilStyles.flex1]}>
        <View
          style={[
            globalUtilStyles.flexRow,
            globalUtilStyles.itemsCenter,
            globalUtilStyles.mb6,
          ]}>
          <BackButton style={[globalUtilStyles.absolute]} />
          <CustomText size={20} style={[globalUtilStyles.mxauto]}>
            Reset Password
          </CustomText>
        </View>
        <View
          style={[
            globalUtilStyles.wfull,
            globalUtilStyles.itemsCenter,
            globalUtilStyles.gap8,
          ]}>
          <CustomText
            size={20}
            weight={500}
            style={[
              globalUtilStyles.textCenter,
              {
                width: '70%',
              },
            ]}>
            Enter Code
          </CustomText>
          <CustomText
            weight={500}
            style={[
              globalUtilStyles.textCenter,
              textColorStyle.gray,
              {
                width: '70%',
              },
            ]}>
            We have sent an OTP verification code to ki*****w****@gmail.com
          </CustomText>
        </View>
        <View
          style={[
            globalUtilStyles.itemsCenter,
            globalUtilStyles.gap6,
            globalUtilStyles.mt10,
          ]}>
          <PinFieldGroup type="otp" pin={otp} maxLength={6} />
          <View style={[globalUtilStyles.flexRow]}>
            <CustomText weight={500}>Didn’t get the code? </CustomText>
            <CustomPressable>
              <CustomText weight={500} style={[textColorStyle.highlight]}>
                Resend code <CountdownTimer countdownTime={OTP_EXPIRY_TIME} />
              </CustomText>
            </CustomPressable>
          </View>
          <View style={[globalUtilStyles.wfull]}>
            <CustomButton
              onPress={() => router.push('/resetPassword')}
              text="Submit"
            />
          </View>
          <PinKeypad pin={otp} setPin={setOtp} maxLength={6} allowPaste />
        </View>
      </View>
    </LayoutWithScroll>
  );
}
